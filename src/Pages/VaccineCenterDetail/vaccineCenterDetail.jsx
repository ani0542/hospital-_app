import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/common/header/header";
import VaccineDetailCenterSection from "../../components/vaccine-center/vaccine-center-detail-section/vaccine-center-detail-section";
import { fetchKarwinVaccineCenterDetail } from "../../redux/action/manage-vaccine-center/manage-vaccine-center";
import { fetchVaccines } from "../../redux/action/common/common";

class VaccineCenterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.getVaccineCenter(
      this.props.match.params.zoneId,
      this.props.match.params.centerId
    );
    await this.props.fetchVaccines();
  }

  getVaccineCenter = async (zoneId, cvcId) => {
    this.props.fetchKarwinVaccineCenterDetail(zoneId, cvcId);
  };

  render() {
    return (
      <>
        <Header />
        <VaccineDetailCenterSection />
      </>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinVaccineCenterDetail: (zoneId, cvcId) =>
    dispatch(fetchKarwinVaccineCenterDetail(zoneId, cvcId)),
  fetchVaccines: () => dispatch(fetchVaccines()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VaccineCenterDetail);
