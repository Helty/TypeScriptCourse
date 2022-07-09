function hello(name = "User") {
    console.log(`Hello, ${name}!`)
}

hello() // Hello, User!
hello(undefined) // Hello, User!
hello("Jack") // Hello, Jack!
hello("Peeter") // Hello, Peeter
