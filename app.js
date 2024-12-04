//Pages
const firstPage = document.querySelector('.container')
const secondPage = document.querySelector('.infromationContainer')

//html element
const planetsName = document.querySelector('#planetsName')
const planetsLatinName = document.querySelector('#planetsLatinName')
const planetsDesc = document.querySelector('#planetsDesc')
const planetscircumference = document.querySelector('#circumference')
const planetsDistance = document.querySelector('#planetsDistance')
const planetsMaxTemp = document.querySelector('#planetsMaxTemp')
const planetsMinTemp = document.querySelector('#planetsMinTemp')
const planetsMoon = document.querySelector('.informationContainer__info__moons')
const planet = document.querySelector('#planet')



// hämta nyckel
const getApiKey = async (apiType , endPoint) => {
    const url = `https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/${endPoint}`
    const option = {
        method: apiType,
      }
    
    try{
        const {key} = await (await fetch( url , option )).json()
        const planets =  await getPlanetsInfo("GET" , "/bodies", key)
        return planets;
       
    } catch(err){
        console.log(err);
    }
}

//hämta data från servern
const getPlanetsInfo= async (apiType , endPoint , apiKey) => {
    const url = `https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/${endPoint}`
    const option = {
        method: apiType,
        headers: {'x-zocom': apiKey}
      }
    
    try{
        const planets = await (await fetch( url , option )).json()
        return planets;
    } catch(err){
        console.log(err);
    }

}

//displayData
const displayData= async (planetsNumber, planetsColor = "#788fa3") =>{
    try {
        
        const planets = await getApiKey("POST", "keys");

       
        if (!planets.bodies || !planets.bodies[planetsNumber]) {
            throw new Error(`Planet with index ${planetsNumber} does not exist.`);
        }

        const myPlanet = planets.bodies[planetsNumber];
        

        
        firstPage.style.display = "none";
        secondPage.style.display = "flex";

        planet.style.backgroundColor = planetsColor;
        planetsName.innerText = myPlanet.name;
        planetsLatinName.innerText = myPlanet.latinName;
        planetsDesc.innerText = myPlanet.desc;
        planetscircumference.innerText = myPlanet.circumference;
        planetsDistance.innerText = myPlanet.distance;
        planetsMaxTemp.innerText = myPlanet.temp.day;
        planetsMinTemp.innerText = myPlanet.temp.night;
        planetsMoon.innerHTML = `<h4>Månen</h4>`;
        if (!myPlanet.moons || myPlanet.moons.length === 0) {
            planetsMoon.innerHTML += `<span>Inget</span>`;
        } else {
            myPlanet.moons.forEach((moon) => {
                planetsMoon.innerHTML += `<span>${moon}, </span>`;
            });
        }
    } catch (error) {
        console.error("Error displaying planet data:", error);
    }
}


//Solen
const sun = document.querySelector(".container__sun")
sun.addEventListener('click' ,()=> displayData(0 , "gold"))

//mercury
const mercury = document.querySelector(".container__planets__mercury")
mercury.addEventListener('click' , ()=> displayData(1 , '#8c8b85'))


//venus
const venus = document.querySelector(".container__planets__venus")
venus.addEventListener('click' , ()=> displayData(2 , '#e7cdcc'))

//earth
const earth = document.querySelector(".container__planets__earth")
earth.addEventListener('click' , ()=> displayData(3 , '#3f91d2'))

//mars
const mars = document.querySelector(".container__planets__mars")
mars.addEventListener('click' , ()=> displayData(4 , '#ed5a5f'))

//jupiter
const jupiter = document.querySelector(".container__planets__jupiter")
jupiter.addEventListener('click' ,()=> displayData(5 , '#e2916a'))

//saturn
const saturn = document.querySelector(".container__planets__saturn")
saturn.addEventListener('click' , ()=> displayData(6 , '#c7a874'))

//uranus
const uranus = document.querySelector(".container__planets__uranus")
uranus.addEventListener('click' , ()=> displayData(7 , '#c7d2ed'))

//neptune
const neptune = document.querySelector(".container__planets__neptune")
neptune.addEventListener('click' , ()=> displayData(8 , '#788fa3'))

//closeBtn
const closeBtn= document.querySelector("#closeBtn")
closeBtn.addEventListener('click' , ()=>{
    firstPage.style.display = 'grid'
    secondPage.style.display = 'none'
})

//or
const closePlanet= document.querySelector(".infromationContainer__planet")
closePlanet.addEventListener('click' , ()=>{
    firstPage.style.display = 'grid'
    secondPage.style.display = 'none'
})

//stars
const container = document.querySelector('.infromationContainer__info');

for (let i = 0; i < 20; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * 90;
    const y = Math.random() * 90;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;

    container.appendChild(star);
}

const stars = document.querySelectorAll('.star');
closeBtn.addEventListener('mouseenter', () => {
    stars.forEach(star => {
        star.style.boxShadow = '0 0 2px 2px gold';
        star.style.transition= 'box-shadow 0.7s ease';
    });
});

closeBtn.addEventListener('mouseleave', () => {
    stars.forEach(star => {
        star.style.backgroundColor = 'white';
        star.style.boxShadow = '0 0 5px white';
        star.style.opacity = '.7';
        
    });
});