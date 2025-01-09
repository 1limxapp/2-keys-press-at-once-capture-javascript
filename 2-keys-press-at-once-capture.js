let keyState = {
  cmd: false,
};

// Add event listeners for keydown and keyup events
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

// Function to handle keydown events
function handleKeyDown(event) {
  if (event.key === "Meta") {
    keyState.cmd = true;
  }

  // Check for the Command and c combination
  if (keyState.cmd && event.key === "c") {
    console.log("Người dùng nhấn tổ hợp copy");
  }

  // Check for the Command and v combination
  if (keyState.cmd && event.key === "v") {
    console.log("Người dùng nhấn tổ hợp paste");
  }
};

// Function to handle keyup events
function handleKeyUp (event) {
  if (event.key === "Meta") {
    keyState.cmd = false;
  }
};
