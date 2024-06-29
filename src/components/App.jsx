
// import payments1 from "../payments1.json";
import {PaymentList} from "./PaymentList";
import payments from "../payments.json";

const App = () => {
  return (
    <>
     <PaymentList payments={payments}/>
     {/* <PaymentList payments={payments1}/> */}
    </>
  )
}

export default App
