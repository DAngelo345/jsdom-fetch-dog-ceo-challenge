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
        breeds.forEach(breed => {
            const bre = document.createElement('li');
            bre.innerText = breed;
            main.appendChild(bre);
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
});