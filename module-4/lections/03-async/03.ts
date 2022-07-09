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

function getUser() {
    console.log('start getUser')
    return timer<CommentKeysType>(2, '1')
}


function getComments(id: CommentKeysType) {
    console.log('start getComments')
    return timer<string[]>(3, comments[id])
}

getUser()
    .then((userId) => {
        return getComments(userId)
    })
    .then(comments => {
        console.log(comments);
    })
