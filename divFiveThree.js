function  either_only(number)
{
    if (number%3===0 && number%5===0)
        {
            return false;
        }
        else if (number%3===0 || number%5===0)
        {
            return true;
        }
    
}
console.log( either_only(10));