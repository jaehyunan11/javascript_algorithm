for (let i = 0; i < 5; i++) {
    // some code
}

let i = 0
while (i < 5) {
    // some code
    i++
}

let runner = this.head
while (runner != null) {
    // Some code
    if (runner.val == value) {
        return true
    }
    runner = runner.next

}


length(){
    let runner = this.head
    let count = 0
    while (runner != null) {
        count++
        runner = runner.next
    }
    return count
}

class SLL {
    display() {
        let runner = this.head
        let str = ''
        while (runner != null) {
            str += runner.val + ""
            runner = runner.next
        }
        return str

    }
    // "8 7 3"
    // "873"

}





