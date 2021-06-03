import React, { useState, useEffect } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import moment from "moment";
import {
  DatePicker,
  TimePicker,
  Select,
  InputNumber,
  Form,
  Button,
} from "antd";
import closeIcon from "../../../assets/icon/close.svg";
import {
  addCVCSession,
  modifyCVCSession,
} from "../../../Services/manage-vaccine-center.service";
import { fetchKarwinVaccineCenterDetail } from "../../../redux/action/manage-vaccine-center/manage-vaccine-center";

import "./add-vaccine-center-session-model.css";

function AddVaccineCenterSessionModel({
  show,
  handleClose,
  vaccines,
  fetchKarwinVaccineCenterDetail,
  isEdit,
  editData,
}) {
  const [loader, setLoader] = useState(false);
  const [invalid, updateValidationMsg] = useState("");
  const { Option } = Select;
  const { zoneId, centerId } = useParams();

  const onFinish = (values) => {
    if (!isEdit) {
      addSession(formatValue(values));
    } else {
      modifySession(formatValue(values));
    }
  };

  const formatValue = (data) => {
    return {
      vaccine_id: data.vaccine,
      vaccine_count: data.vaccine_count,
      start_epoch: concatDateAndTime(data.date, data.start_time),
      end_epoch: concatDateAndTime(data.date, data.end_time),
    };
  };

  const concatDateAndTime = (date, time) => {
    return moment(
      moment(date).format("YYYY-MM-DD") + " " + moment(time).format("hh:mm a")
    ).unix();
  };

  const addSession = async (data) => {
    setLoader(true);
    try {
      await addCVCSession(zoneId, centerId, data);
      await fetchKarwinVaccineCenterDetail(zoneId, centerId);
      setLoader(false);
      swal("Success!", "Added successfully", "success");
      handleClose();
    } catch (err) {
      console.log(err);
      if (err.response) {
        setLoader(false);
        updateValidationMsg("Please try again!");
      }
    }
  };

  const modifySession = async (data) => {
    setLoader(true);
    try {
      data.id = editData.id;
      await modifyCVCSession(zoneId, centerId, data);
      await fetchKarwinVaccineCenterDetail(zoneId, centerId);
      setLoader(false);
      swal("Success!", "Edited successfully", "success");
      handleClose();
    } catch (err) {
      console.log(err);
      if (err.response) {
        setLoader(false);
        updateValidationMsg("Please try again!");
      }
    }
  };
  useEffect(() => {
    updateValidationMsg("");
  }, [show]);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="kar-add-vaccine-center-session-model kar-pt50"
      size="md"
    >
      <Modal.Header className="kar-pos-rel">
        <Modal.Title>{isEdit ? "Edit Record" : "Add New Record"}</Modal.Title>
        <img
          src={closeIcon}
          alt="icon"
          className="kar-fr kar-cursor-pointer kar-add-vaccine-center-session-close-btn"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body>
        <Form
          name="basic"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          className="kar-plr20 kar-add-vaccine-center-session-from"
        >
          <Row>
            <Col>
              <p className="kar-mb10 kar-a-c-s-label">Date</p>
              <Form.Item
                name="date"
                initialValue={isEdit ? moment(editData.date) : ""}
                rules={[
                  {
                    required: true,
                    message: "Date is required!",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col>
              <p className="kar-mb10 kar-a-c-s-label">Vaccine</p>
              <Form.Item
                name="vaccine"
                initialValue={isEdit ? editData.vaccine : ""}
                rules={[
                  {
                    required: true,
                    message: "Vaccine is required!",
                  },
                ]}
              >
                <Select>
                  {vaccines.length
                    ? vaccines.map((o) => (
                        <Option value={o.id}>{o.title}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="kar-mb10 kar-a-c-s-label">Start Time</p>
              <Form.Item
                name="start_time"
                initialValue={
                  isEdit
                    ? moment(editData.date + " " + editData.start_time)
                    : ""
                }
                rules={[
                  {
                    required: true,
                    message: "Start time is required!",
                  },
                ]}
              >
                <TimePicker use12Hours format="h:mm a" />
              </Form.Item>
            </Col>
            <Col>
              <p className="kar-mb10 kar-a-c-s-label">End Time</p>
              <Form.Item
                name="end_time"
                initialValue={
                  isEdit ? moment(editData.date + " " + editData.end_time) : ""
                }
                rules={[
                  {
                    required: true,
                    message: "End time is required!",
                  },
                ]}
              >
                <TimePicker use12Hours format="h:mm a" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="kar-mb10 kar-a-c-s-label">Vaccine count</p>
              <Form.Item
                name="vaccine_count"
                initialValue={isEdit ? editData.vaccine_count : ""}
                rules={[
                  {
                    required: true,
                    message: "Vaccine count is required!",
                  },
                ]}
              >
                <InputNumber min={1} />
              </Form.Item>
            </Col>
            <Col></Col>
          </Row>
          <Form.Item className="kar-text-a-c">
            <Button
              type="primary"
              htmlType="submit"
              className="kar-add-vaccine-center-session-btn"
            >
              {loader
                ? "LOADING..."
                : isEdit
                ? "Edit Record"
                : "Add New Record"}
            </Button>
            <p className="kar-invalid">{invalid}</p>
          </Form.Item>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = ({ commonData: { vaccines } }) => {
  return { vaccines };
};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinVaccineCenterDetail: (zoneId, cvcId) =>
    dispatch(fetchKarwinVaccineCenterDetail(zoneId, cvcId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVaccineCenterSessionModel);
