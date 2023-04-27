import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f44336',
  color: 'white',
  '&:hover': {
    backgroundColor: '#e53935',
  },
  '& .MuiButton-label': {
    textTransform: 'none',
  },
}));

export default CustomButton;
