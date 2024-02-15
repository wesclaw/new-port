const form1 = document.querySelector('.form1');
const nameInput = document.querySelector('.name-input');
const form2 = document.querySelector('.form2');
const colorInput = document.querySelector('.color-input');
const cardWrapper = document.querySelector('.card-wrapper');

const homeSection = document.querySelector('.home-section')

let userName;
let favColor;

const date = new Date();
const h = date.getHours();
const wrapperForUserName = document.querySelector('.wrapper-for-username')
const closeBtn = document.querySelector('.close-btn')
const body = document.querySelector('body')

closeBtn.addEventListener("click", e=>{
  cardWrapper.remove()
})

function formOne(e) {
  e.preventDefault();
  const nameValue = nameInput.value;
  userName = nameValue;
  form1.style.display = 'none';
  form2.style.display = 'block';
  colorInput.focus();
}

function formTwo(e){
  e.preventDefault()
  const colorValue = colorInput.value;
  favColor = colorValue
  cardWrapper.remove()
  const fname = document.getElementById('fname')
  const capitalizedUserName =
  userName.charAt(0).toUpperCase() + userName.slice(1);
  fname.value = capitalizedUserName
  createEffects(userName, favColor)
}

function createEffects(userName, favColor){
  const container_el = document.createElement('div');
  const capitalizedUserName =
  userName.charAt(0).toUpperCase() + userName.slice(1);
  container_el.classList.add('hold-span-tags');

  const p_el = document.createElement('p');
  p_el.classList.add('p_el');
  container_el.append(p_el);
  wrapperForUserName.append(container_el)

  for (let i = 0; i < userName.length; i++) {
    const span_el = document.createElement('span');
    span_el.classList.add('span_el');
    container_el.append(span_el);
    if (h >= 0 && h < 12) {
      p_el.textContent = 'Good morning, ';
      span_el.textContent = capitalizedUserName[i];
    } else if (h >= 12 && h < 17) {
      p_el.textContent = 'Good afternoon, ';
      span_el.textContent = capitalizedUserName[i];
    } else {
      p_el.textContent = 'Good evening, ';
      span_el.textContent = capitalizedUserName[i];
    }
    span_el.addEventListener('mouseover', e => {
      span_el.classList.add('big');
    });
    span_el.addEventListener('mouseout', e => {
      span_el.classList.remove('big');
    });
  }
  const lowerCaseColor = favColor.toLowerCase()

  if(lowerCaseColor==='black' || lowerCaseColor==='grey' || lowerCaseColor==='gray'){
    body.style.background = 'linear-gradient(-45deg, #1c1e29, #231d418f, #182327, #161718)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }else if(lowerCaseColor==='red'){
    body.style.background = 'linear-gradient(-45deg,#fd5c63,#df6972,#f74753, #92473b)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }else if(lowerCaseColor==='green'){
    body.style.background = 'linear-gradient(-45deg,#aee28c,#7ce09e,#5bdf8d, #4bc770)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
    homeSection.style.color = 'black'
  }else if(lowerCaseColor==='white'){
    body.style.background = 'white';
    homeSection.style.color = 'black'
  }else if(lowerCaseColor==='brown'){
    body.style.background = 'linear-gradient(-45deg,brown,rgb(160, 88, 88), rgb(180, 83, 83), #be7562)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }else if(lowerCaseColor==='pink'){
    body.style.background = 'linear-gradient(-45deg,#eb88d279,#e765e7,#eb72d7, #914f7d)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }else if(lowerCaseColor==='yellow'){
    body.style.background = 'linear-gradient(-45deg,#e4e672,#e0f086,#e2f065, #d7ec79)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
    homeSection.style.color = 'black'
  }else if(lowerCaseColor==='purple'){
    body.style.background = 'linear-gradient(-45deg,#a085ec,#9b72c9,#9c60ce, #c565f1)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }else if(lowerCaseColor==='cyan'){
    body.style.background = 'linear-gradient(-45deg,cyan,darkcyan,#79c6c9, #3fdaee)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }
  // orange?
}

form1.addEventListener('submit', formOne);
form2.addEventListener('submit', formTwo);