const pool = require("./db");

const addTodo = async (description) => {
  try {
    const result = await pool.query(
      "INSERT INTO todos (description) VALUES ($1) RETURNING *",
      [description]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in addTodo:", error);
    throw error;
  }
};

const listTodos = async (status) => {
  try {
    let query = "SELECT * FROM todos";
    if (status) {
      query += ` WHERE status = '${status}'`;
    }
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error in listTodos:", error);
    throw error;
  }
};

const markDone = async (id) => {
  try {
    const result = await pool.query(
      "UPDATE todos SET status = $1 WHERE id = $2 RETURNING *",
      ["done", id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in markDone:", error);
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in deleteTodo:", error);
    throw error;
  }
};

module.exports = {
  addTodo,
  listTodos,
  markDone,
  deleteTodo,
};
