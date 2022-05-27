import React from 'react';
import '../navbar/Nav.scss';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/Appbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const Nav = () => {
   return (
      <AppBar position='sticky' className='nav'>
         <div className='nav-container'>
            <Link to='/' className='nav-logo'>
               <Typography variant='h6'>Logo</Typography>
            </Link>
            <TextField
               size='small'
               variant='filled'
               InputProps={{
                  startAdornment: (
                     <InputAdornment position='start'>
                        <SearchIcon />
                     </InputAdornment>
                  ),
               }}
               className='nav-search-field'
            >
               <SearchIcon />
            </TextField>
         </div>
      </AppBar>
   );
};

export default Nav;
