//@ts-check

/** @typedef { import('./test2.types.d').ShipStorage }
ShipStorage */

/** @typedef { import('./test2.types.d').StorageItem }
StorageItem */

type StorageItem = {
    weight: number
    }

type ShipStorage = {
    max: number,
    items: StorageItem[]
}
