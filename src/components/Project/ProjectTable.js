import React from "react";
import "./style.css";

const statusDropdown = [
  {
    status_name: "Not Started",
    id: 1,
    background: "#faa0a0"
  },
  {
    status_name: "In Progress",
    id: 2,
    background: "#a0a0fe"
  },
  {
    status_name: "Done",
    id: 3,
    background: "#a0ffa0"
  }
];

class ProjectTable extends React.Component {
  state = {
    project: null
  };

  UNSAFE_componentWillMount() {
    this.setState({
      project: this.props.project
    });
  }

  onChangeStatus = (e, id) => {
    //now update the task background based on id
    const { project } = this.state;

    //Now make the mao
    //find index
    project.tasks.map((item, index) => {
      if (item.id === id) {
        project.tasks[index].status = Number(e.target.value);
      }
    });

    this.setState({
      project
    });
  };

  render() {
    const { project } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {project.tasks.map(i => {
            //get the background color
            let backgroundColor = statusDropdown.filter(
              item => item.id === i.status
            )[0].background;

            return (
              <tr style={{ backgroundColor }} key={i.id}>
                <td>{i.id}</td>
                <td style={{ textAlign: "left" }}> {i.description}</td>
                <td>
                  <select
                    value={i.status}
                    onChange={e => this.onChangeStatus(e, i.id)}
                  >
                    {statusDropdown.map(item => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.status_name}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProjectTable;
