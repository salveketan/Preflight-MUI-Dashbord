/*eslint-disable*/
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Input, Typography } from '@mui/material';


// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
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
        background: theme.palette.primary[800],
        borderRadius: '50%',
        zIndex: 1,
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
        zIndex: 1,
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const DateCard = ({ isLoading, dateHandle1, dateHandle2, value }) => {
    const theme = useTheme();

    // const [timeValue, setTimeValue] = useState(false);
    // const handleChangeTime = (event, newValue) => {
    //     setTimeValue(newValue);
    // };


    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box display={"flex"} sx={{ p: 2.25 }}>
                        <Box display={"flex"} height={"30px"} mt={1}>
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: theme.palette.primary[200],
                                    // mt: "5px"
                                }}
                            >
                                Start Date :
                            </Typography>
                            <Input onChange={dateHandle1} value={value} style={{ "marginLeft": "10px" }} type='date' name="StartDate" />
                        </Box>
                        <Box display={"flex"} height={"30px"} ml={2} mt={1}>
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: theme.palette.primary[200],
                                    // mt: "5px"
                                }}
                            >
                                End Date <span style={{ "marginLeft": "5px" }}>:</span>
                            </Typography>
                            <Input type='date' onChange={dateHandle2} value={value} name="EndDate" style={{ "marginLeft": "10px" }}></Input>
                        </Box>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};


export default DateCard;
