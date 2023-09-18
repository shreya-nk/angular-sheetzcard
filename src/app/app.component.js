//toggle button
const details = document.querySelector('summary');

document.querySelector('button[data-toggle-btn]').addEventListener('click', (e) => {
  if (details.parentNode.getAttribute('open')) {
        details.parentNode.removeAttribute('open');
  }
  else {
    details.parentNode.setAttribute('open','open');    
  }
});

//duplicate button
document.querySelector('.duplicate').addEventListener('click', function(e) {
  const cardToClone = document.querySelector('.card').cloneNode(true);
  document.body.appendChild(cardToClone);
});

//delete button
document.querySelector('#deletecard').addEventListener('click', function(e) {
  let wantsTo = confirm("Are you sure?");
  if (wantsTo) {
    if (document.querySelector('.card:last-child') !== document.querySelector('.card')) {
      document.querySelector('.card:last-child').remove();      
    }
    else {
      alert("Cannot original last card");
    }
  }
});

//change title button
document.querySelector('.changetxt').addEventListener('click', function(e) {
  let name = "Something else";
  if (name) {
    document.querySelector('.card h3').innerText = name;
  }
});

//change background
const card = document.querySelector('#card');
        let backgroundColor = false;
    document.querySelector('#changebackground').addEventListener('click', function(e) {
            if (backgroundColor) {
                card.style.backgroundColor = 'white';
            } else {
                card.style.backgroundColor = 'gray';
            }
            backgroundColor = !backgroundColor;
        });