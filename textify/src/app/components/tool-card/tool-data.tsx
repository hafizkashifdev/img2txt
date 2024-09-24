import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faImage, faFileWord, faFilePdf, faFileText, faExchangeAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';

interface ToolData {
  title: string;
  icon: IconDefinition;
  description: string; 
  details:any // Added description field
}

const toolsData: ToolData[] = [
  {
    title: 'Image To Text',
    icon: faImage,
    description: 'Extract text from images quickly and accurately.',
    details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Image to text converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert  images to Text?</p>
        <p style={{ fontSize: '16px' }}>
        Extracting text from an image is very easy using our tool.
        </p>
        <p style={{ fontSize: '16px' }}>
        Do not waste your time converting JPGs or PNGs to text manually. Our tool will not take more than a minute to convert an image to text.
        </p>
<p> Our picture to text converter is a free online text extraction tool that converts images into text in no time with 100% accuracy</p>
<p> It uses advanced AI technology to get the text from images with a single click.</p>
        <h3 style={{ fontWeight: 'bold' }}>How to convert image to text document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jpg to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Jpg To Word',
    icon: faFileWord,
    description: 'Convert JPG images to editable Word documents.',
    details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Jpg to Word Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert JPG images to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Jpg to Word converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert jpg to Word document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jpg to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Pdf To Text',
    icon: faFilePdf,
    description: 'Extract text from PDF documents in a simple and efficient way.',
    details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
         <p style={{ fontSize: '16px' }}>
        Our online PDF to text converter allows you to easily convert PDF files to text files using advanced optical character recognition (OCR) technology. 

It will extract text from PDF and give the option to copy and download the converted text.
        </p>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>How to convert PDF to Text?</h2>
        <p style={{ fontSize: '16px' }}>To convert PDF to text free online, simply follow the below easy steps:</p>
        <p style={{ fontSize: '16px' }}>
        Our online PDF to text converter allows you to easily convert PDF files to text files using advanced optical character recognition (OCR) technology. 

It will extract text from PDF and give the option to copy and download the converted text.
        </p>
       

        <h3 style={{ fontWeight: 'bold' }}>To convert PDF to text free online, simply follow the below easy steps:</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Drag and Drop a file from the system.</li>
          <li>Or, upload or paste the PDF file in the input box</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the  button. <b>Convert</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Pdf to text Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this Pdf to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Text To Pdf',
    icon: faFilePdf,
    description: 'Convert text files into PDF format for easy sharing and printing.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
         <p style={{ fontSize: '16px' }}>
        Our online PDF to text converter allows you to easily convert PDF files to text files using advanced optical character recognition (OCR) technology. 

It will extract text from PDF and give the option to copy and download the converted text.
        </p>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Text to Pdf Converter</h2>
        <p style={{ fontSize: '16px' }}>How to convert PDF to Text?</p>

        <h3 style={{ fontWeight: 'bold' }}> To convert PDF to text free online, simply follow the below easy steps:</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Drag and Drop a file from the system.</li>
          <li>Or, upload or paste the PDF file in the input box</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Convert </b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jpg to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Text To Word',
    icon: faFileWord,
    description: 'Convert text files into editable Word documents.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Text To Word Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert Text To Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This onlineText To Word converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert Text To Word document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features ofText To Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jpg to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Invert Image',
    icon: faExchangeAlt,
    description: 'Invert the colors of an image to create a negative effect.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Invert Image Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert Invert Image to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Jpg to Word converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert jpg to Word document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jpg to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Text To Image',
    icon: faFileText,
    description: 'Turn your text into an image format for easy use and sharing.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Text To Image Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert Text to editable Image  files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Text To Image converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert Text To Image document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jText To Image  converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Image To Pdf',
    icon: faFilePdf,
    description: 'Convert images into PDF format for easy storage and sharing.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Image To Pdf Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert JPG images to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Image To Pdfconverter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert Image Translator document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this Image Translator OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Image Translator',
    icon: faLanguage,
    description: 'Translate text within images to your preferred language.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Image Translator Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert JPG images to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Jpg to Word converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert jpg to Word document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this jpg to Word OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'QR Code Scanner',
    icon: faFileText,
    description: 'Scan QR codes quickly and easily with our tool.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>QR Code Scanner Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert JPG images to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online QR Code Scanner converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert QR Code Scanner document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this QR Code Scanner OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Word To Pdf',
    icon: faFileWord,
    description: 'Convert Word documents into PDF format for secure sharing.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Word To Pdf Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert JPG images to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Word To Pdf  converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert Word To Pdf  document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this Word To Pdf  OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Pdf To Jpg',
    icon: faFilePdf,
    description: 'Convert PDF documents into JPG images for flexible use.',
        details: (
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Pdf To Jpg  Converter</h2>
        <p style={{ fontSize: '16px' }}>Want to convert JPG images to editable Word files?</p>
        <p style={{ fontSize: '16px' }}>
          This online Pdf To Jpg  converter will convert the image text to an editable Word (Docx) document. You can convert the JPG/JPEG, JPE, JFIF, JIF, JFI, BMP, PNG, and TIFF files with this image to Word converter with a single click.
        </p>
        <p style={{ fontSize: '16px' }}>
          It can be a time-consuming task to write the text manually, so you can use this photo to Word converter and make your text editable.
        </p>

        <h3 style={{ fontWeight: 'bold' }}>How to convert Pdf To Jpg  document(Docx)?</h3>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Upload or drop an image into the input field.</li>
          <li>You can also upload an image using a URL.</li>
          <li>Verify the reCAPTCHA.</li>
          <li>Click the <b>Submit</b> button.</li>
        </ol>

        <h3 style={{ fontWeight: 'bold' }}>Key Features of Jpeg to Word Converter</h3>
        <p style={{ fontSize: '16px' }}>Some key features of this Pdf To Jpg  OCR converter are listed below:</p>

        <h4 style={{ fontWeight: 'bold' }}>Multiple uploading options</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Upload a file directly from your device.</li>
          <li>Drag and drop the image.</li>
          <li>You can retrieve the image from a URL.</li>
        </ul>
      </div>
    ),
  },
];

export default toolsData;
