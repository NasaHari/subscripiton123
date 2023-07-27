import React from "react";
import { Alert, Button, Container, Row, Col, Image } from "react-bootstrap";
import iconsucess from "./images/icon-success.svg";
import { useSearchParams, useNavigate } from "react-router-dom";
export const Success = () => {
  const handleClick = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <Container className="containersuc ">
      <Image src={iconsucess} className="sucess-img " />
     
        <Col className="cols-suc">
          <h1 className="thanks  text-start "> Thanks for subscribing!</h1>
          <p className="confirmation text-start">
            A confirmation email has been sent to{" "}
            <strong>{searchParams.get("email")}</strong>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <Button className="btn-dark" variant="dark" onClick={handleClick}>
            Dismiss Message
          </Button>{" "}
        </Col>
      
    </Container>
  );
};
export default Success;
