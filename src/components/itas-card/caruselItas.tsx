import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { ItasCard } from "./itasCard";
import { GetItasDtoInterface } from "../../interfaces/dataCardInterface";
import axios from "axios";
import { useEffect, useState } from "react";

export const CaruselItas = () => {
  const [itas, setItas] = useState<GetItasDtoInterface>();

  useEffect(() => {
    async function itasData() {
      const register = await axios.get(
        "http://10.111.15.123:5085/api/ITAS/IncomeInfoHeadOffice"
      );
      setItas(register.data);
    }
    itasData();
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = itas?.length as number;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>

      {itas?.map((step, index) => (
        <div key={step.factVal}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              sx={{
                height: 255,
                display: "block",
                maxWidth: 400,
                overflow: "hidden",
                width: "100%",
              }}
            >
              <ItasCard
                title={step.ugnsName}
                factVal={step.factVal}
                count={step.forecastVal}
              />
            </Box>
          ) : null}
        </div>
      ))}
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default CaruselItas;
