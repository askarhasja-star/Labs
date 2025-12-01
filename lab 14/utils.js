// Правильная функция — сумма массива
export function arraySum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Ошибка: неверное сравнение (num < max)
export function findMax(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num < max) {  
            max = num;
        }
    }
    return max;
}