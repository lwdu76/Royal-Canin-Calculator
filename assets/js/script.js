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

// Slider js
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

// Remplissage formulaire

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

function age_human () {
    human_age = new Array ("1 an", "2 ans", "4 ans", "6 ans", "8 ans", "10 ans", "12 ans", "14 ans", "15 ans", "16 ans", "17 ans", "19 ans", "24 ans", "28 ans", "32 ans", "36 ans", "40 ans", "44 ans", "48 ans", "52 ans", "56 ans", "60 ans", "64 ans", "68 ans", "72 ans", "76 ans", "80 ans", "84 ans", "88 ans", "94 ans", "100 ans");
}

age_human ();

setInterval(formChecker, 100);

// Verification formulaire
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

    } else {
        document.querySelector('.name-error').classList.add('d-none');
        document.querySelector('#fname').classList.remove('form-error');

    }
    if (checkFormName2 == 1 && document.getElementById('frace').value === '') {
        document.querySelector('.name-error2').classList.remove('d-none');
        document.querySelector('#frace').classList.add('form-error');

    } else {
        document.querySelector('.name-error2').classList.add('d-none');
        document.querySelector('#frace').classList.remove('form-error');
    }
    if (checkFormName3 == 1 && document.getElementById('fage').value === '') {
        document.querySelector('.name-error3').classList.remove('d-none');
        document.querySelector('#fage').classList.add('form-error');

    } else {
        document.querySelector('.name-error3').classList.add('d-none');
        document.querySelector('#fage').classList.remove('form-error');
    }
    if (document.getElementById('fname').value === '') {
        checkGoodAnswer1 = true;
    } else {
        checkGoodAnswer1 = false;
    }
    if (document.getElementById('frace').value === '') {
        checkGoodAnswer2 = true;
    } else {
        checkGoodAnswer2 = false;
    }
    if (document.getElementById('fage').value === '') {
        checkGoodAnswer3 = true;
    } else {
        checkGoodAnswer3 = false;
}
}

document.getElementById('download-btn').addEventListener("click", function(){
domtoimage.toJpeg(document.querySelector('.img-result-age'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

})

setInterval(formResults, 100);

function Product_cat (image, name_kibble, price, age_recommandation, type_kibble) {

this.image = image;
    
this.name_kibble = name_kibble;

this.price = price;

this.age_recommandation = age_recommandation;

this.type_kibble = type_kibble;

}

const product_1 = new Product_cat ("./assets/img/kibble_1.jpg", 'Mother & Babycat pour chatte et chaton', 25, '0 - 4 mois', 'sec et humide');
const product_2 = new Product_cat ('./assets/img/kibble_2.jpg', 'Babycat milk', 18.49, '0 - 4 mois', 'humide');
const product_3 = new Product_cat ('./assets/img/kibble_3.jpg', 'kitten pour chaton', 26.10, '5 mois - 1 an', 'sec');
const product_4 = new Product_cat ('./assets/img/kibble_4.jpg', 'kitten Gelée', 28.60, '5 mois - 1 an', 'humide');
const product_5 = new Product_cat ('./assets/img/kibble_5.jpg', 'Maine Coon Adulte', 26.09, '1 - 12 ans', 'sec');
const product_6 = new Product_cat ("./assets/img/kibble_6.jpg", 'Instinctive en gelée', 26.02, '1 - 7 ans', 'humide');
const product_7 = new Product_cat ('./assets/img/kibble_7.jpg', 'Appetite controle Care en gelée', 31.20, '7 - 12 ans', 'humide');
const product_8 = new Product_cat ('./assets/img/kibble_8.jpg', 'Ageing 12 +', 22.99, '+ 12 ans', 'sec');
const product_9 = new Product_cat ("./assets/img/kibble_9.jpg", 'Ageing 12 + en sauce', 28.60, '+ 12 ans', 'humide');

let products = [];

products.push (product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9);

console.log(products);

var resultat_text
function formResults() {

// Sélection de produits
    resultat_text = parseInt(document.getElementById('fage').value);
    if (Number.isInteger(resultat_text)) {
        document.querySelector('#results-calcul').innerHTML = (document.getElementById('fname').value+' a '+ human_age[resultat_text]+' en âge humain')
    }

    if (document.getElementById('fage').value !== NaN) {
        if (parseInt(document.getElementById('fage').value) < 5) {

            document.querySelector('.produices').innerHTML = `<div class="produice">
            <img src=${product_1.image} alt="produit">
            <div>
                <p class=${product_1.name_kibble}</p>
                <p>${product_1.age_recommandation}</p>
                <p>${product_1.type_kibble}</p>
                <button class="btn-red">Voir produit</button>
            </div>
        </div>

        <div class="produice">
            <img src="./assets/img/kibble_2.jpg" alt="produit">
            <div>
                <p class="txt-danger">Babycat milk</p>
                <p>0 - 4 mois</p>
                <p>sec et humide</p>
                <button class="btn-red">Voir produit</button>
            </div>
        </div>`;

        } else if (parseInt(document.getElementById('fage').value) > 12) {

            document.querySelector('.produices').innerHTML = `<div class="produice">
            <img src="./assets/img/kibble_8.jpg" alt="produit">
            <div>
                <p class="txt-danger">Ageing 12 +</p>
                <p>+ 12 ans</p>
                <p>sec</p>
                <button class="btn-red">Voir produit</button>
            </div>
        </div>

        <div class="produice">
            <img src="./assets/img/kibble_9.jpg" alt="produit">
            <div>
                <p class="txt-danger">Ageing 12 + en sauce</p>
                <p>+ 12 ans</p>
                <p>humide</p>
                <button class="btn-red">Voir produit</button>
            </div>
        </div>`;

        } else {

            document.querySelector('.produices').innerHTML = `<div class="produice">
            <img src="./assets/img/kibble_5.jpg" alt="produit">
            <div>
                <p class="txt-danger">Maine Coon Adulte</p>
                <p>5 mois - 12 ans</p>
                <p>sec</p>
                <button class="btn-red">Voir produit</button>
            </div>
        </div>

        <div class="produice">
            <img src="./assets/img/kibble_6.jpg" alt="produit">
            <div>
                <p class="txt-danger">Instinctive en gelée</p>
                <p>5 mois - 12 ans</p>
                <p>humide</p>
                <button class="btn-red">Voir produit</button>
            </div>
        </div>`;
        }
    }
}

formResults();