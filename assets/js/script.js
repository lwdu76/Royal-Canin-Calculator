var animal = '';

document.getElementById('btn-cat').addEventListener("click", function(){ 
    animal = 'chat' ;
    document.querySelector('.index-body__div-1').classList.add('hide');
    document.querySelector('.index-body__div-1').classList.remove('show');
    document.querySelector('.index-body__div-2').classList.add('show');
    document.querySelector('.index-body__div-2').classList.remove('hide');
    document.querySelector('.animal-p').innerHTML = "Nom de votre "+animal+" :" ;

});

document.getElementById('btn-dog').addEventListener("click", function(){ 
    animal = 'chien' ;
    document.querySelector('.index-body__div-1').classList.add('hide');
    document.querySelector('.index-body__div-1').classList.remove('show');
    document.querySelector('.index-body__div-2').classList.add('show');
    document.querySelector('.index-body__div-2').classList.remove('hide');
    document.querySelector('.animal-p').innerHTML = "Nom de votre "+animal+" :" ;

});

setInterval(function(){ 
    console.log('faz')
}, 500);


function breed_drop_down_list () {

    var selected_list = document.getElementById("race");

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

    var selected_list = document.getElementById ("age");

    cat_age = new Array ("1 mois", "2 mois", "3 mois", "4 mois", "5 mois", "6 mois", "7 mois", "8 mois", "9 mois", "10 mois", "11 mois", "1 an", "2 ans", "3 ans", "4 ans", "5 ans", "6 ans", "7 ans", "8 ans", "9 ans", "10 ans", "11 ans", "12 ans", "13 ans", "14 ans", "15 ans", "16 ans", "17 ans", "18 ans", "19 ans", "20 ans");

    for (var i = 0; i < cat_age.length; i++) {

        var list_option = document.createElement ("option");

        text_list = document.createTextNode (cat_age [i]);

        list_option.appendChild (text_list);

        list_option.setAttribute ("value", cat_age [i]);

        selected_list.insertBefore (list_option, selected_list.lastChild);
    }
}

age_drop_down_list ();

function name_check () {

    var name = document.getElementById ("name");

    name.setAttribute ('type', 'text');

    var format = /[a-z|A-Z]{5,10}/;

    var resultat = "";

    analyse = format.test (name);

    if (analyse != false){

        resultat = "Vrai";
    
    } else {
    
        resultat = "Faux";
    }
    
    console.log (analyse);
}

name_check ();

function age_human_animal () {

    human_age = new Array ("1 an", "2 ans", "4 ans", "6 ans", "8 ans", "10 ans", "12 ans", "14 ans", "15 ans", "16 ans", "17 ans", "19 ans", "24 ans", "28 ans", "32 ans", "36 ans", "40 ans", "44 ans", "48 ans", "52 ans", "56 ans", "60 ans", "64 ans", "68 ans", "72 ans", "76 ans", "80 ans", "84 ans", "88 ans", "94 ans", "100 ans");
    cat_age = new Array ("1 mois", "2 mois", "3 mois", "4 mois", "5 mois", "6 mois", "7 mois", "8 mois", "9 mois", "10 mois", "11 mois", "1 an", "2 ans", "3 ans", "4 ans", "5 ans", "6 ans", "7 ans", "8 ans", "9 ans", "10 ans", "11 ans", "12 ans", "13 ans", "14 ans", "15 ans", "16 ans", "17 ans", "18 ans", "19 ans", "20 ans");

    for (var i = 0; i < cat_age.length; i++) {
        
        document.write(" Age du Chat : " + cat_age[i] + "donne en Humain : " + human_age[i] + "\n");
    }
}

age_human_animal ();