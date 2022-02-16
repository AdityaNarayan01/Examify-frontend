import { Box, Stack, Button, Divider, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';


export default function TestCard({duration, title, startAt, endAt, type, index}) {
  const history = useHistory();

  const onTestStart = () => {
    console.log('disptach Action for Start Test', index);
    history.push(`/StudentTest/${index}`);
  }

  const onTestResult = () => {
    console.log('dispatch Action for on Test Result', index);
    history.push(`/StudentResult/${index}`);
  }

  return (
    <Box sx={{mb: 5}}>
      <Stack spacing={3} sx={{ p: 3, pr: 5, pl: 10 }}>
        <Stack  direction="row" alignItems="center" justifyContent="space-between">
              <Box sx={{ minWidth: 240 }}>
                    <Typography variant="h4" noWrap>
                        {title}
                    </Typography>

                    <Typography variant="subtitle2" noWrap>
                        Exam Duration: {duration}
                    </Typography>
                
                    {/* <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
                        {fDateTime('Thu Feb 10 2022 17:13:01 GMT+0530 (India Standard Time)', new Date())}  -  {fDateTime('Thu Feb 10 2022 17:13:01 GMT+0530 (India Standard Time)', new Date())}
                    </Typography> */}

            </Box>

            {type === 'today' && 
                <Button
                  variant="contained"
                  size="large"
                  onClick  ={() => onTestStart()}
                >
                    Start Test
                </Button>
            }
            
            {type === 'submitted' && 
                <Button
                  variant="contained"
                  size="large"
                  onClick ={() => onTestResult()}
                >
                    Test Result
                </Button>
            }
            
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
}
