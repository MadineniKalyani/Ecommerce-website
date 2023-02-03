import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.Name) ||
      validator.isEmpty(values.PhoneNumber) ||
      validator.isEmpty(values.Email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <TextField
            style={{ border: error ? "2px solid red" : "" }}
            name="Name"
            defaultValue={values.FirstName}
            type="text"
            required="required"
            variant="outlined"
            label="Name"
            placeholder="Name"
            onChange={handleFormData("Name")}
          />
        </Form.Group>
        <br></br>

        <Form.Group className="mb-3">
          <TextField
            style={{ border: error ? "2px solid red" : "" }}
            name="PhoneNumber"
            label="PhoneNumber"
            defaultValue={values.PhoneNumber}
            type="number"
            required="required"
            onChange={handleFormData("PhoneNumber")}
          />
        </Form.Group>
        <br></br>

        <Form.Group className="mb-3">
          <TextField
            style={{ border: error ? "2px solid red" : "" }}
            name="Email"
            defaultValue={values.Email}
            type="Email"
            label="Email"
            required="required"
            onChange={handleFormData("Email")}
          />
        </Form.Group>
        <br></br>

        <div>
          <Button variant="contained" color="secondary" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StepOne;
