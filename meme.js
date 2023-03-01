const loadMeme = () =>{
    fetch("https://meme-api.com/gimme/20")
    .then(res => res.json())
    .then(data => showMeme(data.memes))
}
const showMeme = memes =>{
    // console.log(memes)
    memes.forEach(meme => {
        console.log(meme)
const memeContsiner = document.getElementById('meme-info')
const memeDiv = document.createElement('div')
memeDiv.innerHTML = `
<img class="meme-img" src="${meme.url}" alt="">
`
        
 memeContsiner.appendChild(memeDiv)       
    });
}

loadMeme()