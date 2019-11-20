import React from "react";
import data from "../data.json";
import ProjectName from "./ProjectName.js";
import ProjectTable from "./ProjectTable.js";

class Project extends React.Component {
  state = {
    project: null
  };

  UNSAFE_componentWillMount() {
    //set up data

    let { project } = this.props;
    //
    project = data.filter(
      ({ id }) => id === Number(this.props.match.params.id)
    );

    this.setState({
      project: project.length ? project[0] : {}
    });
  }

  render() {
    const { project } = this.state;

    return (
      <div>
        <ProjectName project={project} />
        <ProjectTable project={project} />
      </div>
    );
  }
}

export default Project;
