import "./randomdog.css"
import { useEffect, useState } from "react"

export function Randomdog() {

    const [img,setImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then((responce) => responce.json()).then((data) => {
            setImg(data.message)
        })

    })
     return (
        <div className="random">
            <h1>Random Dogs from Fetching Data from API</h1>
            <img
               
                src={img}
                alt="Dog"

            />

        </div>)
}
