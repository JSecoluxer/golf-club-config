'use client';

import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import FeaturesComponent from './FeaturesComponent';
import CompletePage from './CompletePage';
import HolesPage from './HolesPage';

// Initial JSON data structure
const initialData = {
  tenantId: 'course-A',
  name: 'Ecolux Country Golf Club',
  logoUrl: '/logos/ecolux.png',
  website: 'https://abc.example.com',
  address: 'Kaohsiung City',
  phone: '07-12345678',
  operation: {
    holeCount: 18,
    currency: 'TWD',
    currencySymbol: 'NT$',
    pricing: {
      weekday: { regular: 2200, member: 1800 },
      weekend: { regular: 3000, member: 2500 },
      cartFee: 800,
      caddieFee: 1200,
    },
    bookingRules: {
      minDaysInAdvance: 1,
      maxDaysInAdvance: 30,
      allowGuestBooking: true,
    },
  },
  system: {
    features: {
      onlineBooking: true,
      memberManagement: true,
      pointOfSale: false,
      caddieManagement: true,
      courseManagement: true,
    },
    printer: {
      name: 'EPSON-TM-T88V',
      type: 'receipt',
    },
  },
  customTexts: {
    welcomeMessage: 'Welcome to Ecolux Country Golf Club!',
    bookingPolicy: 'Please check in 30 mins before your tee time. For cancellations, please notify us at least 24 hours in advance.',
  },
  holes: [
    {
      "holeNumber": 1,
      "par": 4,
      "handicap": 11,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-1.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 410 },
        { "name": "White", "yardage": 385 },
        { "name": "Red", "yardage": 350 }
      ],
    },
    {
      "holeNumber": 2,
      "par": 5,
      "handicap": 5,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-2.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 520 },
        { "name": "White", "yardage": 490 },
        { "name": "Red", "yardage": 450 }
      ],
    },
    {
      "holeNumber": 3,
      "par": 3,
      "handicap": 17,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-3.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 180 },
        { "name": "White", "yardage": 165 },
        { "name": "Red", "yardage": 140 }
      ],
    },
    {
      "holeNumber": 4,
      "par": 4,
      "handicap": 3,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-4.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 440 },
        { "name": "White", "yardage": 415 },
        { "name": "Red", "yardage": 380 }
      ],
    },
    {
      "holeNumber": 5,
      "par": 4,
      "handicap": 1,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-5.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 450 },
        { "name": "White", "yardage": 420 },
        { "name": "Red", "yardage": 390 }
      ],
    },
    {
      "holeNumber": 6,
      "par": 3,
      "handicap": 13,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-6.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 195 },
        { "name": "White", "yardage": 175 },
        { "name": "Red", "yardage": 150 }
      ],
    },
    {
      "holeNumber": 7,
      "par": 5,
      "handicap": 7,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-7.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 540 },
        { "name": "White", "yardage": 510 },
        { "name": "Red", "yardage": 470 }
      ],
    },
    {
      "holeNumber": 8,
      "par": 4,
      "handicap": 9,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-8.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 400 },
        { "name": "White", "yardage": 370 },
        { "name": "Red", "yardage": 340 }
      ],
    },
    {
      "holeNumber": 9,
      "par": 4,
      "handicap": 15,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-9.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 420 },
        { "name": "White", "yardage": 390 },
        { "name": "Red", "yardage": 360 }
      ],
    },
    {
      "holeNumber": 10,
      "par": 4,
      "handicap": 2,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-10.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 435 },
        { "name": "White", "yardage": 405 },
        { "name": "Red", "yardage": 370 }
      ],
    },
    {
      "holeNumber": 11,
      "par": 4,
      "handicap": 8,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-11.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 415 },
        { "name": "White", "yardage": 380 },
        { "name": "Red", "yardage": 350 }
      ],
    },
    {
      "holeNumber": 12,
      "par": 3,
      "handicap": 18,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-12.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 170 },
        { "name": "White", "yardage": 155 },
        { "name": "Red", "yardage": 130 }
      ],
    },
    {
      "holeNumber": 13,
      "par": 5,
      "handicap": 4,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-13.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 550 },
        { "name": "White", "yardage": 520 },
        { "name": "Red", "yardage": 480 }
      ],
    },
    {
      "holeNumber": 14,
      "par": 4,
      "handicap": 14,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-14.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 405 },
        { "name": "White", "yardage": 375 },
        { "name": "Red", "yardage": 345 }
      ],
    },
    {
      "holeNumber": 15,
      "par": 4,
      "handicap": 10,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-15.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 425 },
        { "name": "White", "yardage": 395 },
        { "name": "Red", "yardage": 365 }
      ],
    },
    {
      "holeNumber": 16,
      "par": 3,
      "handicap": 16,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-16.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 160 },
        { "name": "White", "yardage": 145 },
        { "name": "Red", "yardage": 120 }
      ],
    },
    {
      "holeNumber": 17,
      "par": 5,
      "handicap": 6,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-17.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 530 },
        { "name": "White", "yardage": 500 },
        { "name": "Red", "yardage": 460 }
      ],
    },
    {
      "holeNumber": 18,
      "par": 4,
      "handicap": 12,
      "map": {
        "type": "svg",
        "url": "/images/mirama-a/hole-18.svg"
      },
      "tees": [
        { "name": "Blue", "yardage": 430 },
        { "name": "White", "yardage": 400 },
        { "name": "Red", "yardage": 370 }
      ],
    },
  ],
};

