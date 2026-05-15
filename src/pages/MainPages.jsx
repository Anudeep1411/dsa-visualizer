import { useState } from "react";
import { TOPICS, ROADMAP, THEORY } from "../data/dsaData";
import { load, save } from "../utils/storage";
import { MiniStat, Header, TopicSelect, Card, PageTitle, TopicTabs, ExplainComplexity, CodeBlock, StudyGuide } from "../components/Common";

export function Home({ openTopic, search, setSearch }) {
  const [completed] = useState(() => load("completedTopics", []));
  const [bookmarks] = useState(() => load("bookmarks", []));
  const [daily] = useState(() => load("daily", { learned: 0, practiced: 0 }));

  const filtered = TOPICS.filter((topic) => `${topic.title} ${topic.desc}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-500/20 p-8">
        <p className="font-bold text-cyan-300">Resume-Worthy DSA Visualizer</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Learn DSA visually with roadmap, practice, quiz, notes and interview prep.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Clean old UI maintained. Extra features are separated into pages, so visualizer pages stay clean.
        </p>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search topics..." className="mt-6 w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400 md:hidden" />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <MiniStat label="Topics" value={TOPICS.length} />
        <MiniStat label="Completed" value={completed.length} />
        <MiniStat label="Bookmarked" value={bookmarks.length} />
        <MiniStat label="Today" value={`${daily.learned}/${daily.practiced}`} sub="learn/practice" />
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <h2 className="text-2xl font-black">Learning Roadmap</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {ROADMAP.map((stage, index) => (
            <div key={stage.level} className="rounded-2xl border border-white/10 bg-slate-950 p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 font-black text-slate-950">{index + 1}</div>
                <h3 className="text-xl font-black">{stage.level}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stage.items.map((item) => <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((topic) => (
          <button key={topic.id} onClick={() => openTopic(topic.id)} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:-translate-y-1 hover:border-cyan-400">
            <div className="flex items-start justify-between gap-3">
              <div className="text-4xl">{topic.icon}</div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{topic.difficulty}</span>
            </div>
            <h2 className="mt-4 text-2xl font-black">{topic.title}</h2>
            <p className="mt-2 min-h-[48px] text-slate-400">{topic.desc}</p>
            <p className="mt-4 font-bold text-cyan-300 group-hover:text-cyan-200">Open topic →</p>
          </button>
        ))}
      </div>
    </section>
  );
}


export function TheoryPage({ id }) {
  const topicData = THEORY[id];

  if (!topicData) {
    return (
      <section className="space-y-5">
        <Header title="Topic Not Found" desc="This topic data is missing. Please go back to Home." />
      </section>
    );
  }

  const ops = Object.keys(topicData.operations || {});
  const [op, setOp] = useState(ops[0] || "Overview");

  return (
    <section className="space-y-5">
      <PageTitle id={id} />
      <TopicTabs id={id} op={op} setOp={setOp} />
      <ExplainComplexity id={id} op={op} />
      <StudyGuide id={id} op={op} />
      <CodeBlock id={id} op={op} />
    </section>
  );
}


export function Roadmap({ openTopic }) {
  return (
    <section className="space-y-5">
      <Header title="Learning Roadmap" desc="Beginner → Intermediate → Advanced path." />
      {ROADMAP.map((stage, idx) => (
        <div key={stage.level} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 font-black text-slate-950">{idx + 1}</div>
            <h2 className="text-2xl font-black">{stage.level}</h2>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stage.items.map((name) => {
              const topic = TOPICS.find((t) => t.title.includes(name) || name.includes(t.title));
              return <button key={name} onClick={() => topic && openTopic(topic.id)} className="rounded-2xl border border-white/10 bg-slate-950 p-4 text-left hover:border-cyan-400"><h3 className="font-bold">{name}</h3><p className="mt-1 text-sm text-slate-500">{topic?.difficulty || "Core"}</p></button>;
            })}
          </div>
        </div>
      ))}
    </section>
  );
}


export function Practice({ selected, setSelected }) {
  const [daily, setDaily] = useState(() => load("daily", { learned: 0, practiced: 0 }));
  const topic = TOPICS.find((t) => t.id === selected) || TOPICS[0];
  const items = [
    ["Easy", `Basic ${topic.title} Operation`, "Understand definition, dry run and code basic operation."],
    ["Medium", `${topic.title} Pattern Problem`, "Identify pattern and optimize brute force."],
    ["Interview", `Explain ${topic.title} with complexity`, "Explain approach, dry run, edge cases and complexity."],
  ];
  function mark() {
    const next = { ...daily, practiced: daily.practiced + 1 };
    setDaily(next); save("daily", next);
  }
  return (
    <section className="space-y-5">
      <Header title="Practice Problems" desc="Separate practice section with topic-wise problem ideas and approach." />
      <TopicSelect selected={selected} setSelected={setSelected} />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(([level, title, approach]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"><span className="pill">{level}</span><h3 className="mt-3 text-xl font-black">{title}</h3><p className="mt-3 leading-6 text-slate-300">{approach}</p><button onClick={mark} className="mt-4 rounded-xl bg-cyan-400 px-4 py-2 font-bold text-slate-950">Mark Practiced</button></div>)}
      </div>
    </section>
  );
}


export function Quiz({ selected, setSelected }) {
  const [answers, setAnswers] = useState(() => load("quizAnswers", {}));
  const topic = TOPICS.find((t) => t.id === selected) || TOPICS[0];
  const quizzes = [
    { q: `What should you explain for ${topic.title}?`, options: ["Logic, dry run, complexity", "Only color", "Only file name", "Only final output"], answer: "Logic, dry run, complexity", exp: "Interviewers test understanding." },
    { q: `Best way to learn ${topic.title}?`, options: ["Theory + visual + practice", "Only memorize", "Skip dry run", "Ignore complexity"], answer: "Theory + visual + practice", exp: "DSA improves with understanding and practice." },
    { q: `${topic.title} belongs to which level?`, options: ["Beginner", "Intermediate", "Advanced", topic.level], answer: topic.level, exp: `This topic is marked as ${topic.level}.` },
  ];
  const score = quizzes.reduce((s, q, i) => s + (answers[`${selected}-${i}`] === q.answer ? 1 : 0), 0);
  return (
    <section className="space-y-5">
      <Header title="Mini Quiz" desc="Quiz is separate now, not mixed inside topic pages." />
      <TopicSelect selected={selected} setSelected={setSelected} />
      <Card title={`${topic.title} Quiz - Score ${score}/${quizzes.length}`}>
        <div className="space-y-5">
          {quizzes.map((q, i) => {
            const key = `${selected}-${i}`;
            const selectedAnswer = answers[key];
            return <div key={q.q} className="rounded-2xl border border-white/10 bg-slate-950 p-4"><h3 className="font-bold">{i + 1}. {q.q}</h3><div className="mt-3 grid gap-2 md:grid-cols-2">{q.options.map((option) => <button key={option} onClick={() => { const next = { ...answers, [key]: option }; setAnswers(next); save("quizAnswers", next); }} className={`rounded-xl border p-3 text-left ${selectedAnswer && option === q.answer ? "border-green-400 bg-green-400/10 text-green-200" : selectedAnswer === option ? "border-red-400 bg-red-400/10 text-red-200" : "border-white/10 bg-slate-900 hover:border-cyan-400"}`}>{option}</button>)}</div>{selectedAnswer && <p className="mt-3 text-sm text-slate-400"><b className="text-cyan-300">Explanation:</b> {q.exp}</p>}</div>;
          })}
        </div>
      </Card>
    </section>
  );
}


export function Notes({ selected, setSelected }) {
  const [notes, setNotes] = useState(() => load("notes", {}));
  const topic = TOPICS.find((t) => t.id === selected) || TOPICS[0];
  const theory = THEORY[selected];

  function topicSpecificFocus() {
    const map = {
      sorting: "Focus on comparison, swapping, stability, in-place sorting, divide and conquer, and time complexity difference between O(n²) and O(n log n).",
      searching: "Focus on sorted vs unsorted data, binary search conditions, low/high/mid update, and why binary search is O(log n).",
      stack: "Focus on LIFO, top pointer, push/pop/peek, overflow/underflow, and where stack is used in recursion and undo.",
      queue: "Focus on FIFO, front/rear, enqueue/dequeue, circular queue idea, and BFS usage.",
      linked: "Focus on nodes, next pointer, head changes, insert/delete/search/reverse and pointer edge cases.",
      doubly: "Focus on prev and next pointers, bidirectional traversal, insert/delete pointer updates.",
      twoPointers: "Focus on sorted arrays, left/right movement decision, pair sum, palindrome and reverse array.",
      sliding: "Focus on window expansion/shrinking, fixed vs variable window, maintaining running sum/frequency.",
      prefixSum: "Focus on cumulative sum, range query formula and subarray sum with hashmap.",
      hashing: "Focus on hashmap/set, frequency count, duplicate detection, two sum and O(1) average lookup.",
      recursion: "Focus on base case, recursive case, call stack, return values and recursion tree.",
      backtracking: "Focus on choose, explore, undo, constraints and pruning.",
      tree: "Focus on root, children, recursion, traversal orders, BST property and height.",
      heap: "Focus on priority queue, min/max heap, top K, push/pop complexity.",
      graph: "Focus on vertices, edges, adjacency list, visited set, BFS queue and DFS recursion.",
      greedy: "Focus on local optimal choice, sorting, proof of why greedy is safe.",
      dp: "Focus on overlapping subproblems, optimal substructure, states, transition, memoization and tabulation.",
      trie: "Focus on prefix tree, character nodes, insert/search/startsWith.",
      bit: "Focus on binary representation, AND/OR/XOR, masks and single number trick.",
      dsu: "Focus on parent array, find, union, path compression and connected components.",
      segmentTree: "Focus on range query, build/query/update and tree array representation.",
      topological: "Focus on DAG, indegree, queue and dependency ordering.",
      shortestPath: "Focus on BFS shortest path for unweighted graphs and Dijkstra for weighted graphs.",
    };

    return map[selected] || "Focus on definition, operations, dry run, edge cases and complexity.";
  }

  function buildDefaultNote() {
    const operationDetails = theory
      ? Object.keys(theory.operations).map((operation, index) => {
          const explain = theory.operations[operation][0];
          const complexity = theory.operations[operation][1];
          const complexityText = Object.entries(complexity)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ");

          return `${index + 1}. ${operation}
   Meaning: ${explain}
   Complexity: ${complexityText}
   How to say in interview:
   - "${operation} is one of the important operations in ${topic.title}."
   - "I will explain it with a small dry run and then mention complexity."`;
        }).join("\n\n")
      : "Add operation details here.";

    return `TOPIC: ${topic.title}
LEVEL: ${topic.level}
DIFFICULTY: ${topic.difficulty}

==================================================
0. QUICK REVISION BEFORE INTERVIEW
==================================================
One-line definition:
${theory?.intro || topic.desc}

Main focus:
${topicSpecificFocus()}

What I must say:
- What the topic means
- Why it is used
- How the operation works
- Dry run with small example
- Edge cases
- Time and space complexity

==================================================
1. DEFINITION
==================================================
${theory?.intro || topic.desc}

Simple explanation:
${topic.title} is used to solve a specific type of DSA problem efficiently. 
The main goal is to avoid unnecessary brute force and explain the logic clearly.

==================================================
2. WHY THIS TOPIC IS IMPORTANT
==================================================
- It is useful in coding interviews.
- It improves problem-solving thinking.
- It helps identify patterns in questions.
- It connects with other DSA topics.
- It helps write optimized solutions.

Specific focus for this topic:
${topicSpecificFocus()}

==================================================
3. REAL-LIFE USAGE
==================================================
${theory?.real || "Used in practical software systems and interview problem solving."}

How to explain:
"In real life, this concept is useful when we need efficient processing, searching, storing, traversal, ordering, or optimization."

==================================================
4. IMPORTANT OPERATIONS / PATTERNS
==================================================
${operationDetails}

==================================================
5. COMPLETE WORKING LOGIC
==================================================
Step 1: Understand the input.
Step 2: Identify which operation or pattern is needed.
Step 3: Choose the correct data structure or algorithm.
Step 4: Initialize required variables.
Step 5: Process elements step by step.
Step 6: Update state carefully.
Step 7: Stop when answer is found or all elements are processed.
Step 8: Return final answer.

For this topic:
${topicSpecificFocus()}

==================================================
6. DRY RUN TEMPLATE
==================================================
Sample Input:
- Write a small input here.

Expected Output:
- Write expected output here.

Dry Run:
- Step 1:
- Step 2:
- Step 3:
- Step 4:
- Step 5:

Observation:
- What changed?
- Which variable/pointer/data structure updated?
- Why did we move to the next step?

==================================================
7. CODING CHECKLIST
==================================================
Before writing code:
[ ] Did I understand the input?
[ ] Did I identify brute force?
[ ] Did I identify optimized approach?
[ ] Did I choose correct data structure?
[ ] Did I handle empty input?
[ ] Did I handle single element?
[ ] Did I handle duplicates?
[ ] Did I explain complexity?

While writing code:
[ ] Variable names are clear
[ ] Loops are correct
[ ] Conditions are correct
[ ] Edge cases are handled
[ ] Return value is correct

==================================================
8. EDGE CASES
==================================================
- Empty input
- Single element input
- Duplicate values
- Target not found
- Already sorted input
- Negative numbers if applicable
- Very large input
- Cycles if graph/tree-like topic
- Null head/root if linked list/tree
- Overflow if values are huge

==================================================
9. TIME AND SPACE COMPLEXITY
==================================================
How to explain complexity:
- Count loops
- Count recursion calls
- Count extra data structures
- Count stack/queue/map/set/table size

Best Case:
- Mention only if it differs from average/worst.

Average Case:
- Mention normal expected behavior.

Worst Case:
- Mention worst possible input.

Space Complexity:
- Mention extra array, hashmap, recursion stack, queue, stack, DP table, etc.

==================================================
10. INTERVIEW ANSWER FORMAT
==================================================
Question: "Explain ${topic.title}"

Answer format:
"${topic.title} is ${theory?.intro || topic.desc}. 
It is used when ${topicSpecificFocus()} 
First, I will explain the logic with a small example. 
Then I will dry-run the operation step by step. 
Finally, I will discuss time and space complexity."

==================================================
11. COMMON MISTAKES
==================================================
- Memorizing code without understanding
- Not explaining dry run
- Forgetting edge cases
- Not mentioning space complexity
- Confusing similar patterns
- Writing code before explaining approach
- Not connecting complexity with loops/recursion/data structures

==================================================
12. PRACTICE PLAN
==================================================
Day 1:
- Learn definition and operations

Day 2:
- Dry-run 3 examples

Day 3:
- Write code in one language

Day 4:
- Explain complexity

Day 5:
- Solve 3 practice problems

==================================================
13. MY OWN NOTES
==================================================
- Add personal shortcuts here
- Add doubts here
- Add mistakes here
- Add solved problems here
`;
  }

  const defaultNote = buildDefaultNote();
  const saved = notes[selected];

  const value = saved && saved.trim().length > 400 ? saved : defaultNote;

  function update(v) {
    const next = { ...notes, [selected]: v };
    setNotes(next);
    save("notes", next);
  }

  function resetTemplate() {
    update(defaultNote);
  }

  function exportNotes() {
    const blob = new Blob([value], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${topic.title.replaceAll(" ", "-").toLowerCase()}-notes.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <section className="space-y-5">
      <Header title="Notes" desc="High-detail topic-wise notes with quick revision, working logic, dry run, coding checklist, edge cases, complexity and interview answer format." />
      <TopicSelect selected={selected} setSelected={setSelected} />
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-4 flex flex-wrap gap-3">
          <h2 className="mr-auto text-2xl font-black">{topic.title} Notes</h2>
          <button onClick={resetTemplate} className="rounded-xl bg-slate-800 px-4 py-2 font-bold">Reset Detailed Template</button>
          <button onClick={exportNotes} className="rounded-xl bg-cyan-400 px-4 py-2 font-bold text-slate-950">Export Notes</button>
        </div>

        <div className="mb-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
          These notes are topic-specific. Select any topic and you will get a detailed interview-ready study template.
        </div>

        <textarea
          value={value}
          onChange={(e) => update(e.target.value)}
          className="h-[720px] w-full resize-none rounded-2xl border border-white/10 bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 outline-none focus:border-cyan-400"
        />
      </div>
    </section>
  );
}


export function Interview({ selected, setSelected }) {
  const topic = TOPICS.find((t) => t.id === selected) || TOPICS[0];
  const theory = THEORY[selected];

  function getTopicSpecificQA() {
    const common = [
      [
        `Explain ${topic.title} in simple words.`,
        `${topic.title} is a DSA topic used to solve a specific type of problem efficiently. In this project, I explain it with theory, operation-wise visualization or study guide, complexity, code snippets and practice/quiz support.`
      ],
      [
        `Why did you include ${topic.title} in your DSA Visualizer project?`,
        `I included ${topic.title} because it is an important interview topic. Learners can understand the concept, see its operations, check complexity and review code in multiple languages.`
      ],
      [
        `How will you explain ${topic.title} during a project demo?`,
        `I will first open the topic page, explain the definition, select an operation, show its complexity, walk through the visualizer or study guide, and then show the code section.`
      ],
      [
        `What are the edge cases for ${topic.title}?`,
        `Common edge cases include empty input, single element input, duplicates, invalid target, boundary indexes, and large input size. For tree/graph topics, null root, disconnected graph and cycles are also important.`
      ],
      [
        `How did you implement this project technically?`,
        `I built it as a frontend React project. I used React state to update selected topics, operations, visual steps, notes, quiz answers and UI interactions. Data is stored in the browser using localStorage where needed.`
      ],
      [
        `Is this project frontend or full-stack?`,
        `This is currently a frontend project built with React, Vite and Tailwind CSS. Future scope includes backend login, database progress sync and real code execution.`
      ],
    ];

    const bank = {
      sorting: [
        ["Why sorting is important?", "Sorting arranges data in order and helps optimize searching, two pointers, intervals and greedy problems."],
        ["Difference between Bubble, Selection and Insertion Sort?", "Bubble repeatedly swaps adjacent elements, Selection repeatedly selects minimum, and Insertion inserts current value into sorted part."],
        ["Why Merge Sort is O(n log n)?", "Merge Sort divides the array into halves log n times and merges all elements at each level, so total time is O(n log n)."],
        ["When can Quick Sort become O(n²)?", "When pivot choice is poor, like always choosing smallest/largest element in sorted or nearly sorted data."],
      ],
      searching: [
        ["Why Binary Search is faster than Linear Search?", "Binary Search removes half of the search space every step, so it takes O(log n), while Linear Search may check all elements O(n)."],
        ["When can we use Binary Search?", "When data is sorted or the answer space is monotonic."],
        ["What is the main mistake in Binary Search?", "Wrong low/high updates or infinite loop due to incorrect mid handling."],
      ],
      stack: [
        ["What is LIFO?", "LIFO means Last In, First Out. The last inserted element is removed first."],
        ["Where is Stack used?", "Undo operation, recursion call stack, expression evaluation, valid parentheses and monotonic stack problems."],
        ["What are stack underflow and overflow?", "Underflow happens when popping from an empty stack. Overflow happens when pushing into a full fixed-size stack."],
      ],
      queue: [
        ["What is FIFO?", "FIFO means First In, First Out. The first inserted element is removed first."],
        ["Where is Queue used?", "Scheduling, printer queue, BFS traversal and order-based processing."],
        ["Why BFS uses Queue?", "Because BFS visits nodes level by level, and queue maintains the correct order of discovery."],
      ],
      linked: [
        ["Why Linked List instead of Array?", "Linked list allows efficient insertion/deletion when node reference is available, but it does not support O(1) random access."],
        ["How do you reverse a linked list?", "Use three pointers: prev, current and next. Change current.next to prev and move forward."],
        ["What edge cases matter in Linked List?", "Empty list, single node, deleting head, deleting tail and value not found."],
      ],
      doubly: [
        ["Why Doubly Linked List?", "It supports bidirectional traversal using prev and next pointers."],
        ["What must be updated during delete?", "Both previous node's next pointer and next node's prev pointer must be updated."],
      ],
      twoPointers: [
        ["When do we use Two Pointers?", "Usually on sorted arrays, strings or linked lists where two positions move based on conditions."],
        ["How does Pair Sum work?", "Start left at beginning and right at end. If sum is small move left, if sum is large move right."],
        ["Why is Two Pointers better than brute force?", "Brute force pair checking is O(n²), but two pointers can solve many sorted pair problems in O(n)."],
      ],
      sliding: [
        ["What is Sliding Window?", "It maintains a moving range over array/string and updates answer without recalculating everything."],
        ["Fixed vs Variable Window?", "Fixed window has constant size k. Variable window expands and shrinks based on condition."],
        ["Why Sliding Window is O(n)?", "Each element usually enters and leaves the window at most once."],
      ],
      prefixSum: [
        ["What is Prefix Sum?", "Prefix Sum stores cumulative totals so range sum can be answered quickly."],
        ["Range sum formula?", "sum(left, right) = prefix[right] - prefix[left - 1], and if left is 0 then prefix[right]."],
        ["How prefix sum helps subarray sum?", "By storing previous prefix sums in a hashmap, we can check if currentSum - target existed before."],
      ],
      hashing: [
        ["Why Hashing is useful?", "It gives average O(1) lookup, insert and delete using hash maps/sets."],
        ["HashMap vs HashSet?", "HashMap stores key-value pairs, HashSet stores unique keys only."],
        ["Common hashing problems?", "Two Sum, frequency count, duplicate detection, anagrams and subarray sum."],
      ],
      recursion: [
        ["What are the two parts of recursion?", "Base case and recursive case."],
        ["Why base case is important?", "Base case stops recursion. Without it, recursion becomes infinite."],
        ["What is call stack?", "Each recursive call is stored in memory until it returns. This memory structure is called call stack."],
      ],
      backtracking: [
        ["What is Backtracking?", "Backtracking tries a choice, explores it, and undoes the choice if it does not lead to a solution."],
        ["What are choose, explore, undo?", "Choose a candidate, recursively explore it, then remove it to try another candidate."],
        ["Where is Backtracking used?", "Permutations, combinations, subsets, Sudoku and N-Queens."],
      ],
      tree: [
        ["What is a Tree?", "A hierarchical data structure with root, children and subtrees."],
        ["What is BST property?", "In BST, left subtree values are smaller and right subtree values are greater than root."],
        ["Inorder traversal of BST gives what?", "It gives values in sorted order."],
      ],
      heap: [
        ["What is Heap?", "Heap is a complete binary tree used to get min/max priority element efficiently."],
        ["Heap vs BST?", "Heap only guarantees parent-child priority, BST maintains left-right ordering."],
        ["Where is Heap used?", "Top K problems, priority queue, scheduling and Dijkstra."],
      ],
      graph: [
        ["What is a Graph?", "A graph contains vertices and edges representing relationships."],
        ["BFS vs DFS?", "BFS uses queue and explores level by level. DFS uses recursion/stack and goes deep first."],
        ["Why visited set is needed?", "To avoid revisiting nodes and prevent infinite loops in cycles."],
      ],
      greedy: [
        ["What is Greedy Algorithm?", "It chooses the best local option at each step when that choice leads to global optimum."],
        ["How to prove greedy works?", "Explain why the local choice is safe using greedy-choice property or exchange argument."],
      ],
      dp: [
        ["What is Dynamic Programming?", "DP stores answers of overlapping subproblems to avoid repeated computation."],
        ["Memoization vs Tabulation?", "Memoization is top-down recursion with cache. Tabulation is bottom-up table building."],
        ["How to identify DP?", "Look for overlapping subproblems and optimal substructure."],
      ],
      trie: [
        ["What is Trie?", "Trie is a prefix tree used to store words character by character."],
        ["Where is Trie used?", "Autocomplete, dictionary search, prefix search and spell checking."],
      ],
      bit: [
        ["Why Bit Manipulation?", "It solves some problems very efficiently using binary operations."],
        ["What does XOR do?", "XOR of same numbers cancels to 0, and x XOR 0 is x."],
      ],
      dsu: [
        ["What is DSU?", "DSU manages connected components using find and union operations."],
        ["What is path compression?", "It directly connects nodes to root during find, making future operations faster."],
      ],
      segmentTree: [
        ["What is Segment Tree?", "It supports fast range queries and updates."],
        ["Build, Query, Update complexities?", "Build is O(n), query is O(log n), update is O(log n)."],
      ],
      topological: [
        ["What is Topological Sort?", "It gives a valid ordering of nodes in a DAG such that prerequisites come before dependent nodes."],
        ["Why only DAG?", "Because cycles create circular dependency, so no valid topological order exists."],
      ],
      shortestPath: [
        ["BFS shortest path works when?", "BFS gives shortest path in unweighted graphs."],
        ["When to use Dijkstra?", "Use Dijkstra for graphs with non-negative edge weights."],
      ],
    };

    return [...(bank[selected] || []), ...common];
  }

  const questions = getTopicSpecificQA();

  return (
    <section className="space-y-5">
      <Header title="Interview Prep" desc="Topic-wise interview questions with practical answers. These are focused on both DSA concepts and your project explanation." />
      <TopicSelect selected={selected} setSelected={setSelected} />

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <p className="font-bold text-cyan-300">How to answer in interview</p>
        <p className="mt-2 leading-7 text-slate-300">
          Start with definition, explain why it is used, dry-run one small example, mention edge cases,
          explain complexity, then connect it with how you implemented it in this React project.
        </p>
      </div>

      <div className="grid gap-4">
        {questions.map(([q, a], i) => (
          <div key={`${q}-${i}`} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="font-bold text-cyan-300">Q{i + 1}. {q}</p>
            <p className="mt-3 leading-7 text-slate-300">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
