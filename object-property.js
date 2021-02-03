const students = [
    {id: 32, name: 'omar'},
    {id: 33, name: 'aub bakar'},
    {id: 34, name: 'danial'},
    {id: 39, name: 'ahmad'},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>33);
const biggerOne = students.find(s => s.id>33);
console.log(biggerOne);
