import { useState, type ChangeEvent, type MouseEvent, type KeyboardEvent, type SubmitEvent } from "react";


export function FormExample() {

    const [name, setName] = useState("")
    const [color, setColor] = useState("red")
    //------------------------------------------------------------------------------------- //
    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
        // setName(event.currentTarget.value) -->event.currentTarget means the element in which the event is attched or belongs. For our case both gives same result bcz we have only one element input where the onClick event is set
    }

    //-------------------------------------------------------------------------------------//
    function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

    }

    //------------------------------------------------------------------------------------//
    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): boolean {
        return event.key === "Enter" ? true : false
    }

    //------------------------------------------------------------------------------------//

    function handleFormSubmit(event: SubmitEvent<HTMLFormElement>) {

        event.preventDefault()
    }
    //------------------------------------------------------------------------------------//
    function handleColorChange(event: ChangeEvent<HTMLSelectElement>) {
        //
    }

    return <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            value={name}
            placeholder="Enter your Name"
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
        />


        <select value={color} onChange={handleColorChange}>
            <option value="red">Red</option>
        </select>
        <button type="submit" onClick={handleButtonClick}>Click</button>
    </form>
}