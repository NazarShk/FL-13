let mail = prompt('Enter email', ''),
    pass;

let emailFlag = false,
    passFlag = false;

const LENGTH = 4;

if (mail === null || mail === '') {
    alert('Canceled.');
} else if (mail.length < LENGTH) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (mail === 'user@gmail.com' || mail === 'admin@gmail.com') {
    emailFlag = true;
} else {
    alert('I don\'t know you');
}

if (emailFlag) {
    pass = prompt('Enter password', '');

    if (pass === null || pass === '') {
        alert('Canceled.');
    } else if (mail === 'user@gmail.com' && pass === 'UserPass' ||
        mail === 'admin@gmail.com' && pass === 'AdminPass') {
        passFlag = true;
    } else {
        alert('Wrong password');
    }
}


