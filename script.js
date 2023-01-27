const tweetForm = document.querySelector("form");
const tweetInput = document.querySelector("#tweet-input");
const tweetContainer = document.querySelector("#tweet-container");

tweetForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const tweet = tweetInput.value;
  if (tweet === "") {
    return;
  }
  addTweet(tweet);
  tweetInput.value = "";
});

function addTweet(tweet) {
  const newTweet = document.createElement("div");
  newTweet.innerHTML = tweet;
  tweetContainer.appendChild(newTweet);
}
