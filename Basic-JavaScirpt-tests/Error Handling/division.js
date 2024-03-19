function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  } else {
    return a / b;
  }
}

function performDivision() {
  const numerator = parseFloat(document.getElementById("numerator").value);
  const denominator = parseFloat(document.getElementById("denominator").value);
  const resultParagraph = document.getElementById("result");

  try {
    const result = divide(numerator, denominator);
    resultParagraph.textContent = "Result: " + result;
  } catch (error) {
    resultParagraph.textContent = "Error: " + error.message;
  }
}
