const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllData(data.slice(0, 3)))
}
const showAllData = countries =>{
    // console.log(countries)
    const countryContainer = document.getElementById('countries-info')
    countryContainer.innerHTML = ""
    countries.forEach(country => {
        // console.log(country)
        const {flags, name, capital, cca2} = country
 
        const countryDiv = document.createElement('div')
        
        countryDiv.innerHTML = `
        <img class="w-auto h-50 gap-2  " src="${flags.png}" alt="">    
        <h1>${name.common}</h1>
        <p>Capital: ${capital[0]}</p>
             
        <button onclick= "showDetails('${cca2}')" class="mb-2">Details</button>     
        `
        countryContainer.appendChild(countryDiv)
    });
}
const showDetails = (code)=>{
// console.log(code)
const url = `https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
}

const showAllDetails=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showAllData(data))
}
loadData()
