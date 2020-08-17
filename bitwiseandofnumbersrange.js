//Objective is to '&' every number between n and m, inclusive

let n = 12
let m = 9


//O(1) solution since the nuber if bits is constant
//We use bit manipulation to keep turning off the right-most 1 each iteration

//Turn off the right-most one's bits of n
//Same as '&'ing all of the numbers from n to m
while (n > m) {
    
    //12 would '&' with 11...
    //11 would '&' with 10... 
    //So on so forth
    n &= (n - 1)
}

//Last operation since it's inclusive
return n & m