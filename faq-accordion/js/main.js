const detailsElements = document.querySelectorAll('details');

if (detailsElements.length > 0) {
  detailsElements[0].open = true;
  const firstSummaryIcon = detailsElements[0].querySelector('summary .icon');
  if (firstSummaryIcon) {
    firstSummaryIcon.src = './assets/images/icon-minus.svg';
  }
}

detailsElements.forEach((detail) => {
  detail.addEventListener('toggle', (event) => {
    const summary = event.target.querySelector('summary');
    const icon = summary.querySelector('.icon');
    if (detail.open) {
      icon.src = './assets/images/icon-minus.svg';
    } else {
      icon.src = './assets/images/icon-plus.svg';
    }
  });
});