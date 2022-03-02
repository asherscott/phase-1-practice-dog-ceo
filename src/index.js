// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(res => res.json())
.then(json => printImg(json.message))

function printImg(array) {
    const imgDiv = document.querySelector('div');
    
    array.forEach(image => {
        
        const img = document.createElement('img');
        img.src = image;
        imgDiv.append(img)

    });
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds;

fetch(breedUrl)
.then(res => res.json())
.then(json => {
    breeds = Object.keys(json.message)
    printBreed(breeds)
})



const ul = document.querySelector('ul');

function printBreed(breedObj) {

    for(const breed of breedObj) {
        const li = document.createElement('li');
        li.innerText = breed;
        ul.append(li)

        li.addEventListener('click', e => {
            const colorRainbow = ['red', 'orange', "yellow", "green", "blue", "purple"]
            li.style.color = colorRainbow[Math.floor(Math.random()*6)]
        })
    }
}

const dropdown = document.querySelector('select');

function filterBreed(breedObj, firstLet) {
    const filteredArray = breedObj.filter((ele) => ele[0] === firstLet)
    // console.log(breedObj)
    ul.innerHTML = '';
    printBreed(filteredArray)
}


dropdown.addEventListener('change', () => {
    filterBreed(breeds, dropdown.value);
})