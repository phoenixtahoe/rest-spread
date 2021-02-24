const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (array, ...values) => {[...array, ...values.map((val) => val * 2)]}

const removeRandom = (items) => {
    let randomIndex = Math.floor(Math.random() * items.length)
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
}

const extend = (array1, array2) => [...array1, ...array2]

const addKeyVal = (obj, key, val) => { return { ...obj, [key]: val } } 

const removeKey = (obj, key) => { return {...obj.splice(key)} }

const combine = (obj1, obj2) => { return {...obj1, ...obj2} }

const update = (obj, key, val) => { return { ...obj, [key]: val } } 