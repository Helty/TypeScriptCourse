const user = {
    name: 'Jack',
    show: function() {
        const formatting = () => {
            console.log(this.name)
        }
        formatting()
    }
}

user.show() //Jack
