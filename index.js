const inputXml = document.getElementById('select-xml');
const inputXsl = document.getElementById('select-xsl');
const selectedXml = document.getElementById('selected-xml');
const selectedXsl = document.getElementById('selected-xsl');
const previewToIframe = document.getElementById('preview-to-iframe');
const writeToPage = document.getElementById('write-to-page');
const iframe = document.querySelector('iframe');
const files = [];

inputXml.addEventListener('change', handleFile);
inputXsl.addEventListener('change', handleFile);
previewToIframe.addEventListener('click', handleConversion);
writeToPage.addEventListener('click', handleConversion);

// Push uploaded file into files array
function handleFile() {
  const fileList = this.files;
  const file = fileList[0];

  // Display the current uploaded file next to its input field
  if (this.id === 'select-xml') {
    selectedXml.textContent = file.name;
  } else {
    selectedXsl.textContent = file.name;
  }

  files.push(file);
}

// Read uploaded XML and XSL files
// and convert them to HTML
function handleConversion() {
  const warning = document.getElementById('warning');
  const warningMessage = '<p id="warning">Make sure both XML and XSL files are selected</p>';
  const readXml = new FileReader();
  const readXsl = new FileReader();

  try {
    readXml.readAsDataURL(files[0]);
    readXsl.readAsDataURL(files[1]);
    if (warning !== null) warning.parentNode.removeChild(warning);
  } catch (error) {
    if (warning === null) {
      document.body.insertAdjacentHTML('afterbegin', warningMessage);
    }
  }

  readXml.onload = () => {
    readXsl.onload = () => {
      const xml = readXml.result;
      const xsl = readXsl.result;

      // Convert XML-XSL to HTML
      xth(xml, xsl, (html) => {
        if (this.id === 'preview-to-iframe') {
          // Preview converted HTML to iframe
          iframe.src = 'data:text/html;charset=UTF-8,' + encodeURIComponent(html);
        } else {
          // Write converted HTML to page
          // so you can stamp the page if needed
          document.write(html);
        }
      });
    }
  }
}
