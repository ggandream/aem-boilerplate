export default function decorate(block) {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.type = 'button';

  const btnP = block.querySelector(':scope > div div:nth-child(2 of div) p:last-child:has(strong)');
  const btnLabel = btnP.textContent;
  btnP.replaceWith(btn);
  btn.textContent = btnLabel;

  const btnGoBack = document.createElement('button');

  if (btn) {
    btn.addEventListener('click', () => {
      block.firstElementChild.classList.add('flip');
    });
  }
}
