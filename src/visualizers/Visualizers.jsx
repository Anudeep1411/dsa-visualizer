import { useEffect, useState } from "react";
import { PageTitle, TopicTabs, ExplainComplexity, Card, CodeBlock } from "../components/Common";
import { THEORY } from "../data/dsaData";

function parseNums(text) {
  const nums = text.split(",").map((x) => Number(x.trim())).filter(Number.isFinite);
  return nums.length ? nums.slice(0, 14) : [30, 10, 50, 20, 40];
}

function range(a, b) {
  return Array.from({ length: Math.max(0, b - a) }, (_, i) => a + i);
}

function useAutoPlay(playing, setPlaying, step, setStep, length, speed = 650) {
  useEffect(() => {
    if (!playing) return;
    if (step >= length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), speed);
    return () => clearTimeout(t);
  }, [playing, step, length, speed, setPlaying, setStep]);
}

function Controls({ message, playing, setPlaying, steps, step, setStep }) {
  return (
    <>
      <p className="mt-4 text-cyan-300">{message}</p>
      <p className="mt-1 text-sm text-slate-500">Current step: {steps.length ? step + 1 : 0} / {steps.length}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button disabled={!steps.length} onClick={() => setPlaying(!playing)} className="rounded-xl bg-slate-800 px-4 py-2 font-bold disabled:opacity-50">{playing ? "Pause" : "Play"}</button>
        <button disabled={!steps.length} onClick={() => { setPlaying(false); setStep(Math.max(0, step - 1)); }} className="rounded-xl bg-slate-800 px-4 py-2 font-bold disabled:opacity-50">Previous</button>
        <button disabled={!steps.length} onClick={() => { setPlaying(false); setStep(Math.min(steps.length - 1, step + 1)); }} className="rounded-xl bg-slate-800 px-4 py-2 font-bold disabled:opacity-50">Next</button>
      </div>
    </>
  );
}

export function SortingPage() {
  const [op, setOp] = useState("Bubble Sort");
  const [input, setInput] = useState("30, 10, 50, 20, 40");
  const [array, setArray] = useState([30, 10, 50, 20, 40]);
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(650);
  const current = steps[step];
  const display = current?.array || array;
  const max = Math.max(...display, 1);

  useAutoPlay(playing, setPlaying, step, setStep, steps.length, speed);

  function start() {
    const nums = parseNums(input);
    setArray(nums);
    setSteps(makeSortSteps(nums, op));
    setStep(0);
    setPlaying(true);
  }

  return (
    <section className="space-y-5">
      <PageTitle id="sorting" />
      <TopicTabs id="sorting" op={op} setOp={(v) => { setOp(v); setSteps([]); setStep(0); setPlaying(false); }} />
      <ExplainComplexity id="sorting" op={op} />

      <Card title="Visualizer">
        <div className="mb-4 flex flex-col gap-3 md:flex-row">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={start} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Start</button>
          <button onClick={() => { const r = Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10); setInput(r.join(", ")); setArray(r); setSteps([]); setStep(0); }} className="rounded-xl bg-purple-500 px-5 py-3 font-bold">Random</button>
        </div>

        <div className="flex h-72 items-end gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-4">
          {display.map((value, i) => (
            <div key={`${value}-${i}`} className="flex min-w-[48px] flex-1 flex-col items-center">
              <div className={`w-full rounded-t-xl transition-all ${current?.sorted?.includes(i) ? "bg-green-400" : current?.swap?.includes(i) ? "bg-red-400" : current?.compare?.includes(i) ? "bg-yellow-400" : current?.active?.includes(i) ? "bg-purple-400" : "bg-cyan-400"}`} style={{ height: `${Math.max((value / max) * 220, 24)}px` }} />
              <span className="mt-2 text-sm">{value}</span>
            </div>
          ))}
        </div>

        <Controls message={current?.message || "Click Start to visualize. Merge/Quick/Heap show simplified final transformation."} playing={playing} setPlaying={setPlaying} steps={steps} step={step} setStep={setStep} />
        <label className="mt-4 block text-sm text-slate-400">Speed: {speed}ms</label>
        <input type="range" min="250" max="1500" step="50" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="w-full" />
      </Card>

      <SortingComparison />
      <CodeBlock id="sorting" op={op} />
    </section>
  );
}

