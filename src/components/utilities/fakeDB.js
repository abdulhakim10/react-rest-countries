// use local storage to manage marked country
const addToDb = cca3 => {

    let markedCountry = {};

    // get country
    const storedCountry = localStorage.getItem('marked-country');
    if(storedCountry){
        markedCountry = JSON.parse(storedCountry);
    }
    

    // add quantity
    const quantity = markedCountry[cca3];
    if(quantity){
        
        const newQuantity = quantity + 1;
        markedCountry[cca3] = newQuantity;
        // localStorage.setItem(cca3, newQuantity);
    }
    else{
        markedCountry[cca3] = 1;
        // localStorage.setItem(cca3, 1);
    }
    localStorage.setItem('marked-country', JSON.stringify(markedCountry));
}

const removedFromDb = cca3 => {
    const storedCountry = localStorage.getItem('marked-country');
    if(storedCountry){
        const markedCountry = JSON.parse(storedCountry);
        if(cca3 in markedCountry){
           delete markedCountry[cca3];
           localStorage.setItem('marked-country', JSON.stringify(markedCountry));
        }
    }
}

export {addToDb, removedFromDb}