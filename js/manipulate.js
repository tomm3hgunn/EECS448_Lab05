function changeText() {
    var text = document.getElementById("variedtext");
    var red = document.getElementById("redField").value;
    var green = document.getElementById("greenField").value;
    var blue = document.getElementById("blueField").value;
    var width = document.getElementById("widthField").value;
    // change border of text box
    text.style.border = width + "px solid rgb(" + red + "," + green + "," + blue + ")";
    // change background using redBack greenBack and blueBack
    var redBack = document.getElementById("redBack").value;
    var greenBack = document.getElementById("greenBack").value;
    var blueBack = document.getElementById("blueBack").value;
    text.style.backgroundColor = "rgb(" + redBack + "," + greenBack + "," + blueBack + ")";


}

