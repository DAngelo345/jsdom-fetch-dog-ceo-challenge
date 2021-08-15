console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const main = document.getElementById('dog-breeds')
    let breedObj;

    getBreeds();

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(res => renderImg(res.message))
        
     function getBreeds() {
        fetch(breedUrl)
        .then(resp => resp.json())
             .then(res => {
                 breedObj = res.message
                 renderBreed(breedObj)
             })
    }

    function renderBreed(breeds) {
        const array = Object.keys(breeds)
        array.forEach(breed => {
            const name = document.createElement('li');
            name.innerText = breed;
            main.appendChild(name);
        });
    }
    
    function renderImg(images) {
        const main = document.getElementById('dog-image-container');
            images.forEach(image => {
                const img = document.createElement('img');
                img.height = 400
                img.width = 400
                    img.src = image;
                        main.appendChild(img);
            });
    }

    const ulId = document.getElementById('dog-breeds').addEventListener("click", function (e) {
        if (e.target.matches('li')) {
            e.target.style.color = 'red';
        }
    })

    const dropDown = document.getElementById('breed-dropdown');
    dropDown.addEventListener("change", (e) => {
        if (document.querySelectorAll('li').length < 95) {
           
            getBreeds()
        }
        const liS = document.querySelectorAll('li')
        const newMain = liS.forEach(li => {
            if (li.innerText[0].toLowerCase() === e.target.value.toLowerCase()) {
        
                main.appendChild(li);
            }
            else {
                li.remove()
            }     
    })
        // if (e.target.value == "a") {
        // }
        // else if (e.target.value == "b") {

        // }
        
    })
    // object.onchange = function(){myScript};
    // function selectBreed(letter) {

    //     if (letter.target.value == "a") {
    //         //only show dog breeds starting with the letter a
    //     }
    //     else if (letter.target.value == "b") {
    //         //only show dog breeds starting with the letter b
    //     }
    // }


        
  

});