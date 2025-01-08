document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = ""; // Stores the current input string

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (button.classList.contains("number")) {
        // Append number to current input
        currentInput += value;
        result.value = currentInput;
      } else if (button.classList.contains("operator")) {
        // Add operator with space for better readability
        if (currentInput && !isNaN(currentInput.slice(-1))) {
          currentInput += ` ${value} `;
          result.value = currentInput;
        }
      } else if (button.classList.contains("clear")) {
        // Clear all input
        currentInput = "";
        result.value = "";
      } else if (button.classList.contains("backspace")) {
        // Remove the last character
        currentInput = currentInput.trimEnd().slice(0, -1);
        result.value = currentInput;
      } else if (button.classList.contains("decimal")) {
        // Add a decimal point if not already present
        if (!currentInput.endsWith(".")) {
          currentInput += ".";
          result.value = currentInput;
        }
      } else if (button.classList.contains("equals")) {
        // Evaluate the expression
        try {
          const sanitizedInput = currentInput
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");
          currentInput = eval(sanitizedInput).toString();
          result.value = currentInput;
        } catch (error) {
          result.value = "Error";
          currentInput = "";
        }
      } else if (button.classList.contains("module")) {
        // Add modulus operator if applicable
        if (currentInput && !isNaN(currentInput.slice(-1))) {
          currentInput += " % ";
          result.value = currentInput;
        }
      }
    });
  });
});
