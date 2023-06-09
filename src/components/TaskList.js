import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const TaskList = ({ employees, tasks, removeTask, editTask }) => {
  return (
    <table className="table__content">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th>Point</th>
          <th>Update / Delete</th>
        </tr>
        {tasks.map((task) => {
          const { id, title, description, assignee, dueDate, point } = task;
          return (
            <tr key={id}>
              <td>{title}</td>
              <td>{description}</td>
              <td>
                {
                  employees.find((employee) => employee.id === assignee)
                    ?.fullName
                }
              </td>
              <td>{dueDate}</td>
              <td>{point}</td>
              <td>
                <div className="btn-container p-x1">
                  <button className="btn-edit " onClick={() => editTask(id)}>
                    <FaEdit className="icon__edit" />
                  </button>
                  <button
                    className=" btn-delete "
                    onClick={() => removeTask(id)}
                  >
                    <FaTrash className="icon__delete" />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TaskList;
