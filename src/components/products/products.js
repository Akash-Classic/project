import { useState } from "react"
import Form from "./ListItems/Form"
import ListItem from "./ListItems/ListItem"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "placeholder.png"
// }

const Product = () => {
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0)
    // const [discountedPrice, setDiscountedPrice] = useState(0)
    // const [thumbnail, setThumbnail] = useState("")

    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    })

    // const handleTitle = (event) => {
    //     // console.log(event)
    //     // console.log(event.target.value)
    //     // setTitle(event.target.value)
    //     setItem({
    //         ...item,
    //         title: event.target.value
    //     })
    // }

    // const handlePrice = event => {
    //     // setPrice(event.target.value)
    //     setItem({
    //         ...item,
    //         price: event.target.value
    //     })
    // }

    // const handleDiscountedPrice = event => {
    //     // setDiscountedPrice(event.target.value)
    //     setItem({
    //         ...item,
    //         discountedPrice: event.target.value
    //     })
    // }

    // const handleThumbnail = event => {
    //     // setThumbnail(event.target.value)
    //     setItem({
    //         ...item,
    //         thumbnail: event.target.value
    //     })
    // } 

     const handleInput = event => {
        //  console.log(event.target.name, event.target.value)
        setItem({
            ...item,
            [event.target.name]: event.target.value
        })
     }

    const submitForm = event => {
        event.preventDefault();

        if(item.discountedPrice > item.price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }

        console.log(item)
        
    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                </div>
            </div>
        </div>
    )
}

export default Product