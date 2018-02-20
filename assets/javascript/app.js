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
        },
        {
            question: "Who is Luke Skywalker's Father?",
            choices: ["Han Solo", "Darth Vader", "Obi-Wan Kenobi", "Bob Skywalker"],
            answer: "Darth Vader"
        }
    ]


    // On start button click
    $("#startBtn").on("click", function () {

        // var counter = questionArr.length * 5
        var counter = 5

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
            var text = "text"
            var choices = questionArr[i].choices
            var newTestBtn = $("<input type='radio' name='testBtn' id='testBtn' value='testBtn'>")
            var testBtn = "#testBtn"

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
        $("#testArea").append(newTestBtn)

            var answerCheck = function() {
                if ($('#E-11 Blaster Rifle').is(':checked')) {

                console.log("Test Button Clicked")
                }
                // if ($('#E-11 Blaster Rifle').is(':checked')) {

                //     console.log("ANSWER CHECKED")
                // }

            }


        // Timer
        var interval = setInterval(function () {
            counter--
            $("#counter").html("Time Left: " + counter)
            if (counter <= 0) {
                console.log("Time Up")
                clearInterval(interval)
                gameContainer.hide()
                answerCheck()
            }
        }, 1000)

        // var answerCheck = function() {
        //     $("#radio_1, #radio_2", "#radio_3").change(function () {
        //         if ($("#radio_1").is(":checked")) {
        //             $('#div1').show();
        //         }
        //         else if ($("#radio_2").is(":checked")) {
        //             $('#div2').show();
        //         }
        //         else 
        //             $('#div3').show();
        //     });        
        // }






    })





})