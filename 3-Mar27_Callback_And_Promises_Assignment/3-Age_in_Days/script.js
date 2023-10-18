

const ageInDays = (person, callback) => {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.ageInYears * 365;
    callback(fullName, ageInDays);
}
const printDetails = (name, age) => {
    console.log(`The person's full name is ${name} and their age in days is ${age}.`);
}

const person = { 
    firstName: "Harsh", 
    lastName: "Singhlay", 
    ageInYears: "20" 
}

ageInDays(person, printDetails)
