const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; //return index of the found element
        }
    }
    return -1; // return -1 if the element is not found
}

const numbers = [2, 5, 7, 10, 14];
console.log(linearSearch(numbers, 10)) // Output: 3