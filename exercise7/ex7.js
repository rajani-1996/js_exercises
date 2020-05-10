function findLarge(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1 > num2){
        document.write(num1 + " is greater")
    }
    else if (num2 > num1){
        document.write(num2 + " is greater")
    }

    else{
        document.write("Same numbers")
    }
}