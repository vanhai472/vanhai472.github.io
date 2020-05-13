import Faker from "faker";

export let data = [];

for (let i = 0; i < 20; i++) {
  data.push({
    name: Faker.name.findName(),
    // number1: Math.floor(Math.random() * 1700) + 300,
    // number2: Math.floor(Math.random() * 1700) + 300,
    number1: 1,
    number2: 1,
  });
}
