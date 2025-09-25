import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Grid,
  IconButton,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const HolesPage = ({ holes, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  // Ref to store references to each hole's accordion for scrolling
  const holeRefs = useRef({});
  // State to trigger scrolling to a specific hole
  const [scrollToIndex, setScrollToIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (holeIndex, name, value) => {
    const updatedHoles = [...holes];
    updatedHoles[holeIndex] = {
      ...updatedHoles[holeIndex],
      [name]: value,
    };
    onUpdate(updatedHoles);
  };

  const handleTeeChange = (holeIndex, teeIndex, name, value) => {
    const updatedHoles = [...holes];
    const updatedTees = [...updatedHoles[holeIndex].tees];
    updatedTees[teeIndex] = {
      ...updatedTees[teeIndex],
      [name]: value,
    };
    updatedHoles[holeIndex].tees = updatedTees;
    onUpdate(updatedHoles);
  };

  const handleAddTee = (holeIndex) => {
    const updatedHoles = [...holes];
    updatedHoles[holeIndex].tees.push({ name: '', yardage: '' });
    onUpdate(updatedHoles);
  };

  const handleRemoveTee = (holeIndex, teeIndex) => {
    const updatedHoles = [...holes];
    updatedHoles[holeIndex].tees.splice(teeIndex, 1);
    onUpdate(updatedHoles);
  };

  const handleAddHole = () => {
    const newHoleNumber = holes.length > 0 ? Math.max(...holes.map(h => h.holeNumber)) + 1 : 1;
    const newHoles = [...holes, {
      holeNumber: newHoleNumber,
      par: 4,
      handicap: 1,
      map: { type: "svg", url: "" },
      tees: [{ name: "Blue", yardage: 0 }]
    }];
    onUpdate(newHoles);
    setExpanded(`panel${newHoles.length - 1}`);
    setScrollToIndex(newHoles.length - 1);
  };

  const handleDeleteHole = (holeIndex) => {
    if (holes.length <= 1) return;
    const updatedHoles = holes.filter((_, i) => i !== holeIndex);
    const renumberedHoles = updatedHoles.map((hole, i) => ({
      ...hole,
      holeNumber: i + 1,
    }));
    onUpdate(renumberedHoles);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (expanded === `panel${holeIndex}`) {
      setExpanded(false);
    }
  };

  // Effect to handle the scrolling once the new element is rendered
  useEffect(() => {
    if (scrollToIndex !== null && holeRefs.current[scrollToIndex]) {
      holeRefs.current[scrollToIndex].scrollIntoView({ behavior: 'smooth', block: 'end' });
      setScrollToIndex(null); // Reset the state to prevent future unwanted scrolls
    }
  }, [scrollToIndex]);

  return (
    <Box sx={{ px: 1 }}>
      <Typography variant="h6" color="white" sx={{ mb: 2 }}>
        Hole Settings ({holes.length} holes)
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          onClick={handleAddHole}
          startIcon={<AddIcon />}
          sx={{ backgroundColor: '#FDB813', '&:hover': { backgroundColor: '#E0A300' }, color: '#005A2B' }}
        >
          Add a Hole
        </Button>
      </Box>
      <Box ref={scrollContainerRef} sx={{ height: '50vh', overflowY: 'auto' }}>
        {holes.map((hole, holeIndex) => (
          <Accordion
            key={hole.holeNumber}
            // Attach a ref to the Accordion for scrolling
            ref={el => (holeRefs.current[holeIndex] = el)}
            expanded={expanded === `panel${holeIndex}`}
            onChange={handleAccordionChange(`panel${holeIndex}`)}
            sx={{
              mb: 1,
              backgroundColor: 'rgba(255,255,255,0.95)',
              '& .MuiAccordionSummary-root': {
                backgroundColor: expanded === `panel${holeIndex}` ? '#d6f9d6' : 'rgba(255,255,255,0.95)',
              }
            }}
          >
            <AccordionSummary
              component="div"
              expandIcon={<ExpandMoreIcon />}
              sx={{
                color: '#005A2B',
                '& .MuiAccordionSummary-content.Mui-expanded': {
                  margin: '8px 0',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Typography sx={{ flexShrink: 0, fontWeight: 'bold', fontSize: '18px' }}>
                  Hole #{hole.holeNumber}
                </Typography>
                <Chip label={`Par ${hole.par}`} color="success" sx={{ ml: 2 }} />
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                  color="error"
                  // Add a stopPropagation to prevent the accordion from expanding
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteHole(holeIndex);
                  }}
                  sx={{ ml: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ width: '15%' }}>
                  <TextField
                    fullWidth
                    label="Par"
                    type="number"
                    value={hole.par}
                    onChange={(e) => handleChange(holeIndex, 'par', Number(e.target.value))}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6} sx={{ width: '15%' }}>
                  <TextField
                    fullWidth
                    label="Handicap"
                    type="number"
                    value={hole.handicap}
                    onChange={(e) => handleChange(holeIndex, 'handicap', Number(e.target.value))}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sx={{ width: '60%'}}>
                  <TextField
                    fullWidth
                    label="Map URL"
                    value={hole.map.url}
                    onChange={(e) => handleChange(holeIndex, 'map', { ...hole.map, url: e.target.value })}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
                Tee Box
              </Typography>
              <Grid container spacing={2}>
                {hole.tees.map((tee, teeIndex) => (
                  <React.Fragment key={teeIndex}>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        label="Tee Color"
                        value={tee.name}
                        onChange={(e) => handleTeeChange(holeIndex, teeIndex, 'name', e.target.value)}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        label="Yardage"
                        type="number"
                        value={tee.yardage}
                        onChange={(e) => handleTeeChange(holeIndex, teeIndex, 'yardage', Number(e.target.value))}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveTee(holeIndex, teeIndex)}
                        fullWidth
                      >
                        Remove
                      </Button>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
              <Button
                variant="contained"
                onClick={() => handleAddTee(holeIndex)}
                sx={{ mt: 2, backgroundColor: '#005A2B', color: 'white' }}
              >
                Add Tee Box
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default HolesPage;
