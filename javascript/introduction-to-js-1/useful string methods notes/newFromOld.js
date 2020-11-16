// Extract the three-letter station code and store it in a new variable.
// Find the character index number of the semicolon. I thought the parameters were (0,2) but then the slice occured before the 3rd (final) letter of the station code
// Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
// Concatenate the two new variables and a string literal to make the final string. I used a template literal to concatenate.
// Change the value of the result variable to equal to the final string, not the input.

const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here   
  let stationCode = input.slice(0,3);
  let semiC = input.indexOf(';')
  let stationName = input.slice( semiC + 1);
  let finalResult = `${stationCode}: ${stationName}`;
  let result = finalResult;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
