for (let i = 1; i < 11; i++){
    console.log('2 в степени '+i+' равно', 2**i)
}

function Stepen(x){
    console.log('2 в степени '+x+' равно', 2**x)
}

//Stepen(3)

let stroka = ':)'
for (let i = 1; i < 6; i++){
    console.log(stroka)
    stroka += ':)'
}

function StrRows(s, n){
    let s1 = s
    for (let i = 1; i < n+1; i++){
        console.log(s)
        s += s1
    }
}

//StrRows("xD", 7)

function printSmile(stroka1, n1){
    for (let i = 1; i < n1+1; i++){
        console.log(stroka1)
        stroka1 += ':)'
    }
}

printSmile(':)', 3)