export default function decorate(block) {
  console.log(block);
  //  queda prohibido usar sufijos de tipo -container y -wraper
  const cardContent = block.querySelector(':scope > div');
  if (cardContent) {
    cardContent.classList.add('card-content');
  }

  const lastParagraph = cardContent.querySelector(':scope > div:last-child > p:last-child');
  if (lastParagraph) {
    lastParagraph.classList.add('last-paragraph');
  }
}
