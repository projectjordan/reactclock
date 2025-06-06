import { useState, useEffect } from "react"

function Dropdown(){

    const themes = ['emo kid', 'default', 'terminal'];

    const [selectedTheme, setSelectedTheme] = useState('default')
    const [isOpen, setIsOpen] = useState(false);

    

    const dropdownOptions = 
    <>
    <div className="dropBox">
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen && (
        <ul className="thPicker">
            {themes.map((theme)=> (
                <li key={theme} onClick={() => setSelectedTheme(theme)}>
                    {theme}
                </li>
            ))}
        </ul>
        )}
    </div>
    </>

    return(
        <>
        {dropdownOptions}
        </>
    )

}

export default Dropdown