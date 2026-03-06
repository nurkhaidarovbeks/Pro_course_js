# Architecture Design

## Application
Simple modular calculator app

## Core modules
- app.mjs — application startup
- core.mjs — calculator logic
- utils.mjs — helper functions
- constants.mjs — constants and app title

## Dynamic feature modules
- advanced_feature.mjs — loaded on button click
- lazy_component.mjs — loaded when visible on screen

## Design principles
The app is decoupled into small modules. Core logic is loaded statically, while optional features are loaded dynamically to improve modularity and performance.

## Chapter references
- Ch. 5: The Importance of Decoupling Applications
- Ch. 5: Static Imports
- Ch. 5: Dynamic Imports