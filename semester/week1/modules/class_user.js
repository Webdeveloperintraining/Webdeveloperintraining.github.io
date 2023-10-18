// #3 We can export this class if we define before declaring the class
export default class User{
    contructor(name,age){
        this.name = name
        this.age = age
    }
}

export function printName(user){
    console.log(`User's name is ${user.name}`)
}

export function printAge(user){
    console.log(`User is ${user.age} years old`)
}

// #1 DEFAULT export option  define it at the end of the file

//export default User


// #2 NORMAL export option define it at the end of the file

//export { printName, PrintAge }

/*
NOTE:

YOU CAN ONLY DEFAULT EXPORT ONE THING

*/