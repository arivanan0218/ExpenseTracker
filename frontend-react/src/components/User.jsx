import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function User() {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:8080/api/user/expenses?user_id=${user_id}` // replace with your Spring Boot server URL
    )
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const logout = () => {
    navigate("/Login");
  };

  return (
    <>
      <ExpenseForm user_id={user_id} onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <h5>Refresh page to update list, Sorry for inconvenience!</h5>

      <button
        onClick={logout}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Logout
      </button>
    </>
  );
}
