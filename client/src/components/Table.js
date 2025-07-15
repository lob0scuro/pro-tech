import styles from "./styles/Table.module.css";
import React from "react";

const Table = ({ data }) => {
  const jobTotal = parseFloat(
    data
      .reduce((sum, task) => sum + (parseFloat(task.total_amount) || 0), 0)
      .toFixed(2)
  );

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
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, description, quantity, total_amount }) => (
          <tr key={id}>
            <td>{description}</td>
            <td>{quantity}</td>
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
