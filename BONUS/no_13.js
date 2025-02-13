function strictEqualityCheck(a, b){
    if (a===b){
        return "The values are strictly equal" }
   
    else{
        let type1 = typeof a
        let type2 = typeof b

        if (type1 !== type2){
            return "The values are not equal because they are of different types: ${type1} and ${type2}";   
        }
        else{
            return "The values are not equal but are of the same type:  ${type1}.";
        }  
}
}
console.log(strictEqualityCheck(5, "5"));
