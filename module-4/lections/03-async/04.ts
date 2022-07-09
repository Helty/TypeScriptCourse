const comments = {
    '1': ['comment user 1', 'comment user 1'],
    '2': ['comment user 2', 'comment user 2'],
}

type CommentKeysType = keyof typeof comments

function timer<T>(sec: number, rst: T): Promise<T> {
    return new Promise(resolve => {
        setTimeout(resolve, sec * 1000, rst)
    })
}

async function getUser() {
    console.log('start getUser')
    return await timer<CommentKeysType>(2, '1')
}


async function getComments(id: CommentKeysType) {
    console.log('start getComments')
    return await timer<string[]>(3, comments[id])
}

async function run() {
    const userId = await getUser();
    const comments = await getComments(userId);
    console.log(comments);
}

run()
