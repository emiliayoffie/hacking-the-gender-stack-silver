import React, { useState } from 'react';

import classnames from 'classnames/bind';

 import styles from '../home/Home.module.scss';

 import { Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

 import { useNavigate } from 'react-router';



 const cx = classnames.bind(styles);

const Enumeration = () => {
  const navigate = useNavigate();
  const [generations,setGenerations] = useState(null);
  const [mutations,setMutations] = useState(null);
  const [parents,setParents] = useState(null);

  
    const listOfValues = [0,1,2,3,4,5,6,7,8,9,10];
    const handleGenerationsChange = (e:any) => {
     console.log(e.target.value);
     setGenerations(e.target.value);
    }
    const handleMutationsChange = (e:any) => {
      console.log(e.target.value);
      setMutations(e.target.value);
     }
     const handleParentsChange = (e:any) => {
      console.log(e.target.value);
      setParents(e.target.value);
     }
     const handleNewEnumeration = () => {
      navigate('/enumeration/core');
    };
    const getValuesToDisplay = () => {
     return listOfValues.map((item)=>{
     return(
        <MenuItem value={item}>{item}</MenuItem>
       ) 
})


    }
    return (
        <div className={cx('home-container')}>
          <Typography variant="h4" fontWeight={700} color="primary">
          Select the values to generate an enumeration
          </Typography>

        <Typography variant="h2" fontWeight={700} color="primary">
        
        </Typography>
  
        <Typography variant="h6" component="span">
        
        </Typography>          
          <InputLabel id="demo-simple-select-label1">Gen</InputLabel>
              <Select
                labelId="demo-simple-select-label-select"
                id="demo-simple-select-gen"
                value={generations}
                  label="Generations"
                  onChange={handleGenerationsChange}
                   >
                       
                       {getValuesToDisplay()}
                 </Select>
                 <span></span>
               
                 <InputLabel id="demo-simple-select-label2">Mut</InputLabel>
              <Select
                labelId="Mutations"
                id="demo-simple-select-mut"
                value={mutations}
                  label="Mutations"
                  onChange={handleMutationsChange}
                   >
                        {getValuesToDisplay()}
                 </Select>
                 <span></span>

                 <InputLabel id="demo-simple-select-label3">Parents</InputLabel>
              <Select
                labelId="Parents"
                id="demo-simple-select-parent"
                value={parents}
                  label="Parents"
                  onChange={handleParentsChange}
                   >
                                                
                   {getValuesToDisplay()}

                 </Select>
                 <span></span>
                 {
                  generations !== null && mutations != null && parents != null && 
                  <Button 
                   onClick={() => {
                    // alert('clicked');
                    handleNewEnumeration()
                  }} 
                  // onClick={handleNewEnumeration}
                  variant="contained">Add an Enumeration</Button>

                 }
      </div>
    );
};

export default Enumeration;