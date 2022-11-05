const storage = {
    max: undefined,
    items: []
};
function add(item) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weight;
    }
    if (isDevelopment) {
        const itemCount = storage.items.length;
        console.log(`${itemCount} items`);
        console.log(`${currentStorage} kg total`);
    }
}
//# sourceMappingURL=test3.js.map