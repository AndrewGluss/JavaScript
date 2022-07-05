let count_gl = 0
let count_sgl = 0
function getWordStructure(word){
    word1 = word.toLowerCase()
    for (var i in word1){
        //console.log(word[i])
        if (word1[i].match(/[aeiouy]/)){
            count_gl += 1
        } else if (word1[i].match(/[bcdfghjklmnpqrstvwxz]/)){
            count_sgl += 1
        }
    }
    console.log("В слове",word, count_gl,"гласных букв и", count_sgl, "букв")
}

getWordStructure("Andrew")