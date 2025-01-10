function ketQua () {
    let nang = document.getElementById('can nang').value;
    let cao = document.getElementById('Chieu cao').value;
    let bmi = nang / (cao * cao);
    let result = document.getElementById('result');
    if (bmi < 18)
        result=("Underweight");
    else if (bmi < 25.0)
        result=("Normal");
    else if (bmi < 30.0)
        result=("Overweight");
    else
        document.write("Obese");
    document.getElementById('result').innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";
}