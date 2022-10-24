//@ts-check
var myName = 'Jernej';
var storage_inbook = {
    max: undefined,
    //items: []
    items: []
    //const result : string[] = [];
};
// type ar = any[];
var storage = {
    max: undefined,
    //items: [],
    items: Array()
};
//Object.defineProperty(storage, 'max', { readonly : true, val: 5000 })
//Object.defineProperty(storage, 'max', { writable : false, value: 5000 })
Object.defineProperty(storage, 'max', { writable: false, value: 5000 });
// this should be currentStorage = undefined
// let currentStorage = 'undefined' // NE DELA
// let currentStorage:number // = undefined // DELA !
//let currentStorage = undefined // DELA !
var currentStorage;
function storageUsed() {
    if (currentStorage) {
        return currentStorage;
    }
    //currentStorage = 0 // dela ce prej definiramo tip
    currentStorage = 0;
    //for(let i = 0; i < storage.length(); i++) {
    for (var i = 0; i < storage.items.length; i++) {
        //currentStorage += storage.items[i].weight
        currentStorage += storage.items[i]; //.weight
    }
    return currentStorage;
}
/**
* @ param {StorageItem} item
*/
//function add(item) 
function add(item) {
    //if(storage.max - item.weight >= storageUsed) 
    if (storage.max) // Se izogne is possibly undefined
        if (storage.max - item.weight >= storageUsed()) {
            //storage.items.add(item)
            storage.items.push(item);
            currentStorage += item.weight;
            //currentStorage += item.weight
        }
}
/**
* To je JSDoc orodje ki definira tipe IN naredi html dokumentacijo
* Adding two numbers. This annotation tells TypeScript
* which types to expect. Two parameters (params) of
* type number and a return type of number
*
* @ param {number} numberOne
* @ param {number} numberTwo
* @ returns {number}
*/
