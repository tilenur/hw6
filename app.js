// Создаем массив сотрудников
let employees = [
    { name: "Иван", age: 30, gender: "мужской", phone: { home: "123-45-67", mobile: "89012345678" } },
    { name: "Мария", age: 22, gender: "женский", phone: { home: "234-56-78", mobile: "89023456789" } },
    { name: "Петр", age: 28, gender: "мужской", phone: { home: "345-67-89", mobile: "89034567890" } },
    { name: "Анна", age: 24, gender: "женский", phone: { home: "456-78-90", mobile: "89045678901" } },
    { name: "Сергей", age: 35, gender: "мужской", phone: { home: "567-89-01", mobile: "89056789012" } }
];

// Добавляем нового сотрудника в конец массива
employees.push({
    name: "Ольга", age: 27, gender: "женский", phone: { home: "678-90-12", mobile: "89067890123" }
});

// Добавляем нового сотрудника в начало массива
employees.unshift({
    name: "Алексей", age: 32, gender: "мужской", phone: { home: "789-01-23", mobile: "89078901234" }
});

// Фильтруем сотрудников старше 25 лет
let olderThan25 = employees.filter(employee => employee.age > 25);

// Создаем новый массив с именами сотрудников
let employeeNames = employees.map(employee => employee.name);

// Выводим форматированные данные о сотрудниках в консоль
employees.forEach(employee => {
    console.log(`Имя: ${employee.name}, Возраст: ${employee.age}, Пол: ${employee.gender}, Домашний: ${employee.phone.home}, Сотовый: ${employee.phone.mobile}`);
});
