import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

export default function NewExpense() {

    function saveExpenseDataHandler (enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.randdom.toString(),
        };

        props.onAddExpense(expenseData);
    }

    return (
        <div className = 'new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}