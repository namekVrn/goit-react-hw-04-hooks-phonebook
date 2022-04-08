import react from 'react'
import css from '../ContactsList/ContactsList.module.css'
console.log(react)
const Contacts=({onDeleteTel,contact})=>{
    console.log(contact)
        return(
            <>
                <ul className={css.listener}>
                   {contact.map((elem,id)=>{return (
                       <li className={css.listItem}key={id}>
                           <p className={css.name}>{elem.name}</p>
                           <a className={css.contantsLink} href="/">{elem.tel}</a>
                           <p className={css.spam}>{elem.comment}</p>
                           <button type='button' onClick={()=>onDeleteTel(elem.id)}>удалить</button>
                       </li>
                   )
                })} 
                </ul>
            </>
        )
}
export default Contacts