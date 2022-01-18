$("#calculate").click(function () {
    // Declare/set total percentage variable
    total = 0
    // Multiple the inputs by their weights and add them all together
    total = (parseFloat($("#assignments").val())/100)*55 + (parseFloat($("#gp").val())/100)*5 + (parseFloat($("#quizzes").val())/100)*10 + (parseFloat($("#exams").val())/100)*20 + (parseFloat($("#intex").val())/100)*10;
    // Find the correct corresponding letter grade
    lettergrade = "";
    if (total >= 94) {
        lettergrade = "A"
    }
    else if (total >= 90) {
        lettergrade = "A-"
    }
    else if (total >= 87) {
        lettergrade = "B+"
    }
    else if (total >= 84) {
        lettergrade = "B"
    }
    else if (total >= 80) {
        lettergrade = "B-"
    }
    else if (total >= 77) {
        lettergrade = "C+"
    }
    else if (total >= 74) {
        lettergrade = "C"
    }
    else if (total >= 70) {
        lettergrade = "C-"
    }
    else if (total >= 67) {
        lettergrade = "D+"
    }
    else if (total >= 64) {
        lettergrade = "D"
    }
    else if (total >= 60) {
        lettergrade = "D-"
    }
    else {
        lettergrade = "E"
    }

    // Alert the user what the final grade was
    alert("Your final percentage was " + total + "% with a final grade of " + lettergrade);
        
})