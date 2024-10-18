function generateMarksheet() {

    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentId').value;
    const math = parseInt(document.getElementById('mathMarks').value) || 0;
    const english = parseInt(document.getElementById('englishMarks').value) || 0;
    const urdu = parseInt(document.getElementById('urduMarks').value) || 0;
    const science = parseInt(document.getElementById('scienceMarks').value) || 0;

    const totalObtained = math + english + urdu + science;
    const totalMarks = 400;
    const percentage = ((totalObtained / totalMarks) * 100).toFixed(2);

    let grade;
    if (percentage >= 80) {
        grade = 'A';
    } 
    else if (percentage >= 70) {
        grade = 'B';
    } 
    else if (percentage >= 60) {
        grade = 'C';
    } 
    else if (percentage >= 50) {
        grade = 'D';
    } 
    else {
        grade = 'F';
    }

    document.getElementById('cardName').innerText = `Name: ${name}`;
    document.getElementById('cardId').innerText = `Id: ${id}`;
    document.getElementById('cardMath').innerText = `Math: ${math}/100`;
    document.getElementById('cardEnglish').innerText = `English: ${english}/100`;
    document.getElementById('cardUrdu').innerText = `Urdu: ${urdu}/100`;
    document.getElementById('cardScience').innerText = `Science: ${science}/100`;
    document.getElementById('cardTotalObtained').innerText = `Total Marks Obtained: ${totalObtained}/400`;
    document.getElementById('cardPercentage').innerText = `Percentage: ${percentage}%`;
    document.getElementById('cardGrade').innerText = `Grade: ${grade}`;

    document.getElementById('marksheetCard').style.display = 'block';
}
