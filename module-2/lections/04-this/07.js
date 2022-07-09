
const user = {
    name: 'Jack',
    show: function() {
        const formatting = function () {
            console.log(this)
            console.log(this.name)
        }
        formatting()
    }
}

user.show() // зависит от режима
