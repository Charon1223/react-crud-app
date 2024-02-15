
import React from 'react'
import './ExpenseForm.css';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ edit, charge, handleCharge, amount, handleAmount, handleSubmit }) => {
    


  
  return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
          <div className='form-group'>
            <label for='charge'>상품</label>
            <input
              type='text'
              className='form-control'
              id='charge'
              name='charge'
              placeholder='예) 콜라' 
              value={charge}
              onChange={handleCharge}
              />
          </div>

          <div className='form-group'>
            <label for='amount'>비용</label>
            <input
              type='number'
              className='form-control'
              id='amount'
              name='amount'
              value={amount}
              onChange={handleAmount}
              placeholder='예) 100' />
          </div>
        </div>
        <button type='submit' className='btn'>
          {edit ? '수정' : '제출'}
            <MdSend className='btn-icon' />
        </button>
      </form>
    )
}


export default ExpenseForm;
