const chatlog = document.getElementById("chatlog");
const chatform = document.getElementById("chatform");
const chatnick = document.getElementById("chatnick");
const chatinput = document.getElementById("chatinput");

chatform.addEventListener("submit", event => {
  event.preventDefault();

  const message = `<p><strong>${chatnick.value}:</strong> ${chatinput.value}</p>`;
  chatlog.innerHTML += message;
  chatinput.value = "";
});
