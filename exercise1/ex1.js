var arr = [];
function AddItem(){
    var noOfItems = arr.length;
    arr[noOfItems] = document.getElementById("textValue").value;
    displayResults();
}

function displayResults(){
    var n = arr.length;
    document.getElementById("ItemCount").innerHTML = "Number of items added " + n.toString();
    var divItemList = document.getElementById("ItemList");
}

function displayArray(){
    document.write("Array elements are: ")
    for(var i=0; i<arr.length;i++){
        document.write(arr[i]+" ");
    }
}

function displayElement(){
    document.write("First element is : "+ arr[0]);
}

function checkPrime(){
    var num = arr[0], flag=0;
    for(var i=2;i<num/2;i++){
        if (num%i == 0){
            document.write("Element " + arr[0] + " is not prime.")
            flag=1;
            break;
        }
       if (flag==0){
            document.write("Element "+ arr[0]+" is prime.")
        }
    }
    
}


