import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'


const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="" fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type='text' name="title" placeholder='iPhone' />
                    <label>Category</label>
                    <select name="category" id="category">
                        <option value="general">Choose a category</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="phone" selected>Phone</option>
                        <option value="computer">Computer</option>
                    </select>
                    <label>Price</label>
                    <input type='number' name="price" placeholder='30' />
                    <label>Stock</label>
                    <input type='number' name="stock" placeholder='30' />
                    <label>Color</label>
                    <input type='text' name="color" placeholder='Silvery' />
                    <label>Size</label>
                    <input type='text' name="size" placeholder='14' />
                    <label>Desciption</label>
                    <textarea type='text' name="desciption" placeholder='New York' />

                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )

}
export default SingleProductPage