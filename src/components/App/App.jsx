
// import payments1 from "../payments1.json";
// import PaymentList from "./PaymentList.jsx";
// import payments from "./payments.json";
// import clsx from "clsx" 
// import css from "./App.module.css"
import PageTitle from "../PageTitle/PageTitle.jsx"

const App = () => {

  // const titleTwoClases = clsx(css.a, css.b, css.c)

  return (
    <>
    <PageTitle primary={true} sale={false} text="fdfddfdfdfd" />
    <PageTitle primary={false} sale={true}/>
    <PageTitle primary={true} sale={true}/>
     {/* <PaymentList payments={payments} /> */}
     {/* <h1 className={css.b}>Text</h1> */}
    </>
  )
}

export default App
