import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import data from "../data.json";

class Projects extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
          </tr>
        </thead>

        <tbody>
          {data.map(i => {
            return (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>
                  <Link to={"/project/" + i.id}>{i.project_name}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Projects;
