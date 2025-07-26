import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const pages = ['Blog'];

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return children
    ? React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
    : null;
}

export default function Header(props: Props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 600,
                textDecoration: 'none',
                color: 'inherit',
              }}>
              Welcome to the Tome
            </Typography>
            <Box>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={page}
                  sx={{ color: 'white', my: 2, display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
