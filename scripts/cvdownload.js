  // JavaScript code to handle the download button
  document.querySelector('.download-cv-btn').addEventListener('click', function() {
    // URL do arquivo no Google Drive
    var fileUrl = 'https://drive.google.com/uc?export=download&id=1ESEvC-l40ljurmtH51yM-3R9qZGalUDt';
    // Cria um link temporário
    var tempLink = document.createElement('a');
    tempLink.href = fileUrl;
    tempLink.setAttribute('download', 'curriculum-vitae.pdf'); // Define o nome do arquivo
    // Adiciona o link temporário ao corpo do documento
    document.body.appendChild(tempLink);
    // Simula o clique no link para iniciar o download
    tempLink.click();
    // Remove o link temporário do corpo do documento
    document.body.removeChild(tempLink);
  });
