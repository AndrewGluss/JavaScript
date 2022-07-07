function isPalindrome(word){
    let word1 = word.toLowerCase()
    let x = word1.length
    let word2 = ''
    //console.log(x)
    for (let i = x-1; i>-1; i--){
        //console.log(word1[i])
        word2 += word1[i]
    }
    if (word1 == word2){
        console.log("Palindrome")
    } else {
        console.log("Try again!")
    }
}
isPalindrome('шалаш')