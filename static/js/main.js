let elList = document.querySelector('.listData')
let elSearchForm= document.querySelector('.searchForm')
let elSearchInp= document.querySelector('.searchInp')
const fullData = movies



function mapper(data){
    data.forEach((e,i)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="move__card">
        <img src="https://i.ytimg.com/vi/${e.ytid}/hqdefault.jpg"
            alt="">
        <div class="move__card__inner">
            <span>${e.movie_year}</span>
            <h3>${e.Title.length > 15 ? e.Title.split('', 15).join(''): e.Title}</h3>
            <p>${e.Categories}</p>
            <b>${e.imdb_rating}</b>
            <a href="https://www.youtube.com/watch?v=${e.ytid}" target="_blank">watch film</a>
        </div>
    </div>`
        elList.appendChild(newLi)
    })
}

mapper(fullData)

elSearchForm.addEventListener('submit', (e)=>{
    elList.innerHTML = ''
    e.preventDefault()
    let serVal = elSearchInp.value
    const searchData = fullData.filter((e)=> e.Title.toString().toLowerCase().includes(serVal.toLowerCase()) == true)
    mapper(searchData);
})