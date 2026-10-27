const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.request-product').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#contact select').value = 'Custom template';
  document.querySelector('#contact textarea').value = `I'd like to ask about a customized version of: ${button.dataset.product}.`;
  document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
}));
document.querySelector('#enquiry-form').addEventListener('submit', async event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Northline Digital Studio enquiry\nName: ${data.get('name')}\nInterested in: ${data.get('interest')}\nDetails: ${data.get('message')}`;
  const status = document.querySelector('#form-status');
  try {
    await navigator.clipboard.writeText(message);
    status.textContent = 'Your enquiry has been copied. Paste it into a Fiverr message, Upwork message or email to send it.';
  } catch {
    status.textContent = message + ' — Please select and copy this text to send your enquiry.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
