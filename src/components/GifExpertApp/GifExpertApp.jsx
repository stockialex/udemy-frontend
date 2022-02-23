import { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])
    const [input, setInput] = useState('')

    const handleAdd = () => {
        if (input !== '') {
            setCategories([input, ...categories])
            setInput('')
        } else{
            console.warn('Ingrese una palabra')
        }
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (  
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                value={input} 
                handleAdd={handleAdd} 
                handleChange={handleChange} 
            />
            <hr />
            
            <ol>
                {categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ))}
            </ol>
        </>
    );
}
 
export default GifExpertApp;