function alterText(){
    var string = document.getElementById("txt").value;
    var altTxt;
    for(var i=0; i<string.length;i++){
        if(string[i] ==string[i].toUpperCase()){
            document.write(string[i].toLowerCase());
        }
        else {
            document.write(string[i].toUpperCase());
        }
    }
}
