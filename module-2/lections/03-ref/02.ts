type User = {
    name: string
    age: number
    role?: string
}
function update(user: User, role: string) {
    user.name = 'Peeter'
    user.role = role
    role = ''
}

const currentUser: User = {
    name: 'Jeck',
    age: 42,
}

const newRole = 'owner'
update(currentUser, newRole)
console.log(currentUser) //{name: "Peeter", age: 42, role: "owner"}
console.log(newRole) // owner
