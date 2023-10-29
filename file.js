const resultButton = document.getElementById("button");
const resultBMI = document.getElementById("result");

function calculateBMI(height, weight) {
  const weightInput = document.getElementById("weight").value;
  const heightInput = document.getElementById("height").value;
  height = heightInput;
  weight = weightInput;
  const heightInMeters = height / 100;
  const squareHeight = Math.pow(heightInMeters, 2);
  const BMI = weight / squareHeight;
  resultBMI.innerHTML = Math.round(BMI * 100) / 100;
}

resultButton.addEventListener("click", calculateBMI);
