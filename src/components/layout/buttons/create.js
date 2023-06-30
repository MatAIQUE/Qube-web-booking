import { useRouter } from "next/router"
const Create = ({css, content}) => {


    return (
        <button className={css}>{content} </button>
    )
}

export default Create