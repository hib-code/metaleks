const themeSelect = document.querySelector('#themeSelect');
const sizeSelect = document.querySelector('#sizeSelect');
const colorInput = document.querySelector('#colorInput');
const messageInput = document.querySelector('#messageInput');
const form = document.querySelector('#configForm');

const previewTheme = document.querySelector('#previewTheme');
const previewSize = document.querySelector('#previewSize');
const previewColor = document.querySelector('#previewColor');
const previewMessage = document.querySelector('#previewMessage');
const previewPlate = document.querySelector('#previewPlate');

function updatePreview() {
  previewTheme.textContent = themeSelect.value;
  previewSize.textContent = sizeSelect.value;
  previewColor.textContent = colorInput.value;
  previewMessage.textContent = messageInput.value || 'Ton message';
  previewPlate.style.borderColor = colorInput.value;
}

themeSelect.addEventListener('change', updatePreview);
sizeSelect.addEventListener('change', updatePreview);
colorInput.addEventListener('input', updatePreview);
messageInput.addEventListener('input', updatePreview);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const confirmation = `Merci ! Ton projet "${themeSelect.value}" en ${sizeSelect.value} a bien été envoyé.`;
  window.alert(confirmation);
});

updatePreview();
