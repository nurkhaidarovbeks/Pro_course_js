# Lab 8.1 - Flyweight Pattern

Student Name: Nurkhaidarov Beksultan  
Student ID: 250752
Date: 26.04.2026

## Description

This task implements the Flyweight structural design pattern to render 10,000+ trees efficiently.

## Pattern Explanation

The Flyweight pattern reduces memory usage by sharing intrinsic state between many similar objects.

## Intrinsic State

The intrinsic state is stored in FlyweightTree:

- type
- species
- foliageColor
- trunkColor
- height
- width

This state is shared and immutable.

## Extrinsic State

The extrinsic state is stored in ForestRenderer:

- x
- y
- scale
- rotation

This state is unique for each tree.

## Files

- tree/FlyweightTree.js - shared tree object
- tree/TreeFactory.js - flyweight factory and cache
- forest/ForestRenderer.js - forest rendering system
- test/benchmark.js - performance and object comparison
- index.html - demo page

## How to Run

From inside Lab_08/task1 run:

```bash
python3 -m http.server 8000