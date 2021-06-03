import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
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
    let queries = queryString.parse(this.props.location.search);
    if (queries.zoneId) {
      await this.getVaccineCenter(queries.zoneId);
    } else {
      const karwin_zones =
        this.props.zone.karwin_zones && this.props.zone.karwin_zones.length
          ? this.props.zone.karwin_zones
          : [];
      if (karwin_zones.length) {
        await this.updateQueryParams(karwin_zones);
      }
    }
  }

  updateQueryParams = async (karwin_zones) => {
    const zoneId = karwin_zones[0].id;
    const stringified = queryString.stringify({ zoneId });
    this.props.history.push({
      pathname: "/vaccine-center",
      search: "?" + stringified,
    });
    await this.getVaccineCenter(zoneId);
  };

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
        <VaccineCenterSection  />
      </>
    );
  }
}
const mapStateToProps = ({ karwinZoneList: { data } }) => {
  return {
    zone: data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinZoneList: () => dispatch(fetchKarwinZoneList()),
  fetchKarwinVaccineCenterByZone: (id) =>
    dispatch(fetchKarwinVaccineCenterByZone(id)),
  fetchAllVaccineCenterByZone: (id) =>
    dispatch(fetchAllVaccineCenterByZone(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VaccineCenter);
