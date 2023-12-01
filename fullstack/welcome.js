<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Calculator</title>
  <style>
    input {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
    }
  </style>
</head>
<body>

  <h2>Simple Calculator</h2>

  <label for="num1">Enter number 1:</label>
  <input type="number" id="num1">

  <label for="operator">Select operator:</label>
  <select id="operator">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>

  <label for="num2">Enter number 2:</label>
  <input type="number" id="num2">

  <button onclick="calculate()">Calculate</button>

  <h3>Result:</h3>
  <p id="result"></p>

  <script>
    function calculate() {
      // Get input values
      var num1 = parseFloat(document.getElementById("num1").value);
      var operator = document.getElementById("operator").value;
      var num2 = parseFloat(document.getElementById("num2").value);

      // Perform calculation
      var result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = "Invalid operator";
      }

      // Display result
      document.getElementById("result").innerText = "Result: " + result;
    }
  </script>

</body>
</html>
