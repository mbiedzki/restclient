$(document).ready(function () {

    var chosenBook = document.getElementById("selectedBook").innerText;

    if (chosenBook !== "") {
        $.ajax({

            type: "GET",
            cache: false,
          /*  url: "http://localhost:8090/books/" + chosenBook,*/
            url: "http://biedzki.pl/library-1.0/books/" + chosenBook,
            contentType: "application/json; charset=utf-8",


            success: function (response) {


                var c = [];

                c.push(" <form method='post' class='w3-container w3-border w3-border-amber'>");
                c.push("<span class='w3-amber'>ID : </span><input type='text' readonly id='currentId' size='5' value='" + response.id + "'><br>");
                c.push("<span class='w3-amber'>Category : </span><input type='text' required id='currentCategory' size='20' value='" + response.category + "'><br>");
                c.push("<span class='w3-amber'>Format : </span><input type='text' required id='currentFormat' size='5' value='" + response.format + "'><br>");
                c.push("<span class='w3-amber'>Title : </span><input type='text' required id='currentTitle' size='50' value='" + response.title + "'><br>");
                c.push("<span class='w3-amber'>Author : </span><input type='text' required id='currentAuthor' size='50' value='" + response.author + "'><br>");
                c.push("</form><br>");
                c.push("<button type='button' id='bookUpdate' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Update selected book</button>");
                c.push("<button type='button' id='bookDelete' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Delete selected book</button>");
                c.push("<button type='button' id='bookAdd' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Add as new book (id ignored)</button><br>");

                $('#book').html(c.join(""));

                document.getElementById("bookUpdate").onclick = function () {
                    updateBook();
                };

                document.getElementById("bookDelete").onclick = function () {
                    deleteBook();
                };

                document.getElementById("bookAdd").onclick = function () {
                    addBook();
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
            /*  url: "http://localhost:8090/books/" + chosenBook,*/
            url: "http://biedzki.pl/library-1.0/books/" + chosenBook,
            cache: false,
            type: 'PUT',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(bookToBeUpdated),
            dataType:'json',


            success: function (responseText) {
                $('#book').html("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " updated<br><br>RESPONSE : " + JSON.stringify(responseText) +"</p>");
            },

            error: function (responseText) {
                $('#book').html("<p class='w3-red w3-large'>Book with ID: " + chosenBook + " was not updated - server error!"
                +"<br><br>JSON SENT : " +JSON.stringify(bookToBeUpdated) +"<br><br>RESPONSE : " + JSON.stringify(responseText) +"</p>");
            }

        });


    }

    /*delete book *****************************************************************************************/
    function deleteBook() {

        $.ajax({
            /*  url: "http://localhost:8090/books/" + chosenBook,*/
            url: "http://biedzki.pl/library-1.0/books/" + chosenBook,
            cache: false,
            type: 'DELETE',
            contentType:'application/json; charset=utf-8',


            success: function () {
                $('#book').html("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " deleted</p>");
            },

            error: function () {
                $('#book').html("<p class='w3-red w3-large'>Book with ID: " + chosenBook + " was not deleted - server error!</p>");
            }

        });


    }

    /*Add book *****************************************************************************************/

    function addBook() {

        var bookToBeUpdated = {
            /*'id': null,*/
            'title': document.getElementById("currentTitle").value,
            'author': document.getElementById("currentAuthor").value,
            'category': document.getElementById("currentCategory").value,
            'format': document.getElementById("currentFormat").value
        };


        $.ajax({
            /*  url: "http://localhost:8090/books/" + chosenBook,*/
            url: "http://biedzki.pl/library-1.0/books/",
            cache: false,
            type: 'POST',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(bookToBeUpdated),

            success: function () {
                $('#book').html("<p class='w3-amber w3-large'>Book added</p>");
            },

            error: function () {
                $('#book').html("<p class='w3-red w3-large'>Book was not added - server error!</p>");
            }

        });


    }

});
