// Дописать таблицу истинности для операции || и !(не) для a
{
    let a = false
    let b = false
    console.log(`a\tb\ta&&b\ta||b\t!a`)
    console.log(`${a}\t${b}\t${a && b}`)
    a = false
    b = true
    console.log(`${a}\t${b}\t${a && b}`)
    a = true
    b = false
    console.log(`${a}\t${b}\t${a && b}`)
    a = true
    b = true
    console.log(`${a}\t${b}\t${a && b}`)
}
