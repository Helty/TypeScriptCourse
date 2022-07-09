const defaultName = "User";

function hello(name = '') {
    const currentName = name ? name : defaultName
    return `Hello, ${currentName}`
}

console.log(hello())
console.log(hello('42'))
