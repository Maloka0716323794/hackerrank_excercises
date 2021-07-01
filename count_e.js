function count_e(word)
{
    //return (word.match(/e/g) || []).length;
     return word.split("e").length-1;
}
console.log(count_e("concrete"));