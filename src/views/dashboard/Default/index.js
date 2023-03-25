/*eslint-disable*/
import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports

import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import { Box } from '@mui/system';
import Table1 from './Table1';
import CrewCard from './CrewCard';
import DateCard from './DateCard';
import SelectCard from './SelectCard';
import SubmitCard from './SubmitCard';
import SelCard from './SelCard';
import axios from 'axios';
// import { Box } from '@mui/system';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [message, setMessage] = useState("None");
    const [data, setdata] = useState({});
    const [crewData, setCrewData] = useState([]);
    const [days, setDays] = useState();
    // console.log(message);
    useEffect(() => {
        setLoading(false);
    }, []);

    let name, value
    const Handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setdata({ ...data, [name]: value })
    }

    const chooseMessage = (message) => {
        // console.log(message);
        setMessage(message);
    };

    const SubmitHandle = () => {
        var getDaysArray = function (start, end) {
            var arr = []
            for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
                arr.push(new Date(dt));
            }
            return arr;
        };
        const dayArray = []
        var daylist = getDaysArray(new Date(`${data.StartDate}`), new Date(`${data.EndDate}`));
        daylist.map((v) => dayArray.push(v.toString().slice(4, 10)))
        setDays(dayArray);
        getData()

    }


    const getData = async () => {
        console.log(data);
        let start = data.StartDate.split("-");
        let end = data.EndDate.split("-");
        //***Modified keys */
        let ModifiedDate = start[2] + "/" + start[1] + "/" + start[0]
        let FightDate = end[2] + "/" + end[1] + "/" + end[0]
        let CrewDesig = data.name
        let Base = data.base
        let AircraftType = data.acType

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiODUwMDM2OSIsImp0aSI6Ijg5NmU5MTM5LTVkNWItNGUzZS04YTYxLWJiMDY1OWJlOTM1MiIsImV4cCI6MTY3MjczMTY1OCwiaXNzIjoiQW5pbCIsImF1ZCI6IkNyZXcifQ.1zT1_P_iUCyGkQm-XPrx16_THjxPHGOxuCSAb2kKNY0";

        axios.get(`http://122.166.251.167/CSTAR.API/CrewChartDetails`, {
            params: {
                CrewDesig: `${CrewDesig}`,
                FightDate: `${FightDate}`,
                Base: `${Base}`,
                AircraftType: `${AircraftType}`,
                ModifiedDate: `${ModifiedDate}`
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(function (response) {
                // console.log(response.data);
                setCrewData(response.data)
            })
            .catch(function (error) {
                console.error(error);
            });

    }

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item lg={2} md={6} sm={6} xs={12}>
                        <CrewCard isLoading={isLoading} RadioHandle={Handle} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <DateCard isLoading={isLoading} dateHandle1={Handle} dateHandle2={Handle} value={value} />
                    </Grid>
                    <Grid item sm={6} xs={12} md={6} lg={3}>
                        <SelectCard isLoading={isLoading} selectHandle1={Handle} selectHandle2={Handle} />
                    </Grid>
                    <Grid item sm={6} xs={12} md={6} lg={2}>
                        <SubmitCard SubmitHandle={SubmitHandle} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={10}>
                        <Table1 crewData={crewData} days={days} chooseMessage={chooseMessage} />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <SelCard message={message}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
