var button = $('button');
var nameInput = $('.name-input')
var websiteInput = $('.website-input');
var emailInput = $('.email-input')
var textarea = $('.textarea')
var hasError = false;
var error1=$('#error1');
var error2=$('#error2');
var error3=$('#error3');
var error4=$('#error4');

button.on('click', function() {
	if(nameInput.val()==='') {
	   hasError=true;
	   error1.html('Name cannot be left empty');
	   error1.css({marginBottom: '1em'});
	}

	if(emailInput.val()==='') {
		hasError=true;
		error2.html('Email must have contain an \'@\'');
		error2.css({marginBottom: '1em'});
	}

	if(websiteInput.val()==='') {
		hasError=true;
		error3.html('Website must start with http://');
		error3.css({marginBottom: '1em'});
	}

	if(textarea.val()==='') {
		hasError=true;
		error4.html('Message cannot be left empty');
		error4.css({marginBottom: '1em'});
	}

	if(!hasError===true){
		main.css({display: 'none'});
		success.css({display: 'block'});
		success.html('Thanks for contacting us '+name.val()+'. We have received your message and will be in touch with you shortly.');

	}
});