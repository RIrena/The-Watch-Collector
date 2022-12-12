import { Box, Snackbar } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createdContext } from "../../store-context/context-store";
import { CartItem } from "./cart-item/CartItem";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  Button,
  H1,
} from "./CartElements";
import emailjs from "@emailjs/browser";

/**
 * FOR EMAIL.JS:
 * serviceId: service_9m4nfc2
 * templateId: template_k6dcxl5
 * public_key: NlRYyZN78FDlve1UV
 */

export const Cart = () => {
  const context = useContext(createdContext);
  const navigate = useNavigate();
  const { cart, handleRemoveFromCart, clearCart } = context;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [userInfo, setUserInfo] = useState({
    userName: "",
    userNumber: "",
    userAddress: "",
  });

  const handleUserName = (event) => {
    const value = event.target.value;

    setUserInfo({
      ...userInfo,
      userName: value,
    });
  };

  const handleUserNumber = (event) => {
    const value = event.target.value;

    setUserInfo({
      ...userInfo,
      userNumber: value,
    });
  };

  const handleUserAddress = (event) => {
    setUserInfo({
      ...userInfo,
      userAddress: event.target.value,
    });
  };

  const placeOrder = async () => {
    const emailBody = {
      from_name: userInfo.userName,
      from_number: userInfo.userNumber,
      from_address: userInfo.userAddress,
      cart_items: cart.map((product) => product.brand).join(),
    };

    await emailjs.send(
      "service_9m4nfc2",
      "template_k6dcxl5",
      emailBody,
      "NlRYyZN78FDlve1UV"
    );

    handleClick();
    setUserInfo({
      userName: "",
      userNumber: "",
      userAddress: "",
    });
    clearCart();
  };

  return (
    <Container>
      <Box>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Your order is sent successfully!"
        />
      </Box>
      
      <Wrapper>
        {cart.length === 0 && (
          <h1>
            {" "}
            Your shopping cart is empty!
            <br />
            <br />
            Please add items to your cart!
          </h1>
        )}
        {cart.length > 0 && (
          <Row>
            <Column1>
              <Box
                sx={{ borderStyle: "groove", justifyContent: "space-between" }}
              >
                {cart.length > 0 &&
                  cart.map((product) => {
                    return (
                      <CartItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                      />
                    );
                  })}
              </Box>
            </Column1>

            <Column2>
              <TextWrapper>
                <H1>Please fill the following form to place the order:</H1>
                <hr
                  style={{
                    backgroundColor: "black",
                    height: 1,
                  }}
                />
                <Form>
                  <FloatingLabel
                    controlId="floatingInputName"
                    label="Your Name"
                    className="mb-3"
                    onChange={handleUserName}
                    value={userInfo.userName || ""}
                  >
                    <Form.Control type="text" placeholder="Your Name" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingPhoneNumber"
                    label="Phone Number"
                    className="mb-3"
                    onChange={handleUserNumber}
                    value={userInfo.userNumber || ""}
                  >
                    <Form.Control type="text" placeholder="Phone Number" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Your Address"
                    className="mb-3"
                    onChange={handleUserAddress}
                    value={userInfo.userAddress || ""}
                  >
                    <Form.Control type="text" placeholder="Your Address" />
                  </FloatingLabel>
                </Form>
              </TextWrapper>
            </Column2>

            <Button onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
            <Button onClick={placeOrder}>Place Order</Button>
          </Row>
        )}
      </Wrapper>
    </Container>
  );
};
