import React, { Component } from "react";
import http from "../http-common";
import { CSVLink } from "react-csv";
class DownloadPage extends Component {
  componentDidMount() {
    http
      .get("/downloadcsv")
      .then((res) => {
        if (res.data !== null) {
          console.log(res.data);
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
          Download
        </CSVLink>
      </div>
    );
  }
}

export default DownloadPage;
