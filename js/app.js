var numbers = [10, 200, 4, 28, 47, 9, 225];
console.log(numbers);

var index = 0;
while (index < numbers.length) {

    if (numbers[index] <= 9) {

        console.log(`before adding 00: number = ${numbers[index]} after adding 00: number = 00${numbers[index]}`);

        console.log(numbers[index] = '00' + numbers[index]);
    }
    else if (numbers[index] <= 99) {

        console.log(`befor adding 0: number = ${numbers[index]} after adding 0: number = 0${numbers[index]}`);

        console.log(numbers[index] = '0' + numbers[index]);
    }

    if (numbers[index] > 99) {

        console.log(`the numbers are greaterthan 99 no change`)

        console.log(numbers);
    }

    index += 1;
}