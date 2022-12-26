// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


/*
<form name="myForm" action="data_handler.php">
<input type="tel" name="telephone">
<input type="tel" name="mobile">
<input type="button" value="Submit" onclick="validateAndSend()">
</form>
	*/
//const contactsForm = document.querySelector(".contact-form");
function validateAndSend() {
	 if (contactsForm.formtel.value == '' && contactsForm.formemail.value == '') {
		  alert('You have to enter at least one phone number.');
		  return false;
	 }
	 else {
		  myForm.submit();
	 }
}