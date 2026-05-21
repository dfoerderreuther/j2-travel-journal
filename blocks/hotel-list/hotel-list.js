export default function decorate(block) {
  const cards = [...block.querySelectorAll('.hotel-card')];
  if (!cards.length) {
    block.textContent = 'No hotels to display.';
    return;
  }
  cards.forEach((card) => {
    const img = card.querySelector('img');
    if (img) img.setAttribute('loading', 'lazy');
  });
}
