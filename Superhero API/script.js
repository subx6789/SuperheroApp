const heroImageDiv = document.getElementById('heroImage')
const searchBtn = document.getElementById('searchBtn')
const inputText = document.getElementById('searchInput')

const getRandomSuperHero = (id) => {
  fetch(`https://superheroapi.com/api.php/107511878806858/${id}`)
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      const name = `<h2>${json.name}</h2>`
      const stats = getStatsHTML(json)
      heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" width=300 height=300/>${stats}`
    })
}
const getStatsHTML = (character) => {
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  })
  return stats.join('')
}
const getNewHeroBtn = document.getElementById('getNewHero')
const randomHero = () => {
  const randomhero = Math.ceil(Math.random() * 731)
  return randomhero
}
const getSearchSuperHero = (name) => {
  fetch(`https://superheroapi.com/api.php/107511878806858/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      const name = `<h2>${hero.name}</h2>`
      const stats = getStatsHTML(hero)
      heroImageDiv.innerHTML = `${name}<img src="${hero.image.url}" width=300 height=300/>${stats}`
    })
}
getNewHeroBtn.onclick = () => getRandomSuperHero(randomHero())
searchBtn.onclick = () => getSearchSuperHero(inputText.value)