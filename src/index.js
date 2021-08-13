console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function() {
  
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(res => renderImg(res.message))
    
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(res => renderBreed(res.message))
    
    function renderBreed(breeds) {
        const main = document.getElementById('dog-breeds')
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

    function selectBreed(letter) {

        if (letter.target.value == "a") {
            //only show dog breeds starting with the letter a
        }
        else if (letter.target.value == "b") {
            //only show dog breeds starting with the letter b
        }

    }


        
  

});