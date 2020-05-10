
 function text_truncate(input, length) {
    var input = document.getElementById("txt").value;
    var length = document.getElementById("num").value;
      if (input.length > length) {
        document.write(input.slice(0,length));
      } 
      else {
        document.write(input);
      }
    }
