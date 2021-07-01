function word_check(word) 
{
    if(word.length>6)
    {
        return "long";
    }
    else if((word.length<6))
    {
        return "short";
    }
    else if((word.length===6))
    {
        return "Medium";
    }
    
}
console.log(word_check("Apple"));