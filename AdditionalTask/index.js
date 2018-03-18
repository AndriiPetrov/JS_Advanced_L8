window.onbeforeunload = function(){
    document.cookie = "Last Visit = " + new Date()+";Max-Age=259200"
}