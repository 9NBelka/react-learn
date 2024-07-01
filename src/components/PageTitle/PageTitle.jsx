import clsx from "clsx" 
import css from "./PageTitle.module.css"

const PageTitle = ({primary, sale, text}) => {

  const titleClass = clsx(
    css.title,
    primary ? css.primary : css.secondary,
    sale && css.onSale
  )
  return(
     <h1 className={titleClass}>{text}</h1>
  )
}

export default PageTitle