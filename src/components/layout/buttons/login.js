import { useRouter } from "next/router"
const Default = ({css, content}) => {
    const router = useRouter()

    const login = () => {
        router.push('/login')
    }


    return (
        <button className={css} onClick={()=>login()}>{content} </button>
    )
}

export default Default