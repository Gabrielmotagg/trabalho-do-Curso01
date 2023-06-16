const express = require("express")
const { v4: uuidv4 } = require(`uuid`)
const app = express()

app.use(express.json())

let todolist = []
function verifyIfExistsTodo(req, res, next) {
    const { title } = req.body;

    const todo = todos.find( todo => todo.title === title);

    if (!todo) {
        return res.status(400).json({ message: `Todo not found!`})
    };
    
    req.todo = todo;

    next();
}

app.post("/todolist"), (req, res) => {
    const { title, description } = req.body

    const todoAlreadyExist = todo.some(
        todo => todo.title === title
    )

    if (todoAlreadyExist) {
        return res.status(400).json({
            message: "Todo already exist"
        })
    }

    todo.push({
        id: uuidv4(),
        title,
        description,
        completed: false
    })

    res.status(201).json({
        message: "Todo created success!"
    })
}

app.get("/todolist", (req, res) => {
    const newArray = todolist.map((todo) => {
        return {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            completed: todo.completed ? "Concluido" : "Pendente"
        }
    })

    return res.json({
        message: `Success`,
        todolist: newArray
    })
})

app.patch("/todolist/:id", (req, res) => {
    const id = req.params.id;
    const todo = todolist.find(todo => todo.id === id);

    if (!todo) {
        return res.status(400).json({
            message: "Todo not found"
        })
    }

    todo.completed = !todo.completed


    res.json({ message: 'Todo update!' });

})

app.delete("/todolist", (req, res) => {
    const { title } = req.body;
    const todolistNotAlreadyExist = todos.some(
        todo => todo.title === title
    )

    if (!todolistNotAlreadyExist) {
        return res.status(400).json({
            message: "Todo not already exist"
        })
    }

    const newArray = todos.filter((todo) => {
        return todo.title !== title
    })

    todos = newArray

    return res.json({
        message: "Todo deleted!",
        todos
    });

})

app.get("/todolist/done", (req, res) => {
    const doneTodolist = todolist.filter(todo => {
        if (todo.completed) {
            return {
                id: todo.id,
                title: todo.title,
                description: todo.description,
                completed: "Concluido"
            }
        }
    });
    res.json(doneTodos);
});

app.get("/todolist/undone", (req, res) => {
    const undoneTodolist = todolist.filter(todo => {
        if (!todo.completed) {
            return {
                id: todo.id,
                title: todo.title,
                description: todo.description,
                completed: "Pendente"
            }
        }
    });
    res.json(undoneTodos);
})
app.listen(3000)