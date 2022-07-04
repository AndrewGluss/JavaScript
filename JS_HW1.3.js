function checkAge(age_1){
    let age_4 = Number(age_1)
    let age_2 = 18
    let age_3 = 60 
    if (String(age_4) == age_1 && typeof age_4 === 'number'){
        if (age_4 < age_2){
            console.log("You don't have access cause your age is " + age_4 + " It's less then")
        } else  if (age_4 >= age_2 && age_4 < age_3){
            console.log("Welcome!")
        } else if (age_4 > age_3){
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("Error!!!")
    }
}

checkAge("20")