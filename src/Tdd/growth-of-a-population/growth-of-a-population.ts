/* 
    https://www.codewars.com/kata/563b662a59afc2b5120000c6
*/

// export const nbYear = (
// 	basePopulation: number,
// 	percentage: number,
// 	populationVariation: number,
// 	objective: number
// ) => {
    // let year = 0;
    // let augmentation;
    // if(objective === 0) return 0;
    // while (basePopulation <= objective) {
    //     year = year + 1;
    //     augmentation = (percentage * basePopulation / 100) + populationVariation ;
    //     basePopulation = basePopulation + augmentation
    // }
	// return year;
// };
 

// refactored
export const nbYear = (
	basePopulation: number,
	percentage: number,
	populationVariation: number,
	objective: number
) => {
    let year = 0;
    if(objective === 0) return 0;
    while (basePopulation < objective) {
        year += 1;
        basePopulation += (percentage * basePopulation / 100) + populationVariation ;
    }
      return year;
};
