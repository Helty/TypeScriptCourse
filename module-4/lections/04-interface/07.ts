function showUser(user: {name?: string, age: number}) {
    const {name, age} = user;
    console.log(`Name length: ${name.length}`)
    console.log(`Name: ${name}, age: ${age}`)

}

const user = {
    age: 18,
}

showUser(user);
