import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroSection">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="">
            <h1>Best food waiting for you belly</h1>
          </div>
          <InputGroup className="mb-3 w-25 ">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              className="rounded-start"
              variant="danger"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default Hero;
