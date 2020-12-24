const elems = document.querySelectorAll('.part');
const desc = document.querySelector('.description');
const descClose = document.querySelector('.description-close');

elems.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('part-active');
    desc.style.display = 'block';
    elems.forEach((element) => {
      if (element.classList.contains('part-active')) {
        return;
      } else {
        element.classList.add('part-disabled');
      }
    });
  });
  element.addEventListener('mouseout', () => {
    element.classList.remove('part-active');
    elems.forEach((element) => {
      element.classList.remove('part-disabled');
    });
  });
});

descClose.addEventListener('click', () => {
  desc.style.display = 'none';
});
