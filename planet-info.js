let planet = window.localStorage.getItem('moreInfo')
planet = JSON.parse(planet)

let body = document.querySelector('body')

let homeBtn = document.getElementById('home-btn')
let moons = document.getElementById('mons')

//returns to home page
homeBtn.addEventListener('click', function () {
    location.href = 'index.html'
})

//button for pagination
let next = document.createElement('button')
next.innerText = "Next list"
next.className = 'next-btn'

//button for pagination
let previous = document.createElement('button')
previous.innerText = "Previous list"
previous.className = 'next-btn'


//apply info for the planet
let h1 = document.getElementById('name')
h1.innerText = planet.name;

let h3 = document.getElementById('latin-name')
h3.innerText = planet.latinName;

let info = document.getElementById('info')
info.innerText = planet.desc;

let circumference = document.getElementById('Circumference')
circumference.innerText = planet.circumference;

let dayTemp = document.getElementById('Day-temp')
dayTemp.innerText = planet.temp.day;

let kmSun = document.getElementById('km-from-sun')
kmSun.innerText = planet.distance;

let nightTemp = document.getElementById('Night-temp')
nightTemp.innerText = planet.temp.night;

let mons = document.getElementById('moons')


// pagination is here
if ('Saturnus') {
    Saturnus.style.display = "block"
    let firstList = planet.moons.slice(0, 15)
    mons.innerText = firstList;
    body.appendChild(next)

    next.addEventListener('click', function () {
        let secondList = planet.moons.slice(15, 31)
        mons.innerText = secondList;
        body.removeChild(next)
        body.appendChild(previous)
    })
    previous.addEventListener('click', function () {
        mons.innerText = firstList
        body.appendChild(next)
        body.removeChild(previous)
    })
}




























// let article = document.querySelector('article')
// body.appendChild(article)


// if (h1 == 'Jorden') {
//     Jorden.style.display = "block"
//     mons.innerText = planet.moons;
// }
// if (h1 == 'Solen') {
//     Solen.style.display = "block"
//     moons.style.display = "none"
// }
// if (h1 == 'Mars') {
//     Mars.style.display = "block"
//     mons.innerText = planet.moons;
// }
// if (h1 == 'Uranus') {
//     Uranus.style.display = "block"
//     mons.innerText = planet.moons;
// }
// if (h1 == 'Venus') {
//     Venus.style.display = "block"
//     moons.style.display = "none"
// }
// if (h1 == 'Neptunus') {
//     Neptunus.style.display = "block"
//     mons.innerText = planet.moons;
// }
// if (h1 == 'Merkurius') {
//     Merkurius.style.display = "block"
//     moons.style.display = "none"
// }
// if (h1 == 'Jupiter') {
//     Jupiter.style.display = "block"
//     mons.innerText = planet.moons;
// }