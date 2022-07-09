const http = require('https')

function downloadImage(url: string) {
    return new Promise((resolve: Function, reject: Function) => {
        http.get(url, (response: any) => {
            const {statusCode} = response
            if (statusCode !== 200) {
                reject(statusCode)
            }

            resolve(url)
        }).on('error', (e: Error) => {
            reject(e)
        })
    })
}

const image1 = 'https://1dummyimage.com/100x100/000/fff'
const image2 = 'https://dummyimage.com/200x200/000/fff'
const image3 = 'https://dummyimage.com/300x300/000/fff'

const images: any = [];
downloadImage(image1)
    .then(image => {
        images.push(image)
        return downloadImage(image2)
    })
    .then(image => {
        images.push(image)
        return downloadImage(image3)
    })
    .then(image => {
        images.push(image)
    })
    .catch(err => {
        console.error(err)
    })
    .finally(() => {
        console.log(images)
    })
