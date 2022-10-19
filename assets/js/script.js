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

// function validate()
// {
//   var phoneNumber = document.getElementById('phone-number').value;
//   var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
//   var phoneResult = phoneRGEX.test(phoneNumber);
//   alert("phone:"+phoneResult );
// }

// var inputEmpty = 0




// setInterval(function(){ 

//     if (document.getElementById('name-form').value.length == 0)
//         inputEmpty = 1;
//         console.log(document.getElementById('name-form').value.length)
//     // if
//     // document.getElementById('my-input-id').disabled = false;
// }, 500);


document.getElementById('form-valid').addEventListener("click", function(){ 
    document.querySelector('.index-body__div-2').classList.add('hide');
    document.querySelector('.index-body__div-2').classList.remove('show');
    document.querySelector('.index-body__div-3').classList.add('show');
    document.querySelector('.index-body__div-3').classList.remove('hide');
    console.log('fv')
});
