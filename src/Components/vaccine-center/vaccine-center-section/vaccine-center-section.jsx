import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import KarTable from "../../common/table/table";
import SearchBox from "../../common/search/search";
import AddVaccineCenterModel from "../../model/add-vaccine-center-model/add-vaccine-center-model";
import { deleteCVC } from "../../../Services/manage-vaccine-center.service";
import { fetchKarwinVaccineCenterByZone } from "../../../redux/action/manage-vaccine-center/manage-vaccine-center";
import "./vaccine-center-section.css";

function VaccineCenterSection({
  zone,
  isLoading,
  fetchKarwinVaccineCenterByZone,
  vaccineCenterList,
}) {
  const tableHeader = [
    {
      key: "1",
      name: "SL no",
    },
    {
      key: "2",
      name: "Center name",
    },
    {
      key: "3",
      name: "Action",
    },
    {
      key: "5",
      name: "",
    },
  ];

  const [show, setShow] = useState(false);
  const [vaccineCenters, updateVaccineCenterList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatZoneValue = (zone) => {
    return zone.map((o) => ({
      sl_no: o.id,
      center_name: o.title,
      action: "check_online_slots",
      delete: true,
    }));
  };

  const deleteVaccineCenterClick = async (id) => {
    await deleteCVC(1, id);
    await fetchKarwinVaccineCenterByZone(1);
    swal("Deleted!", "Vaccine Center deleted!", "success");
  };

  const onSearch = (key) => {
    const filteredCVC = vaccineCenterList.filter((o) =>
      strContainsMatch(o, key)
    );
    updateVaccineCenterList(formatZoneValue(filteredCVC));
  };

  const strContainsMatch = (slookfor, key) => {
    console.log(slookfor, key);
    return slookfor.title.includes(key);
  };

  useEffect(() => {
    updateVaccineCenterList(formatZoneValue(vaccineCenterList));
  }, [vaccineCenterList]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="kar-mt20">
              Vaccination center for{" "}
              <span className="kar-title-p-font-c">“Bengaluru Urban”</span>
            </h1>
            <Row className="kar-table-sec">
              <Col>
                <SearchBox
                  placeholder="Search center name or pincode"
                  searchFun={onSearch}
                />
                <KarTable
                  tableHeader={tableHeader}
                  tableValue={vaccineCenters}
                  deleteFun={deleteVaccineCenterClick}
                  isLoading={isLoading}
                  tableFor="vaccine-center"
                  zoneId={1}
                />
                <Row className="kar-mt20">
                  <Col>
                    <Button className="kar-add-vac-cen" onClick={handleShow}>
                      Add new vaccination center
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <AddVaccineCenterModel show={show} handleClose={handleClose} />
      </Container>
    </>
  );
}
const mapStateToProps = ({
  karwinZoneList: { loading, data },
  vaccineCenterList: { cvcLoading, cvcList },
}) => {
  return {
    isLoading: loading,
    zone: data,
    cvcIsLoading: cvcLoading,
    vaccineCenterList: cvcList,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinVaccineCenterByZone: (id) =>
    dispatch(fetchKarwinVaccineCenterByZone(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VaccineCenterSection);
