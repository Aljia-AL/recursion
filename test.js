function isPalindrome (str) {
    const len = str.lenght;

    if (len <= 1) {
        return true;
    } 
    if (str[0] !== str[len -1]){
        return false;
    } 

    return isPalindrome(str[len,len-1]);
}
console.log(isPalindrome('radar'));


// solution2


function isPalindrome ( str,left,right) {
    


    if(left >= right){
        return true;
    }
    if(str[left]=== str[right]){
        return isPalindrome(str,left+1,right-1)
    }else if(str[left] !== str[right]) {
        console.log("it's not a polindrome");
        return false;
    }
}

var str = "radar"