import React, { Component } from "react";
import http from "../http-common";
import { CSVLink } from "react-csv";
class DownloadPage extends Component {
  componentDidMount() {
    console.log("downloadpage");
    http
      .get("/downloadcsv")
      .then((res) => {
        console.log(res.data);
        if (res.data !== null) {
          this.setState({ csvData: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  constructor(props) {
    super(props);
    this.state = {
      csvData: "",
    };
  }
  render() {
    return (
      <div>
        <CSVLink data={this.state.csvData} filename="email_info.csv">
          Download csv file
        </CSVLink>
      </div>
    );
  }
}

export default DownloadPage;
