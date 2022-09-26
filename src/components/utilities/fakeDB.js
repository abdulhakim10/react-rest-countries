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
        
        markedCountry[cca3] = quantity + 1;
        // localStorage.setItem(cca3, newQuantity);
    }
    else{
        markedCountry[cca3] = 1;
        // localStorage.setItem(cca3, 1);
    }
    localStorage.setItem('marked-country', JSON.stringify(markedCountry));
}

export {addToDb}