import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import Bg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle></FaGoogle> Login With Google
      </Button>{" "}
      <Button variant="outline-secondary">
        <FaGithub></FaGithub> Login With Github
      </Button>{" "}
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item disabled>
            <FaFacebook></FaFacebook> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="bg1 py-5 pe-3 ps-3">
        <h4>Create an Amazing Newspaper</h4>
        <p className="my-2">
          <small>
            Discover thousands of <br /> options, easy to <br /> customize
            layouts, one-
            <br />
            click to import demo <br /> and much more.
          </small>
        </p>
        <Button className="my-3 mb-0" variant="danger">
          Learn More
        </Button>{" "}
      </div>
    </div>
  );
};

export default RightNav;
