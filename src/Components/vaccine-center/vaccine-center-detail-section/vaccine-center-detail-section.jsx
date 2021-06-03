import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import swal from "sweetalert";
import moment from "moment";
import KarTable from "../../common/table/table";
import Filter from "../../common/filter/filter";
import AddVaccineCenterSessionModel from "../../model/add-vaccine-center-session-model/add-vaccine-center-session-model";
import { deleteCVCSession } from "../../../Services/manage-vaccine-center.service";
import { fetchKarwinVaccineCenterDetail } from "../../../redux/action/manage-vaccine-center/manage-vaccine-center";
import "./vaccine-center-detail-section.css";

function VaccineDetailCenterSection({
  isLoading,
  vaccineCenterData,
  vaccines,
  fetchKarwinVaccineCenterDetail,
}) {
  const tableHeader = [
    {
      key: "1",
      name: "SL no",
    },
    {
      key: "2",
      name: "Date",
    },
    {
      key: "3",
      name: "Vaccine name",
    },
    {
      key: "4",
      name: "Start time",
    },
    {
      key: "5",
      name: "End time",
    },
    {
      key: "6",
      name: "Vaccine count",
    },
    {
      key: "7",
      name: "Actions",
    },
  ];

  const [show, setShow] = useState(false);
  const [vaccineSession, updateVaccineSession] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { zoneId, centerId } = useParams();
  const [isEdit, setEdit] = useState(false);
  const [dataForEdit, setDataForEdit] = useState("");

  const formatValue = (val) => {
    return val.map((o) => ({
      sl_no: o.id,
      date: moment.unix(o.start_epoch).format("DD MMM YYYY"),
      vaccine_name: getVaccineTitle(o.vaccine_id),
      start_time: moment.unix(o.start_epoch).format("hh:mm a"),
      end_time: moment.unix(o.end_epoch).format("hh:mm a"),
      vaccine_count: o.vaccine_count,
      action: "edit_delete",
    }));
  };

  const deleteVaccineCenterClick = async (id) => {
    await deleteCVCSession(zoneId, centerId, { id });
    fetchKarwinVaccineCenterDetail(zoneId, centerId);
    swal("Deleted!", "Session deleted!", "success");
  };

  const getVaccineTitle = (vaccineId) => {
    return vaccines.length
      ? vaccines.find((o) => o.id === vaccineId).title
      : vaccineId;
  };

  const getVaccineId = (vaccineTitle) => {
    return vaccines.length
      ? vaccines.find((o) => o.title === vaccineTitle).id
      : vaccineTitle;
  };

  const editClick = (data) => {
    setEdit(true);
    setDataForEdit(formatEditDate(data));
    handleShow();
  };

  const formatEditDate = (data) => {
    return {
      vaccine: getVaccineId(data.vaccine_name),
      id: data.sl_no,
      ...data,
    };
  };

  useEffect(() => {
    updateVaccineSession(
      formatValue(
        vaccineCenterData.sessions && vaccineCenterData.sessions.length
          ? vaccineCenterData.sessions
          : []
      )
    );
  }, [vaccineCenterData]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <p className="kar-mt20">
              <Link to="/vaccine-center">Vaccine center</Link> —{" "}
              <b>Center details</b>
            </p>
            <h1 className="kar-mt20">{vaccineCenterData?.title}</h1>
            <Row className="kar-table-sec">
              <Col>
                {/* <Filter /> */}
                <br />
                <KarTable
                  tableHeader={tableHeader}
                  tableValue={vaccineSession}
                  deleteFun={deleteVaccineCenterClick}
                  isLoading={isLoading}
                  tableFor="vaccine-center-detail"
                  editClick={editClick}
                />
                <Row className="kar-mt20">
                  <Col>
                    <Button className="kar-add-rec" onClick={handleShow}>
                      Add new Record
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <AddVaccineCenterSessionModel
          show={show}
          handleClose={handleClose}
          isEdit={isEdit}
          editData={dataForEdit}
        />
      </Container>
    </>
  );
}

const mapStateToProps = ({
  vaccineCenterDetail: { cvcDetailLoading, cvcDetail },
  commonData: { vaccines },
}) => {
  return {
    isLoading: cvcDetailLoading,
    vaccineCenterData: cvcDetail,
    vaccines,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchKarwinVaccineCenterDetail: (zoneId, cvcId) =>
    dispatch(fetchKarwinVaccineCenterDetail(zoneId, cvcId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VaccineDetailCenterSection);
