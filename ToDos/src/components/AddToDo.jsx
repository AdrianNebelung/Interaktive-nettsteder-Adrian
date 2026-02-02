import "../style/form.scss";

export default function AddToDo({ todo, setTodo, setTodoList }) {
    const handleChange = (e) => {
        const {name, value} = e.target;

        setTodo((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleClick = (e) => {
        e.preventDefault();
        const uniqId = crypto.randomUUID();
        setTodoList((prev) => ([...prev,
            {id: uniqId,...todo}]));
            console.log(todo);
    }

    return (
        <form className="todoform" onSubmit={handleClick}>
            <label htmlFor="todotitle">
                Todo tittel:
            </label>

            <input name="title" type="text" id="todotitle" placeholder="Dra på butikken" onChange={handleChange}/>

            <label htmlFor="todocontent">Beskrivelse</label>

            <textarea name="content" id="todocontent" onChange={handleChange}/>
            <button>Make todo</button>
        </form>
    )
}