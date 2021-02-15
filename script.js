const joke = document.getElementById("jokes");
const button = document.getElementById("jokeBtn");

button.addEventListener("click", generateJoke)

generateJoke()

async function generateJoke(){

       const request = await fetch('https://icanhazdadjoke.com',{
            headers: {
                Accept: 'application/json',
            }
        })
        const data = await request.json()
        joke.innerHTML = data.joke

       
}

// function generateJoke(){

//     fetch('https://icanhazdadjoke.com',{
//         headers: {
//             Accept: 'application/json',
//         }
//     })
//     .then((res) => res.json() )
//     .then((data) => {
//         joke.innerHTML = data.joke
//     })
// }


 // const config = {
    //     headers: {
    //         Accept: ''
    //     }
    // }