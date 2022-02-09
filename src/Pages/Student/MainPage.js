
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import {AppTasks,AppNewUsers,AppBugReports,AppItemOrders,AppNewsUpdate,AppWeeklySales,AppOrderTimeline,AppTrafficBySite,} from '../../components/student/main';
import Navbar from '../../components/navbar/Navbar';
import faker from 'faker';


export default function DashboardApp() {
    const arr = Array.from(Array(3).keys());

  return (
    <Page title="Examify | Home">
        <Navbar />
        <Container maxWidth="xl">
            <Box sx={{ pt: 15, pb: 5}}>
                <Typography variant="h4">Welcome to Examify</Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <AppWeeklySales />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <AppNewUsers />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <AppItemOrders />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <AppBugReports />
            </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography variant="h4">Today Test</Typography>
                    </Box>
                    {arr.map(() => (
                        <AppNewsUpdate 
                        duration="240 mins" 
                        title="Compiler Design CT1" 
                        startAt = {faker.date.soon()}
                        endAt = {faker.date.soon()}
                        buttonText ="Start Test"
                        />
                    ))}
                    
                </Grid>

                <Grid item xs={12} md={12} lg={7}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography variant="h4">Upcoming Test</Typography>
                    </Box>
                    {arr.map(() => (
                        <AppNewsUpdate 
                        duration="240 mins" 
                        title="Compiler Design CT1" 
                        startAt = {faker.date.soon()}
                        endAt = {faker.date.soon()}
                        />
                    ))}
                    
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography variant="h4">Test Submitted</Typography>
                    </Box>
                    {arr.map(() => (
                        <AppNewsUpdate 
                        duration="240 mins" 
                        title="Compiler Design CT1" 
                        startAt = {faker.date.soon()}
                        endAt = {faker.date.soon()}
                        buttonText ="Start Test"
                        />
                    ))}
                    
                </Grid>

                {/* <Grid item xs={12} md={6} lg={4}>
                    <AppOrderTimeline />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <AppTrafficBySite />
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <AppTasks />
                </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
