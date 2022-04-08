import react, {Component} from 'react'
import css from '../Filter/Filter.module.css'
console.log(react)
const Filter =({upDataFilterState, value})=>{
   
    const upDataFilter = (evt) =>{
        const {value} = evt.currentTarget
        upDataFilterState(value)
     }
        return(
            <>
            <input className={css.filterImput} type='text' placeholder='поиск по номеру' value = {value} onChange={upDataFilter}/>
            </>
        )
}
export default Filter
