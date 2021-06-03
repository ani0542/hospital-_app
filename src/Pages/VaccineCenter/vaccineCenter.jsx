import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/common/header/header";
import VaccineCenterSection from "../../components/vaccine-center/vaccine-center-section/vaccine-center-section";
import { fetchKarwinZoneList } from "../../redux/action/manage-zone/manage-zone";
import {
  fetchKarwinVaccineCenterByZone,
  fetchAllVaccineCenterByZone,
} from "../../redux/action/manage-vaccine-center/manage-vaccine-center";

class VaccineCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.getZone();
    await this.getVaccineCenter(1);
  }

  getZone = async () => {
    await this.props.fetchKarwinZoneList();
  };

  getVaccineCenter = async (id) => {
    await this.props.fetchKarwinVaccineCenterByZone(id);
    this.props.fetchAllVaccineCenterByZone(id);
  };

  render() {
    return (
      <>
        <Header />
        <VaccineCenterSection />
      </>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinZoneList: () => dispatch(fetchKarwinZoneList()),
  fetchKarwinVaccineCenterByZone: (id) =>
    dispatch(fetchKarwinVaccineCenterByZone(id)),
  fetchAllVaccineCenterByZone: (id) =>
    dispatch(fetchAllVaccineCenterByZone(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VaccineCenter);
