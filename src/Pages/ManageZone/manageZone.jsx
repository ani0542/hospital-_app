import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/common/header/header";
import ManageZoneSection from "../../components/manage-zone/manage-zone-section/manage-zone-section";
import {
  fetchKarwinZoneList,
  fetchZoneChoiceList,
} from "../../redux/action/manage-zone/manage-zone"; 

class ManageZone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.getZone();
    await this.props.fetchZoneChoiceList();
  }

  getZone = async () => {
    await this.props.fetchKarwinZoneList();
  };

  render() {
    return (
      <>
        <Header />
        <ManageZoneSection />
      </>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => ({
  fetchKarwinZoneList: () => dispatch(fetchKarwinZoneList()),
  fetchZoneChoiceList: () => dispatch(fetchZoneChoiceList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageZone);
