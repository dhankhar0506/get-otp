import { useRef } from "react"
  import "./File-picker.css"
  
  export const FilePicker = () => {
   
  const myRef = useRef(null)


   function PickYourFile(){

    myRef.current.click()

    }


    return(
        <div className="content">
          <h1>Designed a file picker</h1><br/>
          <label>Upload your document</label><br/><br/>
          <input type="file" ref={myRef} /><br/><br/>
          <button onClick={PickYourFile}>Click</button><br/>

        </div>
    )
}