// Form for Step 1: Basic Information
const Step1Form = ({ data, onChange }) => (
  <>
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h6" color="black" sx={{ marginBottom: 2 }}>
        Basic Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tenant ID"
            name="tenantId"
            value={data.tenantId}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Club Name"
            name="name"
            value={data.name}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={data.address}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={data.phone}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Official Website"
            name="website"
            value={data.website}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Brand Logo"
            name="logo"
            value={data.logoUrl}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '8px',
        marginTop: 2,
      }}
    >
      <Typography variant="h6" color="black" sx={{ marginBottom: 2 }}>
        Custom Texts
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Welcome Message"
            name="welcomeMessage"
            value={data.customTexts.welcomeMessage}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            multiline
            fullWidth
            label="Booking Policy"
            name="bookingPolicy"
            value={data.customTexts.bookingPolicy}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  </>
);

// Form for Step 2: Operation & Pricing
const Step2Form = ({ data, onChange }) => (
  <>
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h6" color="black" sx={{ marginBottom: 5 }}>
        Pricing
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', minHeight: '180px' }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Weekday Regular (NT$)"
            name="operation.pricing.weekday.regular"
            type="number"
            value={data.operation.pricing.weekday.regular}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Weekday Member (NT$)"
            name="operation.pricing.weekday.member"
            type="number"
            value={data.operation.pricing.weekday.member}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Weekend Regular (NT$)"
            name="operation.pricing.weekend.regular"
            type="number"
            value={data.operation.pricing.weekend.regular}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Weekend Member (NT$)"
            name="operation.pricing.weekend.member"
            type="number"
            value={data.operation.pricing.weekend.member}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cart Fee (NT$)"
            name="operation.pricing.cartFee"
            type="number"
            value={data.operation.pricing.cartFee}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Caddie Fee (NT$)"
            name="operation.pricing.caddieFee"
            type="number"
            value={data.operation.pricing.caddieFee}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
      </Grid>
    </Box>
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '8px',
        marginTop: 2,
      }}
    >
      <Typography variant="h6" color="black" sx={{ marginBottom: 5 }}>
        Booking Rules
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Min Days In Advance"
            name="operation.bookingRules.minDaysInAdvance"
            type="number"
            value={data.operation.bookingRules.minDaysInAdvance}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Max Days In Advance"
            name="operation.bookingRules.maxDaysInAdvance"
            type="number"
            value={data.operation.bookingRules.maxDaysInAdvance}
            onChange={onChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ justifyContent: 'flex-start', padding: 2 }}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.operation.bookingRules.allowGuestBooking}
                onChange={onChange}
                name="operation.bookingRules.allowGuestBooking"
                sx={{ color: '#005A2B !important', }}
              />
            }
            label="Allow Guest Booking"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
      </Grid>
    </Box>
  </>
);

