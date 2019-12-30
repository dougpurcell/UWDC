document.getElementById("text").innerHTML = "Hello Doug!";

document.getElementById("click-me").onclick = function() {
    document.getElementById("click-me").innerHTML = "Clicked!";
};

document.getElementById("paragraphButton").onclick = function() {
    document.getElementById("secondParagraph").innerHTML = 
        "I think " + document.getElementById("secondParagraph").innerHTML + " awesome!";
};

document.getElementById("thirdButton").onclick = function() {
    document.getElementById("thirdParagraph").innerHTML = "<h2>Unreal</h2>";
};

document.getElementById("styleText").onclick = function() {
    document.getElementById("moreText").style.color = "red";
    document.getElementById("moreText").style.fontSize = "50px";
    // document.getElementById("moreText").style.display = "none";
}