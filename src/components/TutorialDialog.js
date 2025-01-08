import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Button, Dialog, DialogContent, DialogActions, Typography, DialogTitle } from '@mui/material';
import './TutorialDialog.css'; // Import CSS for responsive styling

const TutorialDialog = ({ open, onClose }) => {
  const [index, setIndex] = useState(0);

  const slides = [
    { image: '/logo2.jpg', text: 'Welcome to LingoXR' },
    { image: '/tutorial/1.png', text: 'Click on a node to open menu.' },
    { image: '/tutorial/2.png', text: 'Select the + icon to open the list of words.' },
    { image: '/tutorial/3.png', text: 'Select the word you want to add.' },
    { image: '/tutorial/4.png', text: 'Start learning now!' },
  ];

  const handleClose = () => {
    setIndex(0);
    onClose();
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Custom box shadow
            borderRadius: '8px', // Optional: Add rounded corners
            backgroundColor:"transparent"
          },
        }}
      >     
        <DialogTitle 
          style={{textAlign:"center", color:"white", letterSpacing:"2px", backgroundColor:"#050b12"}}
          PaperProps={{
            style: {
              // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Custom box shadow
              backgroundColor:"black"
            },
          }}  
        ><b>TUTORIAL</b></DialogTitle>
        <div className="tutorial-container">
          
          <SwipeableViews index={index} onChangeIndex={setIndex} className="swipeable-view">
            {slides.map((slide, i) => (
              <div key={i} className="tutorial-slide">
                <div className="left-column">
                  <img src={slide.image} alt={`Slide ${index + 1}`} className="tutorial-image" />
                </div>
                <div className="right-column">
                  <div>
                  <Typography  className="tutorial-text">
                    {slide.text}
                  </Typography>
                  </div>
                  <div className="button-container">
                    {index === slides.length - 1 ? (
                      <Button onClick={handleClose} variant="contained" color="primary">
                        Start LingoXR
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIndex((prev) => prev + 1)}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </SwipeableViews>
        </div>
    </Dialog>
  );
};

export default TutorialDialog;
