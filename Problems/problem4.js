// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. 
// -Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function problem4(inventory)
{
    const carYear = [];
    for(let index = 0; index < inventory.length; index++)
    {
        carYear.push(inventory[i].car_year)
    }
    return carYear;
}

module.exports = problem4;