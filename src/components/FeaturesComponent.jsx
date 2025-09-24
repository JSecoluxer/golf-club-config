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
} from '@mui/material';

/*
const onChange = (e) => {
  // 這裡應該有更新 data 狀態的邏輯
  console.log(e.target.name, 'is now', e.target.checked);
};
*/
export default function FeaturesComponent({ data, onChange }) {
  // 使用 useState 來管理每個 checkbox 展開的狀態
  const [expanded, setExpanded] = useState({
    onlineBooking: true,
    memberManagement: true,
    caddieManagement: true,
    pointOfSale: true,
    courseManagement: true,
  });

  // 處理 checkbox 變更，並切換展開狀態
  const handleCheckboxChange = (event) => {
    // 你原有的 onChange 邏輯
    onChange(event);

    // 切換對應的展開狀態
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
      <Grid container spacing={2} sx={{ justifyContent: 'flex-start', padding: 1 }}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.system.features.courseManagement}
                onChange={handleCheckboxChange}
                name="system.features.courseManagement"
                sx={{ color: '#005A2B !important' }}
              />
            }
            label="Course Management"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
        {expanded.courseManagement && (
          <Grid item xs={12} sx={{ pl: 4, pt: 0 }}>
            {/* 這裡放 Caddie Management 的相關設定 */}
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
      {/* 其他 checkbox 區塊 (Caddie Management, etc.) 也可以依此模式實作 */}
      <Grid container spacing={2} sx={{ justifyContent: 'flex-start', padding: 1 }}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.system.features.caddieManagement}
                onChange={handleCheckboxChange}
                name="system.features.caddieManagement"
                sx={{ color: '#005A2B !important' }}
              />
            }
            label="Caddie Management"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
        {expanded.caddieManagement && (
          <Grid item xs={12} sx={{ pl: 4, pt: 0 }}>
            {/* 這裡放 Caddie Management 的相關設定 */}
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
      {/* Online Booking 區塊 */}
      <Grid container spacing={7} sx={{ justifyContent: 'flex-start', padding: 1 }}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.system.features.onlineBooking}
                onChange={handleCheckboxChange}
                name="system.features.onlineBooking"
                sx={{ color: '#005A2B !important' }}
              />
            }
            label="Online Booking"
            sx={{ color: '#005A2B' }}
          />
        </Grid>
        {/* 條件渲染：當 onlineBooking 被選中時才顯示子區域 */}
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
              // onChange={...} // 這裡可以加入處理這個欄位的 onChange
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
