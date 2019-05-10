$(document).ready(function () {

    //var serverAddress = "http://localhost:8090/library-1.0/books/"
    var serverAddress = "https://biedzki.pl/library-1.0/books/";
    var serverInfo = "https://biedzki.pl/library-1.0/actuator/info";
    var serverHealth = "https://biedzki.pl/library-1.0/actuator/health";


    /*Get book *****************************************************************************************/
    var chosenBook = document.getElementById("selectedBook").innerText;

    document.getElementById("bookAdd").onclick = function () {
        bookForm();
    };

    actuatorInfo();
    actuatorHealth();

    if (chosenBook !== "") {
        $.ajax({

            type: "GET",
            cache: false,
            url: serverAddress + chosenBook,
            contentType: "application/json; charset=utf-8",


            success: function (response) {


                var c = [];

                c.push(" <form method='post' class='w3-container w3-border w3-border-amber'>");
                c.push("<br><span style='width: 8em; display: inline-block' class='w3-amber'>Title : </span><input type='text' required id='currentTitle' size='50' value='" + response.title + "'><br>");
                c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>Author : </span><input type='text' required id='currentAuthor' size='50' value='" + response.author + "'><br>");
                c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>ID : </span><input type='text' readonly id='currentId' size='50' value='" + response.id + "'><br>");
                c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>Category : </span><input type='text' required id='currentCategory' size='50' value='" + response.category + "'><br>");
                c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>Format : </span><input type='text' required id='currentFormat' size='50' value='" + response.format + "'><br><br>");
                c.push("</form><br>");
                c.push("<button type='button' id='bookUpdate' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Update selected book</button>");
                c.push("<button type='button' id='bookDelete' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Delete selected book</button>");

                $('#book').html(c.join(""));

                document.getElementById("bookUpdate").onclick = function () {
                    updateBook();
                };

                document.getElementById("bookDelete").onclick = function () {
                    deleteBook();
                };

            },

            error: function () {

                var div = $("#book");
                div.append("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " not found in the library</p>");
            }
        })

    }

    /*Update book *****************************************************************************************/

    function updateBook() {

        var bookToBeUpdated = {
            'id': document.getElementById("currentId").value,
            'title': document.getElementById("currentTitle").value,
            'author': document.getElementById("currentAuthor").value,
            'category': document.getElementById("currentCategory").value,
            'format': document.getElementById("currentFormat").value
        };


        $.ajax({
            url: serverAddress + chosenBook,
            cache: false,
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(bookToBeUpdated),
            dataType: 'json',


            success: function (responseText) {
                $('#book').html("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " updated<br><br>RESPONSE : " + JSON.stringify(responseText) + "</p>");
            },

            error: function (responseText) {
                $('#book').html("<p class='w3-red w3-large'>Book with ID: " + chosenBook + " was not updated - server error!"
                    + "<br><br>JSON SENT : " + JSON.stringify(bookToBeUpdated) + "<br><br>RESPONSE : " + JSON.stringify(responseText) + "</p>");
            }

        });

    }

    /*delete book *****************************************************************************************/
    function deleteBook() {

        $.ajax({
            url: serverAddress + chosenBook,
            cache: false,
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8',


            success: function (responseText) {
                $('#book').html("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " deleted</p>");
            },

            error: function (responseText) {
                $('#book').html("<p class='w3-red w3-large'>Book with ID: " + chosenBook + " was not deleted - server error!<br><br>RESPONSE : " + JSON.stringify(responseText) + "</p>");
            }

        });


    }

    /*Generate new book form *****************************************************************************************/

    function bookForm() {

        var c = [];

        c.push(" <form class='w3-container w3-border w3-border-amber'>");
        c.push("<br><span style='width: 8em; display: inline-block' class='w3-amber'>Title : </span><input type='text' required id='currentTitle' size='50' ><br>");
        c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>Author : </span><input type='text' required id='currentAuthor' size='50' ><br>");
        c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>Category : </span><input type='text' required id='currentCategory' size='50' ><br>");
        c.push("<span style='width: 8em; display: inline-block' class='w3-amber'>Format : </span><input type='text' required id='currentFormat' size='50' ><br><br>");
        c.push("<button type='button' id='add' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Add book</button><br><br>");
        c.push("</form>");
        c.push("<br><p id='message' class='w3-amber w3-large'></p>");


        $('#book').html(c.join(""));

        document.getElementById("add").onclick = function () {
            addBook();
        };

    }

    /*Add book *****************************************************************************************/

    function addBook() {

        if (document.getElementById("currentTitle").value !== "" &&
            document.getElementById("currentAuthor").value !== "" &&
            document.getElementById("currentCategory").value !== "" &&
            document.getElementById("currentFormat").value !== "") {

            var bookToBeAdded = {
                'id': "0",
                'title': document.getElementById("currentTitle").value,
                'author': document.getElementById("currentAuthor").value,
                'category': document.getElementById("currentCategory").value,
                'format': document.getElementById("currentFormat").value
            };


            $.ajax({
                url: serverAddress,
                cache: false,
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(bookToBeAdded),

                success: function (responseText) {
                    $('#book').html("<p class='w3-amber w3-large'>Book added<br><br>RESPONSE : " + JSON.stringify(responseText) + "</p>");
                },

                error: function (responseText) {
                    $('#book').html("<p class='w3-red w3-large'>Book was not added - server error!<br><br>RESPONSE : " + JSON.stringify(responseText) + "</p>");
                }

            });
        } else {
            $('#message').html("Please fill in all fields !");

        }

    }

    /*Sever Actuator info *****************************************************************************************/

    function actuatorInfo() {

        $.ajax({
            url: serverInfo,
            cache: false,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',

            success: function (responseText) {
                $('#info').html("<p class='w3-light-grey w3-large'>Server info from actuator end point: <br/>"
                    + responseText.app.name + ",   "
                    + responseText.app.description + ",   "
                    + "version : " + responseText.app.version
                    + "</p>");
            },

            error: function (responseText) {
                $('#info').html("<p class='w3-red w3-large'>Server error !<br><br>" +
                    "RESPONSE : " + JSON.stringify(responseText) + "</p>");
            }

        });

    }

    function actuatorHealth() {

        $.ajax({
            url: serverHealth,
            cache: false,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',

            success: function (responseText) {
                $('#health').html("<p class='w3-light-grey w3-large'>Server status from actuator end point: "
                    + responseText.status + "</p>");
            },

            error: function (responseText) {
                $('#health').html("<p class='w3-red w3-large'>Server error !<br><br>" +
                    "RESPONSE : " + JSON.stringify(responseText) + "</p>");
            }

        });

    }

});
