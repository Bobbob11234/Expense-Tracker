import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const[c,setC]=useState(false);
  const[d,setD]=useState(false);

  const { addTransaction } = useContext(GlobalContext);
  const formSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:c==true?-amount:+amount
    }

    addTransaction(newTransaction);
    setAmount('');
    setText('');
    setC(false);
    setD(false);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div style={{display:'flex', justifyContent:'space-evenly', width:370, marginTop:20}}>
          <button className="btn credit" style={{width:130}} onClick={()=>setC(true)}>CREDIT</button>
          <button className="btn debit" style={{width:130}} onClick={()=>setD(true)}>DEBIT</button>
        </div>
      </form>
    </>
  )
}