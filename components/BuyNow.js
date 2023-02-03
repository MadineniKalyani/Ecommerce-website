import { Container, Row } from "react-bootstrap";
import { Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";

const Buy = ({
  item,
  cart,
  price,
}) => {
  const [currentStep, setcurrentstep] = useState(1);
  const [formData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    email: "",
    Address: "",
    pinCode: "",
    UPI: "",
    Payment: "",
  });

  const nextStep = () => {
    setcurrentstep(currentStep + 1);
  };
  const prevStep = () => {
    setcurrentstep(currentStep - 1);
  };
  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  function showStep(step) {
    switch (step) {
      case 1:
        return (
          <div>
            <Container>
              <Row>
                <h1>Enter Details</h1>
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Row>
            </Container>
          </div>
        );

      case 2:
        return (
          <div>
            <Container>
              <Row>
                <h1>Enter Details</h1>
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Row>
            </Container>
          </div>
        );

      case 3:
        return (
          <div>
            <Container>
              <Row>
                <Final
                  values={formData}
                  item={item}
                  cart={cart}
                  price={price}
                />
              </Row>
            </Container>
          </div>
        );
      default:
    }
  }

  return (
    <div>
      <Stepper
        style={{ width: "100%" }}
        activeStep={currentStep - 1}
        orientation="horizontal"
      >
        <Step>
          <StepLabel>StepOne</StepLabel>
        </Step>
        <Step>
          <StepLabel>StepTwo</StepLabel>
        </Step>
        <Step>
          <StepLabel>Final</StepLabel>
        </Step>
      </Stepper>
      {showStep(currentStep)}
    </div>
  );
};
export default Buy;
