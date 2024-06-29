import './App.css'

const Payment = ({data: {amount, desctiption, cardNumber}}) =>{
  return (
      <div>
        <p>Amount: {amount}</p>
        <p>Status:</p>
        <p>Desctiption: {desctiption}</p>
        <p>Card Number: {cardNumber}</p>
        <p>Card Type:</p>
        <p>Card Holder Name:</p>
        <p>Payment Date:</p>
      </div>
  )
}

const data1 = {
  "id":"1",
  "cardNumber":"209320490294024",
  "cardType": "visa",
  "cardOvwer": "Kons",
  "data": "2024-01-26",
  "amount": 100,
  "desctiption": "payment for dog"
}

const data2 = {
  "id":"2",
  "cardNumber": "5898548545541544",
  "cardType": "visa",
  "cardOvwer": "Kons",
  "data": "2024-01-26",
  "amount": 200,
  "desctiption": "payment for fog"
}


function App() {
  return (
    <>
      <Payment data={data1}/>
      <hr />
      <Payment data={data2}/>
    </>
  )
}

export default App
