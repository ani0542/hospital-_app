import React from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "semantic-ui-react";
import "./filter.css";

function Filter() {
  const selectOption = [
    { key: "Bangalore", value: "Bangalore", text: "Bangalore" },
    { key: "Hyderabad", value: "Hyderabad", text: "Hyderabad" },
    { key: "Pune", value: "Pune", text: "Pune" },
  ];
  return (
    <Row>
      <Col>
        <Form.Select
          placeholder="Date"
          options={selectOption}
          className="filter-select-box kar-mr10 kar-fl"
        />
        <Form.Select
          placeholder="Vaccine"
          options={selectOption}
          className="filter-select-box kar-mr10 kar-fl"
        />
        <Form.Select
          placeholder="Start time"
          options={selectOption}
          className="filter-select-box kar-mr10 kar-fl" 
        />
        <Form.Select
          placeholder="End time"
          options={selectOption}
          className="filter-select-box kar-mr10 kar-fl"
        />
        <Form.Select
          placeholder="Online vaccine count"
          options={selectOption}
          className="filter-select-box kar-mr10 kar-fl"
        />
      </Col>
    </Row>
  );
}

export default Filter;
