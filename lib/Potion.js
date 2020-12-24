function Potion(name) {
    this.name = name;

    if(name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30)
    } else {
        this.value = Math.floor(Math.random() * 5 + 7)
    }
}

module.exports = Potion