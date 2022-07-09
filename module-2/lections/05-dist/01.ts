const numbers = [1, 2, 3]

{
    const [one, two, three] = numbers
    console.log(one, two, three)
}

{
    const [one, ,three] = numbers
    console.log(one, three)
}



const user = {
    name: 'Jeck',
    age: 42,
}

{
    const {name, age} = user
    console.log(name, age)
}

{
    const {name} = user
    console.log(name)
}



function show({name, age}: {name:string, age: number}, count: number) {
    console.log(name,age, count)
}

show(user, 24)
