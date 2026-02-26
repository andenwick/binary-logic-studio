# Binary Logic Studio

Interactive simulator for digital logic gates and binary addition. Built to visualize how CPUs perform arithmetic at the gate level using only bitwise operations — no high-level math operators.

## Features

**Logic Gates**
- AND, OR, NOT, XOR, XNOR
- Select two binary inputs (0 or 1) and a gate
- See the output update in real time

**Half Adder**
- Adds two single-bit binary numbers
- Displays both sum and carry outputs
- Demonstrates the fundamental building block of CPU arithmetic

## How It Works

Every gate is implemented with raw bitwise operations — no `+`, `-`, or boolean shortcuts:

```javascript
AND:  (a, b) => a & b
OR:   (a, b) => a | b
NOT:  (a, b) => (1 - a) & (1 - b)
XOR:  (a, b) => ((1 - a) & b) | ((1 - b) & a)
XNOR: (a, b) => 1 - (((1 - a) & b) | ((1 - b) & a))
```

The half adder composes these primitives: XOR for the sum bit, AND for the carry bit.

## Run It

Open `logicgates.html` in any modern browser. No build step, no dependencies.

## Tech

Vanilla JavaScript, HTML, CSS. Zero dependencies.
