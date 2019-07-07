let userName = document.getElementById('username');
const form = document.querySelector('#log-in');

form.addEventListener('submit',runEvent);

function runEvent(e) {
    if (userName.value === ''){
        alert('Enter username');
    }else{
        localStorage.setItem('name',userName.value);    
    }
    console.log(localStorage.getItem('name'));
}
