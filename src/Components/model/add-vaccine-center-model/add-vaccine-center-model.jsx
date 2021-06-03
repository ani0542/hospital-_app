import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Form, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import swal from "sweetalert";
import closeIcon from "../../../assets/icon/close.svg";
import { addCVC } from "../../../Services/manage-vaccine-center.service";
import { fetchKarwinVaccineCenterByZone } from "../../../redux/action/manage-vaccine-center/manage-vaccine-center";

import "./add-vaccine-center-model.css";

function AddVaccineCenterModel({
  show,
  handleClose,
  isLoading,
  allVaccineCenterList,
  fetchKarwinVaccineCenterByZone,
}) {
  const [allVaccineCenter, updateAllVaccineCenter] = useState([]);
  const [selectedZone, updateSelectedZone] = useState("");
  const [valid, updateValidation] = useState(false);
  const [invalid, updateValidationMsg] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    updateAllVaccineCenter(formatCvcValue(allVaccineCenterList));
    updateValidation(false);
    updateValidationMsg("");
  }, [allVaccineCenterList, show]);

  const formatCvcValue = (zone) => {
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

  const addVaccineCenterClick = async () => {
    setLoader(true);
    try {
      await addCVC(selectedZone, 1);
      await fetchKarwinVaccineCenterByZone(1);
      updateValidationMsg("");
      setLoader(false);
      swal("Success!", "Added successfully", "success");
      handleClose();
    } catch (err) {
      if (err.response) {
        setLoader(false);
        if (err.response.status === 409) {
          updateValidationMsg("Vaccination Center already added!");
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
      className="kar-add-vaccine-center-model kar-pt70"
      size="md"
    >
      <Modal.Header className="kar-pos-rel">
        <Modal.Title>Add New Vaccination Center</Modal.Title>
        <img
          src={closeIcon}
          alt="icon"
          className="kar-fr kar-cursor-pointer kar-add-vaccine-center-close-btn"
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
            options={allVaccineCenter}
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
              className="kar-add-vaccine-center-btn kar-mauto kar-mb10"
              onClick={addVaccineCenterClick}
            >
              {loader ? "LOADING..." : "Add new Record"}
            </Button>
          ) : (
            <Button
              className="kar-add-vaccine-center-btn kar-mauto kar-mb10"
              disabled
            >
              Add new Record
            </Button>
          )}
          <p className="kar-invalid">{invalid}</p>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = ({
  allVaccineCenterList: { allCvcLoading, allCvcList },
}) => {
  return { isLoading: allCvcLoading, allVaccineCenterList: allCvcList };
};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinVaccineCenterByZone: (id) =>
    dispatch(fetchKarwinVaccineCenterByZone(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVaccineCenterModel);
