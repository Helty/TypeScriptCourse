const user = {
    name: 'Jack',
    show: function() {
        const self = this;
        const formatting = function () {
            console.log(self.name)
        }
        formatting()
    }
}

user.show()  //Jack
