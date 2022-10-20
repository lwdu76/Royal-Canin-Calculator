
var slidersBtnLeft = document.querySelectorAll('.slider-btn-left');
var slidersBtnRight = document.querySelectorAll('.slider-btn-right');
var sliderPages = document.querySelectorAll('.slider-page');
var page = 1;
var nbPagesSlide = sliderPages.length;
var selectAnimal = '';

document.querySelector('#cat-btn').addEventListener("click", function(){
    selectAnimal = 'chat';
    document.querySelector('.animal-name-label').innerHTML = 'Nom de votre '+ selectAnimal+' :';
    document.querySelector('.animal-race-label').innerHTML = 'Race de votre '+ selectAnimal+' :';
    document.querySelector('.animal-age-label').innerHTML = 'Age de votre '+ selectAnimal+' :';
    document.querySelector('.image-animal-form').src = "./assets/img/cat.jpg";
    document.querySelector('#fname').placeholder = "ex : Felix";
}); 

document.querySelector('#dog-btn').addEventListener("click", function(){
    selectAnimal = 'chien';
    document.querySelector('.animal-name-label').innerHTML = 'Nom de votre '+ selectAnimal+' :';
    document.querySelector('.animal-race-label').innerHTML = 'Race de votre '+ selectAnimal+' :';
    document.querySelector('.animal-age-label').innerHTML = 'Age de votre '+ selectAnimal+' :';
    document.querySelector('.image-animal-form').src = "./assets/img/dog.jpg";
    document.querySelector('#fname').placeholder = "ex : Medor";


});



for (var slideBtnLeft of slidersBtnLeft) {
    slideBtnLeft.addEventListener("click", function(){ 
        if (page > 1) {
            page -= 1;
            for (var sliderPage of sliderPages) {
                sliderPage.classList.add('slider-right');
                sliderPage.classList.remove('slide-show-right');
                sliderPage.classList.remove('slide-show-left');
                sliderPage.classList.remove('slide-hide-right');
                sliderPage.classList.remove('slide-hide-left');
            }
            document.querySelector('.slider-page-'+page).classList.add('slide-show-left');
            document.querySelector('.slider-page-'+(page+1)).classList.add('slide-hide-left');
            document.querySelector('.slider-page-'+page).classList.remove('slider-right');
            document.querySelector('.slider-page-'+(page+1)).classList.remove('slider-right');

        }
        

    }); 
}

for (var slideBtnRight of slidersBtnRight) {
    slideBtnRight.addEventListener("click", function(){ 
        if (page < nbPagesSlide) {
            page += 1;
            for (var sliderPage of sliderPages) {
                sliderPage.classList.add('slider-right');
                sliderPage.classList.remove('slide-show-right');
                sliderPage.classList.remove('slide-show-left');
                sliderPage.classList.remove('slide-hide-right');
                sliderPage.classList.remove('slide-hide-left');
            }
            document.querySelector('.slider-page-'+page).classList.add('slide-show-right');
            document.querySelector('.slider-page-'+(page-1)).classList.add('slide-hide-right');
            document.querySelector('.slider-page-'+page).classList.remove('slider-right');
            document.querySelector('.slider-page-'+(page-1)).classList.remove('slider-right');
        }   
        

    }); 
}