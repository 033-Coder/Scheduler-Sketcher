import React from 'react'
import { Box, Button, TextField, Autocomplete } from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import UserDataService from '../../service/user.service';
import AppointmentDataService from "../../service/appointment.service"


const NewAppointment = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    UserDataService.getAll().then(res => {
      setUsers(res.data);
    })
  }, []);

  const handleFormSubmit = (values) => {
    AppointmentDataService.create(values);
    console.log(values);
  };

  const initialValues =
  {
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    status: '',
    user: ''
  }

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("Required"),
  })

  const Form = (props) => {

    return (
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="startTime"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startTime}
                name="startTime"
                error={!!touched.startTime && !!errors.startTime}
                helperText={touched.startTime && errors.startTime}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="endTime"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endTime}
                name="endTime"
                error={!!touched.endTime && !!errors.endTime}
                helperText={touched.endTime && errors.endTime}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 2" }}
              />
              <Autocomplete
                name="user"
                disablePortal
                id="user"
                value={values.user}
                options={users}
                onChange={(e, value) => {
                  console.log(value);
                  setFieldValue(
                    "user",
                    value !== null ? value : initialValues.user
                  );
                }}
                getOptionLabel={(option) => option.username}
                isOptionEqualToValue={(option, value) =>
                  option.id === value.id
                }
                renderInput={(params) => <TextField
                  {...params} label="user" />}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Appointment
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    )
  }

  return (
    <Box m="20px">
      <Header title="CREATE APPOINTMENT" subtitle="Create a New Appointment" />
      <Form />
    </Box>
  );
}

export default NewAppointment