import React from "react";
import Form from "react-bootstrap/Form";

const FootTest = () => {
  return (
    <>
      <div className="wholefooter">
        <div className="up flex items-center justify-between bg-orange-300 m-6 max-h-90 w-auto">
          <div className="uptext">
            <h1>Join our newsletter to be upto date</h1>
          </div>
         
          <div className="subemail flex">
            <Form>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="enter your email" />
                </Form.Group>
              </Form>
            </Form>
            <button type="button" className="btn btn-outline-dark">Subscribe</button>
          </div>
        </div>

        <div className="mid"></div>

        <div className="bottom"></div>
      </div>
    </>
  );
};

export default FootTest;
