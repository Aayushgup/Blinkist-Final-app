
import React from "react";
import blinklist from '../images/Blinklistlogo.png';

    const logo={

        height: '26px',
        width: '124.09px',
        left: '0px',
        top: '0px',
        borderRadius: '0px'
        
    }

interface Props{
    
} 

const BlinkListLogo:React.FunctionComponent<Props>=(props)=>
{

    return(

        <div >
        <img style={logo} src={blinklist} alt='BlinkList' />
        </div>
    );
}

export default BlinkListLogo;