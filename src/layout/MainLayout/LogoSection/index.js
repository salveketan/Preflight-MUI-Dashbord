/*eslint-disable*/
import { Link } from 'react-router-dom';
import logo from "assets/images/PreflightLogo.png"
// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        {/* <Logo /> */}
        <Typography
            sx={{
                fontSize: '1rem',
                fontWeight: 500,
                color: "rgb(157,172,204)",
                mt: "5px"
            }}>
          <img src={logo} style={{"width":"135px"}}/>
        </Typography>
    </ButtonBase>
);

export default LogoSection;
