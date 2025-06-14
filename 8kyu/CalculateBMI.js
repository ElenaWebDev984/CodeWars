// 🎯 Calculate BMI

//❓ DESCRIPTIONS
// Write function bmi that calculates body mass index (bmi = weight / height2).
//
//     if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"


// function bmi(weight, height) {
//   return "";
// }


// 📌 TESTS
// assert.strictEqual(bmi(50, 1.80), "Underweight", "For weight = 50 and height = 1.80");
// assert.strictEqual(bmi(80, 1.80), "Normal", "For weight = 80 and height = 1.80");
// assert.strictEqual(bmi(90, 1.80), "Overweight", "For weight = 90 and height = 1.80");
// assert.strictEqual(bmi(100, 1.80), "Obese", "For weight = 100 and height = 1.80");

// ✅ SOLUTIONS
// 1 variant
function bmi(weight, height) {
    const bmiValue = weight / (height ** 2);
    return bmiValue <= 18.5 ? "Underweight" :
        bmiValue <= 25.0 ? "Normal" :
            bmiValue <= 30.0 ? "Overweight" : "Obese";
}

// 2 variant
function bmi2(weight, height) {
    const bmiValue = weight / (height * height);
    if (bmiValue <= 18.5) return "Underweight";
    if (bmiValue <= 25.0) return "Normal";
    if (bmiValue <= 30.0) return "Overweight";
    return "Obese";
}

// 3 variant
function bmi3(weight, height) {
    if ((weight / (height ** 2)) <= 18.5) {
        return "Underweight"
    } else if ((weight / (height ** 2)) <= 25.0) {
        return "Normal"
    } else if ((weight / (height ** 2)) <= 30.0) {
        return  "Overweight"
    } else {
        return  "Obese"
    }
}







