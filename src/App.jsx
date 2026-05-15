import { useState } from "react";
import { TOPICS } from "./data/dsaData";
import { Nav, ErrorBoundary } from "./components/Common";
import { Home, Roadmap, Practice, Quiz, Notes, Interview, TheoryPage } from "./pages/MainPages";
import {
  SortingPage,
  SearchingPage,
  LinearPage,
  ListPage,
  TwoPointerPage,
  SlidingPage,
  TreePage,
  GraphPage,
} from "./visualizers/Visualizers";

function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState("sorting");
  const [search, setSearch] = useState("");

  const allPages = [
    { id: "home", label: "🏠 Home" },
    { id: "roadmap", label: "🗺️ Roadmap" },
    { id: "practice", label: "📝 Practice" },
    { id: "quiz", label: "🧪 Quiz" },
    { id: "notes", label: "🗒️ Notes" },
    { id: "interview", label: "🎤 Interview" },
  ];

  function openTopic(id) {
    setSelected(id);
    setPage(id);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 font-black text-slate-950">
              DSA
            </div>
            <div className="text-left">
              <h1 className="text-lg font-black">DSA Visualizer</h1>
              <p className="text-xs text-slate-400">Clean structured React project</p>
            </div>
          </button>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics..."
            className="ml-auto hidden w-full max-w-md rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400 md:block"
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 lg:grid-cols-[280px_1fr]">
        <aside className="hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 lg:block">
          {allPages.map((item) => (
            <Nav
              key={item.id}
              active={page === item.id}
              onClick={() => setPage(item.id)}
              label={item.label}
            />
          ))}

          <p className="px-3 py-3 text-xs uppercase tracking-widest text-slate-500">Topics</p>

          <div className="max-h-[58vh] overflow-auto pr-1">
            {TOPICS.map((topic) => (
              <Nav
                key={topic.id}
                active={page === topic.id}
                onClick={() => openTopic(topic.id)}
                label={`${topic.icon} ${topic.title}`}
                small
              />
            ))}
          </div>
        </aside>

        <main>
          <ErrorBoundary page={page}>
            {page === "home" && (
              <Home openTopic={openTopic} search={search} setSearch={setSearch} />
            )}
            {page === "roadmap" && <Roadmap openTopic={openTopic} />}
            {page === "practice" && <Practice selected={selected} setSelected={setSelected} />}
            {page === "quiz" && <Quiz selected={selected} setSelected={setSelected} />}
            {page === "notes" && <Notes selected={selected} setSelected={setSelected} />}
            {page === "interview" && <Interview selected={selected} setSelected={setSelected} />}
            {TOPICS.some((topic) => topic.id === page) && <TopicRouter id={page} />}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}

function TopicRouter({ id }) {
  if (id === "sorting") return <SortingPage />;
  if (id === "searching") return <SearchingPage />;
  if (id === "stack") return <LinearPage id="stack" />;
  if (id === "queue") return <LinearPage id="queue" />;
  if (id === "linked") return <ListPage id="linked" />;
  if (id === "doubly") return <ListPage id="doubly" doubly />;
  if (id === "twoPointers") return <TwoPointerPage />;
  if (id === "sliding") return <SlidingPage />;
  if (id === "tree") return <TreePage />;
  if (id === "graph") return <GraphPage />;

  return <TheoryPage id={id} />;
}

export default App;
