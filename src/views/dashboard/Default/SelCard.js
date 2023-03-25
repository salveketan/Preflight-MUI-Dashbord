/*eslint-disable*/
import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Checkbox, Divider, Grid, ListItemText, Menu, MenuItem, OutlinedInput, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const SelCard = ({ message, isLoading }) => {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                            <Typography variant="h4">Sel Date {message}</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: '16px !important' }}>
                                {/* <BajajAreaChartCard /> */}
                                <FormControl sx={{ width: "100%" }}>
                                    {/* <InputLabel shrink htmlFor="select-multiple-native">
                                        Native
                                    </InputLabel> */}
                                    <Select
                                        multiple
                                        native
                                        value={personName}
                                        // @ts-ignore Typings are not considering `native`
                                        onChange={handleChangeMultiple}
                                        // label="Native"
                                        inputProps={{
                                            id: 'select-multiple-native',
                                        }}
                                    >
                                        {names.map((name) => (
                                            <option key={name} value={name}>
                                                {name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item>
                                                <FormControl sx={{ m: 1, width: 200, mt: 3 }}>
                                                    <Select
                                                        multiple
                                                        displayEmpty
                                                        value={personName}
                                                        // onChange={handleChange}
                                                        // input={<OutlinedInput />}
                                                        renderValue={(selected) => {
                                                            if (selected.length === 0) {
                                                                return <em>Select</em>;
                                                            }

                                                            return selected.join(', ');
                                                        }}
                                                        // MenuProps={MenuProps}
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        <MenuItem value="">
                                                            <em style={{ "color": "black" }}>Select</em>
                                                        </MenuItem>
                                                        {names.map((name) => (
                                                            <MenuItem
                                                                key={name}
                                                                value={name}
                                                                style={getStyles(name, personName, theme)}
                                                            >
                                                                {name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    None
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid item >
                                                <FormControl sx={{ m: 1, width: 200 }}>
                                                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                                    <Select
                                                        labelId="demo-multiple-checkbox-label"
                                                        id="demo-multiple-checkbox"
                                                        multiple
                                                        value={personName}
                                                        // onChange={handleChange}
                                                        input={<OutlinedInput label="Tag" />}
                                                        renderValue={(selected) => selected.join(', ')}
                                                    // MenuProps={MenuProps}
                                                    >
                                                        {names.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                <Checkbox checked={personName.indexOf(name) > -1} />
                                                                <ListItemText primary={name} />
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    04:55
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    15/12/2022
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="row" spacing={2}>
                                    <Grid item>
                                        <Button variant="outlined">Swap</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined">Delete</Button>
                                    </Grid>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="column">
                                    <Button variant="outlined">ADD</Button>
                                </Grid>
                                <Divider sx={{ my: 1.5 }} />
                                <Grid container direction="row" spacing={2}>
                                    <Grid item>
                                        <Button variant="outlined">Flight</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined">ACM</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined">NOTE</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon />
                        </Button>
                    </CardActions> */}
                </MainCard>
            )}
        </>
    );
};

// PopularCard.propTypes = {
//     isLoading: PropTypes.bool
// };

export default SelCard;
