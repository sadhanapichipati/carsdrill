// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function problem5(inventory,carYear){
    const oldcar = [];
    for(let index = 0;index < carYear.length;index++)
{
    if(carYear[index] < 2000)
    {
        let allcar = carYear[index];
        oldcar.push(allcar)
    }
}
return oldcar;
}

module.exports = problem5;