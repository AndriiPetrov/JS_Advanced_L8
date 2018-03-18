var savedColor = findCookieValue("page-color");

if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

function getselected(name) {
    var elements = document.getElementsByName(name);
    for (var i = 0, len = elements.length; i < len; i++) {
        if (elements[i].selected)
            window.document.body.style.backgroundColor = elements[i].value;
    }
}

function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "=");

    // Если cookie с указанным именем найден, извлечь его значения.
    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);

        if (end == -1) end = allcookies.length;

        var value = allcookies.substring(start, end);
        value = decodeURIComponent(value);
        return value;
    }
}

document.getElementById("knopka").addEventListener("click", function () {
    var selector = getselected("color");
    document.body.style.backgroundColor = selector;
    document.cookie = "page-color=" + encodeURIComponent(selector) + ";Max-Age=" + (60 * 60);
});