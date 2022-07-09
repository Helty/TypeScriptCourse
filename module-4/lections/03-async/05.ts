function connectToDb() {
    // throw new Error('not connect to DB')
}

function getCurrentUser() {
    throw new Error('table not found')
}

try {
    connectToDb()
    getCurrentUser()
} catch (e) {
    console.log('Не могу подключится к DB')
} finally {
    console.log('Очистка ресурсов')
}
