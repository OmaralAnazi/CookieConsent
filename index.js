const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

setTimeout(displayCookiesWindow, 1500); 
modalCloseBtn.addEventListener('click', closeCookiesWindow); 
declineBtn.addEventListener('mouseenter', reverseButtonsOrder); 
declineBtn.addEventListener('click',  () => alert('NOT allowed until you gives us YOUR DATA!!!!')); 
consentForm.addEventListener('submit', handleFormSubmit);

function displayCookiesWindow() {
    modal.style.display = 'inline';
}

function closeCookiesWindow() {
    modal.style.display = 'none';
}

function reverseButtonsOrder() {
    modalChoiceBtns.classList.toggle('modal-btns-reverse'); 
}

function handleFormSubmit(event){
    event.preventDefault(); 
    playLoadingDataAnimation();
    changeCookiesWindowToFinalState();
}

function playLoadingDataAnimation() {
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src='images/loading.svg' class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`; 
    
    setTimeout(() => {
        document.getElementById('upload-text').innerText = 'Making the sale...';
    }, 1500);
}

function changeCookiesWindowToFinalState() {
    const consentFormData = new FormData(consentForm);
    const fullName = consentFormData.get('fullName');
    
    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src='images/pirate.gif'>
        </div>`;
    modalCloseBtn.disabled = false; 
    }, 3000);
}