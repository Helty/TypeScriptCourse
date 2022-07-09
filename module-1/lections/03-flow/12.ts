const size = 1
const unit: string = 'MB'
let sizeInByte = size
switch (unit) {
    case 'MB':
        sizeInByte *= 1024
    case 'KB':
        sizeInByte *= 1024
}
console.log(sizeInByte)
