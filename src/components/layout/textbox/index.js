import { useEffect, useState } from "react"
const Textbox = ({css, setUser}) => {
    const [getUser, setUserName] = useState('')
    useEffect(() => {
        setUser(getUser)
    })
    return (
        <input type="text" maxLength={11} onChange={(e)=>setUserName(e.target.value)} placeholder="Please enter your mobile number" className={css}/>
    )
}

export default Textbox