const elems = document.querySelectorAll('.part');

elems.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('part-active');
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
