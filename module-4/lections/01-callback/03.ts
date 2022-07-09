const http = require('https')

const image1 = 'https://dummyimage.com/100x100/000/fff'
const image2 = 'https://dummyimage.com/200x200/000/fff'
const image3 = 'https://dummyimage.com/300x300/000/fff'

http.get(image1, (response1: any) => {
    const {statusCode} = response1
    if (statusCode !== 200) {
        return;
    }

    http.get(image2, (response2: any) => {
        const {statusCode} = response2
        if (statusCode !== 200) {
            return;
        }

        http.get(image3, (response3: any) => {
            const {statusCode} = response3
            if (statusCode !== 200) {
                return;
            }

            console.log([response1.statusCode, response2.statusCode, response3.statusCode])
        })
    })
});
