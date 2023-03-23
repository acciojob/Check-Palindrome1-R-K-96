// complete the given function

function palindrome(str){
	var i= 0;
	var j = str.length-1;
	str.toLowerCase();
		while(i<j)
		{
			if(str.charAt(i)!=str.charAt(j))
			{
				return false
			}
			i++;
			j--;
		}
	return true;

}
module.exports = palindrome
