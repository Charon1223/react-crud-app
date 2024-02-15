import React from 'react'
import "./ExpenseItem.css"
import { MdEdit, MdDelete } from 'react-icons/md';


const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
  return (
    <li className='item'>
        <div className='info'>
          <span className='expense'>{expense.charge}</span>
          <span className='amount'>{expense.amount}</span>
        </div>
        <div>
          <button 
            className='edit-btn'
            onClick={() => handleEdit(expense.id)}
            >
            <MdEdit />
          </button>
          <button 
            onClick={() => handleDelete(expense.id)} className='clear-btn'>
              <MdDelete />
          </button>
        </div>
      </li>
  )
}

export default ExpenseItem;
