function breed_drop_down_list () {

    var selected_list = document.getElementById("select1");

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

    var selected_list = document.getElementById ("select2");

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

    var name = document.getElementById ("text");

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

function Product_cats (image, name_kibble, price, age_cat, type_kibble){
    
    this.image = image;
    
    this.name = name_kibble;
    
    this.price = price;

    this.age_cat = age_cat;

    this.type_kibble = type_kibble;

    let products = [];

    const product_1 = new Product_cat ("img/kibble_1.jpg", 'Mother & Babycat pour chatte et chaton', 25, '0 - 4 mois', 'sec et humide');
    const product_2 = new Product_cat ('img/kibble_2.jpg', 'Babycat milk', 18.49, '0 - 4 mois', 'humide');
    const product_3 = new Product_cat ('img/kibble_3.jpg', 'kitten pour chaton', 26.10, '5 mois - 1 an', 'sec');
    const product_4 = new Product_cat ('img/kibble_4.jpg', 'kitten Gelée', 28.60, '5 mois - 1 an', 'humide');
    const product_5 = new Product_cat ('img/kibble_5.jpg', 'Maine Coon Adulte', 26.09, '1 - 12 ans', 'sec');
    const product_6 = new Product_cat ("img/kibble_6.jpg", 'Instinctive en gelée', 26.02, '1 - 7 ans', 'humide');
    const product_7 = new Product_cat ('img/kibble_7.jpg', 'Appetite controle Care en gelée', 31.20, '7 - 12 ans', 'humide');
    const product_8 = new Product_cat ('img/kibble_8.jpg', 'Ageing 12 +', 22.99, '+ 12 ans', 'sec');
    const product_9 = new Product_cat ("img/kibble_9.jpg", 'Ageing 12 + en sauce', 28.60, '+ 12 ans', 'humide');

    products.push (product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9);
}

Product_cats ();