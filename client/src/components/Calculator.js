import { useState } from "react";
import styled from "styled-components";

const Calculator = () => {
  let [bw, setBw] = useState(0);
  let [total, setTotal] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const dots_poly = (a, b, c, d, e, x) => {
    let x2 = x * x,
      x3 = x2 * x,
      x4 = x3 * x;
    return 500.0 / (a * x4 + b * x3 + c * x2 + d * x + e);
  };

  const dots_men = (bw) => {
    bw = Math.min(Math.max(bw, 40.0), 210.0);
    return dots_poly(
      -0.000001093,
      0.0007391293,
      -0.1918759221,
      24.0900756,
      -307.75076,
      bw
    );
  };

  const dots_women = (bw) => {
    bw = Math.min(Math.max(bw, 40.0), 150.0);
    return dots_poly(
      -0.0000010706,
      0.0005158568,
      -0.1126655495,
      13.6175032,
      -57.96288,
      bw
    );
  };

  var PARAMETERS = {
    M: {
      Raw: {
        SBD: [1199.72839, 1025.18162, 0.00921],
        B: [320.98041, 281.40258, 0.01008],
      },
      "Single-ply": {
        SBD: [1236.25115, 1449.21864, 0.01644],
        B: [381.22073, 733.79378, 0.02398],
      },
    },
    F: {
      Raw: {
        SBD: [610.32796, 1045.59282, 0.03048],
        B: [142.40398, 442.52671, 0.04724],
      },
      "Single-ply": {
        SBD: [758.63878, 949.31382, 0.02435],
        B: [221.82209, 357.00377, 0.02937],
      },
    },
  };

  const getRadioValue = (name) => {
    const radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; ++i) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
  };

  const calc = () => {
    let units = getRadioValue("units");
    let sex = getRadioValue("sex");
    let equipment = getRadioValue("equipment");
    let event = getRadioValue("event");

    if (units === "lbs") {
      bw = bw / 2.20462262;
      total = total / 2.20462262;
    }

    let dots = total * (sex === "M" ? dots_men(bw) : dots_women(bw));

    let params = PARAMETERS[sex][equipment][event];
    let denom = params[0] - params[1] * Math.exp(-1.0 * params[2] * bw);
    let glp = denom === 0 ? 0 : Math.max(0, (total * 100.0) / denom);
    if (isNaN(glp) || bw < 35) {
      glp = 0;
    }

    document.getElementById("display-glp").innerHTML = glp.toFixed(2);
    document.getElementById("display-dots").innerHTML =
      dots.toFixed(2) + " Dots";
  };

  return (
    <Wrapper>
      <Background>
        <Title>
          <TitleHeader>OpenPowerlifting IPF GL Points Calculator</TitleHeader>
        </Title>

        <Points>
          <DisplayGlp id="display-glp">0.00</DisplayGlp>
          <DisplayDots id="display-dots">0.00 Dots</DisplayDots>
        </Points>
      </Background>

      <FormCard>
        <InnerForm>
          <Field>
            <Label htmlFor="total" className="Label-number">
              Total
            </Label>
            <Input
              type="number"
              id="total"
              name="total"
              min="0"
              step="2.5"
              onChange={(event) => {
                setTotal(event.target.value);
                setDisabled(false);
              }}
            />
          </Field>

          <Field>
            <Label htmlFor="bodyweight" className="Label-number">
              Bodyweight
            </Label>
            <Input
              type="number"
              id="bodyweight"
              name="bodyweight"
              min="0"
              step="0.1"
              onChange={(event) => {
                setBw(event.target.value);
                setDisabled(false);
              }}
            />
          </Field>

          <RadioGroup>
            <RadioField>
              <Input
                type="radio"
                id="kilograms"
                name="units"
                value="kg"
                onChange={() => {
                  setDisabled(false);
                }}
                defaultChecked
              />
              <Label htmlFor="kilograms" className="Label-radio">
                Kilos
              </Label>
            </RadioField>
            <RadioField>
              <Input
                type="radio"
                id="pounds"
                name="units"
                value="lbs"
                onChange={() => {
                  setDisabled(false);
                }}
              />
              <Label htmlFor="pounds" className="Label-radio">
                Pounds
              </Label>
            </RadioField>
          </RadioGroup>

          <RadioGroup>
            <RadioField>
              <Input
                type="radio"
                id="men"
                name="sex"
                value="M"
                onChange={() => {
                  setDisabled(false);
                }}
                defaultChecked
              />
              <Label htmlFor="men" className="Label-radio">
                Men
              </Label>
            </RadioField>
            <RadioField>
              <Input
                type="radio"
                id="women"
                name="sex"
                value="F"
                onChange={() => {
                  setDisabled(false);
                }}
              />
              <Label htmlFor="women" className="Label-radio">
                Women
              </Label>
            </RadioField>
          </RadioGroup>

          <RadioGroup>
            <RadioField>
              <Input
                type="radio"
                id="raw"
                name="equipment"
                value="Raw"
                onChange={() => {
                  setDisabled(false);
                }}
                defaultChecked
              />
              <Label htmlFor="raw" className="Label-radio">
                Raw
              </Label>
            </RadioField>
            <RadioField>
              <Input
                type="radio"
                id="single"
                name="equipment"
                value="Single-ply"
                onChange={() => {
                  setDisabled(false);
                }}
              />
              <Label htmlFor="single" className="Label-radio">
                Single-ply
              </Label>
            </RadioField>
          </RadioGroup>

          <RadioGroupLast>
            <RadioField>
              <Input
                type="radio"
                id="sbd"
                name="event"
                value="SBD"
                onChange={() => {
                  setDisabled(false);
                }}
                defaultChecked
              />
              <Label htmlFor="sbd" className="Label-radio">
                3-Lift
              </Label>
            </RadioField>
            <RadioField>
              <Input
                type="radio"
                id="b"
                name="event"
                value="B"
                onChange={() => {
                  setDisabled(false);
                }}
              />
              <Label htmlFor="b" className="Label-radio">
                Bench
              </Label>
            </RadioField>
          </RadioGroupLast>
          {disabled ? (
            <Calculate disabled>Calculate</Calculate>
          ) : (
            <Calculate
              onClick={() => {
                setDisabled(true);
                calc();
              }}
            >
              Calculate
            </Calculate>
          )}
        </InnerForm>
      </FormCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  min-width: 1000px;
  padding: 30px;
`;

const Background = styled.div`
  height: 280px;
  color: #fff;
  background-image: linear-gradient(to right, #fdd017, #e96809);
`;

const Title = styled.div`
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom-style: solid;
  background-color: #fff;
  color: #fff;
`;

const TitleHeader = styled.h1`
  color: #e96809;
  font-size: 16px;
  line-height: 16px;
  margin: 0px auto;
`;

const Points = styled.div``;

const DisplayGlp = styled.h2`
  font-size: 82px;
  font-weight: 700;
  line-height: 82px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const DisplayDots = styled.h3`
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const FormCard = styled.div`
  display: block;
  max-width: 326px;
  margin-top: -70px;
  margin-right: auto;
  margin-left: auto;
  padding: 27px 40px 15px 40px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 43px 0 hsla(0, 0%, 64%, 0.45);
`;

const InnerForm = styled.div`
  margin: 0 0 15px;
`;

const Input = styled.input``;

const Label = styled.label`
  font-weight: 400;
  font-size: 18px;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RadioGroup = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 11px;
  border-bottom: 1px solid #cdcdcd;
`;

const RadioField = styled.div`
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
`;

const RadioGroupLast = styled.div`
  margin-bottom: -13px;
  border-bottom-width: 0px;
`;

const Calculate = styled.button`
  width: 247px;
  height: 50px;
  margin-top: 30px;
  border-radius: 30px;
  background-image: linear-gradient(90deg, #fe685e, #dc372d);
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  padding: 9px 15px;
  color: #fff;
  border: 0;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Calculator;
