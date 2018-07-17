// ----------This is where the variables live----------

var ideaTitle = $(".user-title");
var ideaBody = $(".user-idea");
var submitButton = $(".submit-btn");
var ideaSection = $(".idea-section");

// ----------This is where the event listeners live----------

submitButton.on("click", function(e) {
  e.preventDefault();
  var title = ideaTitle.val();
  var body = ideaBody.val();
  var uniqueID = $.now();
  ideaSection.append(`<article class="idea" id="${uniqueID}">
                        <div class="top-line">
                          <h3 contenteditable="true">${title}</h3>
                          <input class="delete-btn small-btn" type="button" name="delete" src="images/delete.svg">
                        </div>
                        <p contenteditable="true">${body}</p>
                        <div class="bottom-line">
                          <input class="upvote-btn small-btn bottom-btn" type="button" name="upvote">
                          <input class="downvote-btn small-btn bottom-btn" type="button" name="downvote">
                          <h4>quality: <span class="quality">swill</span></h4>
                        </div>
                      </article>`);
  ideaTitle.val("");
  ideaBody.val("");
});

ideaSection.on("click", function(e) {
  if ($(e.target).hasClass("delete-btn")) {
    $(e.target).parent().parent().remove();
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

// ----------This is where the functions live----------


