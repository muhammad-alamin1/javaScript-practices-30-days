const changeInt = v =>{
    let result = Number.parseInt(v)
    if(!result){
        return 'Please Provide a value which is able to convert in integer')
                
    }
    
    return result
        
}

let result = changeInt('34.34423')
console.log(result)