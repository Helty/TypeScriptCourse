// 'use strict'

function foo(...args: number[]) {
    // @ts-ignore
    console.log('this: ', this)
    console.log('args: ', args)
}

foo(1, 2, 3)
    //this: undefined
    //args: [1, 2, 3]

const obj = {user: 'Jeck'}
const bar = foo.bind(obj, 1, 2, 3)
bar()
// this:  {user: "Jeck"}
// args:  (3) [1, 2, 3]
