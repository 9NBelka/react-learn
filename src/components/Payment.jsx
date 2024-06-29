const Payment = ({
  data: {amount, desctiption, cardNumber},
}) =>{
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

export default Payment