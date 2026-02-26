const gateInputs = {
    input1: document.getElementById("input1"),
    input2: document.getElementById("input2"),
    gateSelector: document.getElementById("gate"),
    output: document.getElementById("ogate"),
};

const adderInputs = {
    input1: document.getElementById("adder1"),
    input2: document.getElementById("adder2"),
    sum: document.getElementById("oaddersum"),
    carry: document.getElementById("oaddercarry"),
};

const gates = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: (a, b) => (1 - a) & (1 - b),
    XOR: (a, b) => ((1 - a) & b) | ((1 - b) & a),
    XNOR: (a, b) => 1 - (((1 - a) & b) | ((1 - b) & a)),
};

function calculateGate() {
    const a = Number(gateInputs.input1.value);
    const b = Number(gateInputs.input2.value);
    const gateName = gateInputs.gateSelector.value;
    const gateFn = gates[gateName];

    if (!gateFn) {
        gateInputs.output.textContent = "?";
        return;
    }

    gateInputs.output.textContent = gateFn(a, b);
}

function calculateAdder() {
    const a = Number(adderInputs.input1.value);
    const b = Number(adderInputs.input2.value);

    adderInputs.sum.textContent = ((1 - a) & b) | ((1 - b) & a);
    adderInputs.carry.textContent = a & b;
}

gateInputs.input1.addEventListener("change", calculateGate);
gateInputs.input2.addEventListener("change", calculateGate);
gateInputs.gateSelector.addEventListener("change", calculateGate);
calculateGate();

adderInputs.input1.addEventListener("change", calculateAdder);
adderInputs.input2.addEventListener("change", calculateAdder);
calculateAdder();
