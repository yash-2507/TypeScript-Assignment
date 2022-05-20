type User = {
    id: number;
    name: string;
    age: number;
    salary: number;
}

let userArr: User[] = [{
    "id": 1,
    "name": "Jacquie Zimmermanns",
    "age": 24,
    "salary": 29363
  }, {
    "id": 2,
    "name": "Justinn Pengilly",
    "age": 35,
    "salary": 26531
  }, {
    "id": 3,
    "name": "Simmonds Simoneau",
    "age": 44,
    "salary": 22851
  }, {
    "id": 4,
    "name": "Mehetabel O'Brogane",
    "age": 26,
    "salary": 24921
  }, {
    "id": 5,
    "name": "Bary McAuley",
    "age": 24,
    "salary": 20024
  }, {
    "id": 6,
    "name": "Cindi Maughan",
    "age": 50,
    "salary": 26863
  }, {
    "id": 7,
    "name": "Rebbecca Antoniutti",
    "age": 32,
    "salary": 25733
  }, {
    "id": 8,
    "name": "Daisi Stit",
    "age": 47,
    "salary": 28412
  }, {
    "id": 9,
    "name": "Orelia Rosten",
    "age": 37,
    "salary": 22911
  }, {
    "id": 10,
    "name": "Shalom Prester",
    "age": 46,
    "salary": 25610
  }]

  // Practicing to apply different sort functions....
  const sort = (userArr: User[]) => {
      userArr.sort((a: User,b: User) => {
        return a.salary - b.salary
      })
  }

  let newArr = sort(userArr);
  console.log('newArr: ', newArr);
