import { useEffect, useState } from "react"
const MPIN = ({css, setMpin}) => {

    const [getMpin, setMpinNumber] = useState('')
    useEffect(() => {
        setMpin(getMpin)
    })
    return (
        <input type="text" maxLength={6} className={css} onChange={(e)=>setMpinNumber(e.target.value)} placeholder="Please enter your 6-digit MPIN"/>
    )
}

export default MPIN