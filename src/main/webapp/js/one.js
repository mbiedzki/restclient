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
                c.push("<span class='w3-amber'>ID : </span><input type='text' readonly name='currentId' size='5' value='" +response.id + "'><br>");
                c.push("<span class='w3-amber'>Category : </span><input type='text' required name='currentCategory' size='20' value='" +response.category + "'><br>");
                c.push("<span class='w3-amber'>Format : </span><input type='text' required name='currentFormat' size='5' value='" +response.format + "'><br>");
                c.push("<span class='w3-amber'>Title : </span><input type='text' required name='currentTitle' size='50' value='" +response.title + "'><br>");
                c.push("<span class='w3-amber'>Author : </span><input type='text' required name='currentAuthor' size='50' value='" +response.author + "'><br>");
                c.push("</form>");

                $('#book').html(c.join(""));

            },

            error: function () {

                var div = $("#book");
                div.append("<p class='w3-amber w3-large'>Book with ID: " + chosenBook + " not found in the library</p>");
            }
        })
    }

});
