
import React, { useState } from 'react';


import MyLibraryTitle from './Atoms/MylibraryTitle/MyLibraryTitle';
import MyTabs from './Atoms/Tabs/MyTabs';
import MyAppBar from './Organisms/AppBar/MyAppBar';
import AppBarWithCategories from './Organisms/AppBarWithCategories/AppBarWithCategories';
import { Footer } from './Organisms/Footer/Footer';



function App() {

   const [value,setValue]=useState(0);
   const [searchTerm,setSearchTerm]=useState('');

   const handleChange=(e:React.MouseEventHandler<SVGSVGElement>,newValue: number)=>{
    setValue(newValue);
    
  }
  const handleSearchTerm= (e:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,newValue:string)=>
  {
     setSearchTerm(newValue);
  }

  const closeSearch = ()=>
  {
    setSearchTerm('');
  }

  
   

  return (
    
     <>  
    
     <div id="appbar" >
       
       { value===1 &&  <AppBarWithCategories handleChange={handleChange}/> }
       { value===0 && <MyAppBar handleChange={handleChange}
       handleSearchTerm={handleSearchTerm}  closeSearch={closeSearch}/>  }
   
     <div id="librarytitle" >
       <MyLibraryTitle />
       </div>
   
       <div id="mytabs" style={{marginLeft: '264px'}}>
       <MyTabs searchTerm={searchTerm} />
       </div>
   
          </div>    
   
       <Footer />

    </>
   
  );
}



export default App;
