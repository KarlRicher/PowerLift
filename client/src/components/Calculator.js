import styled from "styled-components";

const Calculator = () => {
  const calc = () => {
    // console.log("Calculated!");
  };

  return (
    <Wrapper>
      <Background>
        <Title>
          <TitleHeader>OpenPowerlifting IPF GL Points Calculator</TitleHeader>
        </Title>

        <Points>
          <DisplayGlp></DisplayGlp>
          <DisplayDots></DisplayDots>
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
              onInput={calc()}
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
              onInput={calc()}
            />
          </Field>

          <RadioGroup>
            <RadioField>
              <Input
                type="radio"
                id="kilograms"
                name="units"
                value="kg"
                onChange={calc()}
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
                onChange={calc()}
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
                onChange={calc()}
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
                onChange={calc()}
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
                onChange={calc()}
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
                onChange={calc()}
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
                onChange={calc()}
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
                onChange={calc()}
              />
              <Label htmlFor="b" className="Label-radio">
                Bench
              </Label>
            </RadioField>
          </RadioGroupLast>

          <Calculate onClick={calc()}>Calculate</Calculate>
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
