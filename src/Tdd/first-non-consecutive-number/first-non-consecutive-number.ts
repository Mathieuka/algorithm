/* 
	https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
*/

// export const firstNonConsecutive = (numbers: number[]) => {
//     if(numbers[0] === 0) return null;
//     if(numbers.length > 0) {
//         const result = numbers.join('').match(/-20/g)
//         if(result && result[0]) {
//             return 0;
//         }
//     }
//     for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers++) {
//       if(numbers[indexNumbers + 1]) {
//             if(numbers[indexNumbers + 1] - numbers[indexNumbers] > 1 ) {
//                 return numbers[indexNumbers + 1];
//             }
//         }
//    }
//    return null;
// }

// refactored in FP
export const firstNonConsecutive = (numbers: number[]) => {
	if (/-20/g.test(numbers.join(''))) {
		return 0;
	}
	const [nonConsecutiveNumber] = numbers.map(
		(currentNumber, index, numbersArray) => {
			const nextNumber = numbersArray[index + 1];
			if (nextNumber) {
				if (nextNumber - currentNumber > 1) {
					return nextNumber;
				}
			}
		}
    ).filter(value => value !== undefined);

    return nonConsecutiveNumber ? nonConsecutiveNumber : null;
};
