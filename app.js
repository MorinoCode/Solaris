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





//Solen
const sun = document.querySelector(".container__sun")
sun.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const sun = planets.bodies[0];
    console.log(sun);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = 'gold';
    planetsName.innerText= sun.name
    planetsLatinName.innerText= sun.latinName
    planetsDesc.innerText= sun.desc
    planetscircumference.innerText= sun.circumference
    planetsDistance.innerText= sun.distance
    planetsMaxTemp.innerText = sun.temp.day
    planetsMinTemp.innerText = sun.temp.night
    planetsMoon.innerHTML = `
    <h4>MÅNAR</h4>
    <p>Inget</p>`

})

//mercury
const mercury = document.querySelector(".container__planets__mercury")
mercury.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const mercury = planets.bodies[1];
    console.log(mercury);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#8c8b85';
    planetsName.innerText= mercury.name
    planetsLatinName.innerText= mercury.latinName
    planetsDesc.innerText= mercury.desc
    planetscircumference.innerText= mercury.circumference
    planetsDistance.innerText= mercury.distance
    planetsMaxTemp.innerText = mercury.temp.day
    planetsMinTemp.innerText = mercury.temp.night
    planetsMoon.innerHTML = `
    <h4>MÅNAR</h4>
    <p>Inget</p>`

})


//venus
const venus = document.querySelector(".container__planets__venus")
venus.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const venus = planets.bodies[2];
    console.log(venus);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#e7cdcc';
    planetsName.innerText= venus.name
    planetsLatinName.innerText= venus.latinName
    planetsDesc.innerText= venus.desc
    planetscircumference.innerText= venus.circumference
    planetsDistance.innerText= venus.distance
    planetsMaxTemp.innerText = venus.temp.day
    planetsMinTemp.innerText = venus.temp.night
    planetsMoon.innerHTML = `
    <h4>MÅNAR</h4>
    <p>Inget</p>`

})

//earth
const earth = document.querySelector(".container__planets__earth")
earth.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const earth = planets.bodies[3];
    console.log(earth);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#3f91d2';
    planetsName.innerText= earth.name
    planetsLatinName.innerText= earth.latinName
    planetsDesc.innerText= earth.desc
    planetscircumference.innerText= earth.circumference
    planetsDistance.innerText= earth.distance
    planetsMaxTemp.innerText = earth.temp.day
    planetsMinTemp.innerText = earth.temp.night
    planetsMoon.innerHTML = `<h4>Månen</h4>`
    if(planetsMoon.querySelectorAll('span').length === 0){
        earth.moons.forEach((moon) => {
            planetsMoon.innerHTML += moon? `<span>${moon} ,</span>`: `<span>Inget</span>`
        });
    }

})

//mars
const mars = document.querySelector(".container__planets__mars")
mars.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const mars = planets.bodies[4];
    console.log(mars);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#ed5a5f';
    planetsName.innerText= mars.name
    planetsLatinName.innerText= mars.latinName
    planetsDesc.innerText= mars.desc
    planetscircumference.innerText= mars.circumference
    planetsDistance.innerText= mars.distance
    planetsMaxTemp.innerText = mars.temp.day
    planetsMinTemp.innerText = mars.temp.night
    planetsMoon.innerHTML = `<h4>Månen</h4>`
    if(planetsMoon.querySelectorAll('span').length === 0){
        mars.moons.forEach((moon) => {
            planetsMoon.innerHTML += moon? `<span>${moon} ,</span>`: `<p>Inget</p>`
        });
    }

})

//jupiter
const jupiter = document.querySelector(".container__planets__jupiter")
jupiter.addEventListener('click' , async ()=>{
    
    const planets = await getApiKey("POST" , 'keys')
    const jupiter = planets.bodies[5];
    console.log(jupiter);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#e2916a';
    planetsName.innerText= jupiter.name
    planetsLatinName.innerText= jupiter.latinName
    planetsDesc.innerText= jupiter.desc
    planetscircumference.innerText= jupiter.circumference
    planetsDistance.innerText= jupiter.distance
    planetsMaxTemp.innerText = jupiter.temp.day
    planetsMinTemp.innerText = jupiter.temp.night
    planetsMoon.innerHTML = `<h4>Månen</h4>`
    if(planetsMoon.querySelectorAll('span').length === 0){
        jupiter.moons.forEach((moon) => {
            planetsMoon.innerHTML += moon? `<span>${moon} ,</span>`: `<p>Inget</p>`
        });
    }
    

})

//saturn
const saturn = document.querySelector(".container__planets__saturn")
saturn.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const saturn = planets.bodies[6];
    console.log(saturn);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#c7a874';
    planetsName.innerText= saturn.name
    planetsLatinName.innerText= saturn.latinName
    planetsDesc.innerText= saturn.desc
    planetscircumference.innerText= saturn.circumference
    planetsDistance.innerText= saturn.distance
    planetsMaxTemp.innerText = saturn.temp.day
    planetsMinTemp.innerText = saturn.temp.night
    planetsMoon.innerHTML = `<h4>Månen</h4>`
    if(planetsMoon.querySelectorAll('span').length === 0){
        saturn.moons.forEach((moon) => {
            planetsMoon.innerHTML += moon? `<span>${moon} ,</span>`: `<p>Inget</p>`
        });
    }

})

//uranus
const uranus = document.querySelector(".container__planets__uranus")
uranus.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const uranus = planets.bodies[7];
    console.log(uranus);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#c7d2ed';
    planetsName.innerText= uranus.name
    planetsLatinName.innerText= uranus.latinName
    planetsDesc.innerText= uranus.desc
    planetscircumference.innerText= uranus.circumference
    planetsDistance.innerText= uranus.distance
    planetsMaxTemp.innerText = uranus.temp.day
    planetsMinTemp.innerText = uranus.temp.night
    planetsMoon.innerHTML = `<h4>Månen</h4>`
    if(planetsMoon.querySelectorAll('span').length === 0){
        uranus.moons.forEach((moon) => {
            planetsMoon.innerHTML += moon? `<span>${moon} ,</span>`: `<p>Inget</p>`
        });
    }

})

//neptune
const neptune = document.querySelector(".container__planets__neptune")
neptune.addEventListener('click' , async ()=>{
    const planets = await getApiKey("POST" , 'keys')
    const neptune = planets.bodies[8];
    console.log(neptune);

    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'

    planet.style.backgroundColor = '#788fa3';
    planetsName.innerText= neptune.name
    planetsLatinName.innerText= neptune.latinName
    planetsDesc.innerText= neptune.desc
    planetscircumference.innerText= neptune.circumference
    planetsDistance.innerText= neptune.distance
    planetsMaxTemp.innerText = neptune.temp.day
    planetsMinTemp.innerText = neptune.temp.night
    planetsMoon.innerHTML = `<h4>Månen</h4>`
    if(planetsMoon.querySelectorAll('span').length === 0){
        neptune.moons.forEach((moon) => {
            planetsMoon.innerHTML += moon? `<span>${moon} ,</span>`: `<p>Inget</p>`
        });
    }

})

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