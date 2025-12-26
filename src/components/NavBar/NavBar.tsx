import React from "react";
import { AppBar , Toolbar , Typography , Box, Button } from '@mui/material';
import sw_logo from '../../assets/images/sw_logo.png';

const NavBar: React.FC = () => {
    const navItems: string[] = ['About', 'Skills', 'Projects', 'Contact'];
    
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#F0E8E6'}}>
            <Toolbar sx={{
                        py: 2 ,
                        px: { xs: 2, md: 20 }
                        }}>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        src={sw_logo}
                        alt="Shahar SW Logo"
                        sx={{ 
                        height: 60,
                        marginRight: 3
                        }}
                    />

                    <Typography
                    variant="h4"
                    component="div"
                    sx={{ flexGrow: 1, letterSpacing: 1.5 , color: '#000'}}
                    >
                        Shahar Wissbecker
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {navItems.map((item) => (
                        <Button 
                            key={item}
                            sx={{ 
                                color: '#000',
                                fontSize: '1.1rem',
                                marginLeft: 3
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>   
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;