<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <style>
        <%@include file="w3.css" %>
    </style>
    <script src="${pageContext.request.contextPath}/js/jquery-3.3.1.js"></script>
</head>
<body>

<div id="selectedBook" style="display: none">${selectedId}</div>
<br>
<br>

<div class="w3-container w3-amber" align="center">
    <h1>Simple client for testing my REST book library server</h1>
    <p>http://biedzki.pl/library-1.0/books/</p>
    <p>Java, Spring Boot, Java Sript, Jason, Ajax</p>
</div>
<hr>

<div class="w3-container">
    <form method="post">

        <a href="${pageContext.request.contextPath}/all"
           class="w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge">Show all books</a>
        <hr>
        <button type="button" id='bookAdd'
                class="w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge">New book form
        </button>
        <hr>
        <button type="submit"
                class="w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge">Find book by ID
        </button>
        <input type="number" name="bookId" style="width: 7em; text-align: center"
               class="w3-xlarge w3-border w3-round-xlarge w3-border-amber">

    </form>
    <br>
</div>


<div id="book" class="w3-container w3-large w3-border-amber">

</div>
<hr>

<script src="${pageContext.request.contextPath}/js/one.js"></script>
</body>
</html>
