var longestPalindrome = function(s) {
    if(s == null || s.length < 1){
        return "";
    }
    let start = 0, end = 0;
    for(let i =0; i<s.length; i++){
        let len1 = expandAroundCenter(s, i, i); // In order to the odd length number
        let len2 = expandAroundCenter(s, i, i+1);  //the length of even length number
        let len = Math.max(len1, len2);
        if(len > end - start) {
            start = i - parseInt((len-1)/2);  // This equation is important, 
            end = i + parseInt(len/2);  // we can calculate the index by the length the sequence
        }
    }
    return s.substring(start, end+1);
 };
 var expandAroundCenter = function(s, left, right) {
     while(left >=0 && right <s.length && s.charAt(left) == s.charAt(right)){
         --left;
         ++right;
     }
     return right - left -1;
 }
 
console.log(longestPalindrome("aacaabdkaacaa"));