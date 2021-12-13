import { useState } from "react";
import './Create.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [instructions, setInstructions] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {title, author, description, ingredient, instructions}

        console.log(recipe);
    }

    return (  
        <div className="create">
            <h1>Create New Recipe</h1>
            <form onSubmit={handleSubmit}> 
                <label>Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Author:</label>
                <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label>Ingredient:</label>
                <textarea
                required
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                ></textarea>

                <label>Instructions:</label>
                <textarea
                required
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
                <button>Add Recipes</button>
            </form>

        </div>
    );
}
 
export default Create;