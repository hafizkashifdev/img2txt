import React, { useState, useEffect } from 'react';
import { Grid, Box, LinearProgress } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tool-card.module.css';
import toolsData from './tool-data';

interface Tool {
  title: string;
  description: string;
  details: JSX.Element | string; // Allow string or JSX
}

const ToolCards = ({ onToolClick }: { onToolClick: (tool: Tool) => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ width: '100%', mt: 2, height: '100vh' }}>
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {toolsData.map((tool, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <div
            className={styles.card}
            onClick={() => onToolClick({ 
              title: tool.title, 
              description: tool.description, 
              details: tool.details 
            })}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={tool.icon} className={styles.icon} />
            <h3>{tool.title}</h3>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolCards;
