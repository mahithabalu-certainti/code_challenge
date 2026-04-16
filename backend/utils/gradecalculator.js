//Subjects

name = subjects.name;
scores = subjects.scores;

function average(scores){
    let total = 0;
    const len = scores.length;
    for (let i = 0;i<len;i++){
    total = total + scores[i];
}
const ave = Math.round((total/len)* 100)/100;
return ave
}

function highest(scores){
    let high = scores[0];
    const len = scores.length;
    for ( let i =0; i<len;i++){
        if(scores[i]>high){
            high = scores[i];
        }
    }
    return high
}

function lowest(scores){
    let low = scores[0];
    const len = scores.length;
    for ( let i = 0; i<len;i++){
        if(scores[i]<low){
            low = scores[i];
        }
    }
    return low
}
function Scoregrade(ave_marks){
    let grade, status;
    if (ave_marks >= 90){
        grade = 'A';
        status = 'Pass';
    } 
    else if (ave_marks >= 80){
        grade = 'B';
        status = 'Pass';
    } 
    else if (ave_marks >= 70){
        grade = 'C';
        status = 'Pass';
    } 
    else if (ave_marks >= 60){
        grade = 'D';
        status = 'Pass';
    } 
    else{
        grade = 'F';
        status = 'Fail';
    }
    return {grade, status};
}

function trend_status (scores) {
    const mid = Math.floor(scores.length / 2);
    const firstHalf = scores.slice(0, mid);
    const secondHalf = scores.slice(mid);
    if (average(secondHalf) > average(firstHalf))
        {
            trend = 'Improving';
        }
    else if (average(secondHalf) < average(firstHalf)) 
        {
            trend = 'Declining';
        }
    else 
        {
            trend = 'Stable';
        }
        return trend
}

const avg = average(scores);
const gradeIn = Scoregrade(avg);
const subject= {
    name: name,
    scores: scores,
    average: avg,
    highest: highest(scores),
    lowest: lowest(scores),
    grade: gradeIn.grade,
    status: gradeIn.status,
    trend: trend_status(scores)
};
console.log(subject);

//Summary


function pass_subjects(scores){
    let pass = 0;
    for(let i = 0; i<scores.length;i++)
    {
        if (scores[i] >= 60 && scores[i]<=100)
            pass = pass + 1;
    }
    return pass;
}

function fail_subjects(scores){
    let fail =0;
    for(let i = 0; i<scores.length;i++)
    {
        if (scores[i] >= 0 && scores[i]<= 59)
            fail = fail + 1;
    }
    return fail;
}

function top_subject(subjects) {
    high = average(subjects[0].scores)
    for (const i =0;i<subjects.length;i++){
        sub_ave = average(subjects[i].scores)
        if (sub_ave >= high)
            high = sub_ave;
    }
    return high;
}

function weak_subject(subjects) {
    low = average(subjects[0].scores)
    for (const i =0;i<subjects.length;i++){
        sub_ave = average(subjects[i].scores)
        if (sub_ave <= low)
            low = sub_ave;
    }
    return low;
}

function rank(ave){
    if (ave>=90 && ave<=100)
        result = 'Distinction';
    else if (ave >=75 && ave<=89.99){
        result = 'Merit';
    }
}


const overall_average = average(scores)
const total_subjects = scores.length;
const passed = pass_subjects(scores)
const failed = fail_subjects(scores)
const top_sub = top_subject(subjects)
const weak_sub = weak_subject(subjects)
const rank_ = rank(overall_average)

const summary = {
    overallAverage : overall_average ,
    totalSubjects : total_subjects,
    passed: passed,
    failed: failed,
    topSubject: top_sub,
    weakestSubject: weak_sub,
    grade_distribution:grade,
    rank:rank,

};
console.log(summary);