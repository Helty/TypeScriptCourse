const user = {
    name: 'Jack',
    age: undefined
}
let key: keyof typeof user
for (key in user) {
    console.log(key, user[key])
}

console.log(Object.keys(user));
console.log(Object.values(user));
