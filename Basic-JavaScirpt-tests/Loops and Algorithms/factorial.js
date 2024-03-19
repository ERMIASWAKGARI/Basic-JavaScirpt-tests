function calculateFactorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: multiply n by the factorial of (n-1)
    return n * calculateFactorial(n - 1);
  }
}

function calculateAndDisplay() {
  const numberInput = document.getElementById("numberInput");
  const resultParagraph = document.getElementById("result");
  const number = parseInt(numberInput.value);

  // Check if the input is a non-negative integer
  if (Number.isInteger(number) && number >= 0) {
    const factorial = calculateFactorial(number);
    resultParagraph.textContent =
      "Factorial of " + number + " is: " + factorial;
  } else {
    resultParagraph.textContent = "Please enter a non-negative integer.";
  }
}
