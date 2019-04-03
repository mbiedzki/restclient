$(document).ready(function () {

    var chosenBook = document.getElementById("selectedBook").innerText;

    if (chosenBook !== "") {
        $.ajax({

            type: "GET",
            url: "http://biedzki.pl/library-1.0/books/" + chosenBook,
            contentType: "json",

            success: function (response) {


                var c = [];

                c.push(" <form method='post' class='w3-container w3-border w3-border-amber'>");
                c.push("<span class='w3-amber'>ID : </span><input type='text' readonly id='currentId' size='5' value='" + response.id + "'><br>");
                c.push("<span class='w3-amber'>Category : </span><input type='text' required id='currentCategory' size='20' value='" + response.category + "'><br>");
                c.push("<span class='w3-amber'>Format : </span><input type='text' required id='currentFormat' size='5' value='" + response.format + "'><br>");
                c.push("<span class='w3-amber'>Title : </span><input type='text' required id='currentTitle' size='50' value='" + response.title + "'><br>");
                c.push("<span class='w3-amber'>Author : </span><input type='text' required id='currentAuthor' size='50' value='" + response.author + "'><br>");
                c.push("</form><br>");
                c.push("<button type='button' id='bookUpdate' class='w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge'>Update selected book</button><br>");


                $('#book').html(c.join(""));

                document.getElementById("bookUpdate").onclick = function () {
                    updateBook();
                };

            },

            error: function () {

                var div = $("#book");
                div.append("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " not found in the library</p>");
            }
        })

    }

    function updateBook() {

        var bookToBeUpdated = {
            'id': document.getElementById("currentId").value,
            'title': document.getElementById("currentTitle").value,
            'author': document.getElementById("currentAuthor").value,
            'category': document.getElementById("currentCategory").value,
            'format': document.getElementById("currentFormat").value
        };

        $.ajax({
            url: "http://biedzki.pl/library-1.0/books/" + chosenBook,
            type: 'POST',
            contentType:'application/json',
            data: JSON.stringify(bookToBeUpdated),
            dataType:'json',

            success: function () {
                $('#book').html("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " updated</p>");
            },

            error: function () {
                $('#book').html("<p class='w3-red w3-large'>Book with ID: " + chosenBook + " was not updated - server error!</p>");
            }

        });


    }

});
