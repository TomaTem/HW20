let galaxyContent = "";
for (let i=60; i<100; i++) {
    fetch(`https://images-api.nasa.gov/asset/as11-40-58${i}?api_key=VunCARli3HIur1kGrdkunXWCxnK4CzhfXrsikoKH`)
    .then(response => response.json())
    .then(function(galaxies) {
        if (galaxies !== null) {
        galaxyContent += ` <div class="card"> 
        <img class="img" src="${galaxies.collection.items[2].href}">
        </div>`;
        document.querySelector('.gallery').innerHTML = galaxyContent;
    }})
    .catch(err => console.log(err))
}
