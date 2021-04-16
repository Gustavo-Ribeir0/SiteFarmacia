$(document).ready(function () {
   
$('#seta').hide();

/*ScrollTop*/ /*Cnpj linha 172 */
$(window).scroll(function(){
let scroll = $(window).scrollTop()
if (scroll > 220){
$('#seta').show();
}
else{
$('#seta').hide();
}
})

$('#seta').click(function(){
$('html, body').animate({scrollTop : 0},800);
})
/*ScrollTop*/



jQuery(document).ready(function () {
  'use strict';

  jQuery('#filter-date, #search-from-date, #search-to-date').datetimepicker();
});



$('.botaoServ').click(function(){
  $("html, body").animate({
    scrollTop: 700
}, 800);

})

$('#produtos').hide()
/*Validação CNPJ na linha 88 até a linha 153 do javascript*/
$('#produtos3').hide()

$("#saude").click(function(){
    $("#produtos, #produtos2").fadeOut(1000);
    $("#produtos3").fadeIn(2000);
    $('#promocoes button, #comprados').removeClass('active')
    $('#saude').addClass('active')
})

    $("#comprados").click(function(){
      $("#produtos2, #produtos3").fadeOut(1000);
      $("#produtos").fadeIn(2000);
      $('#promocoes button, #saude').removeClass('active')
      $('#comprados').addClass('active')

    $("#promocoes").click(function(){
    $("#produtos, #produtos3").fadeOut(1000);
    $("#produtos2").fadeIn(2000);
    $('#saude, #comprados').removeClass('active')
    $('#promocoes button').addClass('active') 

});
      
  });



});






var input;
var input2;
var input3;


function formIndex(a){
  input = a
  if (input.length < 3){
 return input = false    
  }
  else{
  return input = true
  }
}

function formIndex2(a){
  input2 = a
  if (input2.length < 7){
 return input2 = false    
  }
  else{
 return input2 = true
  }
}

function formIndex3(a){
  input3 = a
  if (input3.length < 7){
 return input3 = false    
  }
  else{
 return input3 = true
  }
}




var validacaoCNPJ;
var validacaoCPF;







function validaCpf(strCpf) {
  $('.cpf').blur(function(){ 
    var soma;
    var resto;
    soma = 0;
    if (strCpf == "00000000000") {
      $('.cpf').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
        return validacaoCPF = false;
    }
    
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(9, 10))) {
      $('.cpf').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
        return validacaoCPF = false;
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(10, 11))) {
      $('.cpf').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
        return validacaoCPF = false;
    }
    $('.cpf').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});
    return validacaoCPF = true;
  })
    }
  
      

function cnpjValidation(value) {
  $('.cnpj').blur(function(){ 
  if (!value) return false

  // Aceita receber o valor como string, número ou array com todos os dígitos
  const validTypes =
    typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)

  // Elimina valor em formato inválido
  if (!validTypes){
    $('.cnpj').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
    return validacaoCNPJ = false
  }
  

  // Guarda um array com todos os dígitos do valor
  const match = value.toString().match(/\d/g)
  const numbers = Array.isArray(match) ? match.map(Number) : []

  // Valida a quantidade de dígitos
  if (numbers.length !== 14){
    $('.cnpj').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
    return validacaoCNPJ = false
   }
  
  // Elimina inválidos com todos os dígitos iguais
  const items = [...new Set(numbers)]
  if (items.length === 1){
    $('.cnpj').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
    return validacaoCNPJ = false
  }

  // Cálculo validador
  const calc = (x) => {
    const slice = numbers.slice(0, x)
    let factor = x - 7
    let sum = 0

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i]
      sum += n * factor--
      if (factor < 2) factor = 9
    }

    const result = 11 - (sum % 11)

    return result > 9 ? 0 : result
  }

  // Separa os 2 últimos dígitos de verificadores
  const digits = numbers.slice(12)
  
  // Valida 1o. dígito verificador
  const digit0 = calc(12)
  if (digit0 !== digits[0]){
    $('.cnpj').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
    return validacaoCNPJ = false
  }

  // Valida 2o. dígito verificador
  const digit1 = calc(13)
  if (digit1 === digits[1]){
      $('.cnpj').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});
      return validacaoCNPJ = true
}
  })
 }



var nome;
var end;
var bair;
var cep;
var tel;

function nomeValidation(a) {
$('.nome').blur(function(){ 
nome = a
if (nome.length < 6){
nome = false
return $('.nome').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
    
}
else if (nome.length >= 8){
nome = true
return $('.nome').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});

}
}) 
}



function endValidation(a) {
$('.end').blur(function(){ 
end = a
if (end.length < 8){
end = false
return $('.end').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
        
}
else if (end.length >= 8){
end = true
return $('.end').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});
}
})
}


function bairValidation(a) {
$('.bair').blur(function(){ 
bair = a
if (bair.length < 6){
bair = false
return $('.bair').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
          
}
else if (bair.length >= 6){
bair = true
return $('.bair').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});
}
})
}



function cepValidation(a) {
$('.cep').blur(function(){ 
cep = a
if (cep.length < 8){
cep = false
return $('.cep').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
            
}
else if (cep.length >= 8){
cep = true
return $('.cep').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});
}
})
}

function telValidation(a) {
$('.tel').blur(function(){ 
tel = a
if (tel.length < 10){
tel = false
return $('.tel').css({backgroundColor: 'rgb(224, 68, 68)', color: 'white'});
              
}
else if (tel.length >= 10){
tel = true
$("#botao").prop('disabled', false);
return $('.tel').css({backgroundColor: 'rgb(78, 68, 224)', color: 'white'});

}
})
}

function formIndex(a){
nomeIndex = a
if (nomeIndex.length > 4){
nomeIndex = true
}
}

function numeroIndex(a){
numIndex = a
if (numIndex.length > 4){
numIndex = true
}
}


function telIndex(a){
telefoneIndex = a
if (telefoneIndex.length > 4){
telefoneIndex = true
}

else if (nomeIndex == true && numIndex == true) {
return $('#botaoFormulario').prop('disabled', false);
}
}


function cadastrar(){
if (validacaoCPF == true && nome == true && end == true && bair == true & cep == true && tel == true){
}
else{
alert('Preencha os campos obrigatórios corretamente')
}
}

