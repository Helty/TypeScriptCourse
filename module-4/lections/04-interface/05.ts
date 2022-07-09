function showUser(user: {name: string, age: number}) {
    const {name, age} = user;
    console.log(`Name: ${name}, age: ${age}`)

}

const user = {
    name: 'Jack',
    age: 18,
}

showUser(user);
