var textEntered = "";

document.getElementById("changeText").onclick = function() {
    textEntered = document.getElementById("textInput").value;
    document.getElementById("textparagraph").innerHTML = textEntered;
};