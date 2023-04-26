import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
const UserProfile = () => {
    const router = useRouter()
    const {user} = router.query
    return (
        <div className={styles.main}> hello {user}! </div>
    )
}
export default UserProfile