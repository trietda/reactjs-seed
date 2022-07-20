import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type NavItem = {
  label: string;
  href: string;
};

const drawerWidth = 240;
const navItems: NavItem[] = [
  {
    label: 'about',
    href: 'about',
  },
];

function NavButton(props: NavItem) {
  const { href, label } = props;

  return (
    <Button
      sx={{ color: '#fff' }}
      component={Link}
      to={href}
    >
      {label}
    </Button>
  );
}

function DrawerNavItem(props: NavItem) {
  const { href, label } = props;
  return (
    <ListItem
      component={Link}
      disablePadding
      to={href}
    >
      <ListItemButton sx={{ textAlign: 'center' }}>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
}

function HomeLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderDrawer = () => (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2 }}
      >
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <DrawerNavItem
            key={item.href}
            label={item.label}
            href={item.href}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <Container sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.href}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {renderDrawer()}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default HomeLayout;
