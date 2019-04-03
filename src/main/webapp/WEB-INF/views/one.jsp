<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <title>CodersLab</title>
    <style>
        <%@include file="w3.css" %>
    </style>
    <script src="${pageContext.request.contextPath}/js/jquery-3.3.1.js"></script>
    <script src="${pageContext.request.contextPath}/js/one.js"></script>
</head>
<body>

<div class="w3-container w3-amber" align="center">
    <h1>Book details</h1>
</div>
<hr>

<div id="selectedBook" style="display: none">${selectedId}</div>


<div class="w3-container">
    <a href="${pageContext.request.contextPath}/"
       class="w3-button w3-xlarge w3-border w3-border-amber w3-round-xxlarge">Return</a>
</div>
<hr>

<div id="books" class="w3-table-all w3-center">

</div>




</body>
</html>