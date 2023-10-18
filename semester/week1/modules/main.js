import U, {printName as printUserName, printAge} from "./class_user.js"

let user = new U('Bob',11)
console.log(user)

printUserName(user)

printAge(user)