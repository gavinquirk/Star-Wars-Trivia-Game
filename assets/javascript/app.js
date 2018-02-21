$("#gameContainer").hide()
$("#endContainer").hide()

$(document).ready(function () {

    var correctAnswers = 0;

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
        },
        {
            question: "Who is Luke Skywalker's Father?",
            choices: ["Han Solo", "Darth Vader", "Obi-Wan Kenobi", "Bob Skywalker"],
            answer: "Darth Vader"
        }
    ]


    // On start button click
    $("#startBtn").on("click", function () {

        var counter = questionArr.length * 5

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
            var cCon = "#cCon" + i + ""
            var qCon = "#qCon" + i + ""
            var choices = questionArr[i].choices

            // Variable Function for generating choice content
            var choiceContent = function () {
                for (c = 0; c < choices.length; c++) {
                    var choiceBtn = $("<input type='radio' name='btnRow" +i+ "' id='"+choices[c]+"'>")
                    $(cCon).append(choices[c], choiceBtn)



                }
            }

            // Create a div with rows and columns for each question
            gameContainer.append(rowNew.append(colNew.append(
                qConNew,
                cConNew
            )))
            // Append question to question container
            $(qCon).append(question)
            // Append Choice Content
            choiceContent()

        } // END OF FORLOOP

        // ANSWER CHECK FUNCTION
            var answerCheck = function() {
                for (a = 0; a < questionArr.length; a++) {
                    if ($("input[id='"+questionArr[a].answer+"']").is(':checked')) {
                        correctAnswers++
                        console.log('correct: ' + questionArr[a].answer)
                    }
                }
            }


        // Timer
        var interval = setInterval(function () {
            counter--
            $("#counter").html("Time Left: " + counter)

            // End of timer conditions
            if (counter <= 0) {
                console.log("Time Up")
                clearInterval(interval)
                gameContainer.hide()
                $("#endContainer").show()
                answerCheck()
                $("#score").append("You have answered " +correctAnswers+ " out of " +questionArr.length+ " questions correctly")
                console.log(correctAnswers + ' out of ' + questionArr.length + ' answers correct' )
            }
        }, 1000)






    })





})