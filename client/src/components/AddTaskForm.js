import styles from "./styles/AddTaskForm.module.css";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import { useDB } from "@/context/DBContext";

const AddTaskForm = ({ project_id }) => {
  const { autoDB, setTasks, setAutoTasks } = useDB();
  const [formData, setFormData] = useState({
    description: "",
    quantity: 0,
    unit_cost: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = {
      id: Math.floor(Math.random() * 100) + 1,
      description: formData.description,
      quantity: Number(formData.quantity),
      unit_cost: Number(formData.unit_cost),
      assigned_sub_id: null,
      assigned_percent: null,
      status: "unassigned",
      project_id: Number(project_id),
      total_amount: Number(formData.quantity * Number(formData.unit_cost)),
    };

    autoDB
      ? setAutoTasks((prev) => [...prev, inputs])
      : setTasks((prev) => [...prev, inputs]);

    autoDB ? console.log("Test Mode") : console.log("Live Mode");

    toast.success("Task added!");

    setFormData({
      description: "",
      quantity: 0,
      unit_cost: 0,
    });
  };

  return (
    <>
      <form className={styles.addTaskForm} onSubmit={handleSubmit}>
        <div className={styles.desc}>
          <label>Item</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.quan}>
          <label>Quantity</label>
          <input
            type="number"
            step="any"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.cost}>
          <label>Unit Cost</label>
          <input
            type="number"
            step="0.01"
            name="unit_cost"
            id="unit_cost"
            value={formData.unit_cost}
            onChange={handleChange}
            required
          />
        </div>
        <Button title={"+ Add Task"} type="submit" secondary size="100%" />
      </form>
    </>
  );
};

export default AddTaskForm;
