import { TodoList } from "./todo/TodoList.js";
import { runDelegationPerformanceTest } from "./test/performance-test.js";

const todoList = new TodoList("todo-list");

const addForm = document.getElementById("addForm");
const todoInput = document.getElementById("todoInput");
const priorityInput = document.getElementById("priorityInput");
const generateButton = document.getElementById("generateItems");
const performanceButton = document.getElementById("runPerformanceTest");
const statsOutput = document.getElementById("stats");

function showStats(data) {
  statsOutput.textContent = JSON.stringify(data, null, 2);
}

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  const priority = priorityInput.value;

  if (!text) {
    return;
  }

  todoList.addItem(text, priority);
  todoInput.value = "";

  showStats(todoList.getStats());
});

generateButton.addEventListener("click", () => {
  todoList.generateItems(1000);
  showStats(todoList.getStats());
});

performanceButton.addEventListener("click", () => {
  const result = runDelegationPerformanceTest("todo-list", todoList.items.size);
  showStats(result);
});

todoList.generateItems(1000);
showStats(todoList.getStats());