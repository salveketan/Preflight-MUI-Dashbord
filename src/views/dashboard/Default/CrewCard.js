/*eslint-disable*/

// material-ui
import { styled } from '@mui/material/styles';
import { Box, FormControl, FormControlLabel, FormLabel, RadioGroup } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import Radio from '@mui/material/Radio';

// assets
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const CrewCard = ({ isLoading, RadioHandle }) => {

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2 }} >
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="name"
                                onChange={RadioHandle}
                            >
                                <FormControlLabel value="Captain" control={<Radio />} label="Captain" />
                                <FormControlLabel value="Copilot" control={<Radio />} label="Copilot" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

export default CrewCard;
