$("#gameContainer").hide()
$("#endContainer").hide()

$(document).ready(function () {

    // Array holding questions, choices, and answers
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
        },
        {
            question: "What is Princess Leia's last name?",
            choices: ["Organa", "Skywalker", "Ren", "Fett"],
            answer: "Organa"
        },
        {
            question: "About how old is Yoda in the original trilogy?",
            choices: ["1200", "800", "500", "200"],
            answer: "800"
        },
        {
            question: "About how long did it take the Millenium Falcon to complete the Kessel Run?",
            choices: ["21 Parsecs", "7 Parsecs", "17 Parsecs", "12 Parsecs"],
            answer: "12 Parsecs"
        },
        {
            question: "How did Luke Skywalker lose his hand?",
            choices: ["Rancor Attack", "Darth Vader", "Crash Landing", "Bantha Accident"],
            answer: "Darth Vader"
        },
        {
            question: "What type of droid is C-3P0",
            choices: ["Protocol Droid", "Servant Droid", "Combat Droid", "Pilot Droid"],
            answer: "Protocol Droid"
        },
        {
            question: "What is Obi-Wan Kenobi's nickname?",
            choices: ["Old Ben", "Old Bob", "Old Roger", "Old Fart"],
            answer: "Old Ben"
        }
    ]
    var correctAnswers = 0;
    var counter = questionArr.length * 5

    // Tell player the time that will be allotted
    $("#startTime").append("You will have " +counter+ " seconds to complete " +questionArr.length+ " questions")


    // On start button click
    $("#startBtn").on("click", function () {


        // Hide and show containers
        $("#introContainer").hide()
        $("#gameContainer").show()


        // Timer
        $("#counter").html("Time Left: " + counter)
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
                    var choiceBtn = $("<input type='radio' class='ml-1 mr-4' name='btnRow" +i+ "' id='"+choices[c]+"'>")
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
    })
})