// Дописать таблицу истинности для операции || и !(не) для a
{
    var a = false;
    var b = false;
    console.log("a\tb\ta&&b\ta||b\t!a");
    console.log(a + "\t" + b + "\t" + (a && b) + "\t" + (a || b) + "\t" + !a);
    a = false;
    b = true;
    console.log(a + "\t" + b + "\t" + (a && b) + "\t" + (a || b) + "\t" + !a);
    a = true;
    b = false;
    console.log(a + "\t" + b + "\t" + (a && b) + "\t" + (a || b) + "\t" + !a);
    a = true;
    b = true;
    console.log(a + "\t" + b + "\t" + (a && b) + "\t" + (a || b) + "\t" + !a);
}
