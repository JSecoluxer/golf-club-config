import { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const HolesPage = ({ holes, onUpdate }) => {
  const [expanded, setExpanded] = useState(false);

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
  };

  const handleRemoveHole = (holeIndex) => {
    if (holes.length <= 1) return;
    const updatedHoles = holes.filter((_, i) => i !== holeIndex);
    const renumberedHoles = updatedHoles.map((hole, i) => ({
      ...hole,
      holeNumber: i + 1,
    }));
    onUpdate(renumberedHoles);
    setExpanded(false);
  };

  return (
    <Box sx={{ p: 2, overflowY: 'auto' }}>
      <Typography variant="h5" color="white" sx={{ mb: 2 }}>
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
      {holes.map((hole, holeIndex) => (
        <Accordion
          key={hole.holeNumber}
          expanded={expanded === `panel${holeIndex}`}
          onChange={handleAccordionChange(`panel${holeIndex}`)}
          sx={{ mb: 1, backgroundColor: 'rgba(255,255,255,0.95)' }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: '#005A2B' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Typography sx={{ flexShrink: 0, fontWeight: 'bold', fontSize: '18px', flexGrow: 1 }}>
                Hole #{hole.holeNumber} - Par {hole.par}
              </Typography>
              <Button
                variant="text"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveHole(holeIndex);
                }}
                sx={{ ml: 2 }}
              >
                Delete
              </Button>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Map URL"
                  value={hole.map.url}
                  onChange={(e) => handleChange(holeIndex, 'map', { ...hole.map, url: e.target.value })}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
                  Tee Box
                </Typography>
                {hole.tees.map((tee, teeIndex) => (
                  <Grid container spacing={2} key={teeIndex} sx={{ mb: 1 }}>
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
                      >
                        Remove
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                <Button
                  variant="contained"
                  onClick={() => handleAddTee(holeIndex)}
                  sx={{ mt: 1, backgroundColor: '#005A2B', color: 'white' }}
                >
                  Add Tee Box
                </Button>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default HolesPage;
