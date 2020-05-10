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

function sumOfsquares(){
    var sum = 0;
    for(var i=0; i<arr.length;i++){
        sum += Math.pow(arr[i],2);
    }
    document.write("Sum of squares of elements is "+ sum);
}