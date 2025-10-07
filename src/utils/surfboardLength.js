
export const surfboardLength = [];

for (let feet = 5; feet <= 9; feet++) {
  for (let inches = 0; inches <= 11; inches++) {

    surfboardLength.push({ label: `${feet}'${inches}`, inches: feet * 12 + inches });
  }
}
