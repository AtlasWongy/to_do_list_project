import express from 'express'

import { getTasks, getTask, createTask, deleteTask, updateTask } from './database.js'

const app = express()

app.use(express.json())

app.get("/tasks", async (req, res) => {
    const tasks = await getTasks()
    res.send(tasks)
})

app.get("/tasks/:id", async (req, res) => {
    const id = req.params.id
    const task = await getTask(id)
    res.send(task)
})

app.post("/task", async (req, res) => {
    const {description, deadline, assignee, assignor, completed} = req.body
    const task = await createTask(description, deadline, assignee, assignor, completed)
    res.status(201).send(task)
})

app.delete("/task/:id", async (req, res) => {
    const id = req.params.id
    const task = await deleteTask(id)
    res.status(201).send(task)
})

app.put("/task/:id", async (req, res) => {
    const id = req.params.id
    const {description, deadline, assignee, assignor, completed} = req.body
    const task = await updateTask(id, description, deadline, assignee, assignor, completed)
    res.status(201).send(task)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("An Error has occured!")
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})