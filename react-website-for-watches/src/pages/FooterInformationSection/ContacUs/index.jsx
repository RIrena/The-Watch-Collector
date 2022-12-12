import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  Heading,
  Subtitle,
  Wrapper,
  TextWrapper,
  BtnWrapper,
  Button,
} from "./ContactUsElements";

function ContactUs() {
  return (
    <Wrapper>
      <TextWrapper>
        <Form>
          <Heading> Contact Us</Heading>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              height: 5,
            }}
          />
          <Subtitle>
            We're happy to answer questions or help you with returns. Please
            fill out the form below if you need assistance.
          </Subtitle>

          <Row>
            <Col xs={6}>
              <FloatingLabel
                controlId="floatingInputName"
                label="First Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="First name" />
              </FloatingLabel>
            </Col>
            <Col xs={6}>
              <FloatingLabel
                controlId="floatingInputLastName"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Last name" />
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel
            controlId="floatingPhoneNumber"
            label="Phone (optional)"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Phone" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Message"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <BtnWrapper>
            <Button>Send Message</Button>
          </BtnWrapper>
        </Form>
      </TextWrapper>
    </Wrapper>
  );
}

export default ContactUs;
