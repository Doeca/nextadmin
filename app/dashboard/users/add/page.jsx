import styles from '@/app/ui/dashboard/users/add/add.module.css'


const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Username" name="username" required />
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <input type="phone" placeholder="Phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>Is Admin?</option>
                    <option value={true} >Yes</option>
                    <option value={false} >Phone</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={true} selected>Is Active?</option>
                    <option value={true} >Yes</option>
                    <option value={false} >Phone</option>
                </select>
                <textarea name="address" id="address" rows="16" placeholder='Address' ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default AddUserPage