import faker from 'faker';
import { fDateTime } from '../../../utils/formatTime';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';


export default function AppNewsUpdate({duration, title, startAt, endAt, buttonText}) {
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
                
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
                        {fDateTime('Thu Feb 10 2022 17:13:01 GMT+0530 (India Standard Time)', new Date())}  -  {fDateTime('Thu Feb 10 2022 17:13:01 GMT+0530 (India Standard Time)', new Date())}
                    </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
            >
                {buttonText}
            </Button>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
}
