$(document).ready(function () {
    $.ajax({

        type: "GET",
        cache: false,
       url: "http://biedzki.pl/library-1.0/books/",
        /*url: "http://localhost:8090/books/",*/
        contentType: "application/json; charset=utf-8",


        success: function (response) {

            response.sort( OrderListBy("id") );

            var c = [];

            c.push("<thead><tr class='w3-amber w3-xlarge'>" + "<td>ID</td>" + "<td>Title</td>"
                + "<td>Author</td></tr></thead>");


            $.each(response, function(i, item) {
                c.push("<tr><td>" + item.id + "</td>");
                c.push("<td>" + item.title + "</td>");
                c.push("<td>" + item.author + "</td></tr>");
            });

            $('#books').html(c.join(""));

        },

        error: function () {

            var div = $("#books");
            div.append("Error communicating with server");

        }
    })

    function OrderListBy(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
});
