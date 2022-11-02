//@ts-check

const myName2 = 'Jernej'

const person = {
    firstName: 'Stefan',
    lastName: 'Baumgartner',
    age: 38
}

    type Person = {
    firstName: string,
    lastName: string,
    age: number
}    
/**
* Adding two numbers. This annotation tells TypeScript
* which types to expect. Two parameters (params) of
* type number and a return type of number
*
* @param {number} numberOne
* @param {number} numberTwo
* @returns {number}
*/
function addNumbers(numberOne:number, numberTwo:number) {
    return numberOne + numberTwo
    }

