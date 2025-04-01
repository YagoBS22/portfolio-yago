import * as React from 'react';
import { Stack, AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';



function Header() {

  return (
    <Box>
        <AppBar 
        sx={{background: 'hsl(240, 21%, 12%)'}}>
            <Toolbar 
            className='navbar-container'
           >
                <Stack 
                className='navbar-mainbtn'
                >
                    <CodeIcon className='header-icon'/>
                    <Typography className='header-title'>
                        Portfolio Yago
                    </Typography>
                </Stack>

            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default Header
