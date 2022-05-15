import { Button, IconButton } from '@mui/material';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


   const expandmore={

        height: '16.48px',
        width: '12.61px',
        left: '4.7',
        top: '6.85px',
        borderRadius: '0px',
        color: '#042330'

    } 

interface Props
{
       
} 


const DownArrow:React.FunctionComponent<Props>=(props)=>
{
  
    return(

        <>
        <Button startIcon= { <IconButton >
        <KeyboardArrowDownIcon sx={expandmore}
         ></KeyboardArrowDownIcon>
        </IconButton>}
 variant='text' >

        </Button>
        </>
    );
}

export default DownArrow;