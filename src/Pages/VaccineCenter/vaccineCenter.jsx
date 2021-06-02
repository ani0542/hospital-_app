import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../components/common/header/header";
import KarTable from "../../components/common/table/table";
import SearchBox from "../../components/common/search/search";
import "./vaccine-center.css";

function VaccineCenter() {
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
      key: "4",
      name: "Pincode",
    },
    {
      key: "5",
      name: "",
    },
  ];
  const tableValue = [
    {
      sl_no: "1",
      center_name: "Center name 1",
      action: "check_online_slots",
      pincode: "560070",
      delete: true,
    },
    {
      sl_no: "2",
      center_name: "Center name 3",
      action: "check_online_slots",
      pincode: "560071",
      delete: true,
    },
    {
      sl_no: "3",
      center_name: "Center name 3",
      action: "check_online_slots",
      pincode: "560070",
      delete: true,
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1 className="kar-mt20">
              Vaccination center for{" "}
              <span className="kar-title-p-font-c">“Bengaluru Urban”</span>
            </h1>
            <Row className="kar-table-sec">
              <Col>
                <SearchBox placeholder="Search center name or pincode" />
                <KarTable tableHeader={tableHeader} tableValue={tableValue} />
                <Row className="kar-mt20">
                  <Col>
                    <Button className="kar-add-vac-cen">
                      Add new vaccination center
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VaccineCenter;
