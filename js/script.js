
const scrollOffset = 0;
 
const scrollElement = document.querySelector(".instruction__container");
const mobileWindow = document.querySelector('.phone-window');
const upLink = document.querySelector('.up-link');
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
    Array.from(scrollElement.children).forEach(item => item.classList.add('instruction__item_active'));
    mobileWindow.classList.add('phone-window_active');
    mobileMenu.classList.remove('phone-window_hidden');
    upLink.classList.remove('up-link_hidden');
}
 
const hideScrollElement = () => {
    Array.from(scrollElement.children).forEach(item => item.classList.remove('instruction__item_active'));
    mobileWindow.classList.remove('phone-window_active');
    mobileMenu.classList.add('phone-window_hidden');
    upLink.classList.add('up-link_hidden');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

const headerOpenButton = document.querySelector('.header__burger');
const headerCloseButton = document.querySelector('.mobile-menu__close-button');
const mobileMenu = document.querySelector('.mobile-menu');
headerOpenButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu_hidden');
    mobileMenu.classList.add('mobile-menu_active');
    document.body.classList.add('body_scroll_disable');
    document.body.classList.remove('body_scroll_enable');
});
headerCloseButton.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu_active');
    mobileMenu.classList.add('mobile-menu_hidden');
    document.body.classList.add('body_scroll_enable');
    document.body.classList.remove('body_scroll_disable');
});

let marginServicesSlider = 0;
const servicesSlider = document.querySelector('.services__slider');
const outerServicesSlider = document.querySelector('.services__outer-slider');
const leftButtonServicesSlider = document.querySelector('.services__nav-button_prev');
const rightButtonServicesSlider = document.querySelector('.services__nav-button_next');
leftButtonServicesSlider.disabled = true;
leftButtonServicesSlider.addEventListener('click', () => {
    marginServicesSlider -= 360;
    servicesSlider.style.left = -marginServicesSlider + 'px';
    rightButtonServicesSlider.disabled = false;
    if(marginServicesSlider==0) {
      leftButtonServicesSlider.disabled = true;
    }
})

rightButtonServicesSlider.addEventListener('click', () => {
    marginServicesSlider += 360;
    servicesSlider.style.left = -marginServicesSlider + 'px';
    leftButtonServicesSlider.disabled = false;
    if (marginServicesSlider + outerServicesSlider.clientWidth >= servicesSlider.clientWidth) {
      rightButtonServicesSlider.disabled = true;
    }
})

window.addEventListener('resize', () => {
  marginServicesSlider = 0;
  leftButtonServicesSlider.disabled = true;
  rightButtonServicesSlider.disabled = false;
  servicesSlider.style.left = -marginServicesSlider + 'px';
});

let marginClientsSlider = 0;
const clientsSlider = document.querySelector('.clients__slider');
const outerClientsSlider = document.querySelector('.clients__outer-slider');
const leftButtonClientsSlider = document.querySelector('.navigation__button_prev');
const rightButtonClientsSlider = document.querySelector('.navigation__button_next');

leftButtonClientsSlider.disabled = true;
leftButtonClientsSlider.addEventListener('click', () => {
    marginClientsSlider -= 250;
    clientsSlider.style.left = -marginClientsSlider + 'px';
    rightButtonClientsSlider.disabled = false;
    if(marginClientsSlider==0) {
      leftButtonClientsSlider.disabled = true;
    }
})

rightButtonClientsSlider.addEventListener('click', () => {
    marginClientsSlider += 250;
    clientsSlider.style.left = -marginClientsSlider + 'px';
    leftButtonClientsSlider.disabled = false;
    if (marginClientsSlider + outerClientsSlider.clientWidth >= clientsSlider.clientWidth) {
      rightButtonClientsSlider.disabled = true;
    }
})

window.addEventListener('resize', () => {
  marginClientsSlider = 0;
  leftButtonClientsSlider.disabled = true;
  rightButtonClientsSlider.disabled = false;
  clientsSlider.style.left = -marginClientsSlider + 'px';
})

const showModal = () => {
  document.querySelector('.modal').classList.remove('modal_hidden');
  document.body.classList.add('body_scroll_disable');
  document.body.classList.remove('body_scroll_enable');
}
const hideModal = () => {
  document.querySelector('.modal').classList.add('modal_hidden');
  document.body.classList.add('body_scroll_enable');
  document.body.classList.remove('body_scroll_disable');
}
const formSubmit = document.querySelector('.form__submit');
const nameForm = document.querySelector('.form__text-input_name');
const phoneForm = document.querySelector('.form__text-input_phone');
const errorForm = document.querySelector('.form-modal');
const requestSubmit = document.querySelector('.request__submit');
const nameRequest = document.querySelector('.request__input_name');
const phoneRequest = document.querySelector('.request__input_phone');
const notices = errorForm.children[0];

const showError = (name, phone) => {
  name.value ? notices.children[0].classList.add('form-modal__item_hidden') : notices.children[0].classList.remove('form-modal__item_hidden');
  phone.value ?  notices.children[1].classList.add('form-modal__item_hidden') :  notices.children[1].classList.remove('form-modal__item_hidden');
  notices.children[2].classList.add('form-modal__item_hidden');
  errorForm.classList.remove('form-modal_success');
  errorForm.classList.remove('form-modal_hidden');
  setTimeout(() => errorForm.classList.add('form-modal_hidden'), 2500);
}
const showSucces = () => {
  notices.children[0].classList.add('form-modal__item_hidden');
  notices.children[1].classList.add('form-modal__item_hidden');
  notices.children[2].classList.remove('form-modal__item_hidden');
  errorForm.classList.add('form-modal_success');
  errorForm.classList.remove('form-modal_hidden');
  setTimeout(() => errorForm.classList.add('form-modal_hidden'), 2500);
}
formSubmit.addEventListener('click', () => {
  if(!nameForm.value || !phoneForm.value) showError(nameForm, phoneForm);
  else showSucces();
});
requestSubmit.addEventListener('click', () => {
  if(!nameRequest.value || !phoneRequest.value) showError(nameRequest, phoneRequest);
  else showSucces();
})
phoneForm.addEventListener('input', () => {
   phoneForm.value = phoneForm.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
})
phoneRequest.addEventListener('input', () => {
  phoneRequest.value = phoneRequest.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
})