// use local storage to manage marked country
const addToDb = cca3 => {
    const quantity = localStorage.getItem(cca3);
    if(quantity){
        
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(cca3, newQuantity);
    }
    else{
       
        localStorage.setItem(cca3, 1);
    }
}

export {addToDb}