$("#gameContainer").hide()

$(document).ready(function () {

    var questionArr = [
        {
            question: "What type of blaster does Han Solo use?",
            choices: ["E-11 Blaster Rifle", "DL-44 Blaster Pistol", "D-18 Blaster Pistol", "DH-17 Blaster Rifle"],
            answer: "DL-44 Blaster Pistol"
        },
        {
            question: "What type of fighter does Luke Skywalker pilot?",
            choices: ["A-Wing", "B-Wing", "V-Wing", "X-Wing"],
            answer: "X-Wing"
        }
    ]

    // // Function for generating answer buttons
    // function generateAnswers(array) {
    //     console.log(array)
    //     for (i = 0; i < array.length; i++) {
    //         var newBtn = $("<input type='radio' value='array[i]'")
    //         $("#test").append(newBtn)
    //     }
    // }



    // On start button click
    $("#startBtn").on("click", function () {

        // Hide and show containers
        $("#introContainer").hide()
        $("#gameContainer").show()

        // Generate rows and columns for questions
        for (i = 0; i < questionArr.length; i++) {

            // Variables for row and column creation
            var gameContainer = $("#gameContainer")
            var rowNew = $("<div id='row" + i + "' class='row'>")
            var colNew = $("<div id='col" + i + "' class='col-md-12'>")
            var qConNew = $("<div id='qCon" + i + "' class='qCon'>")
            var cConNew = $("<div id='cCon" + i + "' class='cCon'>")
            var question = questionArr[i].question
            var cCon = $("#cCon" + i + "")
            var qCon = $("#qCon" + i + "")

            var text = "text"
            var choices = questionArr[i].choices

            // Create a div with rows and columns for each question
            gameContainer.append(rowNew.append(colNew.append(
                qConNew.append(question),
                cConNew
            )))

            // Generate choice buttons
            for (i = 0; i < choices.length; i++) {
                var choice = choices[i]
                var choiceBtn = $("<input type='radio' value='choice'>")
                // Append to choice container
                $(cCon).append(choiceBtn, choice)
            }

        }




    })





})