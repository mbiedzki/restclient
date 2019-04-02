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
</head>
<body>


<br>
<br>

<div class="w3-container w3-amber" align="center">
    <h1>Simple client for testing my REST book library server</h1>
    <p>http://biedzki.pl/library-1.0/books/</p>
</div>
<hr>

<div class="w3-container">
<a href="${pageContext.request.contextPath}/all"
   class="w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge">Show all books</a>
</div>
<hr>

<div class="w3-container">
    <form method="post">
        <input type="number" name="bookId" placeholder="input book ID" class=w3-xlarge>
        <br><br>
        <button type="submit"
                class="w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge">Find book by ID</button>
    </form>
</div>

</body>
</html>
