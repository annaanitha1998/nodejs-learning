interface User {
    name: string,
    age: number,
    occupation: string,
    calculateSalary: () => number
}

let user: User = {
    name: 'Anitha',
    age: 25,
    occupation: 'Software Engineer',
    calculateSalary: () => {
        return 17000
    }
}

enum Month {
    Jan,
    Feb,
    Mar,
    Apr, 
    May,
    Jun, 
    Jul,
    Aug,
    Sept,
    Oct,
    Nov,
    Dec
}

console.log(Month.Apr)

//Single Responsiblity principle

class fileManager {
    readFile(file: string) {

    }

    writeFile(file: string) {
        
    }

    encrptFile(file: string) {

    }

    compressFile(file: string) {

    }
}

class fileReader {}
class fileWriter {}
class fileEncrypter {}
class fileCompressor {}


//Open Closed Principle

class Vehicle {
    fuelCapacity: any
    fuelLevel: any

    constructor(fuelCapacity, fuelLevel) {
        this.fuelCapacity = fuelCapacity
        this.fuelLevel = fuelLevel
    }

    getRange() {
        return this.fuelCapacity * this.fuelLevel
    }
}

class HybridVehicle extends Vehicle{
    electricCapacity: any

    getRange(): number {
        return this.fuelCapacity + this.electricCapacity * this.fuelLevel 
    }
}

//Dependency Inversion Prinnciple

interface DataRepository {
    save(data)
}

class UserService implements DataRepository {
    save(userData: any) {
        throw new Error("Method not implemented.")
    }
}

class dataService implements DataRepository {
    save(data: any) {
        throw new Error("Method not implemented.")
    }
}
