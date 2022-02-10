
import { Form, FormikProvider, useFormik } from 'formik';
import {Box,Checkbox,Typography,FormControlLabel,Stack, Divider} from '@mui/material';


const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];


function TaskItem({ task, checked, disabled, correct, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>

      <FormControlLabel
        control={ <Checkbox {...getFieldProps('checked')} value={task} checked={checked} disabled={disabled} {...other} /> }

        label={
          <Typography className="noselect" variant="body2" sx={{...(correct ? checked && {color: 'green'} : checked && {color: 'red'})}}>
            {task}
          </Typography>
        }
      />

    </Stack>
  );
}

export default function AppTasks({disabled, correct}) {

  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { values, handleSubmit } = formik;

  return (
      <Box sx={{ px: 3, py: 1, mt: 3 }}>
        <Typography className="noselect" variant="h4" noWrap>
                This is a Question
        </Typography>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
                disabled={disabled}
                correct={false}
              />
            ))}
          </Form>
        </FormikProvider>
        <Divider />
      </Box>
  );
}
