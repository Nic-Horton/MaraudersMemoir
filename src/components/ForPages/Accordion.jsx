import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Box from '@mui/material/Box';

function AccordionJSX({accordionInfo}) {

  return (
    <Box>
    {accordionInfo.filter((accordion)=> accordion.value)
    .map((accordion,index) => {
      const isDisabled = accordion.value.length === 0;
      return(
      <Accordion disabled={isDisabled} key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${accordion.name.replace(/\s+/g, "-")}-content`}
          id={`${accordion.name.replace(/\s+/g, "-")}-header`}
        >
          {accordion.name}
        </AccordionSummary>
        <AccordionDetails>
          {accordion.value.map((info, index)=>{
            return(
              <List key={`key-${index}`} dense>
                <ListItem>
                  <ListItemIcon>
                    <ElectricBoltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={info}
                  />
                </ListItem>
              </List>
            )
          })}
        </AccordionDetails>
      </Accordion>
      )
    })}
    </Box>
  )
}

export default AccordionJSX