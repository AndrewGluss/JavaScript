function checkAge(age_1){
    let age_2 = 18
    let age_3 = 60 
    if (age_1 < age_2){
        console.log("You don't have access cause your age is", age_1, "It's less then")
    } else  if (age_1 >= age_2 && age_1 < age_3){
        console.log("Welcome !")
    } else if (age_1 > age_3){
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}

checkAge(10)
checkAge(17)
checkAge(18)
checkAge(61)

function checkAge_r(age_1){
    let age_2 = 18
    let age_3 = 60 
    if (age_1 < age_2){
        return "You don't have access cause your age is " + age_1 + " It's less then"
    } else  if (age_1 >= age_2 && age_1 < age_3){
        return "Welcome!"
    } else if (age_1 > age_3){
        return "Keep calm and look Culture channel"
    } else {
        return "Technical work"
    }
}
const ret_access = checkAge_r(61)
console.log(ret_access)