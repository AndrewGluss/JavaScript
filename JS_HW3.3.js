/// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
/// 2. Написать функцию getEnterpriseName(), которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
/// 3. Написать функцию addEnterprise(), которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
/// 4. Написать функцию addDepartment(), которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
/// 5. Написать функцию editEnterprise() для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
/// 6. Написать функцию editDepartment() для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
/// 7. Написать функцию deleteEnterprise() для удаления предприятия. В качестве аргумента принимает id предприятия.
/// 8. Написать функцию deleteDepartment() для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
/// 9. Написать функцию moveEmployees() для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  for (let i = 0; i < enterprises.length; i++){
    let allEmployee = 0
    for (let j = 0; j < enterprises[i]['departments'].length; j++){
        //console.log(JSON.stringify(enterprises[i]['departments'][j]['employees_count']))
        allEmployee += Number(JSON.stringify(enterprises[i]['departments'][j]['employees_count']))
    }
    console.log(enterprises[i]['name'],"("+allEmployee+" сотрудников)")
    for (let j = 0; j < enterprises[i]['departments'].length; j++){
        console.log("-",enterprises[i]['departments'][j]['name'], "("+enterprises[i]['departments'][j]['employees_count']+" сотрудников)")
    }
  }

function getEnterpriseName(item){
    if (typeof(item) == 'number'){
        //console.log(typeof(item))
        for (let i = 0 ; i < enterprises.length; i++){
            for (let j = 0; j < enterprises[i]['departments'].length; j++){
                if (Number(enterprises[i]["departments"][j]['id'])==item){
                    console.log(enterprises[i]["name"])
                }
            }
        }
    } if (typeof(item)=='string'){
        //console.log(typeof(item))
        for (let i = 0 ; i < enterprises.length; i++){
            for (let j = 0; j < enterprises[i]['departments'].length; j++){
                if (enterprises[i]["departments"][j]['name']==item){
                    console.log(enterprises[i]["name"])
                }
            }
        }
    }
}
function addEnterprises(item){
    let enterpr = {id: null}
    
        
}