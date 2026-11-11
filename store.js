const tasks = Array.from(document.querySelectorAll('.preview-main input[type="checkbox"]'));
const status = document.querySelector('#demo-status');

function updatePreview() {
  const done = tasks.filter(task => task.checked).length;
  status.textContent = `${done} de ${tasks.length} passos marcados`;
}

tasks.forEach(task => task.addEventListener('change', updatePreview));
updatePreview();

const supportDialog = document.querySelector('#support-dialog');
const supportButton = document.querySelector('#support-button');
const supportDownload = document.querySelector('#support-download');

supportButton.addEventListener('click', () => supportDialog.showModal());
supportDownload.addEventListener('click', () => supportDialog.close());

const pixCode = document.querySelector('#pix-code');
const pixStatus = document.querySelector('#pix-status');
document.querySelector('#copy-pix').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pixCode.value);
    pixStatus.textContent = 'Código copiado! Cole na opção Pix Copia e Cola do seu banco.';
  } catch {
    pixCode.closest('details').open = true;
    pixCode.focus();
    pixCode.select();
    pixStatus.textContent = 'Selecione e copie o código abaixo para usar no seu banco.';
  }
});
