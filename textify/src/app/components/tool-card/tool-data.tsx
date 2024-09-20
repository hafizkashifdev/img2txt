import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faImage, faFileWord, faFilePdf, faFileText, faExchangeAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';

interface ToolData {
  title: string;
  icon: IconDefinition;
  description: string;  // Added description field
}

const toolsData: ToolData[] = [
  {
    title: 'Image To Text',
    icon: faImage,
    description: 'Extract text from images quickly and accurately.',
  },
  {
    title: 'Jpg To Word',
    icon: faFileWord,
    description: 'Convert JPG images to editable Word documents.',
  },
  {
    title: 'Pdf To Text',
    icon: faFilePdf,
    description: 'Extract text from PDF documents in a simple and efficient way.',
  },
  {
    title: 'Text To Pdf',
    icon: faFilePdf,
    description: 'Convert text files into PDF format for easy sharing and printing.',
  },
  {
    title: 'Text To Word',
    icon: faFileWord,
    description: 'Convert text files into editable Word documents.',
  },
  {
    title: 'Invert Image',
    icon: faExchangeAlt,
    description: 'Invert the colors of an image to create a negative effect.',
  },
  {
    title: 'Text To Image',
    icon: faFileText,
    description: 'Turn your text into an image format for easy use and sharing.',
  },
  {
    title: 'Image To Pdf',
    icon: faFilePdf,
    description: 'Convert images into PDF format for easy storage and sharing.',
  },
  {
    title: 'Image Translator',
    icon: faLanguage,
    description: 'Translate text within images to your preferred language.',
  },
  {
    title: 'QR Code Scanner',
    icon: faFileText,
    description: 'Scan QR codes quickly and easily with our tool.',
  },
  {
    title: 'Word To Pdf',
    icon: faFileWord,
    description: 'Convert Word documents into PDF format for secure sharing.',
  },
  {
    title: 'Pdf To Jpg',
    icon: faFilePdf,
    description: 'Convert PDF documents into JPG images for flexible use.',
  },
];

export default toolsData;
