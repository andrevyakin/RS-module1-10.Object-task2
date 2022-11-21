//первый способ
const giveTalonsInOrder = (patients, orders) => {
    const arraySort = [];
    orders.forEach(id =>
        patients.forEach(name => {
            if (id === name.id)
                arraySort.push(name);
        })
    )
    return arraySort;
}

//Второй стособ
const giveTalonsInOrder2 = (patients, orders) => {
    return orders
        .map(order => patients
            .map(patient => order === patient.id ? patient : undefined)
            .filter(i => i !== undefined))
        .reduce((acc, el) => [...acc, ...el], []);

    //[] в reduce для защиты от ошибки, если orders передадут в функцию пустым.
}

const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
];

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
const result2 = giveTalonsInOrder2(people, ordersArr);
console.log("result2", result2);