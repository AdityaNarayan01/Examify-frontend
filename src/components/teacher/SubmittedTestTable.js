import { filter } from 'lodash';
import { useState } from 'react';
import {useHistory } from "react-router-dom";
import { Table, Stack, TableRow, TableBody, TableCell, Container, Typography, TableContainer, Box, Button} from '@mui/material';
import Page from '../Page';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar } from './tablecomponent';
import Navbar from './navbar/Navbar';
import TeacherMain from '../../_mocks_/teacherMain';


const TABLE_HEAD = [
    { id: 'name', label: 'Test Name', alignRight: false },
    { id: 'date', label: 'Date', alignRight: false },
    { id: 'branch', label: 'Branch', alignRight: false },
    { id: 'section', label: 'Section', alignRight: false },
    { id: 'submitted', label: 'Submitted', alignRight: false },
    { id: 'viewTest', label: 'View Result', alignRight: true },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

export default function User({isMain}) {
    const history = useHistory();
    const [upcomingTest] = useState(TeacherMain.completedTest);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
    };

    const filteredUsers = applySortFilter(upcomingTest, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredUsers.length === 0;

    const changeTimeStamptoDate = (timeStamp) => {
        var date = new Date(timeStamp);
        var str = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":";
    
        if(date.getMinutes() < 10)
        str = str + "0";
    
        str = str + date.getMinutes();
        return str;
    }

    return (
        <Page >
            <Navbar />
            <Container maxWidth="xl" sx={{mt: 15}}>

                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} px={2}>
                    <Typography variant="h4" gutterBottom>
                        COMPLETED TESTS
                    </Typography>
                        {/* SEARCH */}
                    <UserListToolbar
                        filterName={filterName}
                        onFilterName={handleFilterByName}
                        placeholder = "Search Completed Test..."
                    />
                </Stack>

                <Box>
                    <TableContainer sx={{ minWidth: 800 ,pb:5}}>
                        <Table >
                            <UserListHead
                            order={order}
                            orderBy={orderBy}
                            headLabel={TABLE_HEAD}
                            onRequestSort={handleRequestSort}
                            />

                            <TableBody>
                            
                            {upcomingTest && isMain == true && filteredUsers.slice(0, 5).map((row,i) => {
                                return (
                                    <TableRow
                                    hover
                                    key={i}
                                    tabIndex={-1}
                                    role="checkbox"
                                    >
                                        <TableCell component="th" scope="row" >
                                            <Typography variant="subtitle2" noWrap>{row?.title}</Typography>
                                        </TableCell>
                                        <TableCell align="left">{changeTimeStamptoDate(row?.startTime)}</TableCell>
                                        <TableCell align="left">{row?.branch}</TableCell>
                                        <TableCell align="left">{row?.section}</TableCell>
                                        <TableCell align="left">50/60</TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" size="small" onClick = {() => history.push(`/Result/${i}`)} > View</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}

                            {isMain == false && filteredUsers.map((row,i) => {
                                return (
                                    <TableRow
                                    hover
                                    key={i}
                                    tabIndex={-1}
                                    role="checkbox"
                                    >
                                        <TableCell component="th" scope="row" >
                                            <Typography variant="subtitle2" noWrap>{row?.title}</Typography>
                                        </TableCell>
                                        <TableCell align="left">{changeTimeStamptoDate(row?.startTime)}</TableCell>
                                        <TableCell align="left">{row?.branch}</TableCell>
                                        <TableCell align="left">{row?.section}</TableCell>
                                        <TableCell align="left">50/60</TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" size="small" onClick = {() => history.push(`/Result/${i}`)} > View</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}

                            </TableBody>
                            {upcomingTest && isUserNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={5} sx={{ py: 1 }}>
                                            <SearchNotFound searchQuery={filterName} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}

                            {!upcomingTest && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={5} sx={{ py: 1 }}>
                                        
                                            <Typography variant="subtitle1" noWrap>No Upcoming Test</Typography>
                                        
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Page>
    );
}