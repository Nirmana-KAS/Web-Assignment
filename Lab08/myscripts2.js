function calculateMarks() {
    const mark1 = parseFloat(document.getElementById('mark1').value);
    const mark2 = parseFloat(document.getElementById('mark2').value);
    const mark3 = parseFloat(document.getElementById('mark3').value);
    const mark4 = parseFloat(document.getElementById('mark4').value);
    const mark5 = parseFloat(document.getElementById('mark5').value);

    const totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
    const averageMarks = totalMarks / 5;

    alert(`Total Marks: ${totalMarks}\nAverage Marks: ${averageMarks}`);

    if (averageMarks > 30) {
        alert("Congrats! You passed.");
    } else {
        alert("Better luck next time.");
    }
}