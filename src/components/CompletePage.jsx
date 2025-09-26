import { Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CompletePage = ({ onReset, finalJson }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        textAlign: 'center',
        color: 'white',
        py: 4,
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 80, color: '#FDB813', mb: 2 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        Setup complete!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Congratulations! All golf course settings have been finalized.
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'left',
          width: '90%',
          maxWidth: 600,
          overflowX: 'auto',
          overflowY: 'auto',
          maxHeight: '360px',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Final Configuration
        </Typography>
        <pre>
          <code>{JSON.stringify(finalJson, null, 2)}</code>
        </pre>
      </Paper>
      <Button
        variant="contained"
        onClick={onReset}
        sx={{
          backgroundColor: '#FDB813',
          '&:hover': {
            backgroundColor: '#E0A300',
          },
          color: '#005A2B',
          fontWeight: 'bold',
        }}
      >
        Back to Step 1
      </Button>
    </Box>
  );
};

export default CompletePage;
