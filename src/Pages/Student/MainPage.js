
import { Box, Grid, Container, Typography, Stack } from '@mui/material';
import Page from '../../components/Page';
import { UpcomingTest,TestMissed,TestSubmiited,AppNewsUpdate,TodayTest  } from '../../components/student/main';
import Navbar from '../../components/student/navbar/Navbar';
import faker from 'faker';
// import Scrollbar from '../../components/Scrollbar'


export default function DashboardApp() {
    const arr = Array.from(Array(5).keys());

    return (
    <Page title="Examify | Home">
        <Navbar />
        <Container maxWidth="xl">
            <Box sx={{ pt: 15, pb: 5}}>
                <Typography variant="h4">Welcome to Examify</Typography>
            </Box>

            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={3}>
                    <TodayTest total={2}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <UpcomingTest total={10}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TestSubmiited total={2}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TestMissed total={1}/>
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
                        type='today'
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
                        type='submitted'
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
