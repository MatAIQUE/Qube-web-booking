import { useEffect, useState } from "react"
const Textbox = ({css, setUser, placeholder, onChange, maxLength, type, value}) => {
    return (
        <input type={type} value={value} maxLength={maxLength} onChange={onChange} placeholder={placeholder} className={css}/>
    )
}

export default Textbox