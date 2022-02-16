import { Box, Stack, Button, Divider, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';


export default function TestCard({duration, title, startAt, endAt, type, index}) {
  const history = useHistory();

  const onTestEdit = () => {
    console.log('disptach Action for Start Test', index);
    history.push(`/UpdateTest/${index}`);
  }

  const onTestResult = () => {
    console.log('dispatch Action for on Test Result', index);
    history.push(`/Result/${index}`);
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
              </Box>
                    
            {type === 'upcoming' && 
                <Button
                  variant="contained"
                  size="large"
                  onClick  ={() => onTestEdit()}
                >
                    Edit Test
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
