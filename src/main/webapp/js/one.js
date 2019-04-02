$(document).ready(function () {

    var selectedDiv = document.getElementById("selectedBook");
    var chosenBook = selectedDiv.innerText;

    $.ajax({

        type: "GET",
        url: "http://biedzki.pl/library-1.0/books/"+chosenBook,
        contentType: "json",

        success: function (response) {


            var c = [];

            c.push("<thead><tr class='w3-amber w3-xlarge'>" + "<td>ID</td>" + "<td>Title</td>"
                + "<td>Author</td>" + "<td>Category</td>" +"<td>Format</td> </tr></thead>");

                c.push("<tr><td>" + response.id + "</td>");
                c.push("<td>" + response.title + "</td>");
                c.push("<td>" + response.author + "</td>");
                c.push("<td>" + response.category + "</td>");
                c.push("<td>" + response.format + "</td></tr>");

            $('#books').html(c.join(""));

        },

        error: function () {

            var div = $("#books");

            div.append("Book not found : " + chosenBook);
        }
    })

});
