import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <AppBar
        position="static"
        component="nav"
        sx={{ backgroundColor: '#3470FF' }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography textAlign="center" sx={{ fontSize: '24px' }}>
              Rental cars
            </Typography>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
              <Button
                component={Link}
                to="/"
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/catalog"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Catalog
              </Button>
              <Button
                component={Link}
                to="/favorites"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Favorites
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderContainer>
  );
};
