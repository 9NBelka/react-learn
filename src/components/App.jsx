
// import payments1 from "../payments1.json";
import PaymentList from "./PaymentList.jsx";
import payments from "../payments.json";

const App = () => {
  return (
    <>
     <PaymentList payments={payments} />
     <h1 style={{color: "blue", fontSize: 25}}>Text</h1>
    </>
  )
}

export default App
