var myName = 'Jernej';
var storage_inbook = {
    max: undefined,
    items: []
};
var storage = {
    max: undefined,
    items: Array()
};
Object.defineProperty(storage, 'max', { writable: false, value: 5000 });
var currentStorage;
function storageUsed() {
    if (currentStorage) {
        return currentStorage;
    }
    currentStorage = 0;
    for (var i = 0; i < storage.items.length; i++) {
        currentStorage += storage.items[i];
    }
    return currentStorage;
}
function add(item) {
    if (storage.max)
        if (storage.max - item.weight >= storageUsed()) {
            storage.items.push(item);
            currentStorage += item.weight;
        }
}
//# sourceMappingURL=test.js.map