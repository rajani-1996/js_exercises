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

function frequentElement(){
    var elt =0, count =0;
    for(var i=0;i<arr.length;i++){
        var tempElt = arr[i];
        var tempCount = 0;
        for(var j=0; j<arr.length;j++){
            if(arr[j]==tempElt){
                tempCount++;
            }
        }
        if(tempCount>count){
            elt=tempElt;
            count=tempCount;
        }
    }
    document.write("The most frequent element is "+ elt +" and count is "+ count);
}