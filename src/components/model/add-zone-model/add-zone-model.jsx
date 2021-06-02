import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import swal from "sweetalert";
import closeIcon from "../../../assets/icon/close.svg";
import { addZone } from "../../../Services/manage-zone.service";
import { fetchKarwinZoneList } from "../../../redux/action/manage-zone/manage-zone";

import "./add-zone-model.css";

function AddZoneModel({
  show,
  handleClose,
  isLoading,
  zoneChoice,
  fetchKarwinZoneList,
}) {
  const [zoneFormated, updateZone] = useState([]);
  const [selectedZone, updateSelectedZone] = useState("");
  const [valid, updateValidation] = useState(false);
  const [invalid, updateValidationMsg] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    updateZone(
      formatZoneValue(
        zoneChoice.zones && zoneChoice.zones.length ? zoneChoice.zones : []
      )
    );
    updateValidation(false);
    updateValidationMsg("");
  }, [zoneChoice, show]);

  const formatZoneValue = (zone) => {
    return zone.map((o) => ({
      key: o.title,
      value: o,
      text: o.title,
    }));
  };

  const dropDownOnChange = (e, { name, value }) => {
    updateSelectedZone(value);
    updateValidation(true);
    updateValidationMsg("");
  };

  const addZoneClick = async () => {
    setLoader(true);
    try {
      await addZone(selectedZone);
      await fetchKarwinZoneList();
      updateValidationMsg("");
      setLoader(false);
      swal("Success!", "Added successfully", "success");
      handleClose();
    } catch (err) {
      if (err.response) {
        setLoader(false);
        if (err.response.status === 409) {
          updateValidationMsg("Zone already added!");
        } else {
          updateValidationMsg("Please try again!");
        }
      }
    }
  };

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
          <Dropdown
            placeholder="Select Zone"
            search
            selection
            fluid
            options={zoneFormated}
            onChange={dropDownOnChange}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div
          className={valid ? "kar-mauto" : "kar-mauto kar-cursor-not-allowed"}
        >
          {valid ? (
            <Button
              className="kar-add-zone-btn kar-mauto kar-mb10"
              onClick={addZoneClick}
            >
              {loader ? "LOADING..." : "Add new Record"}
            </Button>
          ) : (
            <Button className="kar-add-zone-btn kar-mauto kar-mb10" disabled>
              Add new Record
            </Button>
          )}
          <p className="kar-invalid">{invalid}</p>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = ({ choiceZoneList: { loading, data } }) => {
  return { isLoading: loading, zoneChoice: data };
};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinZoneList: () => dispatch(fetchKarwinZoneList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddZoneModel);
