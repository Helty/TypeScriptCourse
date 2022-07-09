function foo(...args: number[]) {
    // @ts-ignore
    console.log('this: ', this)
    console.log('args: ', args)
}

foo.call({user: 'Jeck'}, 1, 2, 3)
