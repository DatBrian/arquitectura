import kernel from "./src/core/kernel";
import * as taskModule from "./src/modules/task/taskModule";
import * as userModule from "./src/modules/user/userModule";

kernel.loadModule("tasks", taskModule);
kernel.loadModule("users", userModule);

// Example usage:
kernel.execute("tasks", "addTask", "New task");
kernel.execute("tasks", "addTask", "Another task");
const tasks = kernel.execute("tasks", "getTasks");
console.log("Tasks:", tasks);

const user = kernel.execute("users", "getUser", 1);
console.log("User:", user);

kernel.execute("users", "updateUser", 1, { name: "Updated User" });
