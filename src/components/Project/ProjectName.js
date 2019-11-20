import React from "react";

class ProjectName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      project_name: ""
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      project_name: this.props.project.project_name
    });
  }

  toggleInput = () => {
    this.setState({
      flag: !this.state.flag
    });
  };

  render() {
    let { flag, project_name } = this.state;
    return (
      <div className="padding-10px padding-left-10p">
        {flag ? (
          <div>
            <span>
              <input
                value={project_name}
                onChange={e => this.setState({ project_name: e.target.value })}
              />
            </span>
            <button
              className="btn padding-left-10px"
              onClick={() => this.toggleInput()}
            >
              Done
            </button>
          </div>
        ) : (
          <span>
            <span className="fs-27">{project_name}</span>
            <button
              className="btn padding-left-10px"
              onClick={() => this.toggleInput()}
            >
              Edit
            </button>
          </span>
        )}
      </div>
    );
  }
}

export default ProjectName;
