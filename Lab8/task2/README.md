# Lab 08 - Task 2: Event Delegation Pattern

## Student Info

Name: Nurkhaidarov Beksultan  
Student ID: 250752
Date: 26.04.2026  

## Overview

This task implements the Event Delegation Pattern for an interactive Todo List with 1000+ items.

Instead of adding separate event listeners to every todo item, the application uses a small number of listeners on the parent container. Events from child elements bubble up to the parent, where they are handled based on data-action attributes.

## Project Structure

```text
Lab_08/task2/
├── delegate/
│   └── EventDelegator.js
├── todo/
│   └── TodoList.js
├── test/
│   └── performance-test.js
├── index.html
├── styles.css
├── main.js
└── README.md