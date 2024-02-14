const form1 = document.querySelector('.form1');
const nameInput = document.querySelector('.name-input');
const form2 = document.querySelector('.form2');
const colorInput = document.querySelector('.color-input');
const cardWrapper = document.querySelector('.card-wrapper');

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
  favColor.toLowerCase()

  if(favColor==='black' || favColor==='grey' || favColor==='gray'){
    body.style.background = 'linear-gradient(-45deg, #1c1e29, #231d418f, #182327, #161718)';
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradient 20s ease infinite';
    body.style.animationDuration = '25s'
  }else if(favColor==='red'){
    
  }
}

const bulb = document.querySelector('.bulb')

const enlightenUs = () => {
  bulb.style.width = '100%'
} 


enlightenUs()


form1.addEventListener('submit', formOne);
form2.addEventListener('submit', formTwo);