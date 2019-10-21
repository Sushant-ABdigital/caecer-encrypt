//Coded while pair programming with @cmastel.

const encrypt = function(plaintext, key) {
  // IMPLEMENT ME
  //Base string to get letter indexes.
  const alphaStr = "abcdefghijklmnopqrstuvwxyz";
  //output starts at an empty string
  let newStr = "";
  //Looping through the input string
  for (let p of plaintext) {
    //Check if it is a space, then ignore rest function and add space to new string
    if (p === " ") {
      newStr += " ";
    } else {
      //Getting the index from base string
      let index = alphaStr.indexOf(p.toLowerCase());
      //Determinig the new index
      let newIndex = index + key;
      //Adjustement if new index is outside of base string
      if (newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      //Update new string with shifted letter.
      newStr += alphaStr[newIndex];
    }
  }
  return newStr;
};

module.exports = { encrypt };
