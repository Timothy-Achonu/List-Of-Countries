const fetchCountries = async (url) => {
    let countriesData = await fetch(url)
    
    return countriesData.json()

}

fetchCountries('https://restcountries.com/v3.1/all')
.then( (data) => {
   
   const filteredCountries = data.filter( (countries) => {
       if(countries.name.common.startsWith('N')) {
          return countries
       }
   })
    const mappedCountries = filteredCountries
    .map( (countries) => countries.name.common)
   console.log(mappedCountries)

   filteredCountries.forEach( (country) => {
    let coatOfArmsImg = document.createElement('img');
    let countryName = document.createElement('div');
    document.body.appendChild(countryName);
    document.body.appendChild(coatOfArmsImg);

    countryName.innerText = country.name.common;
    countryName.style.marginTop = '40px';
    coatOfArmsImg.src = country.coatOfArms.png;
    coatOfArmsImg.style.width = '200px';
    coatOfArmsImg.style.height = '200px';
    coatOfArmsImg.style.marginTop = '20px';


   })
})
.catch( (err) => console.log(err) );





// let myArray = [
//     {name: {"common": "Nigeria"}}
// ]
// console.log(myArray[0].name.common)




// const myObj = {
//     1: ["homw",2,2,"hw",3,"hks"],
//     3:{"omw": 1, 3: 'go'} ,
//     2: "how",
// }
// console.log(myObj[3][3])





const getTodos = async (url) => {
  let danTodos =  await fetch(url);


  console.log(danTodos.status)
  if(danTodos.status !== 200) {
    throw new Error('there was an error somewhere')
  }

  let danTodosResponse  = await danTodos.json()
  return danTodosResponse 
  
 
  console.log(danTodosResponse);
}
// getTodos()
// getTodos('../Promises/danTodoss.json')
// .then( (data) => {
//   console.log(data)
// }) 
// .catch( (err) => {
//     console.log('rejected:', err)
// })