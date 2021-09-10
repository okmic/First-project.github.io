$('#opemModal1').click(function() { 

	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});
// закрыть на крестик
$('.js-close-campaign').on('click', function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

let summaZak1 = document.getElementById('clickMe').addEventListener('click', function(){
    let derBag = 500;
    let i = document.getElementById('col').value;
    let summaTovara = document.getElementById('summaTovara').textContent = i * derBag + " "+"(рублей)";
});



$('#opemModal2').on('click', function() { 
	
	$('.js-overlay-2campaign').fadeIn();
	$('.js-overlay-2campaign').addClass('disabled');
});
$('.js-close-2campaign').click(function() { 
	$('.js-overlay-2campaign').fadeOut();
	
});

let summaZak2 = document.getElementById('clickMe2').addEventListener('click', function(){
    let plasBag = 300;
    let i = document.getElementById('col2').value;
    let summaTovara = document.getElementById('summaTovara2').textContent = i * plasBag + " "+"(рублей)";
}); 

$('#opemModal3').on('click', function() { 
	
	$('.js-overlay-3campaign').fadeIn();
	$('.js-overlay-3campaign').addClass('disabled');
});
$('.js-close-3campaign').click(function() { 
	$('.js-overlay-3campaign').fadeOut();
	
});

let summaZak3 = document.getElementById('clickMe3').addEventListener('click', function(){
    let euroSt = 300;
    let i = document.getElementById('col3').value;
    let summaTovara = document.getElementById('summaTovara3').textContent = i * euroSt + " "+"(рублей)";
});



$('#opemModal4').on('click', function() { 
	$('.js-overlay-4campaign').fadeIn();
	$('.js-overlay-4campaign').addClass('disabled');
});
$('.js-close-4campaign').on('click', function() { 
	$('.js-overlay-4campaign').fadeOut();
	
});

let summaZak4 = document.getElementById('clickMe4').addEventListener('click', function(){
    let kisti = 1500;
    let i = document.getElementById('col4').value;
    let summaTovara = document.getElementById('summaTovara4').textContent = i * kisti + " "+"(рублей)";
});


$('#opemModal5').on('click', function() { 
	$('.js-overlay-5campaign').fadeIn();
	$('.js-overlay-5campaign').addClass('disabled');
});
$('.js-close-5campaign').on('click', function() { 
	$('.js-overlay-5campaign').fadeOut();
	
});

let summaZak5 = document.getElementById('clickMe5').addEventListener('click', function(){
    let ugl = 300;
    let i = document.getElementById('col5').value;
    let summaTovara = document.getElementById('summaTovara5').textContent = i * ugl + " "+"(рублей)";
});

$('#opemModal6').on('click', function() { 
	$('.js-overlay-6campaign').fadeIn();
	$('.js-overlay-6campaign').addClass('disabled');
});
$('.js-close-6campaign').on('click', function() { 
	$('.js-overlay-6campaign').fadeOut();
	
});

let summaZak6 = document.getElementById('clickMe6').addEventListener('click', function(){
    let holst = 500;
    let i = document.getElementById('col6').value;
    let summaTovara = document.getElementById('summaTovara6').textContent = i * holst + " "+"(рублей)";
});

$('#opemModal7').on('click', function() { 
	$('.js-overlay-7campaign').fadeIn();
	$('.js-overlay-7campaign').addClass('disabled');
});
$('.js-close-7campaign').on('click', function() { 
	$('.js-overlay-7campaign').fadeOut();
	
});

let summaZak7 = document.getElementById('clickMe7').addEventListener('click', function(){
    let oil = 700;
    let i = document.getElementById('col7').value;
    let summaTovara = document.getElementById('summaTovara7').textContent = i * oil + " "+"(рублей)";
});


$('#opemModal8').on('click', function() { 
	$('.js-overlay-8campaign').fadeIn();
	$('.js-overlay-8campaign').addClass('disabled');
});
$('.js-close-8campaign').on('click', function() { 
	$('.js-overlay-8campaign').fadeOut();
	
});