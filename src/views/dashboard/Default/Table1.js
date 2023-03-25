/*eslint-disable*/

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Table1 = ({ crewData, days, chooseMessage }) => {

    return (
        <div>
            <TableContainer style={{ "width": "100%", "height": "600px" }}>
                <Table stickyHeader style={{ "borderRadius": "10px" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="center"
                                style={{
                                    position: 'sticky',
                                    left: 0,
                                    background: 'rgb(189,189,189)',
                                    zIndex: 800,
                                    padding: 0
                                }}>
                                <TableCell
                                    align="left"
                                    style={{
                                        left: 0,
                                        zIndex: 800,
                                        width: "100%",
                                        background: 'rgb(94,53,177)',
                                    }}>
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: "rgb(157,172,204)",
                                        }}>
                                        Crew
                                    </Typography>
                                </TableCell>
                                <TableCell
                                    align="center"
                                    style={{
                                        left: 0,
                                        background: 'rgb(94,53,177)',
                                        zIndex: 800,
                                        width: "100%"
                                    }}>
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            left: 0,
                                            color: "rgb(157,172,204)",
                                        }}>
                                        Base
                                    </Typography>
                                </TableCell>

                            </TableCell>

                            {days?.map((e, i) => (
                                <TableCell key={i} align="center"
                                    style={{
                                        background: 'rgb(94,53,177)',
                                        padding: 0
                                    }}
                                    onClick={() => chooseMessage(e)}>
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            color: "rgb(157,172,204)",
                                        }}
                                        variant="subtitle2" gutterBottom margin={"auto"} width={"60px"}>
                                        {e}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    {/* body */}

                    <TableBody>
                        {crewData.map((e) => (
                            <TableRow style={{ background: 'white' }}>
                                <TableCell
                                    align="center"
                                    style={{
                                        position: 'sticky',
                                        left: 0,
                                        background: 'white',
                                        padding: 0
                                    }}>
                                    <TableCell
                                        align="left"
                                        style={{
                                            background: 'white',
                                            backgroundColor: "white",
                                            zIndex: 800,
                                            width: "100%"
                                        }}>
                                        <Typography color={"black"} variant="subtitle2" gutterBottom margin={"auto"} >
                                            {e.empCode}
                                        </Typography>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{
                                            background: 'white',
                                            backgroundColor: "white",
                                        }}>
                                        <Typography color={"black"} variant="subtitle2" gutterBottom width={"30px"} margin={"auto"}>
                                            {e.base}
                                        </Typography>
                                    </TableCell>
                                </TableCell>

                                {days?.map((e, i) => (
                                    <TableCell key={i} align="center"
                                        style={{
                                            background: 'white',
                                            backgroundColor: 'white',
                                        }}>000000000000</TableCell>
                                ))}
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Table1
