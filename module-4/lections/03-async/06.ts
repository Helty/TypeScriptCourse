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

function timerReject<T>(sec: number, rst: T): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(reject, sec * 1000, 'error')
    })
}

async function getUser() {
    console.log('start getUser')
    return await timer<CommentKeysType>(2, '1')
}


async function getComments(id: CommentKeysType) {
    console.log('start getComments')
    return await timerReject<string[]>(3, comments[id])
}

async function run() {
    try {
        const userId = await getUser()
        console.log(`User: ${userId}`)
        const comments = await getComments(userId)
        console.log(comments);
    } catch (e) {
        console.log(e)
    }
}

run()
