// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (let i = 0; i <= 7; i++) {
    let sum = '#';
    for (let x = 1; x <= i; x++){
        sum += '#';
    }
    console.log(sum);
}