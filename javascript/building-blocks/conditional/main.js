// if (iceCreamVanOutside || houseStatus === 'on fire') {
//     console.log('You should leave the house quickly.');
//   } else {
//     console.log('Probably should just stay in then.');
//   }
// if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
//     console.log('Probably should just stay in then.');
//   } else {
//     console.log('You should leave the house quickly.');
//   }
// In the two above examples
// note how the positions of the console.logs have been switched 
// so in the second statement, if we weren't using the NOT operator ( ! ) then we would be staying in during a house fire or when the ice cream truck is outside, which would be crazy
// the NOT ! operator, the AND &&, and the OR || are very useful for use in if...else statements to test multiple conditions

// if (x === 5 || 7 || 10 || 20) {
//     // run my code
//   }
// In the above code this is a common mistaken use of the OR operator
// The statement always returns true because non-zero values are truthy, so || 7 is true
// We must specify complete tests on either side of the OR operator like below
if (x === 5 || x === 7 || x === 10 ||x === 20) {
    // run my code
  }

