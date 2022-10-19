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
