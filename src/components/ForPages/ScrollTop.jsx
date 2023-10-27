import React from 'react'
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 10, right: 10 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default ScrollTop