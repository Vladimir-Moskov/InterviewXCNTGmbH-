import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logs";

export class Logs extends Component {
    static propTypes = {
        logs: PropTypes.array.isRequired,
        getLogs: PropTypes.func.isRequired
     };

      componentDidMount() {
        this.props.getLogs();
      }

    render(){
        return (

        <Fragment>
        <h2>Logs</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>TIME</th>
              <th>ADDRESS</th>
              <th>URL</th>
                <th>METHOD</th>
                  <th>AGENT</th>
                    <th>USER</th>
                     <th>TYPE</th>
              <th />
            </tr>
          </thead>
          <tbody>

            {this.props.logs.map(log_item => (
              <tr key={log_item.id}>
                <td>{log_item.id}</td>
                <td>{log_item.timestamp}</td>
                <td>{log_item.remote_addr}</td>
                <td>{log_item.url}</td>
                 <td>{log_item.method}</td>
                  <td>{log_item.user_agent}</td>
                     <td>{log_item.remote_user}</td>
                <td>{log_item.application_type}</td>
                <td>
                    <button
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
        )
    }
}
//

const mapStateToProps = state => ({
  logs: state.logs.logs
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
