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
  ideaSection.append(`
                      <article class="idea" id="${uniqueID}">
                        <div class="top-line">
                          <h3>${title}</h3>
                          <input class="delete-btn small-btn" type="image" name="delete" src="images/delete.svg">
                        </div>
                        <p>${body}</p>
                        <div class="bottom-line">
                          <input class="upvote-btn small-btn bottom-btn" type="image" name="upvote" src="images/upvote.svg">
                          <input class="downvote-btn small-btn bottom-btn" type="image" name="downvote" src="images/downvote.svg">
                          <h4>quality: <span class="quality">swill</span></h4>
                        </div>
                      </article>`);
  ideaTitle.val("");
  ideaBody.val("");
});

// ----------This is where the functions live----------


