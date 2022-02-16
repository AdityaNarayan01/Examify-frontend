import { filter } from 'lodash';
import { useState } from 'react';

import { Button, Table, Stack, TableRow, TableBody, TableCell, Container, Typography, TableContainer, Box} from '@mui/material';

import Page from '../Page';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar } from './tablecomponent';
import Navbar from './navbar/Navbar';
import USERLIST from '../../_mocks_/user';

const TABLE_HEAD = [
    { id: 'name', label: 'Test Name', alignRight: false },
    { id: 'branch', label: 'Start Date', alignRight: false },
    { id: 'section', label: 'Section', alignRight: false },
    { id: 'marks', label: 'Marks', alignRight: false },
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

    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

    const isUserNotFound = filteredUsers.length === 0;

    return (
        <Page title="Examify | Upcoming Test">
            <Navbar />
            <Container maxWidth="xl" sx={{mt: 15}}>

                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} px={2}>
                    <Typography variant="h4" gutterBottom>
                        UPCOMING TEST
                    </Typography>
                        {/* SEARCH */}
                    <UserListToolbar
                        filterName={filterName}
                        onFilterName={handleFilterByName}
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
                            
                            {isMain == true && filteredUsers.slice(0, 5).map((row) => {
                                const { id, name, marks, section, branch} = row;

                                return (
                                    <TableRow
                                    hover
                                    key={id}
                                    tabIndex={-1}
                                    role="checkbox"
                                    >
                                        <TableCell component="th" scope="row" >
                                            <Typography variant="subtitle2" noWrap>{name}</Typography>
                                        </TableCell>
                                        <TableCell align="left">{branch}</TableCell>
                                        <TableCell align="left">{section}</TableCell>
                                        <TableCell align="left">{marks}</TableCell>
                                    </TableRow>
                                );
                            })}

                            {isMain == false && filteredUsers.map((row) => {
                                const { id, name, marks, section, branch} = row;

                                return (
                                    <TableRow
                                    hover
                                    key={id}
                                    tabIndex={-1}
                                    role="checkbox"
                                    >
                                        <TableCell component="th" scope="row" >
                                            <Typography variant="subtitle2" noWrap>{name}</Typography>
                                        </TableCell>
                                        <TableCell align="left">{branch}</TableCell>
                                        <TableCell align="left">{section}</TableCell>
                                        <TableCell align="left">{marks}</TableCell>
                                    </TableRow>
                                );
                            })}

                            </TableBody>
                            {isUserNotFound && (
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={5} sx={{ py: 1 }}>
                                            <SearchNotFound searchQuery={filterName} />
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