if (window.localStorage.color) {
    document.body.style.backgroundColor = window.localStorage.color;
}

document.getElementById("knopka").addEventListener("click", function () {
    var selectedColor = getSelected();
    window.localStorage.color = selectedColor;
    document.body.style.backgroundColor = selectedColor;
})

this.getSelected = function () {
    var selectors = document.getElementsByName("color");
    for (var i = 0, len = selectors.length; i < len; i++) {
        if (selectors[i].selected) {
            return selectors[i].value;
        }
    }
}