
import { Form, FormikProvider, useFormik } from 'formik';
import {Box,Typography,FormControlLabel, Divider, RadioGroup, Radio} from '@mui/material';


const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];

export default function AppTasks({disabled, correct}) {

    const formik = useFormik({
        initialValues: {
            checked: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

  const { values,  getFieldProps, handleSubmit } = formik;

  return (
      <Box sx={{ px: 3, py: 1, mt: 3 }}>
        <Typography className="noselect" variant="h4" noWrap>This is a Question</Typography>
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...getFieldProps('checked')}
                    onChange={handleSubmit}
                >
                    {TASKS.map((task, index) => (
                            <FormControlLabel key={index} value={index} control={<Radio />} label={task} />
                    ))}
            
                </RadioGroup>
            </Form>
        </FormikProvider>
        <Divider />
      </Box>
  );
}
