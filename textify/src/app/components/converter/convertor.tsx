'use client';

import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import styles from './Converter.module.css';
import Image from 'next/image';
import ToolCards from '../tool-card/tool-card';

const Converter = ({ title, description }: { title: string; description: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <Box className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

      <div className={styles.uploadBox}>
        <div className={styles.imageUploadArea}>
          <p>Drop, Upload or Paste image</p>
          <p className={styles.supportedFormats}>
            Supported formats: JPG, PNG, GIF, JFIF (JPEG), HEIC, PDF
          </p>

          {/* File Upload Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.uploadInput}
            style={{ display: 'none' }} // Hide the input
          />
          <button
            className={styles.uploadButton}
            onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
          >
            Browse
          </button>
        </div>

        {/* Show uploaded image */}
        {selectedImage && (
          <div className={styles.imagePreview}>
            <p>Preview:</p>
            <div className={styles.imageWrapper}>
              {/* Using next/image component for optimized image rendering */}
              <Image
                src={selectedImage}
                alt="Uploaded"
                width={300}  // You can adjust the width and height as needed
                height={300}
                className={styles.previewImage}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <Button variant="contained" color="secondary" onClick={handleClearImage}>
                Clear
              </Button>
              <Button variant="contained" color="secondary">
                Convert
              </Button>
            </Box>
          </div>
        )}
      </div>

      <p className={styles.privacyNotice}>
        *Your privacy is protected! No data is transmitted or stored.
      </p>
    </Box>

</>
  );
};

export default Converter;