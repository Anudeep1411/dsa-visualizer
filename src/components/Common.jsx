import React, { useState } from "react";
import { TOPICS, THEORY, CODE, simpleCode } from "../data/dsaData";

export function Nav({ active, label, onClick, small = false }) {
  return (
    <button onClick={onClick} className={`mb-2 flex w-full items-center gap-3 rounded-2xl px-4 text-left transition ${small ? "py-2 text-sm" : "py-3"} ${active ? "bg-cyan-400 font-bold text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>
      {label}
    </button>
  );
}


export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "Something went wrong" };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page && this.state.hasError) {
      this.setState({ hasError: false, message: "" });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-3xl border border-red-400/40 bg-red-400/10 p-6">
          <h2 className="text-2xl font-black text-red-300">Page error fixed fallback</h2>
          <p className="mt-3 text-slate-300">
            This page had a rendering issue. Go Home and open the topic again.
          </p>
          <p className="mt-2 text-sm text-red-200">{this.state.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}


export function MiniStat({ label, value, sub }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-4xl font-black text-cyan-300">{value}</p>
      {sub && <p className="text-xs text-slate-500">{sub}</p>}
    </div>
  );
}


export function PageTitle({ id }) {
  const topic = THEORY[id];
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <p className="font-bold text-cyan-300">DSA Topic</p>
      <h1 className="mt-2 text-4xl font-black">{topic.title}</h1>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">{topic.intro}</p>
      <p className="mt-2 text-sm text-slate-400">Real life: {topic.real}</p>
    </div>
  );
}


export function TopicTabs({ id, op, setOp }) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] p-2">
      {Object.keys(THEORY[id].operations).map((item) => (
        <button key={item} onClick={() => setOp(item)} className={`whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-bold ${op === item ? "bg-cyan-400 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"}`}>
          {item}
        </button>
      ))}
    </div>
  );
}


export function ExplainComplexity({ id, op }) {
  const [explain, complexity] = THEORY[id].operations[op];
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card title={`${op} Explanation`}>
        <p className="leading-7 text-slate-300">{explain}</p>
      </Card>
      <Card title="Complexity">
        <Complexity complexity={complexity} />
      </Card>
    </div>
  );
}


export function Card({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <h2 className="mb-4 text-xl font-black">{title}</h2>
      {children}
    </section>
  );
}


export function Complexity({ complexity }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      {Object.entries(complexity).map(([key, value]) => (
        <div key={key} className="grid grid-cols-2 border-b border-white/10 last:border-0">
          <div className="bg-slate-950 p-3 capitalize text-slate-400">{key}</div>
          <div className="p-3 font-mono text-cyan-300">{value}</div>
        </div>
      ))}
    </div>
  );
}


export function CodeBlock({ id, op }) {
  const snippets = CODE[id]?.[op] || simpleCode(THEORY[id]?.title || id, op);
  const langs = Object.keys(snippets);
  const [lang, setLang] = useState(langs[0]);
  const activeCode = snippets[lang] || snippets[langs[0]];

  return (
    <Card title={`${op} Code`}>
      <div className="mb-4 flex flex-wrap gap-2">
        {langs.map((item) => <button key={item} onClick={() => setLang(item)} className={`rounded-xl px-4 py-2 text-sm font-bold ${lang === item ? "bg-cyan-400 text-slate-950" : "bg-slate-800 hover:bg-slate-700"}`}>{item}</button>)}
        <button onClick={() => navigator.clipboard.writeText(activeCode)} className="ml-auto rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950">Copy</button>
      </div>
      <pre className="max-h-[430px] overflow-auto rounded-2xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
        <code>{activeCode}</code>
      </pre>
    </Card>
  );
}


export function StudyGuide({ id, op }) {
  const topic = THEORY[id];
  const [explain, complexity] = topic.operations[op];

  return (
    <Card title={`${topic.title} Study Guide`}>
      <div className="space-y-4 text-slate-300">
        <div>
          <h3 className="font-bold text-cyan-300">1. What is this?</h3>
          <p className="mt-1 leading-7">{topic.intro}</p>
        </div>
        <div>
          <h3 className="font-bold text-cyan-300">2. Current Operation</h3>
          <p className="mt-1 leading-7"><b>{op}:</b> {explain}</p>
        </div>
        <div>
          <h3 className="font-bold text-cyan-300">3. Real-life Usage</h3>
          <p className="mt-1 leading-7">{topic.real}</p>
        </div>
        <div>
          <h3 className="font-bold text-cyan-300">4. Complexity</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {Object.entries(complexity).map(([key, value]) => (
              <span key={key} className="rounded-full bg-slate-800 px-3 py-1 text-sm">
                {key}: <b className="text-cyan-300">{value}</b>
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-cyan-300">5. Interview Explanation Pattern</h3>
          <p className="mt-1 leading-7">
            Define the concept, explain the operation, dry-run a small example, mention edge cases,
            then finish with time and space complexity.
          </p>
        </div>
      </div>
    </Card>
  );
}


export function Header({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h1 className="text-4xl font-black text-cyan-300">{title}</h1>
      <p className="mt-3 max-w-4xl leading-7 text-slate-300">{desc}</p>
    </div>
  );
}


export function TopicSelect({ selected, setSelected }) {
  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400 md:w-80">
      {TOPICS.map((topic) => <option key={topic.id} value={topic.id}>{topic.title}</option>)}
    </select>
  );
}
