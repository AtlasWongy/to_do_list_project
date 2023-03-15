import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getTasks() {
    const [rows] = await pool.query("SELECT * FROM Tasks")
    return rows
}

export async function getTask(id) {
    const [rows] = await pool.query(
        `
            SELECT *
            FROM Tasks
            WHERE ID = ?
        `, [id]
    )
    return rows[0]
}

export async function createTask(description, deadline, assignee, assignor, completed) {
    const [result] = await pool.query(
        `
            INSERT INTO Tasks (description, deadline, assignee, assignor, completed)
            VALUES (?, ?, ?, ?, ?)
        `, [description, deadline, assignee, assignor, completed]
    )
    const id = result.insertId
    return getTask(id)
}

export async function deleteTask(id) {
    const deletedTask= await getTask(id)
    await pool.query(
        `
            DELETE FROM Tasks
            WHERE ID = ?
        `, [id]
    )
    return deletedTask
}

export async function updateTask(id, description, deadline, assignee, assignor, completed) {
    const task = await pool.query(
        `
            UPDATE Tasks
            SET Description = ?, Deadline = ?, Assignee = ?, Assignor = ?, Completed = ?
            WHERE Id = ?
        `, [description, deadline, assignee, assignor, completed, id]
    )
    return getTask(id)
}

