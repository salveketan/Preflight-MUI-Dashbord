/*eslint-disable*/

// import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, FormControl, InputLabel, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Select, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { useState } from 'react';
import { useEffect } from 'react';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    // width:310,
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODUwMDM2OSIsImp0aSI6Ijg5NmU5MTM5LTVkNWItNGUzZS04YTYxLWJiMDY1OWJlOTM1MiIsImV4cCI6MTY3MjczMTY1OCwiaXNzIjoiQW5pbCIsImF1ZCI6IkNyZXcifQ.1zT1_P_iUCyGkQm-XPrx16_THjxPHGOxuCSAb2kKNY0";


const SelectCard = ({isLoading, selectHandle1, selectHandle2 }) => {
    const theme = useTheme();
    const [baseData, setBaseData] = useState([]);
    const [acTypeData, setacTypeData] = useState([]);
  
    useEffect(() => {
        getBaseData();
        getActypeData();
    }, [])

    const getBaseData = async () => {
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODUwMDM2OSIsImp0aSI6ImY3YmRkN2JmLTNmYWYtNDkyNC04ZTE5LTZmOTFlMzY3YzBhOCIsImV4cCI6MTY3MjY0NTc2OCwiaXNzIjoiQW5pbCIsImF1ZCI6IkNyZXcifQ.NCDKALFmJxP2MeFirJjv8e_VqmzBY74h2n1dkfGdNz4";
        const res = await fetch("http://122.166.251.167/CSTAR.API/CrewBaseLists", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        let response = await res.json();
        // console.log(response);
        setBaseData(response)
    }

    const uniqueBase = [...new Set(baseData.map((item) => item.base))];
    // console.log(uniqueBase);

    const getActypeData = async () => {
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODUwMDM2OSIsImp0aSI6ImY3YmRkN2JmLTNmYWYtNDkyNC04ZTE5LTZmOTFlMzY3YzBhOCIsImV4cCI6MTY3MjY0NTc2OCwiaXNzIjoiQW5pbCIsImF1ZCI6IkNyZXcifQ.NCDKALFmJxP2MeFirJjv8e_VqmzBY74h2n1dkfGdNz4";
        const res = await fetch("http://122.166.251.167/CSTAR.API/CrewAcftLists", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        let response = await res.json();
        setacTypeData(response)
    }
    const uniqueActypeData = [...new Set(acTypeData.map((item) => item.aircraftType))];
    // console.log(uniqueActypeData);


    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 1.3 }} Direction={"row"} >
                        <FormControl variant="standard" sx={{ minWidth: 120, m: 0.5, marginLeft: "30px", marginRight: "10px" }} >
                            <InputLabel style={{ "color": "black" }} id="demo-simple-select-standard-label">Base</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={data}
                                name="base"
                                onChange={selectHandle1}
                                label="Age"
                            >
                                {
                                    uniqueBase.map((e) =>
                                        <MenuItem value={e}>{e}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 0.5, minWidth: 120 }} >
                            <InputLabel style={{ "color": "black" }} id="demo-simple-select-standard-label">AC type</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                // value={data}
                                name="acType"
                                onChange={selectHandle2}
                                label="acType"
                            >

                                {
                                    uniqueActypeData.map((e) =>
                                        <MenuItem value={e}>{e}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

// TotalIncomeDarkCard.propTypes = {
//     isLoading: PropTypes.bool
// };

export default SelectCard;
