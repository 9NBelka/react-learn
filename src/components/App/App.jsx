
// import payments1 from "../payments1.json";
// import PaymentList from "./PaymentList.jsx";
// import payments from "./payments.json";
import clsx from "clsx" 
import css from "./App.module.css"

const App = () => {

  const titleTwoClases = clsx(css.a, css.b, css.c)

  return (
    <>
     {/* <PaymentList payments={payments} /> */}
     <h1 className={titleTwoClases}>Text</h1>
    </>
  )
}

export default App
