# Logic Gates Simulator

Interactive simulator for digital logic gates and binary addition. Built to understand how computers process binary operations at the hardware level.

## Features

**Logic Gates**
- AND, OR, NOT, XOR, XNOR
- Select two binary inputs (0 or 1)
- See the output in real time

**Half Adder**
- Adds two single bits
- Shows sum and carry output
- Demonstrates how CPUs perform arithmetic

## How It Works

The gates are implemented using bitwise operations:

```javascript
AND: (a, b) => a & b
OR: (a, b) => a | b
NOT: (a, b) => (1 - a) & (1 - b)
XOR: (a, b) => ((1-a)&b | (1-b)&a)
XNOR: (a, b) => (1 - ((1-a)&b | (1-b)&a))
```

The half adder uses XOR for the sum bit and AND for the carry bit.

## Run It

Just open `logicgates.html` in a browser.

## Why I Built This

I'm interested in embedded systems and wanted to understand digital logic from the ground up. This was my way of making the concepts tangible.
