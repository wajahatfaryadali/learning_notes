import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function TopNavBar({ routes }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "#ff9900" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <Box display={{ md: "none" }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="h6" display={{ xs: "none", md: "block" }}>
                            Notes
                        </Typography>
                    </Box>

                    <Box display={{ xs: "none", md: "block" }}>
                        {routes?.map((e, i) =>
                            e.visible &&
                            <Link to={e.path} key={i}>
                                <Button style={{ color: "#fff" }} size='large'>
                                    {e.title}
                                </Button>
                            </Link>
                        )}
                    </Box>
                    <Box>
                        <Typography variant="h6" display={{ xs: "block", md: "none" }} >
                            Notes
                        </Typography>
                    </Box>
                    {/* <Button color="inherit">Login</Button> */}

                </Toolbar>
            </AppBar>
        </Box>
    );
}