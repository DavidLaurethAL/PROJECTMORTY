// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const urlBase = 'https://rickandmortyapi.com/api/'
const page = 3

const loadCharacters = async() => {
    const res = await fetch(`${urlBase}/character?page=${page}`) 
    const data = await res.json();
    const limitdata = data.results.slice(0,6)
    return {results: limitdata}
};

const loadLocations = async() => {
    const res = await fetch(`${urlBase}/location`) 
    return await res.json()
};

const loadEpisodes = async() => {
    const res = await fetch(`${urlBase}/episode`) 
    return await res.json()
};

const loadalllwithpromisseall = async () => {
    const [characters, locations, episode] = await Promise.all([
        loadCharacters(),
        loadLocations(),
        loadEpisodes() 
    ])
    loadalllwithpromisseall(characters)
    loadalllwithpromisseall(locations)
    loadalllwithpromisseall(episode)
    // console.log('Character: ', characters.results)
    // console.log('Location: ', locations.results)
    // console.log('Episode: ', episode.results)
}
loadalllwithpromisseall()

function showcharacter(characters){
    const charactercontainer = document.getElementById
    ('character-container')
    characters.map((character)=>{
        console.log(character)
        const divCharacter = document.createElement('div')
        divCharacter.id=`character-${character.id}`
        divCharacter.innerHTML=`
            <img id="img-character" src= "${character.image}" alt="imagem do personagem">
        <article class="character-info">
            <h3>${character.name}</h3>
            <span>${character.status} - ${character.species}</span>

            <span class="location">Location</span>
            <a href="${character.location.url}">${character.location.name}</a>

            <span class="origin">Origin</span>
            <a href="${character.origin.url}">${character.origin.name}</a>
        </article>
        `;
        divCharacter.classList.add('character-box')
        charactercontainer.appendChild(divCharacter)
        divCharacter.addEventListener('click', ()=>{
        console.log(character.id)
        })
    })
}

function characterDetails(id){
    console.log(id)
}