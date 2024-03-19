function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

function calculateAndDisplay() {
  const numberInput = document.getElementById("numberInput");
  const resultParagraph = document.getElementById("result");
  const number = parseInt(numberInput.value);

  if (Number.isInteger(number) && number >= 0) {
    const factorial = calculateFactorial(number);
    resultParagraph.textContent =
      "Factorial of " + number + " is: " + factorial;
  } else {
    resultParagraph.textContent = "Please enter a non-negative integer.";
  }
}
