import styles from "./styles/Table.module.css";
import React from "react";

const Table = ({ data }) => {
  const jobTotal = data
    .reduce((sum, task) => sum + Number(task.total_amount) || 0, 0)
    .toFixed(2);

  if (data.length <= 0) {
    return (
      <h4 className={styles.noTaskHeader}>
        No tasks have been <br /> added to this job
      </h4>
    );
  }
  return (
    <table className={styles.sovTable}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Cost</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, description, quantity, unit_cost, total_amount }) => (
          <tr key={id}>
            <td>
              <small>x{quantity}</small> {description}
            </td>
            <td>${unit_cost}</td>
            <td>${total_amount}</td>
          </tr>
        ))}
        <tr className={styles.jobTotal}>
          <td>Job Total</td>
          <td>${jobTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
