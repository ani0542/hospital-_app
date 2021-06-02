import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Form } from "semantic-ui-react";
import closeIcon from "../../../assets/icon/close.svg";

import "./add-zone-model.css";

function AddZoneModel({ show, handleClose }) {
  const zone = [
    { key: "Bangalore", value: "Bangalore", text: "Bangalore" },
    { key: "Hyderabad", value: "Hyderabad", text: "Hyderabad" },
    { key: "Pune", value: "Pune", text: "Pune" },
  ];
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="kar-add-zone-model kar-pt70"
      size="md"
    >
      <Modal.Header className="kar-pos-rel">
        <Modal.Title>Add New Zone</Modal.Title>
        <img
          src={closeIcon}
          alt="icon"
          className="kar-fr kar-cursor-pointer kar-add-zone-close-btn"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body>
        <Form validate="false" size="large" className="kar-p20">
          <Form.Select
            // label="Projects"
            name="module"
            required
            search
            selection
            placeholder="Select Zone"
            options={zone}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="kar-add-zone-btn kar-mauto kar-mb10" onClick={handleClose}>
          Add new Record
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddZoneModel;
