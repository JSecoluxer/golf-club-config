import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  Switch,
} from '@mui/material';

export default function FeaturesComponent({ data, onChange }) {
  const [expanded, setExpanded] = useState({
    onlineBooking: true,
    memberManagement: true,
    caddieManagement: true,
    pointOfSale: true,
    courseManagement: true,
  });

  const handleCheckboxChange = (event) => {
    onChange(event);

    setExpanded({
      ...expanded,
      [event.target.name.split('.').pop()]: event.target.checked,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h6" color="black" sx={{ marginBottom: 2 }}>
        Features
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          padding: 1,
          border: '1px solid black',
          mb: 2,
        }}
      >
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={data.system.features.courseManagement}
                onChange={handleCheckboxChange}
                name="system.features.courseManagement"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#005A2B',
                    '&:hover': {
                      backgroundColor: 'rgba(253, 184, 19, 0.08)',
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#005A2B !important',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#005A2B',
                  },
                }}
              />
            }
            label="Course Management"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
        {expanded.courseManagement && (
          <Grid item xs={12} sx={{ pl: 4, pt: 0 }}>
            <Box sx={{ borderLeft: '2px solid #ddd', pl: 2, py: 1 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ mb: 2, fontSize: '18px' }}>Course Management Settings</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="firstTeeTime" />}
                    label="First Tee Time"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="lastTeeTime" />}
                    label="Last Tee Time"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="teeTimeInterval" />}
                    label="Tee Time Interval"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="lateArrivalTime" />}
                    label="Late Arrival Time"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="weekdaysMinGroupPlayers" />}
                    label="Weekdays min number of players in a group"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="weekendMinGroupPlayers" />}
                    label="Weekend min number of players in a group"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          padding: 1,
          border: '1px solid black',
          mb: 2,
        }}
      >
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={data.system.features.caddieManagement}
                onChange={handleCheckboxChange}
                name="system.features.caddieManagement"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#005A2B',
                    '&:hover': {
                      backgroundColor: 'rgba(253, 184, 19, 0.08)',
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#005A2B !important',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#005A2B',
                  },
                }}
              />
            }
            label="Caddie Management"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
        {expanded.caddieManagement && (
          <Grid item xs={12} sx={{ pl: 4, pt: 0 }}>
            <Box sx={{ borderLeft: '2px solid #ddd', pl: 2, py: 1 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ mb: 2, fontSize: '18px' }}>Caddie Management Settings</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="caddieDutyStatus" />}
                    label="Duty Status"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="caddieScheduling" />}
                    label="Caddie Scheduling"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="caddieProfiles" />}
                    label="Caddie Profiles"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="caddieTiers" />}
                    label="Caddie Tiers"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        spacing={7}
        sx={{
          justifyContent: 'flex-start',
          padding: 1,
          border: '1px solid black',
          // mb: 2,
        }}
      >
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={data.system.features.onlineBooking}
                onChange={handleCheckboxChange}
                name="system.features.onlineBooking"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#005A2B',
                    '&:hover': {
                      backgroundColor: 'rgba(253, 184, 19, 0.08)',
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#005A2B !important',
                  },
                  '& .MuiSwitch-track': {
                    backgroundColor: '#005A2B',
                  },
                }}
              />
            }
            label="Online Booking"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
        {expanded.onlineBooking && (
          <Grid item xs={12} sx={{ pl: 4, pt: 0 }}>
            <Box sx={{ borderLeft: '2px solid #ddd', pl: 2, py: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 2, color: 'rgba(0, 0, 0, 0.6)', fontSize: '18px' }}>
                Online Booking Settings
              </Typography>
              <TextField
                fullWidth
                label="Booking URL"
                variant="outlined"
                size="small"
                sx={{ mb: 2 }}
                name="bookingUrl"
              // onChange={...}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Payment Options</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="creditCard" />}
                    label="Credit Card"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="paypal" />}
                    label="PayPal"
                    sx={{ color: 'rgba(0, 0, 0, 0.6)' }}
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
