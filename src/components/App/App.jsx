
// import payments1 from "../payments1.json";
// import payments from "./payments.json";
// import clsx from "clsx" 
// import css from "./App.module.css"
// import PaymentList from "./PaymentList/PaymentList.jsx";
// import PageTitle from "../PageTitle/PageTitle.jsx";
import payments from "../../payments.json";
import PaymentList from "../PaymentList.jsx";


const App = () => {

  // const titleTwoClases = clsx(css.a, css.b, css.c)

  return (
    <>
    <PaymentList payments={payments}/>
    {/* <PageTitle primary={true} sale={false}>fdfddfdfdfd</PageTitle>
    <PageTitle primary={false} sale={true}/>
    <PageTitle primary={true} sale={true}/> */}
     {/* <PaymentList payments={payments} /> */}
     {/* <h1 className={css.b}>Text</h1> */}
    </>
  )
}

export default App
