// EventDelegator.js - Centralized event handling with event delegation

export class EventDelegator {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.handlers = new Map();

    if (!this.container) {
      throw new Error(`Container "${containerSelector}" was not found.`);
    }

    this.container.addEventListener("click", this.handleClick.bind(this));
    this.container.addEventListener("dblclick", this.handleDoubleClick.bind(this));
    this.container.addEventListener("change", this.handleChange.bind(this));
  }

  handleClick(event) {
    const target = event.target;
    const action = target.dataset.action;

    if (!action) {
      return;
    }

    const itemElement = target.closest("[data-id]");
    const itemId = itemElement?.dataset.id;

    switch (action) {
      case "delete":
        this.emit("delete", { id: itemId });
        break;

      case "edit":
        this.emit("edit", { id: itemId });
        break;

      case "priority":
        this.emit("priority", {
          id: itemId,
          priority: target.dataset.priority
        });
        break;

      default:
        break;
    }
  }

  handleChange(event) {
    const target = event.target;
    const action = target.dataset.action;

    if (action !== "toggle") {
      return;
    }

    const itemElement = target.closest("[data-id]");
    const itemId = itemElement?.dataset.id;

    this.emit("toggle", {
      id: itemId,
      completed: target.checked
    });
  }

  handleDoubleClick(event) {
    const item = event.target.closest("[data-id]");

    if (item) {
      this.emit("edit-start", {
        id: item.dataset.id
      });
    }
  }

  on(eventName, handler) {
    if (!this.handlers.has(eventName)) {
      this.handlers.set(eventName, []);
    }

    this.handlers.get(eventName).push(handler);
  }

  emit(eventName, data) {
    const handlers = this.handlers.get(eventName);

    if (!handlers) {
      return;
    }

    handlers.forEach((handler) => handler(data));
  }
}