// Form for Step 3: Booking Rules
const Step3Form = ({ data, onChange }) => (
  <>
    <FeaturesComponent data={data} onChange={onChange} />
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: '8px',
        marginTop: 2,
      }}
    >
      <Typography variant="h6" color="black" sx={{ marginBottom: 2 }}>
        Printer
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Name"
            name="printerName"
            value={data.system.printer.name}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Type"
            name="printerType"
            value={data.system.printer.type}
            onChange={onChange}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              '& .MuiInputLabel-root': { color: '#005A2B' },
              '& .MuiInputBase-input': { color: 'black' },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  </>
);

const getStepContent = (step, formData, handleChange, handleHolesUpdate) => {
  switch (step) {
    case 0:
      return <Step1Form data={formData} onChange={handleChange} />;
    case 1:
      return <Step2Form data={formData} onChange={handleChange} />;
    case 2:
      return <HolesPage holes={formData.holes} onUpdate={handleHolesUpdate} />;
    case 3:
      return <Step3Form data={formData} onChange={handleChange} />;
    default:
      return 'Unknown step';
  }
};

const steps = ['Basic Info', 'Operation', 'Holes', 'System'];

export default function WizardForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newFormData = { ...formData };
    let currentLevel = newFormData;
    const keys = name.split('.');

    for (let i = 0; i < keys.length - 1; i++) {
      if (!currentLevel[keys[i]]) {
        currentLevel[keys[i]] = {};
      }
      currentLevel = currentLevel[keys[i]];
    }

    currentLevel[keys[keys.length - 1]] = type === 'checkbox' ? checked : value;
    setFormData(newFormData);
  };

  const handleHolesUpdate = (updatedHoles) => {
    setFormData((prevData) => ({
      ...prevData,
      holes: updatedHoles,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log('Final JSON Data:', JSON.stringify(formData, null, 2));
    setActiveStep(steps.length);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData(initialData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#005A2B',
        color: 'white',
        p: 2,
        width: '100%'
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          p: 4,
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          height: '95vh',
        }}
      >
        {activeStep === steps.length ? (
          <CompletePage onReset={handleReset} />
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom color="white" sx={{ mb: 4, fontWeight: 'bold' }}>
              Golvana Setup Wizard
            </Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 4, px: 6 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      '& .MuiStepLabel-label': {
                        color: '#a8a8a8ff',
                        fontSize: '1rem',
                        '&.Mui-active': { color: '#FDB813', fontWeight: 'bold' },
                        '&.Mui-completed': { color: 'white' },
                        '&.Mui-disabled': { color: '#a8a8a8ff' },
                      },
                      '& .MuiStepIcon-root': {
                        color: '#a8a8a8ff',
                        fontSize: '2rem',
                        '&.Mui-active': { color: '#FDB813' },
                        '&.Mui-completed': { color: 'white' },
                      },
                      '& .MuiStepIcon-text': {
                        // fill: '#005A2B',
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ px: 2, flexGrow: 1, overflowY: activeStep !== 2 ? 'auto' : 'initial' }}>{getStepContent(activeStep, formData, handleChange, handleHolesUpdate)}</Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3, justifyContent: 'space-between' }}>
              {activeStep > 0 && (<Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: 'white', border: '1px solid white' }}
              >
                Back
              </Button>)}
              <Box sx={{ flex: '1 1 auto' }} />
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: '#FDB813', '&:hover': { backgroundColor: '#E0A300' } }}>
                  Confirm
                </Button>
              ) : (
                <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: '#FDB813', '&:hover': { backgroundColor: '#E0A300' } }}>
                  Next
                </Button>
              )}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
