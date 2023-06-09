import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addToList } from "./utils/userSlice";
const UserForm = () => {
  const dispatch = useDispatch();
  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "enter first name";
    } else if (values.firstName.length > 15) {
      errors.firstName = "first name should be less than 15 characters";
    }

    if (!values.lastName) {
      errors.lastName = "enter last name";
    } else if (values.lastName.length > 15) {
      errors.lastName = "last name should be less than 15 characters";
    }

    if (!values.email) {
      errors.email = "enter email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "enter password";
    } else if (values.password.length < 3) {
      errors.password = "password should be more than 3 characters";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(addToList(values));
      resetForm();
    }
  });
  return (
    <>
      <p className="font-bold">Enter user details</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="first name"
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.firstName}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName &&
          formik.errors.firstName &&
          formik.errors.firstName}
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.lastName}
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName &&
          formik.errors.lastName &&
          formik.errors.lastName}

        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && formik.errors.email}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          // onBlur={formik.handleBlur}
          // onChange={formik.handleChange}
          // value={formik.values.password}
          {...formik.getFieldProps("password")}
        />
        {formik.touched.pasword &&
          formik.errors.password &&
          formik.errors.password}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserForm;
