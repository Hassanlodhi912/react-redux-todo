import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography , Container} from '@mui/material/';
const Header = () => {
  return (
   <div>
<AppBar>
    <Toolbar >
        <Container maxWidth="xl">
        <Typography variant='h6'> HASSAN contact list</Typography>

        </Container>
        
    </Toolbar>
</AppBar>
   </div>
   )
  }
export default Header;
