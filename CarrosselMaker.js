const CARROSSEL_ID = 'skill-carrossel';
const skillCarrossel = document.getElementById(CARROSSEL_ID);

function MakeIndicator(numberOfSkills) {
  const carouselIndicators = document.createElement('div');
  carouselIndicators.className = 'carousel-indicators';

  for (let index = 0; index < numberOfSkills; index += 1) {
    const indicator = document.createElement('button');
    indicator.type = 'button';
    indicator.setAttribute('data-bs-target', `#${CARROSSEL_ID}`);
    indicator.setAttribute('data-bs-slide-to', `${index}`);
    indicator.setAttribute('aria-label', `Slide ${index + 1}`);
    if (index === 0) {
      indicator.classNames = "active";
      indicator.setAttribute('aria-current', "true");
    }
    carouselIndicators.appendChild(indicator);
  }
  return carouselIndicators;
}

function MakeCarouselInner(skills) {
  const carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner';

  skills.forEach((skill, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = index === 0 ? 'carousel-item active' : 'carousel-item';
    carouselItem.setAttribute('data-bs-interval', '10000');

    const carouselImage = document.createElement('div');
    carouselImage.style.backgroundImage = `url(${skill.image})`;
    // carouselImage.src = skill.image;
    carouselImage.className = 'skills-image';
    carouselItem.appendChild(carouselImage);

    const carouselItemTitle = document.createElement('h5');
    carouselItemTitle.innerText = skill.name;
    carouselItem.appendChild(carouselItemTitle);

    const carouselParagraph = document.createElement('p');
    carouselParagraph.innerText = skill.description;
    carouselItem.appendChild(carouselParagraph);

    carouselInner.appendChild(carouselItem);
  });
  return carouselInner;
}

function MakeButtonSlide(direction, nameButton) {
  const button = document.createElement('button');
  button.className = `carousel-control-${direction}`;
  button.type = 'button';
  button.setAttribute('data-bs-target', `#${CARROSSEL_ID}`);
  button.setAttribute('data-bs-slide', direction);

  const spanVisible = document.createElement('span');
  spanVisible.className = `carousel-control-${direction}-icon`;
  spanVisible.setAttribute('aria-hidden', 'true');
  button.appendChild(spanVisible);

  const spanInvisible = document.createElement('span');
  spanInvisible.className = `visually-hidden`;
  spanInvisible.innerText = nameButton;
  button.appendChild(spanInvisible);

  return button;
};

function MakeCarousel(skills) {
  skillCarrossel.appendChild(MakeIndicator(skills.length));

  skillCarrossel.appendChild(MakeCarouselInner(skills));
  
  skillCarrossel.appendChild(MakeButtonSlide('prev', 'Previous'));
  
  skillCarrossel.appendChild(MakeButtonSlide('next', 'Next'));
}

export default MakeCarousel;
