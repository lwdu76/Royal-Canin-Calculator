var checkFormName = 0;
var checkFormName2 = 0;
var checkFormName3 = 0;

var checkGoodAnswer = false;
var checkGoodAnswer2 = false;
var checkGoodAnswer3 = false;

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












function breed_drop_down_list () {
    var selected_list = document.getElementById("frace");
    cat_list = new Array ("abyssin", "american curl", "american shorthair", "american wirehair", "anatoli", "angora turc", "asian", "brume australianne", "balinais", "bengal", "bleu russe", "americain", "bobtail des kouriles", "bobtail japonais", "bombay", "brazilian shorthair", "british longhair", "british shorthair", "burmese", "burmilla", "californian rex", "californian spangled", "ceylan", "chartreux", "chantilly", "chausie", "colorpoint shortair", "cornish rex", "cymric", "devon rex", "donskoy", "european shortair", "exotic shortair", "german rex", "havana brown", "highlander", "highland fold", "himalayen", "khao manee", "korat", "laperm", "maine coon", "mandarin", "manx", "mau arabe", "mau égyptien", "minskin", "munchkin", "nebelung", "norvégien ou skogkatt", "ocicat", "ojos azules", "oriental shortair", "persan", "peterbald", "pixie-bob", "ragamuffin", "ragdoll", "sacré de bismanie", "safari", "savannah", "scottish fold", "selkirk rex", "serengeti", "seychellois", "siamois", "sibérien", "skookum", "snowshoe", "sokoké", "somali", "sphynx", "thaï", "tiffany", "tonkonois", "toyger", "turc de van", "ural rex", "york chocolat");
    for (var i = 0; i < cat_list.length; i++) {
        var list_option = document.createElement ("option");
        text_list = document.createTextNode (cat_list [i]);
        list_option.appendChild (text_list);
        list_option.setAttribute ("value", cat_list [i]);
        selected_list.insertBefore (list_option, selected_list.lastChild);
    }
}

breed_drop_down_list ();

function age_drop_down_list () {
    var selected_list = document.getElementById ("fage");
    cat_age = new Array ("1 mois", "2 mois", "3 mois", "4 mois", "5 mois", "6 mois", "7 mois", "8 mois", "9 mois", "10 mois", "11 mois", "1 an", "2 ans", "3 ans", "4 ans", "5 ans", "6 ans", "7 ans", "8 ans", "9 ans", "10 ans", "11 ans", "12 ans", "13 ans", "14 ans", "15 ans", "16 ans", "17 ans", "18 ans", "19 ans", "20 ans");
    for (var i = 0; i < cat_age.length; i++) {
        var list_option = document.createElement ("option");
        text_list = document.createTextNode (cat_age [i]);
        list_option.appendChild (text_list);
        list_option.setAttribute ("value", i);
        selected_list.insertBefore (list_option, selected_list.lastChild);
    }
}

age_drop_down_list ();

function age_human_animal () {
    human_age = new Array ("1 an", "2 ans", "4 ans", "6 ans", "8 ans", "10 ans", "12 ans", "14 ans", "15 ans", "16 ans", "17 ans", "19 ans", "24 ans", "28 ans", "32 ans", "36 ans", "40 ans", "44 ans", "48 ans", "52 ans", "56 ans", "60 ans", "64 ans", "68 ans", "72 ans", "76 ans", "80 ans", "84 ans", "88 ans", "94 ans", "100 ans");
    cat_age = new Array ("1 mois", "2 mois", "3 mois", "4 mois", "5 mois", "6 mois", "7 mois", "8 mois", "9 mois", "10 mois", "11 mois", "1 an", "2 ans", "3 ans", "4 ans", "5 ans", "6 ans", "7 ans", "8 ans", "9 ans", "10 ans", "11 ans", "12 ans", "13 ans", "14 ans", "15 ans", "16 ans", "17 ans", "18 ans", "19 ans", "20 ans");
    // for (var i = 0; i < cat_age.length; i++) {
    //     document.write(" Age du Chat : " + cat_age[i] + "donne en Humain : " + human_age[i] + "\n");
    // }
}

age_human_animal ();


setInterval(formChecker, 100);

function formChecker() {
    if (document.getElementById('fname').value !== ''){
        checkFormName = 1;
    }
    if (document.getElementById('frace').value !== ''){
        checkFormName2 = 1;
    }
    if (document.getElementById('fage').value !== ''){
        checkFormName3 = 1;
    }
    if ((checkFormName == 1 && document.getElementById('fname').value === '')||(/^[A-Za-z -]{1,}$/.test(document.getElementById('fname').value) == false)) {
        document.querySelector('.name-error').classList.remove('d-none');
        document.querySelector('#fname').classList.add('form-error');
        checkGoodAnswer = true;
    } else {
        document.querySelector('.name-error').classList.add('d-none');
        document.querySelector('#fname').classList.remove('form-error');
        checkGoodAnswer = false;
    }
    if (checkFormName2 == 1 && document.getElementById('frace').value === '') {
        document.querySelector('.name-error2').classList.remove('d-none');
        document.querySelector('#frace').classList.add('form-error');
        checkGoodAnswer2 = true;
    } else {
        document.querySelector('.name-error2').classList.add('d-none');
        document.querySelector('#frace').classList.remove('form-error');
        checkGoodAnswer2 = false;
    }
    if (checkFormName3 == 1 && document.getElementById('fage').value === '') {
        document.querySelector('.name-error3').classList.remove('d-none');
        document.querySelector('#fage').classList.add('form-error');
        checkGoodAnswer3 = true;
    } else {
        document.querySelector('.name-error3').classList.add('d-none');
        document.querySelector('#fage').classList.remove('form-error');
        checkGoodAnswer3 = false;
    }

    if (checkGoodAnswer && checkFormName2 && checkFormName3) {
        document.getElementById('submit-btn-r').classList.remove('d-none')
    } else {
        // document.getElementById('submit-btn-r').classList.add('d-none')
    }
    

}




setInterval(formResults, 100);

console.log('ca ma')
var resulttxt
function formResults() {
    // resulttxt = document.getElementById('fname').value+' a ' + ( parseInt(fage)[document.getElementById('fage').value ) + ' en âge humain']
    // document.querySelector('#results-calcul').innerHTML == resulttxt ;



    resulttxt = parseInt(document.getElementById('fage').value);
    if (Number.isInteger(resulttxt)) {
        document.querySelector('#results-calcul').innerHTML = (document.getElementById('fname').value+' a '+ human_age[resulttxt]+' en âge humain')
    }
}

formResults()

