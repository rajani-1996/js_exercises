var arr = [];

function AddItem(){
    arr.push(document.getElementById("textValue").value);
}

function Sort() {
   document.write(arr);

   var i = 0, j; 
    while (i < arr.length) { 
        j = i + 1; 
        while (j < arr.length) { 
            if (arr[j] < arr[i]) { 
                var temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    } 

    document.write('<br/>'+ arr);   
}
