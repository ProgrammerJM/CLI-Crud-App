const { Command } = require("commander");
const { addTodo, listTodos, markDone, deleteTodo } = require("./todo");
const program = new Command();

program.version("1.0.0").description("Todo CLI");

program
  .command("version")
  .description("Show version")
  .action(() => {
    console.log(program.version());
  });

program
  .command("new <description>")
  .description("Add a new todo item")
  .action(async (description) => {
    try {
      const todo = await addTodo(description);
      console.log("Added:", todo);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  });

program
  .command("list [status]")
  .description("List all todo items")
  .action(async (status) => {
    try {
      const todos = await listTodos(status);
      console.table(todos);
    } catch (error) {
      console.error("Error listing todos:", error);
    }
  });

program
  .command("done <id>")
  .description("Mark a todo item as done")
  .action(async (id) => {
    try {
      const todo = await markDone(id);
      console.log("Updated:", todo);
    } catch (error) {
      console.error("Error marking todo as done:", error);
    }
  });

program
  .command("delete <id>")
  .description("Delete a todo item")
  .action(async (id) => {
    try {
      const todo = await deleteTodo(id);
      console.log("Deleted:", todo);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  });

program.parse(process.argv);
