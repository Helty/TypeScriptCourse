import * as fs from 'fs';

const FILE_READ = 'file';
const currDir = __dirname + '/'

fs.readdir(currDir, function (err, files) {
    if (err) {
        console.error(err)
        return
    } else {
        files.forEach(function (filename) {
            if(filename === FILE_READ) {
                fs.readFile(currDir + filename, function (err, value) {
                    if (err) {
                        console.error(err)
                        return
                    }
                    console.log(value.toString())
                })
            }
        })
    }
})
