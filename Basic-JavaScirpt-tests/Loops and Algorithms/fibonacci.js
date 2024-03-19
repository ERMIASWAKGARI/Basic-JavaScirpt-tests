function generateFibonacciSeries(num) {
  const fibonacciSeries = [];
  const a = 0,
    b = 1;

  for (const i = 0; i < num; i++) {
    fibonacciSeries.push(a);
    const temp = a + b;
    a = b;
    b = temp;
  }

  return fibonacciSeries;
}

function generateAndDisplay() {
  const numInput = document.getElementById("numInput");
  const resultParagraph = document.getElementById("result");
  const num = parseInt(numInput.value);

  if (Number.isInteger(num) && num >= 1) {
    const fibonacciSeries = generateFibonacciSeries(num);
    resultParagraph.textContent =
      "Fibonacci Series: " + fibonacciSeries.join(", ");
  } else {
    resultParagraph.textContent =
      "Please enter a positive integer greater than or equal to 1.";
  }
}
