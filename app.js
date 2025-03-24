let employees = [
  {
    name: "Иван",
    age: 30,
    gender: "мужской",
    phone: {
      home: "123-45-67",
      mobile: "89012345678"
    }
  },
  {
    name: "Мария",
    age: 25,
    gender: "женский",
    phone: {
      home: "234-56-78",
      mobile: "89123456789"
    }
  },
  {
    name: "Алексей",
    age: 28,
    gender: "мужской",
    phone: {
      home: "345-67-89",
      mobile: "89234567890"
    }
  }
];

// Добавляем нового сотрудника
employees.push({
  name: "Елена",
  age: 22,
  gender: "женский",
  phone: {
    home: "456-78-90",
    mobile: "89345678901"
  }
});

// Фильтрация сотрудников старше 18 лет
let adults = employees.filter(employee => employee.age > 18)
                      .map(employee => ({
                        ...employee,
                        olderThan18: employee.age - 18
                      }));

// Создание массива с именами сотрудников
let employeeNames = employees.map(employee => employee.name);

// Вывод данных сотрудников в формате
employees.forEach(employee => {
  console.log(`Имя: ${employee.name}, Возраст: ${employee.age}, Пол: ${employee.gender}, ` +
              `Домашний: ${employee.phone.home}, Сотовый: ${employee.phone.mobile}`);
});

// Вывод сотрудников старше 18 лет и на сколько лет старше
console.log("Сотрудники старше 18 лет:");
adults.forEach(employee => {
  console.log(`${employee.name} старше 18 лет на ${employee.olderThan18} лет`);
});
