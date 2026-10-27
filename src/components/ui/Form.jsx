import {useState} from 'react';

function Form()
{
    const [name, setName] = useState("");

    // Events
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Name:  ", name);
    }
    return (
        <>
       <form method="POST" onSubmit={handleSubmit}>
        <input type="text" value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"/>

        <button> Submit</button>
        </form> 
        </>
    );
    
}

export default Form;