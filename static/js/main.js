let elList = document.querySelector('.listData')
let elSearchForm = document.querySelector('.searchForm')
let elSearchInp = document.querySelector('.nav-item-search')
const fullData = movies.slice(1, 100)



function mapper(data) {
    elList.innerHTML = ''
    data.forEach((e, i) => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="move__card">
        <img src="https://i.ytimg.com/vi/${e.ytid}/hqdefault.jpg"
            alt="">
        <div class="move__card__inner">
            <span class="year_"> Year: ${e.movie_year}</span>
            <h3 class="title_">${e.Title.length > 15 ? e.Title.split('', 15).join(''): e.Title}</h3>
            <p class="cat_">${e.Categories}</p>
            <b class="rayt_">Rating: ${e.imdb_rating}</b>
            <li class="bi bi-bookmark bookm"></li>
            <a class="wtch_" href="https://www.youtube.com/watch?v=${e.ytid}" target="_blank">watch film</a>
        </div>
    </div>`
        elList.appendChild(newLi)
    })
}

mapper(fullData)

elSearchForm.addEventListener('keyup', (e) => {

    let serVal = elSearchInp.value
    const searchData = fullData.filter((e) => e.Title.toString().toLowerCase().includes(serVal.toLowerCase()) == true)
    mapper(searchData);
})


let elCategory = document.querySelector('.select__list')
let Category = []

fullData.forEach((a, i) => {
    if (Category.includes(a.Categories) != true) {

        Category.push(a.Categories)
    }

})

Category.forEach((f) => {
    let newOp = document.createElement('option')
    newOp.textContent = f
    elCategory.appendChild(newOp)
})

elCategory.addEventListener("change", (e) => {
    let cat = e.target.value
    const filCategory = fullData.filter((k) => k.Categories == cat)
    mapper(filCategory)
})


let elYear = document.querySelector('.years_')

let year = []

fullData.forEach((k) => {
    if (year.includes(k.movie_year) != true) {
        year.push(k.movie_year)
    }
})


year.forEach((g) => {
    let newListOp = document.createElement('option')
    newListOp.text = g
    elYear.appendChild(newListOp)
})


elYear.addEventListener("change", (e) => {
    let years = e.target.value
    const fillYear = fullData.filter((l) => l.movie_year == years)
    mapper(fillYear)
})



let elRating = document.querySelector('.rating')

elRating.addEventListener('change',(e)=>{
    if(e.target.value == "top"){
        const sortYear = fullData.sort((a,b)=> a.imdb_rating - b.imdb_rating).reverse()
        mapper(sortYear)
    }
    else if(e.target.value == "passive"){
        const sortYear = fullData.sort((a,b)=> a.imdb_rating - b.imdb_rating)
        mapper(sortYear)
    }
})


let Bookmark = document.querySelector('.bookmarks')







Bookmark.addEventListener('click',(e)=>{
    console.log('ok');
})

let bookOpen = document.querySelector('.bookmark__open')
let bookIcon = document.querySelector('.bookmarks')

bookIcon.addEventListener('click',(e)=>{
    bookOpen.style.display = "block"
})

let Cancel = document.querySelector('.cancel')

Cancel.addEventListener('click',(e)=>{
    bookOpen.style.display = "none"
})