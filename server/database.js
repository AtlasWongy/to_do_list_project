import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getProducts() {
    const [rows] = await pool.query("SELECT * FROM product")
    return rows
}

export async function getProduct(id) {
    const [rows] = await pool.query(
        `
            SELECT *
            FROM product
            WHERE id = ?
        `, [id]
    )
    return rows[0]
}

export async function createProduct(name, description, price) {
    const [result] = await pool.query(
        `
            INSERT INTO product (name, description, price)
            VALUES (?, ?, ?)
        `, [name, description, price]
    )
    const id = result.insertId
    return getProduct(id)
}

