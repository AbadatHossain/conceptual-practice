const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => showData(data.slice(0, 10)))
}
const showData = data =>{
    console.log(data)
    data.forEach(singleData => {
        console.log(singleData)
        const container = document.getElementById('post-info')
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${singleData.title}</h1>
        `
        container.appendChild(div)
        
    });
}
loadData()