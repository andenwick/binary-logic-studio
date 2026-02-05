const gatecalc = {
    input1: document.getElementById("input1"),
    input2: document.getElementById("input2"),
    gate: document.getElementById("gate"),
    Goutput: document.getElementById("ogate")
    }
const adder = {
    adderInput1: document.getElementById("adder1"),
    adderInput2: document.getElementById("adder2"),
    adderSum: document.getElementById("oaddersum"),
    adderCarry: document.getElementById("oaddercarry")
    }
const gates = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: (a, b) => (1 - a) & (1-b),
    XOR: (a, b) => ((1-a)&b | (1-b)&a),
    XNOR: (a, b) => (1-((1-a)&b | (1-b)&a)),
};
function calcadder() {
    let a = Number(adder.adderInput1.value)
    let b = Number(adder.adderInput2.value)
    adder.adderSum.textContent = (1-a)&b | (1-b)&a
    adder.adderCarry.textContent = a & b

}

function calculate() {
    const a = Number(calcadder.input1.value)
    const b = Number(calcadder.input2.value)
    const c = gate.value
    gatecalc.Goutput.textContent = gates[c](a,b);
}
input1.addEventListener("change", calculate)
input2.addEventListener("change", calculate)
gate.addEventListener("change", calculate)
calculate()
adderInput1.addEventListener("change", calcadder)
adderInput2.addEventListener("change", calcadder)
calcadder()