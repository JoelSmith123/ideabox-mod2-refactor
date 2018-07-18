// ----------This is where the variables live----------

var ideaTitle = $(".user-title");
var ideaBody = $(".user-idea");
var submitButton = $(".submit-btn");
var ideaSection = $(".idea-section");
var userSearch = $(".search-bar");
var allCards = Array(1);

console.log(allCards);

// ----------This is where the event listeners live----------

submitButton.on("click", function(e) {
  e.preventDefault();
  var title = ideaTitle.val();
  var body = ideaBody.val();
  var id = $.now();
  var quality = "swill";
  var newCard = $.makeArray(new Idea(id, title, body, quality));
  $.merge(allCards, newCard);
  localStorage.setItem("allCards", JSON.stringify(allCards));
  ideaSection.append(`<article class="idea" id="${id}">
                        <div class="top-line">
                          <h3 contenteditable="true">${title}</h3>
                          <input class="delete-btn small-btn" type="button" name="delete" src="images/delete.svg">
                        </div>
                        <p contenteditable="true">${body}</p>
                        <div class="bottom-line">
                          <input class="upvote-btn small-btn bottom-btn" type="button" name="upvote">
                          <input class="downvote-btn small-btn bottom-btn" type="button" name="downvote">
                          <h4>quality: <span class="quality">${quality}</span></h4>
                        </div>
                      </article>`);
  ideaTitle.val("");
  ideaBody.val("");
});

$(function() {
  allCards = JSON.parse(localStorage.getItem("allCards"));
  $.each(allCards, function() {
    ideaSection.append(`<article class="idea" id="${this.id}">
                          <div class="top-line">
                            <h3 contenteditable="true">${this.title}</h3>
                            <input class="delete-btn small-btn" type="button" name="delete" src="images/delete.svg">
                          </div>
                          <p contenteditable="true">${this.body}</p>
                          <div class="bottom-line">
                            <input class="upvote-btn small-btn bottom-btn" type="button" name="upvote">
                            <input class="downvote-btn small-btn bottom-btn" type="button" name="downvote">
                            <h4>quality: <span class="quality">${this.quality}</span></h4>
                          </div>
                        </article>`);
  })
})

ideaSection.on("click", function(e) {
  if ($(e.target).hasClass("delete-btn")) {
    $(e.target).parent().parent().remove();
    var tempID = $(e.target).parent().parent().attr("id");
    $.each(allCards, function() {
      if (tempID == this.id) {
        
      }
    })
  } else if ($(e.target).hasClass("upvote-btn")) {
    if ($(e.target).siblings("h4").children("span").text() === "swill") {
      $(e.target).siblings("h4").children("span").text("plausible");
    } else if ($(e.target).siblings("h4").children("span").text() === "plausible") {
      $(e.target).siblings("h4").children("span").text("genius");
    } else {

    }
  } else if ($(e.target).hasClass("downvote-btn")) {
    if ($(e.target).siblings("h4").children("span").text() === "genius") {
      $(e.target).siblings("h4").children("span").text("plausible");
    } else if ($(e.target).siblings("h4").children("span").text() === "plausible") {
      $(e.target).siblings("h4").children("span").text("swill");
    } else {

    }
  } else {

  }
});

userSearch.on("keyup", function() {
  if (userSearch.val() === "") {
    $("article").show();
  } else {
    $("p:not(\":contains(" + userSearch.val() + ")\")").parent().hide();
    $("p:contains(" + userSearch.val() + ")").parent().show();
    $("h3:not(\":contains(" + userSearch.val() + ")\")").parent().parent().hide();
    $("h3:contains(" + userSearch.val() + ")").parent().parent().show();
  };
});


// ----------This is where the functions live----------

function Idea (id, title, body, quality) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
};
