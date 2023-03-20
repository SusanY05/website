const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const res = await fetch('https://icanhazdadkole.com',  {
        headers: {Accept: 'application/json',},
    })

    const data = await res.json()
    jokeEl.innerHTML = data.joke
}