function makeSortSteps(input, op) {
  if (op === "Selection Sort") return selectionSteps(input);
  if (op === "Insertion Sort") return insertionSteps(input);
  if (op === "Bubble Sort") return bubbleSteps(input);
  const arr = [...input];
  const sorted = [...arr].sort((a, b) => a - b);
  return [
    { array: [...arr], message: `${op}: initial array.` },
    { array: [...sorted], sorted: range(0, sorted.length), message: `${op}: sorted result shown. Full algorithm code is available below.` },
  ];
}

function bubbleSteps(input) {
  const arr = [...input], steps = [{ array: [...arr], message: "Initial array" }];
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({ array: [...arr], compare: [j, j + 1], sorted: range(arr.length - i, arr.length), message: `Compare ${arr[j]} and ${arr[j + 1]}` });
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        steps.push({ array: [...arr], swap: [j, j + 1], sorted: range(arr.length - i, arr.length), message: "Swap because left value is bigger" });
      }
    }
    steps.push({ array: [...arr], sorted: range(arr.length - i - 1, arr.length), message: "Largest value fixed" });
    if (!swapped) break;
  }
  steps.push({ array: [...arr], sorted: range(0, arr.length), message: "Array sorted" });
  return steps;
}

function selectionSteps(input) {
  const arr = [...input], steps = [{ array: [...arr], message: "Initial array" }];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    steps.push({ array: [...arr], active: [i], sorted: range(0, i), message: `Assume ${arr[i]} is minimum` });
    for (let j = i + 1; j < arr.length; j++) {
      steps.push({ array: [...arr], compare: [min, j], sorted: range(0, i), message: `Compare ${arr[min]} and ${arr[j]}` });
      if (arr[j] < arr[min]) {
        min = j;
        steps.push({ array: [...arr], active: [min], sorted: range(0, i), message: `New minimum: ${arr[min]}` });
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
    steps.push({ array: [...arr], swap: [i, min], sorted: range(0, i + 1), message: "Place minimum at correct position" });
  }
  steps.push({ array: [...arr], sorted: range(0, arr.length), message: "Array sorted" });
  return steps;
}

function insertionSteps(input) {
  const arr = [...input], steps = [{ array: [...arr], sorted: [0], message: "First element is sorted" }];
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    steps.push({ array: [...arr], active: [i], sorted: range(0, i), message: `Pick key ${key}` });
    while (j >= 0 && arr[j] > key) {
      steps.push({ array: [...arr], compare: [j, j + 1], sorted: range(0, i), message: `Shift ${arr[j]} right` });
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    steps.push({ array: [...arr], active: [j + 1], sorted: range(0, i + 1), message: `Insert ${key}` });
  }
  steps.push({ array: [...arr], sorted: range(0, arr.length), message: "Array sorted" });
  return steps;
}

function SortingComparison() {
  const rows = [
    ["Bubble", "O(n)", "O(n²)", "O(n²)", "O(1)"],
    ["Selection", "O(n²)", "O(n²)", "O(n²)", "O(1)"],
    ["Insertion", "O(n)", "O(n²)", "O(n²)", "O(1)"],
    ["Merge", "O(n log n)", "O(n log n)", "O(n log n)", "O(n)"],
    ["Quick", "O(n log n)", "O(n log n)", "O(n²)", "O(log n)"],
    ["Heap", "O(n log n)", "O(n log n)", "O(n log n)", "O(1)"],
  ];

  return (
    <Card title="Compare Sorting Algorithms">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead className="bg-slate-950 text-slate-300">
            <tr>{["Algorithm", "Best", "Average", "Worst", "Space"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-white/10">
                {row.map((cell, i) => <td key={`${row[0]}-${i}`} className={i === 0 ? "p-3 font-bold text-cyan-300" : "p-3"}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function SearchingPage() {
  const [op, setOp] = useState("Linear Search");
  const [input, setInput] = useState("10, 25, 4, 18, 32, 7, 40");
  const [target, setTarget] = useState("18");
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = steps[step];
  const display = current?.array || parseNums(input);

  useAutoPlay(playing, setPlaying, step, setStep, steps.length);

  function start() {
    setSteps(makeSearchSteps(parseNums(input), Number(target), op));
    setStep(0);
    setPlaying(true);
  }

  return (
    <section className="space-y-5">
      <PageTitle id="searching" />
      <TopicTabs id="searching" op={op} setOp={(v) => { setOp(v); setSteps([]); setStep(0); }} />
      <ExplainComplexity id="searching" op={op} />
      <Card title="Visualizer">
        <div className="mb-4 grid gap-3 md:grid-cols-[1fr_120px_auto]">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <input value={target} onChange={(e) => setTarget(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={start} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Search</button>
        </div>
        <div className="flex min-h-[170px] items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-4">
          {display.map((value, i) => {
            const found = current?.found === i;
            const checked = current?.checked?.includes(i);
            const mid = current?.mid === i;
            const inRange = current?.left !== undefined && i >= current.left && i <= current.right;
            return <div key={`${value}-${i}`} className={`min-w-[78px] rounded-2xl p-4 text-center font-bold ${found ? "bg-green-400 text-slate-950" : mid ? "bg-purple-400 text-slate-950" : checked ? "bg-yellow-400 text-slate-950" : inRange ? "bg-cyan-400/30 text-cyan-100" : "bg-slate-800"}`}><div className="text-xs opacity-70">Index {i}</div>{value}{mid && <div className="text-xs">MID</div>}</div>;
          })}
        </div>
        <Controls message={current?.message || "Click Search to visualize"} playing={playing} setPlaying={setPlaying} steps={steps} step={step} setStep={setStep} />
      </Card>
      <CodeBlock id="searching" op={op} />
    </section>
  );
}

function makeSearchSteps(input, target, op) {
  const arr = op === "Binary Search" ? [...input].sort((a, b) => a - b) : [...input];
  const steps = [{ array: [...arr], message: op === "Binary Search" ? "Array sorted first for Binary Search" : "Start searching" }];
  if (op === "Linear Search") {
    for (let i = 0; i < arr.length; i++) {
      steps.push({ array: [...arr], checked: [i], message: `Check index ${i}: ${arr[i]}` });
      if (arr[i] === target) return [...steps, { array: [...arr], found: i, message: `Found target ${target}` }];
    }
    steps.push({ array: [...arr], message: "Target not found" });
    return steps;
  }
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    steps.push({ array: [...arr], left, right, mid, message: `Check middle ${arr[mid]}` });
    if (arr[mid] === target) return [...steps, { array: [...arr], found: mid, message: `Found target ${target}` }];
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  steps.push({ array: [...arr], message: "Target not found" });
  return steps;
}

export function LinearPage({ id }) {
  const ops = Object.keys(THEORY[id].operations);
  const [op, setOp] = useState(ops[0]);
  const [items, setItems] = useState([10, 20, 30]);
  const [value, setValue] = useState("40");
  const [message, setMessage] = useState("Choose an operation to see how it works.");

  function action() {
    if (op === "Push" || op === "Enqueue") {
      setItems((x) => [...x, Number(value)]);
      setMessage(`${op}: ${value} added.`);
    } else if (op === "Pop") {
      setItems((x) => {
        const removed = x[x.length - 1];
        setMessage(x.length ? `Pop removed ${removed}` : "Stack is empty");
        return x.slice(0, -1);
      });
    } else if (op === "Dequeue") {
      setItems((x) => {
        const removed = x[0];
        setMessage(x.length ? `Dequeue removed ${removed}` : "Queue is empty");
        return x.slice(1);
      });
    } else if (op === "Peek") {
      const val = id === "stack" ? items[items.length - 1] : items[0];
      setMessage(items.length ? `Peek value is ${val}` : "Structure is empty");
    } else if (op === "isEmpty") {
      setMessage(items.length ? "False: not empty" : "True: empty");
    }
  }

  return (
    <section className="space-y-5">
      <PageTitle id={id} />
      <TopicTabs id={id} op={op} setOp={setOp} />
      <ExplainComplexity id={id} op={op} />
      <Card title="Visualizer">
        <div className="mb-5 flex flex-wrap gap-3">
          <input value={value} onChange={(e) => setValue(e.target.value)} className="w-32 rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={action} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
          <button onClick={() => { setItems([]); setMessage("Cleared."); }} className="rounded-xl bg-red-500 px-5 py-3 font-bold">Clear</button>
        </div>
        <p className="mb-4 text-cyan-300">{message}</p>
        {id === "stack" ? <StackVisual items={items} /> : <QueueVisual items={items} />}
      </Card>
      <CodeBlock id={id} op={op} />
    </section>
  );
}

function StackVisual({ items }) {
  return <div className="flex min-h-[320px] flex-col-reverse items-center justify-start gap-3 rounded-2xl border border-white/10 bg-slate-950 p-5">{items.map((item, i) => <div key={`${item}-${i}`} className={`w-64 rounded-2xl p-4 text-center font-bold ${i === items.length - 1 ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}>{item} {i === items.length - 1 ? "← TOP" : ""}</div>)}</div>;
}

function QueueVisual({ items }) {
  return <div className="flex min-h-[180px] items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">{items.map((item, i) => <div key={`${item}-${i}`} className={`min-w-[110px] rounded-2xl p-4 text-center font-bold ${i === 0 ? "bg-green-400 text-slate-950" : i === items.length - 1 ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}>{i === 0 && <div className="text-xs">FRONT</div>}{item}{i === items.length - 1 && <div className="text-xs">REAR</div>}</div>)}</div>;
}

export function ListPage({ id, doubly = false }) {
  const ops = Object.keys(THEORY[id].operations);
  const [op, setOp] = useState(ops[0]);
  const [nodes, setNodes] = useState([]);
  const [value, setValue] = useState("10");
  const [found, setFound] = useState(null);
  const [message, setMessage] = useState("List starts empty. Insert nodes to begin.");

  function run() {
    const v = Number(value);
    if (op === "Insert Head") { setNodes((n) => [v, ...n]); setMessage(`${v} inserted at head.`); setFound(null); }
    else if (op === "Insert Tail") { setNodes((n) => [...n, v]); setMessage(`${v} inserted at tail.`); setFound(null); }
    else if (op === "Delete") {
      setNodes((n) => {
        const idx = n.findIndex((x) => x === v);
        if (idx < 0) { setMessage(`${v} not found.`); return n; }
        setMessage(`${v} deleted.`);
        return n.filter((_, i) => i !== idx);
      });
      setFound(null);
    } else if (op === "Search") {
      const idx = nodes.findIndex((x) => x === v);
      setFound(idx);
      setMessage(idx >= 0 ? `${v} found at position ${idx}.` : `${v} not found.`);
    } else if (op === "Reverse") {
      setNodes((n) => [...n].reverse());
      setMessage("List reversed.");
      setFound(null);
    }
  }

  return (
    <section className="space-y-5">
      <PageTitle id={id} />
      <TopicTabs id={id} op={op} setOp={setOp} />
      <ExplainComplexity id={id} op={op} />
      <Card title="Visualizer">
        <div className="mb-5 flex flex-wrap gap-3">
          <input value={value} onChange={(e) => setValue(e.target.value)} className="w-32 rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={run} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
          <button onClick={() => { setNodes([]); setMessage("List cleared."); }} className="rounded-xl bg-red-500 px-5 py-3 font-bold">Clear</button>
        </div>
        <p className="mb-4 text-cyan-300">{message}</p>
        <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">
          <span className="rounded-xl bg-green-400 px-4 py-2 font-bold text-slate-950">HEAD</span>
          {nodes.map((node, i) => <div key={`${node}-${i}`} className="flex items-center gap-3">{doubly && <span className="text-cyan-300">←</span>}<div className={`min-w-[110px] rounded-2xl border p-4 text-center ${found === i ? "border-yellow-400 bg-yellow-400/20" : "border-cyan-400/40 bg-cyan-400/10"}`}>{doubly && <p className="text-xs text-slate-400">prev</p>}<p className="text-2xl font-black">{node}</p><p className="text-xs text-slate-400">next</p></div><span className="text-cyan-300">→</span></div>)}
          <span className="rounded-xl bg-red-400 px-4 py-2 font-bold text-slate-950">NULL</span>
        </div>
      </Card>
      <CodeBlock id={id} op={op} />
    </section>
  );
}

export function TwoPointerPage() {
  const [op, setOp] = useState("Pair Sum");
  const [input, setInput] = useState("1, 2, 4, 7, 9, 11");
  const [target, setTarget] = useState("13");
  const [step, setStep] = useState(0);
  const nums = parseNums(input).sort((a, b) => a - b);
  const steps = op === "Pair Sum" ? twoSteps(nums, Number(target)) : reverseSteps(nums);
  const current = steps[step] || steps[0];

  return (
    <section className="space-y-5">
      <PageTitle id="twoPointers" />
      <TopicTabs id="twoPointers" op={op} setOp={(v) => { setOp(v); setStep(0); }} />
      <ExplainComplexity id="twoPointers" op={op} />
      <Card title="Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_120px]">
          <input value={input} onChange={(e) => { setInput(e.target.value); setStep(0); }} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          {op === "Pair Sum" && <input value={target} onChange={(e) => { setTarget(e.target.value); setStep(0); }} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />}
        </div>
        <PointerRow nums={nums} current={current} />
        <StepButtons current={current} step={step} setStep={setStep} total={steps.length} />
      </Card>
      <CodeBlock id="twoPointers" op={op} />
    </section>
  );
}

function twoSteps(arr, target) {
  let left = 0, right = arr.length - 1, steps = [];
  while (left < right) {
    const sum = arr[left] + arr[right];
    steps.push({ left, right, message: `Check ${arr[left]} + ${arr[right]} = ${sum}` });
    if (sum === target) return [...steps, { left, right, message: "Pair found!" }];
    if (sum < target) left++;
    else right--;
  }
  return steps.length ? [...steps, { left, right, message: "No pair found" }] : [{ message: "Enter numbers" }];
}

function reverseSteps(arr) {
  const steps = [];
  let l = 0, r = arr.length - 1;
  while (l < r) { steps.push({ left: l, right: r, message: `Swap ${arr[l]} and ${arr[r]}` }); l++; r--; }
  return steps.length ? steps : [{ message: "Enter numbers" }];
}

function PointerRow({ nums, current }) {
  return <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">{nums.map((v, i) => <div key={`${v}-${i}`} className={`min-w-[80px] rounded-2xl p-4 text-center font-bold ${current?.left === i || current?.right === i ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}><div className="text-xs opacity-70">Index {i}</div>{v}{current?.left === i && <div className="text-xs">LEFT</div>}{current?.right === i && <div className="text-xs">RIGHT</div>}</div>)}</div>;
}

export function SlidingPage() {
  const [op, setOp] = useState("Fixed Window");
  const [input, setInput] = useState("2, 1, 5, 1, 3, 2");
  const [k, setK] = useState("3");
  const [step, setStep] = useState(0);
  const nums = parseNums(input);
  const steps = slidingSteps(nums, Number(k), op);
  const current = steps[step] || steps[0];

  return (
    <section className="space-y-5">
      <PageTitle id="sliding" />
      <TopicTabs id="sliding" op={op} setOp={(v) => { setOp(v); setStep(0); }} />
      <ExplainComplexity id="sliding" op={op} />
      <Card title="Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_120px]">
          <input value={input} onChange={(e) => { setInput(e.target.value); setStep(0); }} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <input value={k} onChange={(e) => { setK(e.target.value); setStep(0); }} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
        </div>
        <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">
          {nums.map((v, i) => <div key={`${v}-${i}`} className={`min-w-[80px] rounded-2xl p-4 text-center font-bold ${current?.active?.includes(i) ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}><div className="text-xs opacity-70">Index {i}</div>{v}</div>)}
        </div>
        <StepButtons current={current} step={step} setStep={setStep} total={steps.length} />
      </Card>
      <CodeBlock id="sliding" op={op} />
    </section>
  );
}

function slidingSteps(arr, k, op) {
  const size = Math.max(1, Math.min(k || 1, arr.length));
  const steps = [];
  if (op === "Fixed Window") {
    for (let left = 0; left + size <= arr.length; left++) {
      const active = range(left, left + size);
      const sum = active.reduce((t, i) => t + arr[i], 0);
      steps.push({ active, message: `Window [${left}, ${left + size - 1}], sum = ${sum}` });
    }
  } else {
    let left = 0, sum = 0;
    for (let right = 0; right < arr.length; right++) {
      sum += arr[right];
      steps.push({ active: range(left, right + 1), message: `Expand right to ${right}, sum = ${sum}` });
      if (sum > k) { sum -= arr[left]; left++; steps.push({ active: range(left, right + 1), message: `Shrink left, sum = ${sum}` }); }
    }
  }
  return steps.length ? steps : [{ message: "Enter numbers", active: [] }];
}

export function TreePage() {
  const [op, setOp] = useState("Build Tree");
  const [input, setInput] = useState("50, 30, 70, 20, 40, 60, 80");
  const [value, setValue] = useState("65");
  const [root, setRoot] = useState(null);
  const [active, setActive] = useState([]);
  const [message, setMessage] = useState("Tree is empty. Enter values and click Build Tree.");

  function run() {
    const v = Number(value);
    if (op === "Build Tree") {
      const nums = parseNums(input);
      setRoot(buildBST(nums));
      setActive(nums);
      setMessage(nums.map((n, i) => i === 0 ? `${n} becomes root` : `${n} inserted using BST rule`).join(" → "));
    } else if (!root) setMessage("Build tree first.");
    else if (op === "Insert") { setRoot(insertBST(clone(root), v)); setActive([v]); setMessage(`${v} inserted into BST.`); }
    else if (op === "Delete") { setRoot(deleteBST(clone(root), v)); setActive([]); setMessage(`${v} deleted if it existed.`); }
    else if (op === "Search") {
      const path = searchBST(root, v);
      setActive(path);
      setMessage(path[path.length - 1] === v ? `Found ${v}. Path: ${path.join(" → ")}` : `${v} not found. Path: ${path.join(" → ")}`);
    } else {
      const result = [];
      if (op === "Inorder") inorder(root, result);
      if (op === "Preorder") preorder(root, result);
      if (op === "Postorder") postorder(root, result);
      setActive(result);
      setMessage(`${op}: ${result.join(" → ")}`);
    }
  }

  return (
    <section className="space-y-5">
      <PageTitle id="tree" />
      <TopicTabs id="tree" op={op} setOp={setOp} />
      <ExplainComplexity id="tree" op={op} />
      <Card title="Tree Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_120px_auto]">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <input value={value} onChange={(e) => setValue(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={run} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
        </div>
        <p className="mb-4 break-words text-cyan-300">{message}</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-6">
          {root ? <TreeNode node={root} active={active} /> : <Empty label="Tree is empty. Build tree first." />}
        </div>
      </Card>
      <CodeBlock id="tree" op={op} />
    </section>
  );
}

function buildBST(values) { return values.reduce((r, v) => insertBST(r, v), null); }
function clone(n) { return n ? { data: n.data, left: clone(n.left), right: clone(n.right) } : null; }
function insertBST(root, v) { if (!root) return { data: v, left: null, right: null }; if (v < root.data) root.left = insertBST(root.left, v); else if (v > root.data) root.right = insertBST(root.right, v); return root; }
function minNode(n) { while (n.left) n = n.left; return n; }
function deleteBST(root, v) { if (!root) return null; if (v < root.data) root.left = deleteBST(root.left, v); else if (v > root.data) root.right = deleteBST(root.right, v); else { if (!root.left) return root.right; if (!root.right) return root.left; const s = minNode(root.right); root.data = s.data; root.right = deleteBST(root.right, s.data); } return root; }
function searchBST(root, v) { const path = []; let cur = root; while (cur) { path.push(cur.data); if (cur.data === v) return path; cur = v < cur.data ? cur.left : cur.right; } return path; }
function inorder(n, r) { if (!n) return; inorder(n.left, r); r.push(n.data); inorder(n.right, r); }
function preorder(n, r) { if (!n) return; r.push(n.data); preorder(n.left, r); preorder(n.right, r); }
function postorder(n, r) { if (!n) return; postorder(n.left, r); postorder(n.right, r); r.push(n.data); }

function TreeNode({ node, active }) {
  if (!node) return null;
  return <div className="flex flex-col items-center"><div className={`grid h-14 w-14 place-items-center rounded-full font-black ${active.includes(node.data) ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}>{node.data}</div><div className="mt-5 flex gap-10">{node.left && <TreeNode node={node.left} active={active} />}{node.right && <TreeNode node={node.right} active={active} />}</div></div>;
}

export function GraphPage() {
  const [op, setOp] = useState("Build Graph");
  const [edgesText, setEdgesText] = useState("A-B, A-C, B-D, B-E, C-F");
  const [start, setStart] = useState("A");
  const [built, setBuilt] = useState(null);
  const [visited, setVisited] = useState([]);
  const [message, setMessage] = useState("Graph is empty. Enter edges and click Build Graph.");
  const currentGraph = built || { nodes: [], edges: [], graph: {} };

  function run() {
    if (op === "Build Graph") {
      const g = buildGraph(edgesText);
      setBuilt(g);
      setVisited([]);
      setMessage(g.edges.map(([a, b]) => `${a} connected to ${b}`).join(" | ") || "No valid edges");
    } else if (!built) setMessage("Build graph first.");
    else if (op === "BFS") {
      const order = bfs(built.graph, start.toUpperCase());
      animate(order);
      setMessage(`BFS uses queue. Order: ${order.join(" → ")}`);
    } else if (op === "DFS") {
      const order = dfs(built.graph, start.toUpperCase());
      animate(order);
      setMessage(`DFS goes deep first. Order: ${order.join(" → ")}`);
    }
  }

  function animate(order) {
    setVisited([]);
    order.forEach((node, i) => setTimeout(() => setVisited((v) => [...v, node]), i * 500));
  }

  return (
    <section className="space-y-5">
      <PageTitle id="graph" />
      <TopicTabs id="graph" op={op} setOp={setOp} />
      <ExplainComplexity id="graph" op={op} />
      <Card title="Graph Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_100px_auto]">
          <input value={edgesText} onChange={(e) => setEdgesText(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <input value={start} onChange={(e) => setStart(e.target.value.toUpperCase())} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={run} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
        </div>
        <p className="mb-4 break-words text-cyan-300">{message}</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">
          {currentGraph.nodes.length ? <GraphCanvas graphData={currentGraph} visited={visited} /> : <Empty label="Graph is empty. Build graph first." />}
        </div>
      </Card>
      <CodeBlock id="graph" op={op} />
    </section>
  );
}

function buildGraph(text) {
  const edges = text.split(",").map((e) => e.trim()).filter(Boolean).map((e) => e.split("-").map((x) => x.trim().toUpperCase())).filter((e) => e.length === 2 && e[0] && e[1]);
  const graph = {}, set = new Set();
  for (const [a, b] of edges) { set.add(a); set.add(b); graph[a] ||= []; graph[b] ||= []; graph[a].push(b); graph[b].push(a); }
  return { edges, graph, nodes: [...set].sort() };
}

function bfs(graph, start) { if (!graph[start]) return []; const seen = new Set([start]), q = [start], order = []; while (q.length) { const n = q.shift(); order.push(n); for (const nei of graph[n] || []) if (!seen.has(nei)) { seen.add(nei); q.push(nei); } } return order; }
function dfs(graph, start) { const seen = new Set(), order = []; function go(n) { if (!graph[n] || seen.has(n)) return; seen.add(n); order.push(n); for (const nei of graph[n]) go(nei); } go(start); return order; }

function GraphCanvas({ graphData, visited }) {
  const width = 760, height = 340, cx = width / 2, cy = height / 2, rx = 280, ry = 115;
  const pos = {};
  graphData.nodes.forEach((node, i) => {
    const angle = (2 * Math.PI * i) / Math.max(graphData.nodes.length, 1) - Math.PI / 2;
    pos[node] = { x: cx + rx * Math.cos(angle), y: cy + ry * Math.sin(angle) };
  });
  return (
    <div className="min-w-[760px]">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[340px] w-full">
        {graphData.edges.map(([a, b]) => <line key={`${a}-${b}`} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y} stroke="rgb(51 65 85)" strokeWidth="3" />)}
        {graphData.nodes.map((node) => {
          const active = visited.includes(node);
          return <g key={node}><circle cx={pos[node].x} cy={pos[node].y} r="30" fill={active ? "rgb(34 211 238)" : "rgb(30 41 59)"} stroke="rgb(71 85 105)" strokeWidth="3" /><text x={pos[node].x} y={pos[node].y + 6} textAnchor="middle" fontSize="18" fontWeight="800" fill={active ? "rgb(2 6 23)" : "white"}>{node}</text></g>;
        })}
      </svg>
      <div className="mt-4 flex flex-wrap gap-2">
        {graphData.edges.map(([a, b]) => <span key={`${a}-${b}`} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">{a} — {b}</span>)}
      </div>
    </div>
  );
}

function StepButtons({ current, step, setStep, total }) {
  return <><p className="mt-4 text-cyan-300">{current?.message || "No steps"}</p><div className="mt-4 flex gap-3"><button onClick={() => setStep(Math.max(0, step - 1))} className="rounded-xl bg-slate-800 px-4 py-2 font-bold">Previous</button><button onClick={() => setStep(Math.min(total - 1, step + 1))} className="rounded-xl bg-slate-800 px-4 py-2 font-bold">Next</button></div></>;
}

function Empty({ label }) {
  return <div className="grid min-h-[160px] place-items-center rounded-2xl border border-dashed border-white/10 text-slate-400">{label}</div>;
}