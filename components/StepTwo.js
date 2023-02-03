import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button, TextField, MenuItem, Select } from "@mui/material";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Pay = [
    { id: "1", name: "UPI" },
    { id: "2", name: "Cards" },
  ];

  const Paying = [
    { id: "1", PaymentId: "1", name: "phonePay" },
    { id: "2", PaymentId: "1", name: "GogglePay" },
    { id: "3", PaymentId: "1", name: "Paytm" },
    { id: "4", PaymentId: "2", name: "credit card" },
    { id: "5", PaymentId: "2", name: "Debit card" },
  ];

  const [pay, setpay] = useState([]);
  const [payMethod, setpayMethod] = useState([]);

  useEffect(() => {
    setpay(Pay);
  }, []);

  const handlePayment = (id) => {
    const dt = Paying.filter((x) => x.PaymentId === id);
    setpayMethod(dt);
  };

  return (
    <>
      <Form onSubmit={submitFormData}>
        <Form.Group>
          <TextField
            type="text"
            required="required"
            name="Address"
            label="Address"
            onChange={handleFormData("Address")}
          ></TextField>
        </Form.Group>
        <br></br>
        <TextField
          type="number"
          required="required"
          name="pinCode"
          label="Pincode"
          onChange={handleFormData("pinCode")}
        ></TextField>
        <br></br>
        <br></br>
        <Form.Group>
          <Select
            id="pay"
            style={{ width: "220px" }}
            required="required"
            defaultValue={"choose payment method"}
            label="Payment"
            onChange={(e) => handlePayment(e.target.value)}
          >
            <MenuItem value="choose payment method">
              Choose payment method
            </MenuItem>
            {pay && pay !== undefined
              ? pay.map((p, index) => {
                  return (
                    <MenuItem key={index} value={p.id}>
                      {p.name}
                    </MenuItem>
                  );
                })
              : "Not find pay method"}
          </Select>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Select
            style={{ width: "220px" }}
            id="payMethod"
            required="required"
            defaultValue={"Select a payment"}
          >
            <MenuItem value="Select a payment">Select Payment</MenuItem>
            {payMethod && payMethod !== undefined
              ? payMethod.map((p, index) => {
                  return (
                    <MenuItem key={index} value={p.id}>
                      {p.name}
                    </MenuItem>
                  );
                })
              : "Not find pay method"}
          </Select>
        </Form.Group>{" "}
        <br></br>
        <TextField
          type="text"
          required="required"
          name="UPI/Card"
          label="UPI/Card"
          onChange={handleFormData("Payment")}
        ></TextField>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant="contained" color="secondary" onClick={prevStep}>
            Previous
          </Button>

          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default StepTwo;
