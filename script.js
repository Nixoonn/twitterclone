// Get references to elements
const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Add event listener to send button
sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  // Get message text
  const messageText = messageInput.value;

  // Create new message element
  const messageElement = document.createElement("div");
  messageElement.innerText = messageText;

  // Add message to messages container
  messagesContainer.appendChild(messageElement);

  // Clear message input
  messageInput.value = "";
}
