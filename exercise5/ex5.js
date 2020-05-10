function check(){
    for (var i=0;i<=15;i++){
        if(i == 0 ){
            document.write('<br/>');
            document.write(i +" is neither odd or even");
        }
        else if(i%2 ==0){
            document.write('<br/>');
            document.write( i+" is even.");
        }
        else{
            document.write('<br/>');
            document.write(i+" is odd");
        }
    }
}