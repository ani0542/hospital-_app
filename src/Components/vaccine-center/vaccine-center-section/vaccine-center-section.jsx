import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import queryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import KarTable from "../../common/table/table";
import SearchBox from "../../common/search/search";
import AddVaccineCenterModel from "../../model/add-vaccine-center-model/add-vaccine-center-model";
import { deleteCVC } from "../../../Services/manage-vaccine-center.service";
import Dropdown from "../../dropdown";

import {
  fetchKarwinVaccineCenterByZone,
  fetchAllVaccineCenterByZone,
} from "../../../redux/action/manage-vaccine-center/manage-vaccine-center";
import "./vaccine-center-section.css";

function VaccineCenterSection({
  zone,
  isLoading,
  fetchKarwinVaccineCenterByZone,
  fetchAllVaccineCenterByZone,
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
  const location = useLocation();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [zoneId, setZoneId] = useState("");
  const [vaccineCenters, updateVaccineCenterList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const query = queryString.parse(location.search);

  const formatZoneValue = (zone) => {
    return zone.map((o) => ({
      sl_no: o.id,
      center_name: o.title,
      action: "check_online_slots",
      delete: true,
    }));
  };

  const deleteVaccineCenterClick = async (id) => {
    await deleteCVC(zoneId, id);
    await fetchKarwinVaccineCenterByZone(zoneId);
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

  const checkForParams = () => {
    setZoneId(query.zoneId);
  };

  const handleChange = async (e) => {
    setZoneId(e.target.value);
    let _zoneId = e.target.value;
    const stringified = queryString.stringify({ zoneId: _zoneId });
    history.push({
      pathname: "/vaccine-center",
      search: "?" + stringified,
    });
    await getVaccineCenter(_zoneId);
  };

  const getVaccineCenter = async (id) => {
    await fetchKarwinVaccineCenterByZone(id);
    fetchAllVaccineCenterByZone(id);
  };

  useEffect(() => {
    updateVaccineCenterList(formatZoneValue(vaccineCenterList));
  }, [vaccineCenterList]);

  useEffect(() => {
    checkForParams();
  }, [query]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="kar-w-100 kar-fl">
              <h1 className="kar-mt20 kar-fl">Vaccination center for </h1>
              <div className="kar-fl kar-vc-dropdown">
                <Dropdown
                  handleChange={handleChange}
                  id={zoneId}
                  zones={zone.karwin_zones ? zone.karwin_zones : []}
                />
              </div>
            </div>
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
                  zoneId={zoneId}
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
  fetchAllVaccineCenterByZone: (id) =>
    dispatch(fetchAllVaccineCenterByZone(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VaccineCenterSection);
