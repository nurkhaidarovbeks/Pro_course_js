// TodoList.js - Todo list with event delegation

import { EventDelegator } from "../delegate/EventDelegator.js";

export class TodoList {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.items = new Map();
    this.idCounter = 0;

    if (!this.container) {
      throw new Error(`Container with id "${containerId}" was not found.`);
    }

    this.delegator = new EventDelegator(`#${containerId}`);
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    this.delegator.on("toggle", ({ id, completed }) => {
      this.toggleItem(id, completed);
    });

    this.delegator.on("delete", ({ id }) => {
      this.deleteItem(id);
    });

    this.delegator.on("edit", ({ id }) => {
      this.startEditing(id);
    });

    this.delegator.on("priority", ({ id, priority }) => {
      this.setPriority(id, priority);
    });

    this.delegator.on("edit-start", ({ id }) => {
      this.startEditing(id);
    });
  }

  addItem(text, priority = "normal") {
    const id = `todo-${++this.idCounter}`;

    const item = {
      id,
      text,
      completed: false,
      priority,
      editing: false
    };

    this.items.set(id, item);
    this.renderItem(item);

    return id;
  }

  renderItem(item) {
    const div = document.createElement("div");

    div.className = `todo-item ${item.completed ? "completed" : ""} priority-${item.priority}`;
    div.dataset.id = item.id;

    div.innerHTML = `
      <input
        type="checkbox"
        data-action="toggle"
        ${item.completed ? "checked" : ""}
        aria-label="Mark task as completed"
      />

      <span class="todo-text">${this.escapeHtml(item.text)}</span>

      <div class="todo-actions">
        <button data-action="priority" data-priority="high">High</button>
        <button data-action="priority" data-priority="normal">Normal</button>
        <button data-action="priority" data-priority="low">Low</button>
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
      </div>
    `;

    this.container.appendChild(div);
  }

  toggleItem(id, completed) {
    const item = this.items.get(id);

    if (!item) {
      return;
    }

    item.completed = completed;

    const element = this.getItemElement(id);

    if (!element) {
      return;
    }

    element.classList.toggle("completed", completed);

    const checkbox = element.querySelector('input[type="checkbox"]');

    if (checkbox) {
      checkbox.checked = completed;
    }
  }

  deleteItem(id) {
    this.items.delete(id);

    const element = this.getItemElement(id);

    if (element) {
      element.remove();
    }
  }

  setPriority(id, priority) {
    const item = this.items.get(id);

    if (!item) {
      return;
    }

    item.priority = priority;

    const element = this.getItemElement(id);

    if (!element) {
      return;
    }

    element.className = `todo-item ${item.completed ? "completed" : ""} priority-${priority}`;
  }

  startEditing(id) {
    const item = this.items.get(id);

    if (!item) {
      return;
    }

    const element = this.getItemElement(id);

    if (!element) {
      return;
    }

    const textSpan = element.querySelector(".todo-text");

    if (!textSpan) {
      return;
    }

    const input = document.createElement("input");

    input.type = "text";
    input.value = item.text;
    input.className = "edit-input";

    input.addEventListener("blur", () => {
      item.text = input.value.trim() || item.text;
      textSpan.textContent = item.text;
      input.replaceWith(textSpan);
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        input.blur();
      }

      if (event.key === "Escape") {
        input.value = item.text;
        input.blur();
      }
    });

    textSpan.replaceWith(input);
    input.focus();
  }

  generateItems(count = 1000) {
    const priorities = ["high", "normal", "low"];

    for (let i = 1; i <= count; i += 1) {
      this.addItem(`Task #${i}`, priorities[i % priorities.length]);
    }
  }

  getItemElement(id) {
    return this.container.querySelector(`[data-id="${id}"]`);
  }

  getStats() {
    return {
      totalItems: this.items.size,
      eventListenersOnContainer: 3,
      pattern: "Event Delegation"
    };
  }

  escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
}