import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import swal from "sweetalert";
import KarTable from "../../common/table/table";
import SearchBox from "../../common/search/search";
import AddZoneModel from "../../model/add-zone-model/add-zone-model";
import { deleteZone } from "../../../Services/manage-zone.service";
import { fetchKarwinZoneList } from "../../../redux/action/manage-zone/manage-zone";
import "./manage-zone-section.css";

function ManageZoneSection({ zone, isLoading, fetchKarwinZoneList }) {
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

  const deleteZoneClick = async (id) => {
    await deleteZone(id);
    await fetchKarwinZoneList();
    swal("Deleted!", "Zone deleted!", "success");
  };

  const onSearch = (key) => {
    const masterZone =
      zone.karwin_zones && zone.karwin_zones.length ? zone.karwin_zones : [];
    const filteredZone = masterZone.filter((o) => strContainsMatch(o, key));
    updateZone(formatZoneValue(filteredZone));
  };

  const strContainsMatch = (slookfor, key) => {
    console.log(slookfor, key);
    return slookfor.title.includes(key);
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
                <SearchBox
                  placeholder="Search district name"
                  searchFun={onSearch}
                />
                <KarTable
                  tableHeader={tableHeader}
                  tableValue={zoneFormated}
                  deleteFun={deleteZoneClick}
                  isLoading={isLoading}
                  tableFor="manage-zone"
                />
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
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinZoneList: () => dispatch(fetchKarwinZoneList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageZoneSection);
