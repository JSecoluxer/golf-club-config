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
import FeaturesComponent from '@/components/FeaturesComponent';

// Initial JSON data structure
const initialData = {
  tenantId: 'courseA',
  name: 'Mirama Country Golf Club',
  logoUrl: '/logos/miramar.png',
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
    welcomeMessage: 'Welcome to Mirama Country Golf Club!',
    bookingPolicy: 'Please check in 30 mins before your tee time. For cancellations, please notify us at least 24 hours in advance.',
  },
};

// Form for Step 1: Basic Information
const Step1Form = ({ data, onChange }) => (
  <>
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3, // 添加內邊距讓內容與邊緣有空間
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
            label="Club Name"
            name="name"
            value={data.name}
            onChange={onChange}
            margin="normal"
            sx={{
              // 欄位邊框改為深色，配合白色背景
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#005A2B' },
                '&:hover fieldset': { borderColor: '#005A2B' },
                '&.Mui-focused fieldset': { borderColor: '#005A2B' },
              },
              // 標籤與輸入文字顏色改為深色
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
        p: 3, // 添加內邊距讓內容與邊緣有空間
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
                sx={{ color: '#005A2B !important', }} // 設定核取方塊的顏色
              />
            }
            label="Allow Guest Booking"
            sx={{ color: '#005A2B' }} // 設定標籤的顏色
          />
        </Grid>
      </Grid>
    </Box>
  </>
);

// Form for Step 3: Booking Rules
const Step3Form = ({ data, onChange }) => (
  <FeaturesComponent data={data} onChange={onChange} />
);

const getStepContent = (step, formData, handleChange) => {
  switch (step) {
    case 0:
      return <Step1Form data={formData} onChange={handleChange} />;
    case 1:
      return <Step2Form data={formData} onChange={handleChange} />;
    case 2:
      return <Step3Form data={formData} onChange={handleChange} />;
    default:
      return 'Unknown step';
  }
};

const steps = ['Basic Info', 'Operation', 'System'];

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log('Final JSON Data:', JSON.stringify(formData, null, 2));
    alert('Done!');
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
          height: '700px',
        }}>
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
                    fontSize: '1.6rem',
                    '&.Mui-active': { color: '#FDB813' }, // 啟用時使用副色調
                    '&.Mui-completed': { color: 'white' },
                  },
                  '& .MuiStepIcon-text': {
                    fill: '#005A2B', // 打勾圖標顏色
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ py: 2, flexGrow: 1, overflowY: 'auto' }}>{getStepContent(activeStep, formData, handleChange)}</Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'space-between' }}>
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
      </Container>
    </Box>
  );
}
