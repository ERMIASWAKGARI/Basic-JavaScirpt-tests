function generateFibonacciSeries(num) {
  var fibonacciSeries = [];
  var a = 0,
    b = 1;

  for (var i = 0; i < num; i++) {
    fibonacciSeries.push(a);
    var temp = a + b;
    a = b;
    b = temp;
  }

  return fibonacciSeries;
}

function generateAndDisplay() {
  var numInput = document.getElementById("numInput");
  var resultParagraph = document.getElementById("result");
  var num = parseInt(numInput.value);

  // Check if the input is a positive integer
  if (Number.isInteger(num) && num >= 1) {
    var fibonacciSeries = generateFibonacciSeries(num);
    resultParagraph.textContent =
      "Fibonacci Series: " + fibonacciSeries.join(", ");
  } else {
    resultParagraph.textContent =
      "Please enter a positive integer greater than or equal to 1.";
  }
}
