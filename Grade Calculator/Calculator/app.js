function gradeCalculator(){
    
    let english = parseFloat(document.getElementById('english').value);
    let urdu = parseFloat(document.getElementById('urdu').value);
    let math = parseFloat(document.getElementById('math').value);

    let obtainedMarks = english + urdu + math;
    let percentage = (obtainedMarks / 300) * 100
    let grade = '';

    if(percentage >= 90){
        grade = 'A1';
    }

    else if(percentage >= 80){
        grade = 'A+'
    }

    
    else if(percentage >= 70){
        grade = 'A'
    }

    
    else if(percentage >= 60){
        grade = 'B'
    }

    
    else if(percentage >= 50){
        grade = 'C'
    }

    
    else if(percentage >= 45){
        grade = 'D'
    }

    else {
        grade = 'Fail';
    }

    document.getElementById('obtainedMarks').textContent = obtainedMarks;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('grade').textContent = grade; 

}