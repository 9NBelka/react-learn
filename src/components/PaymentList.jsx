
import Payment from "./Payment.jsx";


const PaymentList = ({payments}) => {
  return (
      <ul>
        {payments.map(payment => <li key={payment.id}><Payment data={payment}/></li>)}
      </ul>
  )
}

export default PaymentList