let inputFeild = document.getElementById('search-field');
let body = document.querySelector('body')
let article = document.createElement('article')
article.className = 'planet-article'

let input, data, planet, paragraph, found;

inputFeild.addEventListener('keyup', async (e) => {
    if (e.key === "Enter") {
        article.innerHTML = '';
        input = inputFeild.value;
        data = await getPlanet();
        planet = data.bodies
        console.log(planet)
        showPlanet(planet)

        //If the user types something that doesn't match planet name
        if (found === false) {
            alert('Planet not found! try again!')
        }
    }
})

function showPlanet(planets) {
    found = false
    planets.forEach(planet => {

        //Creates paragraph & button for each planet
        paragraph = document.createElement('p')
        let infoBtn = document.createElement('button')
        infoBtn.className = 'info-btn'
        paragraph.className = 'planet-paragraph'

        if (input == planet.name.toLowerCase()) {
            paragraph.innerText = planet.name
            infoBtn.innerText = "Go to planet"
            body.appendChild(article)
            article.appendChild(paragraph)
            article.appendChild(infoBtn)

            found = true
            console.log(planet)
        }

        //Local storage! Will take you to the info page when you press on the 'Go to planet' button.
        infoBtn.addEventListener('click', function () {
            window.localStorage.setItem('moreInfo', JSON.stringify(planet));
            location.href = "planet-info.html";
        })
    })
}

async function getPlanet() {
    //Creates a fetch 
    let url = 'https://fathomless-shelf-54969.herokuapp.com/bodies'
    try {
        let resp = await fetch(url, {
            method: 'GET',
            headers: {
                'x-zocom': 'solaris-tBCC15CdlDcqTJ4b'
            }
        })
        let data = await resp.json();
        return await data;
    } catch (error) {
        console.log(error)
        alert('ERROR! page not found')
    }
}