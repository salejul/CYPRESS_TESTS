export default class DataGenerator {

    static generateID() {
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

        let charLength = characters.length

        for (let index = 0; index < charLength; index++) {
            result += characters.charAt(Math.floor(Math.random() * charLength))

        }

        return result
    }

    static generateEmail() {
        let values = 'abcdefgh123456789'
        let email = ''
        let temp

        for (let index = 0; index < 10; index++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp
        }

        temp = ''
        email += '@'

        for (let index = 0; index < 8; index++) {
            temp = values.charAt(Math.round(values.length * Math.random()))
            email += temp

        }

        email += '.com'

        return email

    }

    static generateNumbers() {
        let numbers = Math.floor(Math.random() * 90000000000) * 10000000000

        return numbers.toString()
    }

    static generateRandomName() {
        let names = ['Michael', 'John', 'Lucas', 'Santiago', 'Karen', 'Milan', 'Alexander', 'Steven', 'Anna', 'Susan']

        let randomName = names[Math.floor(Math.random() * names.length)];

        return randomName
    }
}

