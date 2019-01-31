document.getElementById('submitForm').addEventListener('click', function(event){
    var form_contact = document.getElementById('form-contact');
    var contact_name_element = document.getElementById('contact_name');
    var contact_email_element = document.getElementById('contact_email');
    var contact_phone_element = document.getElementById('contact_phone');
    var contact_message_element = document.getElementById('contact_message');

    contact_name_element.classList.remove('no-valid');
    contact_email_element.classList.remove('no-valid');
    contact_phone_element.classList.remove('no-valid');
    contact_message_element.classList.remove('no-valid');

    var canSubmitForm = true;

    var contactNameIsValid = validateEmptyField(contact_name_element.value)
    if(!contactNameIsValid) {
        canSubmitForm = false;
        contact_name_element.classList.add('no-valid');
    }
    var contactEmailIsValid = validateEmail(contact_email_element.value)
    if(!contactEmailIsValid) {
        canSubmitForm = false;
        contact_email_element.classList.add('no-valid');
    }
    var contactPhoneIsValid = validatePhoneField(contact_phone_element.value)
    if(!contactPhoneIsValid) {
        canSubmitForm = false;
        contact_phone_element.classList.add('no-valid');
    }
    var contactMessageIsValid = validateEmptyField(contact_message_element.value)
    if(!contactMessageIsValid) {
        canSubmitForm = false;
        contact_message_element.classList.add('no-valid');
    }
    if(canSubmitForm)
        form_contact.submit()
    else
        event.preventDefault()
});

var validateEmail = function(mail) {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return true;

    return false;
}

var validateEmptyField = function(value) {
    if(/[\S\s]+/.test(value))
        return true;

    return false;
}

var validatePhoneField = function(value) {
    if(/[0-9\-\(\)]+[0-9]+/.test(value))
        return true;

    return false;
}
