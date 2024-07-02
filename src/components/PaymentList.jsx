import css from "./PaymentList.module.css";
import Payment from "../components/Payment/Payment";


const PaymentList = ({payments}) => {
  return (
      <ul className={css.list}>
        {payments.map(payment => <li className={css.listItem} key={payment.id}><Payment data={payment}/></li>)}
      </ul>
  )
}

export default PaymentList