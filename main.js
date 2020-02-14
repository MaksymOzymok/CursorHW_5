const getRandomArray = (length, min, max) => {
    let a = [];
    for(let i = 0;i<length;i++){
        a.push(Math.floor(Math.random()*(max - min)));
    }
    return a;
};
console.log('Рандомний масив:');
console.log(getRandomArray(15, 1, 100));
const getModa = (...numbers) =>{
    let obj;
    let temp = numbers.filter(value => (parseFloat(value) - parseInt(value) === 0));
    let c = [], max = 0,newArr;
     newArr = temp.map(value => {
        let k = 0;
        for (let i = 0;i<numbers.length;i++) {
            if (value === temp[i])
                k++;
        }
        if(k>max)
            max = k;
        obj = {
            name: value,
            count: k
        };
        return obj;
    });
   let a = [];
    let d = newArr.forEach(value => {
        if(value.count===max && !a.includes(value.name))
            a.push(value.name);
    });
    return a;

};
console.log('Мода:');
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
const getAverage = (...numbers) => {
    let temp = numbers.filter(value => (parseFloat(value) - parseInt(value) === 0));
    return temp.reduce((acum, cur) => acum + cur, 0) / numbers.length;
};
console.log('Середнє арифметичне:');
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
const getMedian = (...numbers)=>{
    let temp = numbers.filter(value => (parseFloat(value) - parseInt(value) === 0));
    let k = temp.sort((a,b)=>a-b);
    if(k.length % 2 !== 0 ){
        return k[Math.round(k.length/2 - 1)];
    }else {
        return (k[k.length/2 - 1] + k[k.length/2])/2;
    }
};
console.log('Медіана:')
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
const filterEvenNumbers = (...numbers)=> {
    let temp = numbers.filter(value => (parseFloat(value) - parseInt(value) === 0));
     return temp.filter(value => value % 2 !== 0);

};
console.log('Фільтр парних чисел:');
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
const countNumbers = (...numbers)=>numbers.filter(value => value > 0).length;
console.log('Кількість елементів більших за нуль:');
console.log(countNumbers(1, -2, 3, -4, -5, 6));
const getDividedByFive = (...numbers)=>numbers.filter(value => value % 5===0);
console.log('Чисдаа які діляться на 5:');
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
const replaceBadWords = (str)=>{
    let badWords = ['shit','fuck','cool'];
    let temp = str.split(' '), i = 0;
    badWords.forEach(badWord => temp = temp.map(value =>
            value.replace(badWord, '*'.repeat(badWord.length))));
    return temp.join(' ');
};
console.log('Заміна поганих слів:');
console.log(replaceBadWords("Are you shit fucking kidding shit cool?"));
const divideByThree = (word) =>{
    let array = [], i = 3;
    do {
       array.push(word.slice(i-3, i));
        i+=3;
    }while (i<word.length+3);
    return array;
};
console.log('Розділення слів на склади:');
console.log(divideByThree("Commander"));

function generateCombinations(word) {
    let arr = [...word.split('')];
    let newArr = [];
    combinations(arr);
    function make(arr, el) {
        let i, i_m, item;
        const len = arr.length;
        let res = [];

        for (i = len; i >= 0; i--) {
            res.push(
                ([]).concat(
                    arr.slice(0, i),
                    [el],
                    arr.slice(i, i_m)
                )
            );
        }

        return res;
    }

    function combinations(arr) {
        let prev, curr, el, i;
        const len = arr.length;

        curr = [[arr[0]]];

        for (i = 1; i < len; i++) {
            el = arr[i];
            prev = curr;
            curr = [];

            prev.forEach(function (item) {
                curr = curr.concat(
                    make(item, el)
                );
            });
        }
        newArr.push(curr);
        return curr;
    }
    return newArr[0];
}
console.log('Генерація перестановок:');
console.log(generateCombinations('abcd'));