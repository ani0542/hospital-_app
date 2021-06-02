import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import KarTable from "../../common/table/table";
import SearchBox from "../../common/search/search";
import AddZoneModel from "../../model/add-zone-model/add-zone-model";
import "./manage-zone-section.css";

function ManageZoneSection({ zone, isLoading }) {
  const tableHeader = [
    {
      key: "1",
      name: "SL no",
    },
    {
      key: "2",
      name: "District name",
    },
    {
      key: "3",
      name: "Action",
    },
    {
      key: "4",
      name: "",
    },
  ];

  const [show, setShow] = useState(false);
  const [zoneFormated, updateZone] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatZoneValue = (zone) => {
    return zone.map((o) => ({
      sl_no: o.id,
      center_name: o.title,
      action: "manage_and_allocate",
      delete: true,
    }));
  };

  useEffect(() => {
    updateZone(
      formatZoneValue(
        zone.karwin_zones && zone.karwin_zones.length ? zone.karwin_zones : []
      )
    );
  }, [zone]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <Row className="kar-table-sec">
              <Col>
                <SearchBox placeholder="Search district name" />
                <KarTable tableHeader={tableHeader} tableValue={zoneFormated} />
                <Row className="kar-mt20">
                  <Col>
                    <Button className="kar-add-dis" onClick={handleShow}>
                      Add new DIstrict
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <AddZoneModel show={show} handleClose={handleClose} />
      </Container>
    </>
  );
}
const mapStateToProps = ({ karwinZoneList: { loading, data } }) => {
  return { isLoading: loading, zone: data };
};
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ManageZoneSection);
