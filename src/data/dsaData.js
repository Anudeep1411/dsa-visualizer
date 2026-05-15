export const TOPICS = [
  { id: "sorting", title: "Sorting", icon: "📊", level: "Beginner", difficulty: "Easy", desc: "Bubble, Selection, Insertion, Merge, Quick, Heap sort" },
  { id: "searching", title: "Searching", icon: "🔍", level: "Beginner", difficulty: "Easy", desc: "Linear and Binary search step-by-step" },
  { id: "stack", title: "Stack", icon: "🧱", level: "Beginner", difficulty: "Easy", desc: "Push, Pop, Peek, isEmpty with LIFO visual" },
  { id: "queue", title: "Queue", icon: "🚦", level: "Beginner", difficulty: "Easy", desc: "Enqueue, Dequeue, Peek, isEmpty with FIFO visual" },
  { id: "linked", title: "Singly Linked List", icon: "🔗", level: "Intermediate", difficulty: "Medium", desc: "Insert, Delete, Search, Reverse nodes" },
  { id: "doubly", title: "Doubly Linked List", icon: "⛓️", level: "Intermediate", difficulty: "Medium", desc: "Previous and next pointer visualization" },
  { id: "twoPointers", title: "Two Pointers", icon: "↔️", level: "Intermediate", difficulty: "Medium", desc: "Left and right pointer pattern" },
  { id: "sliding", title: "Sliding Window", icon: "🪟", level: "Intermediate", difficulty: "Medium", desc: "Fixed and variable window patterns" },
  { id: "prefixSum", title: "Prefix Sum", icon: "➕", level: "Intermediate", difficulty: "Medium", desc: "Range sum and subarray sum pattern" },
  { id: "hashing", title: "Hashing", icon: "#️⃣", level: "Intermediate", difficulty: "Medium", desc: "Fast lookup, frequency counting and pair problems" },
  { id: "recursion", title: "Recursion", icon: "🔁", level: "Intermediate", difficulty: "Medium", desc: "Base case, recursive case and call stack" },
  { id: "backtracking", title: "Backtracking", icon: "🧩", level: "Advanced", difficulty: "Hard", desc: "Try choices, undo choices and explore possibilities" },
  { id: "tree", title: "Tree / BST", icon: "🌳", level: "Intermediate", difficulty: "Medium", desc: "Build, Insert, Delete, Search, Traversals" },
  { id: "heap", title: "Heap / Priority Queue", icon: "⛰️", level: "Advanced", difficulty: "Medium", desc: "Priority-based min/max processing" },
  { id: "graph", title: "Graph", icon: "🕸️", level: "Advanced", difficulty: "Hard", desc: "Build graph, BFS and DFS" },
  { id: "greedy", title: "Greedy", icon: "🎯", level: "Advanced", difficulty: "Medium", desc: "Choose best local option when valid" },
  { id: "dp", title: "Dynamic Programming", icon: "🧠", level: "Advanced", difficulty: "Hard", desc: "Memoization, tabulation and state transitions" },
  { id: "trie", title: "Trie", icon: "🌿", level: "Advanced", difficulty: "Hard", desc: "Prefix tree for words and autocomplete" },
  { id: "bit", title: "Bit Manipulation", icon: "⚙️", level: "Advanced", difficulty: "Medium", desc: "AND, OR, XOR and bit tricks" },
  { id: "dsu", title: "Disjoint Set Union", icon: "🔌", level: "Advanced", difficulty: "Hard", desc: "Union-Find for connected components" },
  { id: "segmentTree", title: "Segment Tree", icon: "📐", level: "Advanced", difficulty: "Hard", desc: "Fast range queries and updates" },
  { id: "topological", title: "Topological Sort", icon: "📚", level: "Advanced", difficulty: "Hard", desc: "Ordering DAG dependencies" },
  { id: "shortestPath", title: "Shortest Path", icon: "🛣️", level: "Advanced", difficulty: "Hard", desc: "BFS, Dijkstra and path finding" },
];

export const VISUAL_IDS = new Set(["sorting", "searching", "stack", "queue", "linked", "doubly", "twoPointers", "sliding", "tree", "graph"]);

export const THEORY = {
  sorting: {
    title: "Sorting Algorithms",
    intro: "Sorting means arranging elements in a specific order. It helps in searching, greedy problems, intervals and two pointer problems.",
    real: "Marks ranking, price sorting, file sorting, leaderboards.",
    operations: {
      "Bubble Sort": ["Compares adjacent elements and swaps if they are wrong.", { best: "O(n)", average: "O(n²)", worst: "O(n²)", space: "O(1)" }],
      "Selection Sort": ["Finds minimum element and places it in correct position.", { best: "O(n²)", average: "O(n²)", worst: "O(n²)", space: "O(1)" }],
      "Insertion Sort": ["Builds sorted part by inserting current value at correct place.", { best: "O(n)", average: "O(n²)", worst: "O(n²)", space: "O(1)" }],
      "Merge Sort": ["Divide array, sort both halves, merge sorted halves.", { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(n)" }],
      "Quick Sort": ["Partition around pivot and recursively sort left/right parts.", { best: "O(n log n)", average: "O(n log n)", worst: "O(n²)", space: "O(log n)" }],
      "Heap Sort": ["Build heap and repeatedly extract max/min element.", { best: "O(n log n)", average: "O(n log n)", worst: "O(n log n)", space: "O(1)" }],
    },
  },
  searching: {
    title: "Searching Algorithms",
    intro: "Searching means finding target value in data. Binary search is faster but needs sorted or monotonic data.",
    real: "Contacts, product search, dictionary search, database lookup.",
    operations: {
      "Linear Search": ["Checks every element one by one.", { best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" }],
      "Binary Search": ["Cuts sorted search space in half every step.", { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" }],
    },
  },
  stack: {
    title: "Stack",
    intro: "Stack follows LIFO: Last In, First Out.",
    real: "Undo, browser back, function call stack.",
    operations: {
      Push: ["Adds an element on top.", { time: "O(1)", space: "O(1)" }],
      Pop: ["Removes top element.", { time: "O(1)", space: "O(1)" }],
      Peek: ["Reads top element without removing.", { time: "O(1)", space: "O(1)" }],
      isEmpty: ["Checks whether stack is empty.", { time: "O(1)", space: "O(1)" }],
    },
  },
  queue: {
    title: "Queue",
    intro: "Queue follows FIFO: First In, First Out.",
    real: "Ticket line, printer queue, BFS.",
    operations: {
      Enqueue: ["Adds an element at rear.", { time: "O(1)", space: "O(1)" }],
      Dequeue: ["Removes element from front.", { time: "O(1)", space: "O(1)" }],
      Peek: ["Reads front element.", { time: "O(1)", space: "O(1)" }],
      isEmpty: ["Checks whether queue is empty.", { time: "O(1)", space: "O(1)" }],
    },
  },
  linked: {
    title: "Singly Linked List",
    intro: "Linked list contains nodes. Each node stores data and next pointer.",
    real: "Playlist, memory blocks, undo system.",
    operations: {
      "Insert Head": ["Adds new node before head.", { time: "O(1)", space: "O(1)" }],
      "Insert Tail": ["Adds new node at end.", { time: "O(n)", space: "O(1)" }],
      Delete: ["Removes first matching node.", { time: "O(n)", space: "O(1)" }],
      Search: ["Finds node by traversal.", { time: "O(n)", space: "O(1)" }],
      Reverse: ["Reverses next pointers.", { time: "O(n)", space: "O(1)" }],
    },
  },
  doubly: {
    title: "Doubly Linked List",
    intro: "Doubly linked list has prev and next pointers.",
    real: "Browser forward/back, music playlist.",
    operations: {
      "Insert Head": ["Adds node before head and updates prev link.", { time: "O(1)", space: "O(1)" }],
      "Insert Tail": ["Adds node at end.", { time: "O(n)", space: "O(1)" }],
      Delete: ["Reconnects previous and next nodes.", { time: "O(n)", space: "O(1)" }],
      Search: ["Traverses from head.", { time: "O(n)", space: "O(1)" }],
    },
  },
  twoPointers: {
    title: "Two Pointers",
    intro: "Two pointers uses two indexes to solve problems efficiently.",
    real: "Pair sum, palindrome, reverse array.",
    operations: {
      "Pair Sum": ["Use left and right on sorted array.", { time: "O(n)", space: "O(1)" }],
      "Reverse Array": ["Swap left and right and move inward.", { time: "O(n)", space: "O(1)" }],
    },
  },
  sliding: {
    title: "Sliding Window",
    intro: "Sliding window maintains a moving range over array/string.",
    real: "Last 7 days data, max traffic window.",
    operations: {
      "Fixed Window": ["Window size stays k.", { time: "O(n)", space: "O(1)" }],
      "Variable Window": ["Window expands and shrinks by condition.", { time: "O(n)", space: "O(k)" }],
    },
  },
  prefixSum: extra("Prefix Sum", "Stores cumulative totals for fast range sums.", ["Build Prefix", "Range Sum", "Subarray Sum"]),
  hashing: extra("Hashing", "Uses map/set for fast lookup and frequency.", ["Frequency Count", "Two Sum", "Duplicate Check"]),
  recursion: extra("Recursion", "Function calls itself on smaller input until base case.", ["Base Case", "Recursive Case", "Call Stack"]),
  backtracking: extra("Backtracking", "Try a choice, explore it, undo choice, try next.", ["Choose", "Explore", "Undo"]),
  tree: {
    title: "Tree / Binary Search Tree",
    intro: "Tree is hierarchical. BST keeps smaller values left and larger values right.",
    real: "Folder structure, indexes, expression tree.",
    operations: {
      "Build Tree": ["Inserts values one by one using BST rule.", { average: "O(n log n)", worst: "O(n²)", space: "O(n)" }],
      Insert: ["Moves left/right until empty position.", { average: "O(log n)", worst: "O(n)", space: "O(h)" }],
      Delete: ["Handles leaf, one child, two children cases.", { average: "O(log n)", worst: "O(n)", space: "O(h)" }],
      Search: ["Uses BST property to move left/right.", { average: "O(log n)", worst: "O(n)", space: "O(h)" }],
      Inorder: ["Left → Root → Right.", { time: "O(n)", space: "O(h)" }],
      Preorder: ["Root → Left → Right.", { time: "O(n)", space: "O(h)" }],
      Postorder: ["Left → Right → Root.", { time: "O(n)", space: "O(h)" }],
    },
  },
  heap: extra("Heap / Priority Queue", "Gets min/max priority element quickly.", ["Push", "Pop", "Peek"]),
  graph: {
    title: "Graph",
    intro: "Graph contains vertices and edges. It models relationships and networks.",
    real: "Maps, social networks, dependency graphs.",
    operations: {
      "Build Graph": ["Creates adjacency list from edge list.", { time: "O(E)", space: "O(V+E)" }],
      BFS: ["Uses queue and visits level by level.", { time: "O(V+E)", space: "O(V)" }],
      DFS: ["Goes deep using recursion/stack.", { time: "O(V+E)", space: "O(V)" }],
    },
  },
  greedy: extra("Greedy", "Makes best local choice when it is safe.", ["Sort", "Pick Best", "Validate"]),
  dp: extra("Dynamic Programming", "Stores overlapping subproblem answers.", ["Memoization", "Tabulation", "State Transition"]),
  trie: extra("Trie", "Prefix tree for storing words.", ["Insert Word", "Search Word", "Starts With"]),
  bit: extra("Bit Manipulation", "Works directly with binary bits.", ["Check Bit", "Set Bit", "XOR Trick"]),
  dsu: extra("Disjoint Set Union", "Maintains connected components.", ["Find", "Union", "Path Compression"]),
  segmentTree: extra("Segment Tree", "Handles range queries and updates efficiently.", ["Build", "Query", "Update"]),
  topological: extra("Topological Sort", "Orders DAG nodes based on dependencies.", ["Indegree", "Queue", "Ordering"]),
  shortestPath: extra("Shortest Path", "Finds minimum distance/path between nodes.", ["BFS Shortest Path", "Dijkstra", "Relaxation"]),
};

function extra(title, intro, ops) {
  const operations = {};
  ops.forEach((op) => {
    operations[op] = [`${op} is a core operation/pattern in ${title}.`, { time: "Depends on implementation", space: "Depends on data used" }];
  });
  return { title, intro, real: `${title} appears in coding interviews and real-world systems.`, operations };
}

export const CODE = {};
export function simpleCode(topic, op) {
  const key = `${topic} ${op}`.toLowerCase();

  if (key.includes("sorting")) {
    return {
      Python: `def sort_array(arr):
    # Built-in sort for general sorting usage
    arr.sort()
    return arr`,
      Java: `import java.util.*;

class Solution {
    static void sortArray(int[] arr) {
        Arrays.sort(arr);
    }
}`,
      C: `void sortArray(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
      "C++": `void sortArray(vector<int>& arr) {
    sort(arr.begin(), arr.end());
}`,
    };
  }

  if (key.includes("stack")) {
    return {
      Python: `stack = []

def push(value):
    stack.append(value)

def pop():
    if not stack:
        return None
    return stack.pop()

def peek():
    if not stack:
        return None
    return stack[-1]`,
      Java: `import java.util.*;

class StackExample {
    Stack<Integer> stack = new Stack<>();

    void push(int value) {
        stack.push(value);
    }

    Integer pop() {
        if (stack.isEmpty()) return null;
        return stack.pop();
    }

    Integer peek() {
        if (stack.isEmpty()) return null;
        return stack.peek();
    }
}`,
      C: `#define MAX 100
int stack[MAX];
int top = -1;

void push(int value) {
    if (top == MAX - 1) return;
    stack[++top] = value;
}

int pop() {
    if (top == -1) return -1;
    return stack[top--];
}

int peek() {
    if (top == -1) return -1;
    return stack[top];
}`,
      "C++": `stack<int> st;

void pushValue(int value) {
    st.push(value);
}

int popValue() {
    if (st.empty()) return -1;
    int value = st.top();
    st.pop();
    return value;
}

int peekValue() {
    if (st.empty()) return -1;
    return st.top();
}`,
    };
  }

  if (key.includes("queue")) {
    return {
      Python: `from collections import deque

queue = deque()

def enqueue(value):
    queue.append(value)

def dequeue():
    if not queue:
        return None
    return queue.popleft()

def peek():
    if not queue:
        return None
    return queue[0]`,
      Java: `import java.util.*;

class QueueExample {
    Queue<Integer> queue = new LinkedList<>();

    void enqueue(int value) {
        queue.add(value);
    }

    Integer dequeue() {
        if (queue.isEmpty()) return null;
        return queue.remove();
    }

    Integer peek() {
        if (queue.isEmpty()) return null;
        return queue.peek();
    }
}`,
      C: `#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

void enqueue(int value) {
    if (rear == MAX - 1) return;
    queue[++rear] = value;
}

int dequeue() {
    if (front > rear) return -1;
    return queue[front++];
}

int peek() {
    if (front > rear) return -1;
    return queue[front];
}`,
      "C++": `queue<int> q;

void enqueue(int value) {
    q.push(value);
}

int dequeue() {
    if (q.empty()) return -1;
    int value = q.front();
    q.pop();
    return value;
}

int peek() {
    if (q.empty()) return -1;
    return q.front();
}`,
    };
  }

  if (key.includes("linked list")) {
    return {
      Python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def insert_head(head, value):
    node = Node(value)
    node.next = head
    return node

def search(head, value):
    current = head
    while current:
        if current.data == value:
            return True
        current = current.next
    return False`,
      Java: `class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
    }
}

Node insertHead(Node head, int value) {
    Node node = new Node(value);
    node.next = head;
    return node;
}

boolean search(Node head, int value) {
    Node current = head;
    while (current != null) {
        if (current.data == value) return true;
        current = current.next;
    }
    return false;
}`,
      C: `struct Node {
    int data;
    struct Node* next;
};

struct Node* insertHead(struct Node* head, int value) {
    struct Node* node = malloc(sizeof(struct Node));
    node->data = value;
    node->next = head;
    return node;
}`,
      "C++": `class Node {
public:
    int data;
    Node* next;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

Node* insertHead(Node* head, int value) {
    Node* node = new Node(value);
    node->next = head;
    return node;
}`,
    };
  }

  if (key.includes("tree") || key.includes("bst")) {
    return {
      Python: `class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)

    if value < root.data:
        root.left = insert(root.left, value)
    elif value > root.data:
        root.right = insert(root.right, value)

    return root`,
      Java: `class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
    }
}

Node insert(Node root, int value) {
    if (root == null) return new Node(value);

    if (value < root.data) root.left = insert(root.left, value);
    else if (value > root.data) root.right = insert(root.right, value);

    return root;
}`,
      C: `struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* insert(struct Node* root, int value) {
    if (root == NULL) {
        struct Node* node = malloc(sizeof(struct Node));
        node->data = value;
        node->left = node->right = NULL;
        return node;
    }

    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);

    return root;
}`,
      "C++": `class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int data) {
        this->data = data;
        left = right = nullptr;
    }
};

Node* insert(Node* root, int value) {
    if (root == nullptr) return new Node(value);

    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);

    return root;
}`,
    };
  }

  if (key.includes("graph")) {
    return {
      Python: `from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order`,
      Java: `import java.util.*;

class GraphBFS {
    static List<Integer> bfs(Map<Integer, List<Integer>> graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> order = new ArrayList<>();

        visited.add(start);
        queue.add(start);

        while (!queue.isEmpty()) {
            int node = queue.remove();
            order.add(node);

            for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.add(neighbor);
                }
            }
        }

        return order;
    }
}`,
      C: `void bfs(int graph[100][100], int n, int start) {
    int visited[100] = {0};
    int queue[100], front = 0, rear = 0;

    visited[start] = 1;
    queue[rear++] = start;

    while (front < rear) {
        int node = queue[front++];
        printf("%d ", node);

        for (int nei = 0; nei < n; nei++) {
            if (graph[node][nei] && !visited[nei]) {
                visited[nei] = 1;
                queue[rear++] = nei;
            }
        }
    }
}`,
      "C++": `vector<int> bfs(vector<vector<int>>& graph, int start) {
    vector<int> visited(graph.size(), 0);
    queue<int> q;
    vector<int> order;

    visited[start] = 1;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        order.push_back(node);

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = 1;
                q.push(neighbor);
            }
        }
    }

    return order;
}`,
    };
  }

  return {
    Python: `def example(arr):
    answer = []

    for value in arr:
        answer.append(value)

    return answer`,
    Java: `class Solution {
    static void example(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
    }
}`,
    C: `void example(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}`,
    "C++": `void example(vector<int>& arr) {
    for (int value : arr) {
        cout << value << " ";
    }
}`,
  };
}

Object.keys(THEORY).forEach((id) => {
  CODE[id] = {};
  Object.keys(THEORY[id].operations).forEach((op) => CODE[id][op] = simpleCode(THEORY[id].title, op));
});

CODE.sorting["Bubble Sort"] = {
  Python: `def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        swapped = False\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n                swapped = True\n        if not swapped:\n            break\n    return arr`,
  Java: `class BubbleSort {\n    static void bubbleSort(int[] arr) {\n        for (int i = 0; i < arr.length - 1; i++) {\n            boolean swapped = false;\n            for (int j = 0; j < arr.length - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                    swapped = true;\n                }\n            }\n            if (!swapped) break;\n        }\n    }\n}`,
  C: `void bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int swapped = 0;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                swapped = 1;\n            }\n        }\n        if (!swapped) break;\n    }\n}`,
  "C++": `void bubbleSort(vector<int>& arr) {\n    for (int i = 0; i < arr.size() - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < arr.size() - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n}`,
};

function setAll(topicId, op, snippets) {
  if (!CODE[topicId]) CODE[topicId] = {};
  CODE[topicId][op] = snippets;
}

const prefixBuild = {
  Python: `def build_prefix(arr):
    prefix = [0] * len(arr)
    prefix[0] = arr[0]

    for i in range(1, len(arr)):
        prefix[i] = prefix[i - 1] + arr[i]

    return prefix`,
  Java: `class Solution {
    static int[] buildPrefix(int[] arr) {
        int[] prefix = new int[arr.length];
        prefix[0] = arr[0];

        for (int i = 1; i < arr.length; i++) {
            prefix[i] = prefix[i - 1] + arr[i];
        }

        return prefix;
    }
}`,
  C: `void buildPrefix(int arr[], int n, int prefix[]) {
    prefix[0] = arr[0];

    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
}`,
  "C++": `vector<int> buildPrefix(vector<int>& arr) {
    vector<int> prefix(arr.size());
    prefix[0] = arr[0];

    for (int i = 1; i < arr.size(); i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
}`,
};

setAll("prefixSum", "Build Prefix", prefixBuild);
setAll("prefixSum", "Range Sum", {
  Python: `def range_sum(prefix, left, right):
    if left == 0:
        return prefix[right]
    return prefix[right] - prefix[left - 1]`,
  Java: `class Solution {
    static int rangeSum(int[] prefix, int left, int right) {
        if (left == 0) return prefix[right];
        return prefix[right] - prefix[left - 1];
    }
}`,
  C: `int rangeSum(int prefix[], int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}`,
  "C++": `int rangeSum(vector<int>& prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}`,
});
setAll("prefixSum", "Subarray Sum", {
  Python: `def subarray_sum_equals_k(arr, k):
    count = 0
    current = 0
    seen = {0: 1}

    for value in arr:
        current += value
        count += seen.get(current - k, 0)
        seen[current] = seen.get(current, 0) + 1

    return count`,
  Java: `import java.util.*;

class Solution {
    static int subarraySum(int[] arr, int k) {
        Map<Integer, Integer> seen = new HashMap<>();
        seen.put(0, 1);

        int sum = 0, count = 0;

        for (int value : arr) {
            sum += value;
            count += seen.getOrDefault(sum - k, 0);
            seen.put(sum, seen.getOrDefault(sum, 0) + 1);
        }

        return count;
    }
}`,
  C: `// Simple O(n^2) version for C
int subarraySum(int arr[], int n, int k) {
    int count = 0;

    for (int i = 0; i < n; i++) {
        int sum = 0;
        for (int j = i; j < n; j++) {
            sum += arr[j];
            if (sum == k) count++;
        }
    }

    return count;
}`,
  "C++": `int subarraySum(vector<int>& arr, int k) {
    unordered_map<int, int> seen;
    seen[0] = 1;

    int sum = 0, count = 0;

    for (int value : arr) {
        sum += value;
        count += seen[sum - k];
        seen[sum]++;
    }

    return count;
}`,
});

setAll("hashing", "Frequency Count", {
  Python: `def frequency_count(arr):
    freq = {}

    for value in arr:
        freq[value] = freq.get(value, 0) + 1

    return freq`,
  Java: `import java.util.*;

class Solution {
    static Map<Integer, Integer> frequencyCount(int[] arr) {
        Map<Integer, Integer> freq = new HashMap<>();

        for (int value : arr) {
            freq.put(value, freq.getOrDefault(value, 0) + 1);
        }

        return freq;
    }
}`,
  C: `// Frequency count for values from 0 to 100
void frequencyCount(int arr[], int n, int freq[]) {
    for (int i = 0; i < n; i++) {
        freq[arr[i]]++;
    }
}`,
  "C++": `unordered_map<int, int> frequencyCount(vector<int>& arr) {
    unordered_map<int, int> freq;

    for (int value : arr) {
        freq[value]++;
    }

    return freq;
}`,
});
setAll("hashing", "Two Sum", {
  Python: `def two_sum(arr, target):
    seen = {}

    for i, value in enumerate(arr):
        need = target - value
        if need in seen:
            return [seen[need], i]
        seen[value] = i

    return [-1, -1]`,
  Java: `import java.util.*;

class Solution {
    static int[] twoSum(int[] arr, int target) {
        Map<Integer, Integer> seen = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            int need = target - arr[i];

            if (seen.containsKey(need)) {
                return new int[]{seen.get(need), i};
            }

            seen.put(arr[i], i);
        }

        return new int[]{-1, -1};
    }
}`,
  C: `void twoSum(int arr[], int n, int target, int ans[]) {
    ans[0] = -1;
    ans[1] = -1;

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                ans[0] = i;
                ans[1] = j;
                return;
            }
        }
    }
}`,
  "C++": `vector<int> twoSum(vector<int>& arr, int target) {
    unordered_map<int, int> seen;

    for (int i = 0; i < arr.size(); i++) {
        int need = target - arr[i];

        if (seen.count(need)) return {seen[need], i};

        seen[arr[i]] = i;
    }

    return {-1, -1};
}`,
});
setAll("hashing", "Duplicate Check", {
  Python: `def contains_duplicate(arr):
    seen = set()

    for value in arr:
        if value in seen:
            return True
        seen.add(value)

    return False`,
  Java: `import java.util.*;

class Solution {
    static boolean containsDuplicate(int[] arr) {
        Set<Integer> seen = new HashSet<>();

        for (int value : arr) {
            if (seen.contains(value)) return true;
            seen.add(value);
        }

        return false;
    }
}`,
  C: `int containsDuplicate(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) return 1;
        }
    }

    return 0;
}`,
  "C++": `bool containsDuplicate(vector<int>& arr) {
    unordered_set<int> seen;

    for (int value : arr) {
        if (seen.count(value)) return true;
        seen.insert(value);
    }

    return false;
}`,
});

setAll("recursion", "Base Case", {
  Python: `def factorial(n):
    # Base case
    if n == 0:
        return 1

    return n * factorial(n - 1)`,
  Java: `class Solution {
    static int factorial(int n) {
        // Base case
        if (n == 0) return 1;

        return n * factorial(n - 1);
    }
}`,
  C: `int factorial(int n) {
    // Base case
    if (n == 0) return 1;

    return n * factorial(n - 1);
}`,
  "C++": `int factorial(int n) {
    // Base case
    if (n == 0) return 1;

    return n * factorial(n - 1);
}`,
});
setAll("recursion", "Recursive Case", {
  Python: `def sum_n(n):
    if n == 0:
        return 0

    return n + sum_n(n - 1)`,
  Java: `class Solution {
    static int sumN(int n) {
        if (n == 0) return 0;

        return n + sumN(n - 1);
    }
}`,
  C: `int sumN(int n) {
    if (n == 0) return 0;

    return n + sumN(n - 1);
}`,
  "C++": `int sumN(int n) {
    if (n == 0) return 0;

    return n + sumN(n - 1);
}`,
});
setAll("recursion", "Call Stack", {
  Python: `def print_numbers(n):
    if n == 0:
        return

    print_numbers(n - 1)
    print(n)`,
  Java: `class Solution {
    static void printNumbers(int n) {
        if (n == 0) return;

        printNumbers(n - 1);
        System.out.println(n);
    }
}`,
  C: `void printNumbers(int n) {
    if (n == 0) return;

    printNumbers(n - 1);
    printf("%d ", n);
}`,
  "C++": `void printNumbers(int n) {
    if (n == 0) return;

    printNumbers(n - 1);
    cout << n << " ";
}`,
});

setAll("backtracking", "Choose", {
  Python: `def subsets(arr):
    result = []
    path = []

    def backtrack(index):
        if index == len(arr):
            result.append(path[:])
            return

        path.append(arr[index])      # choose
        backtrack(index + 1)
        path.pop()                   # undo
        backtrack(index + 1)

    backtrack(0)
    return result`,
  Java: `import java.util.*;

class Solution {
    static void backtrack(int[] arr, int index, List<Integer> path, List<List<Integer>> result) {
        if (index == arr.length) {
            result.add(new ArrayList<>(path));
            return;
        }

        path.add(arr[index]);
        backtrack(arr, index + 1, path, result);
        path.remove(path.size() - 1);
        backtrack(arr, index + 1, path, result);
    }
}`,
  C: `// Backtracking in C usually uses arrays and recursion.
void backtrack(int arr[], int n, int index) {
    if (index == n) {
        return;
    }

    backtrack(arr, n, index + 1);
    backtrack(arr, n, index + 1);
}`,
  "C++": `void backtrack(vector<int>& arr, int index, vector<int>& path, vector<vector<int>>& result) {
    if (index == arr.size()) {
        result.push_back(path);
        return;
    }

    path.push_back(arr[index]);
    backtrack(arr, index + 1, path, result);
    path.pop_back();
    backtrack(arr, index + 1, path, result);
}`,
});
setAll("backtracking", "Explore", CODE.backtracking["Choose"]);
setAll("backtracking", "Undo", CODE.backtracking["Choose"]);

setAll("dp", "Memoization", {
  Python: `def fib(n, memo={}):
    if n <= 1:
        return n

    if n in memo:
        return memo[n]

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]`,
  Java: `import java.util.*;

class Solution {
    static int fib(int n, Map<Integer, Integer> memo) {
        if (n <= 1) return n;

        if (memo.containsKey(n)) return memo.get(n);

        int ans = fib(n - 1, memo) + fib(n - 2, memo);
        memo.put(n, ans);

        return ans;
    }
}`,
  C: `int fib(int n, int memo[]) {
    if (n <= 1) return n;

    if (memo[n] != -1) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}`,
  "C++": `int fib(int n, vector<int>& memo) {
    if (n <= 1) return n;

    if (memo[n] != -1) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}`,
});
setAll("dp", "Tabulation", {
  Python: `def fib(n):
    if n <= 1:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]`,
  Java: `class Solution {
    static int fib(int n) {
        if (n <= 1) return n;

        int[] dp = new int[n + 1];
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}`,
  C: `int fib(int n) {
    if (n <= 1) return n;

    int dp[1000];
    dp[0] = 0;
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}`,
  "C++": `int fib(int n) {
    if (n <= 1) return n;

    vector<int> dp(n + 1);
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}`,
});
setAll("dp", "State Transition", CODE.dp["Tabulation"]);

setAll("bit", "Check Bit", {
  Python: `def is_bit_set(num, position):
    mask = 1 << position
    return (num & mask) != 0`,
  Java: `class Solution {
    static boolean isBitSet(int num, int position) {
        int mask = 1 << position;
        return (num & mask) != 0;
    }
}`,
  C: `int isBitSet(int num, int position) {
    int mask = 1 << position;
    return (num & mask) != 0;
}`,
  "C++": `bool isBitSet(int num, int position) {
    int mask = 1 << position;
    return (num & mask) != 0;
}`,
});
setAll("bit", "Set Bit", {
  Python: `def set_bit(num, position):
    mask = 1 << position
    return num | mask`,
  Java: `class Solution {
    static int setBit(int num, int position) {
        int mask = 1 << position;
        return num | mask;
    }
}`,
  C: `int setBit(int num, int position) {
    int mask = 1 << position;
    return num | mask;
}`,
  "C++": `int setBit(int num, int position) {
    int mask = 1 << position;
    return num | mask;
}`,
});
setAll("bit", "XOR Trick", {
  Python: `def single_number(arr):
    ans = 0

    for value in arr:
        ans ^= value

    return ans`,
  Java: `class Solution {
    static int singleNumber(int[] arr) {
        int ans = 0;

        for (int value : arr) {
            ans ^= value;
        }

        return ans;
    }
}`,
  C: `int singleNumber(int arr[], int n) {
    int ans = 0;

    for (int i = 0; i < n; i++) {
        ans ^= arr[i];
    }

    return ans;
}`,
  "C++": `int singleNumber(vector<int>& arr) {
    int ans = 0;

    for (int value : arr) {
        ans ^= value;
    }

    return ans;
}`,
});

setAll("dsu", "Find", {
  Python: `def find(parent, x):
    if parent[x] != x:
        parent[x] = find(parent, parent[x])
    return parent[x]`,
  Java: `class DSU {
    int[] parent;

    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
}`,
  C: `int find(int parent[], int x) {
    if (parent[x] != x) {
        parent[x] = find(parent, parent[x]);
    }
    return parent[x];
}`,
  "C++": `int find(vector<int>& parent, int x) {
    if (parent[x] != x) {
        parent[x] = find(parent, parent[x]);
    }
    return parent[x];
}`,
});
setAll("dsu", "Union", {
  Python: `def union(parent, a, b):
    root_a = find(parent, a)
    root_b = find(parent, b)

    if root_a != root_b:
        parent[root_b] = root_a`,
  Java: `class DSU {
    int[] parent;

    int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
        return parent[x];
    }

    void union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);

        if (rootA != rootB) parent[rootB] = rootA;
    }
}`,
  C: `void unionSet(int parent[], int a, int b) {
    int rootA = find(parent, a);
    int rootB = find(parent, b);

    if (rootA != rootB) parent[rootB] = rootA;
}`,
  "C++": `void unionSet(vector<int>& parent, int a, int b) {
    int rootA = find(parent, a);
    int rootB = find(parent, b);

    if (rootA != rootB) parent[rootB] = rootA;
}`,
});
setAll("dsu", "Path Compression", CODE.dsu["Find"]);

setAll("segmentTree", "Build", {
  Python: `def build(seg, arr, index, low, high):
    if low == high:
        seg[index] = arr[low]
        return

    mid = (low + high) // 2
    build(seg, arr, 2 * index + 1, low, mid)
    build(seg, arr, 2 * index + 2, mid + 1, high)

    seg[index] = seg[2 * index + 1] + seg[2 * index + 2]`,
  Java: `class SegmentTree {
    static void build(int[] seg, int[] arr, int index, int low, int high) {
        if (low == high) {
            seg[index] = arr[low];
            return;
        }

        int mid = (low + high) / 2;
        build(seg, arr, 2 * index + 1, low, mid);
        build(seg, arr, 2 * index + 2, mid + 1, high);

        seg[index] = seg[2 * index + 1] + seg[2 * index + 2];
    }
}`,
  C: `void build(int seg[], int arr[], int index, int low, int high) {
    if (low == high) {
        seg[index] = arr[low];
        return;
    }

    int mid = (low + high) / 2;
    build(seg, arr, 2 * index + 1, low, mid);
    build(seg, arr, 2 * index + 2, mid + 1, high);

    seg[index] = seg[2 * index + 1] + seg[2 * index + 2];
}`,
  "C++": `void build(vector<int>& seg, vector<int>& arr, int index, int low, int high) {
    if (low == high) {
        seg[index] = arr[low];
        return;
    }

    int mid = (low + high) / 2;
    build(seg, arr, 2 * index + 1, low, mid);
    build(seg, arr, 2 * index + 2, mid + 1, high);

    seg[index] = seg[2 * index + 1] + seg[2 * index + 2];
}`,
});
setAll("segmentTree", "Query", {
  Python: `def query(seg, index, low, high, left, right):
    if right < low or high < left:
        return 0

    if left <= low and high <= right:
        return seg[index]

    mid = (low + high) // 2
    return query(seg, 2 * index + 1, low, mid, left, right) + query(seg, 2 * index + 2, mid + 1, high, left, right)`,
  Java: `static int query(int[] seg, int index, int low, int high, int left, int right) {
    if (right < low || high < left) return 0;

    if (left <= low && high <= right) return seg[index];

    int mid = (low + high) / 2;
    return query(seg, 2 * index + 1, low, mid, left, right)
         + query(seg, 2 * index + 2, mid + 1, high, left, right);
}`,
  C: `int query(int seg[], int index, int low, int high, int left, int right) {
    if (right < low || high < left) return 0;

    if (left <= low && high <= right) return seg[index];

    int mid = (low + high) / 2;
    return query(seg, 2 * index + 1, low, mid, left, right)
         + query(seg, 2 * index + 2, mid + 1, high, left, right);
}`,
  "C++": `int query(vector<int>& seg, int index, int low, int high, int left, int right) {
    if (right < low || high < left) return 0;

    if (left <= low && high <= right) return seg[index];

    int mid = (low + high) / 2;
    return query(seg, 2 * index + 1, low, mid, left, right)
         + query(seg, 2 * index + 2, mid + 1, high, left, right);
}`,
});
setAll("segmentTree", "Update", CODE.segmentTree["Build"]);

setAll("trie", "Insert Word", {
  Python: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.end = False

def insert(root, word):
    node = root

    for ch in word:
        if ch not in node.children:
            node.children[ch] = TrieNode()
        node = node.children[ch]

    node.end = True`,
  Java: `class TrieNode {
    TrieNode[] child = new TrieNode[26];
    boolean end;
}

class Trie {
    TrieNode root = new TrieNode();

    void insert(String word) {
        TrieNode node = root;

        for (char ch : word.toCharArray()) {
            int idx = ch - 'a';
            if (node.child[idx] == null) node.child[idx] = new TrieNode();
            node = node.child[idx];
        }

        node.end = true;
    }
}`,
  C: `// Trie in C uses struct with child pointers.
struct TrieNode {
    struct TrieNode* child[26];
    int end;
};`,
  "C++": `class TrieNode {
public:
    TrieNode* child[26];
    bool end;

    TrieNode() {
        for (int i = 0; i < 26; i++) child[i] = nullptr;
        end = false;
    }
};

void insert(TrieNode* root, string word) {
    TrieNode* node = root;

    for (char ch : word) {
        int idx = ch - 'a';
        if (!node->child[idx]) node->child[idx] = new TrieNode();
        node = node->child[idx];
    }

    node->end = true;
}`,
});
setAll("trie", "Search Word", {
  Python: `def search(root, word):
    node = root

    for ch in word:
        if ch not in node.children:
            return False
        node = node.children[ch]

    return node.end`,
  Java: `boolean search(String word) {
    TrieNode node = root;

    for (char ch : word.toCharArray()) {
        int idx = ch - 'a';
        if (node.child[idx] == null) return false;
        node = node.child[idx];
    }

    return node.end;
}`,
  C: `// Search follows each character pointer.
// If missing pointer is found, word does not exist.`,
  "C++": `bool search(TrieNode* root, string word) {
    TrieNode* node = root;

    for (char ch : word) {
        int idx = ch - 'a';
        if (!node->child[idx]) return false;
        node = node->child[idx];
    }

    return node->end;
}`,
});
setAll("trie", "Starts With", CODE.trie["Search Word"]);

setAll("topological", "Indegree", {
  Python: `from collections import deque

def topo_sort(n, edges):
    graph = [[] for _ in range(n)]
    indegree = [0] * n

    for u, v in edges:
        graph[u].append(v)
        indegree[v] += 1

    queue = deque([i for i in range(n) if indegree[i] == 0])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)

        for nei in graph[node]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                queue.append(nei)

    return order`,
  Java: `// Topological sort uses indegree + queue.
// Build graph, push all 0-indegree nodes,
// remove them and reduce neighbors indegree.`,
  C: `// Use adjacency list/matrix + indegree array + queue.`,
  "C++": `vector<int> topoSort(int n, vector<pair<int,int>>& edges) {
    vector<vector<int>> graph(n);
    vector<int> indegree(n), order;

    for (auto [u, v] : edges) {
        graph[u].push_back(v);
        indegree[v]++;
    }

    queue<int> q;
    for (int i = 0; i < n; i++) if (indegree[i] == 0) q.push(i);

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        order.push_back(node);

        for (int nei : graph[node]) {
            indegree[nei]--;
            if (indegree[nei] == 0) q.push(nei);
        }
    }

    return order;
}`,
});
setAll("topological", "Queue", CODE.topological["Indegree"]);
setAll("topological", "Ordering", CODE.topological["Indegree"]);

setAll("shortestPath", "BFS Shortest Path", {
  Python: `from collections import deque

def shortest_path(graph, start):
    dist = {start: 0}
    queue = deque([start])

    while queue:
        node = queue.popleft()

        for nei in graph[node]:
            if nei not in dist:
                dist[nei] = dist[node] + 1
                queue.append(nei)

    return dist`,
  Java: `// For unweighted graph, BFS gives shortest path.
// Use queue, distance array/map and visited set.`,
  C: `// BFS shortest path can be implemented using queue and distance array.`,
  "C++": `unordered_map<int, int> shortestPath(unordered_map<int, vector<int>>& graph, int start) {
    unordered_map<int, int> dist;
    queue<int> q;

    dist[start] = 0;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();

        for (int nei : graph[node]) {
            if (!dist.count(nei)) {
                dist[nei] = dist[node] + 1;
                q.push(nei);
            }
        }
    }

    return dist;
}`,
});
setAll("shortestPath", "Dijkstra", {
  Python: `import heapq

def dijkstra(graph, start):
    dist = {start: 0}
    heap = [(0, start)]

    while heap:
        cost, node = heapq.heappop(heap)

        if cost > dist[node]:
            continue

        for nei, weight in graph[node]:
            new_cost = cost + weight

            if nei not in dist or new_cost < dist[nei]:
                dist[nei] = new_cost
                heapq.heappush(heap, (new_cost, nei))

    return dist`,
  Java: `// Dijkstra uses priority queue.
// Pop smallest distance node, relax its neighbors.`,
  C: `// Dijkstra in C commonly uses adjacency matrix and distance array.`,
  "C++": `vector<int> dijkstra(int n, vector<vector<pair<int,int>>>& graph, int start) {
    vector<int> dist(n, INT_MAX);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;

    dist[start] = 0;
    pq.push({0, start});

    while (!pq.empty()) {
        auto [cost, node] = pq.top();
        pq.pop();

        if (cost > dist[node]) continue;

        for (auto [nei, weight] : graph[node]) {
            if (cost + weight < dist[nei]) {
                dist[nei] = cost + weight;
                pq.push({dist[nei], nei});
            }
        }
    }

    return dist;
}`,
});
setAll("shortestPath", "Relaxation", CODE.shortestPath["Dijkstra"]);

setAll("heap", "Push", {
  Python: `import heapq

heap = []

def push(value):
    heapq.heappush(heap, value)`,
  Java: `import java.util.*;

PriorityQueue<Integer> pq = new PriorityQueue<>();

void push(int value) {
    pq.add(value);
}`,
  C: `// In C, heap push requires adding at end and heapify up.`,
  "C++": `priority_queue<int> pq;

void pushValue(int value) {
    pq.push(value);
}`,
});
setAll("heap", "Pop", {
  Python: `import heapq

def pop_min(heap):
    if not heap:
        return None
    return heapq.heappop(heap)`,
  Java: `Integer popMin(PriorityQueue<Integer> pq) {
    if (pq.isEmpty()) return null;
    return pq.remove();
}`,
  C: `// In C, heap pop removes root and heapifies down.`,
  "C++": `int popMax(priority_queue<int>& pq) {
    if (pq.empty()) return -1;
    int value = pq.top();
    pq.pop();
    return value;
}`,
});
setAll("heap", "Peek", {
  Python: `def peek_min(heap):
    if not heap:
        return None
    return heap[0]`,
  Java: `Integer peek(PriorityQueue<Integer> pq) {
    if (pq.isEmpty()) return null;
    return pq.peek();
}`,
  C: `// Heap peek returns root element.`,
  "C++": `int peek(priority_queue<int>& pq) {
    if (pq.empty()) return -1;
    return pq.top();
}`,
});

setAll("greedy", "Sort", {
  Python: `def activity_selection(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 0
    last_end = -10**9

    for start, end in intervals:
        if start >= last_end:
            count += 1
            last_end = end

    return count`,
  Java: `// Sort intervals by ending time.
// Pick activity if start >= last selected end.`,
  C: `// Greedy interval selection: sort by end time, then pick valid intervals.`,
  "C++": `int activitySelection(vector<pair<int,int>>& intervals) {
    sort(intervals.begin(), intervals.end(), [](auto& a, auto& b) {
        return a.second < b.second;
    });

    int count = 0;
    int lastEnd = INT_MIN;

    for (auto [start, end] : intervals) {
        if (start >= lastEnd) {
            count++;
            lastEnd = end;
        }
    }

    return count;
}`,
});
setAll("greedy", "Pick Best", CODE.greedy["Sort"]);
setAll("greedy", "Validate", CODE.greedy["Sort"]);

// Extra direct code snippets so every major topic has useful code instead of empty/generic blocks.
setAll("searching", "Linear Search", {
  Python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
  Java: `class Solution {
    static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) return i;
        }
        return -1;
    }
}`,
  C: `int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
  "C++": `int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}`,
});

setAll("searching", "Binary Search", {
  Python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1`,
  Java: `class Solution {
    static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
}`,
  C: `int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}`,
  "C++": `int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}`,
});

setAll("twoPointers", "Pair Sum", {
  Python: `def pair_sum(arr, target):
    left, right = 0, len(arr) - 1

    while left < right:
        total = arr[left] + arr[right]

        if total == target:
            return [left, right]
        elif total < target:
            left += 1
        else:
            right -= 1

    return [-1, -1]`,
  Java: `class Solution {
    static int[] pairSum(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left < right) {
            int sum = arr[left] + arr[right];

            if (sum == target) return new int[]{left, right};
            if (sum < target) left++;
            else right--;
        }

        return new int[]{-1, -1};
    }
}`,
  C: `void pairSum(int arr[], int n, int target, int ans[]) {
    int left = 0, right = n - 1;
    ans[0] = ans[1] = -1;

    while (left < right) {
        int sum = arr[left] + arr[right];

        if (sum == target) {
            ans[0] = left;
            ans[1] = right;
            return;
        }

        if (sum < target) left++;
        else right--;
    }
}`,
  "C++": `vector<int> pairSum(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left < right) {
        int sum = arr[left] + arr[right];

        if (sum == target) return {left, right};
        if (sum < target) left++;
        else right--;
    }

    return {-1, -1};
}`,
});

setAll("sliding", "Fixed Window", {
  Python: `def max_sum_k(arr, k):
    window = sum(arr[:k])
    best = window

    for right in range(k, len(arr)):
        window += arr[right]
        window -= arr[right - k]
        best = max(best, window)

    return best`,
  Java: `class Solution {
    static int maxSumK(int[] arr, int k) {
        int window = 0;

        for (int i = 0; i < k; i++) window += arr[i];

        int best = window;

        for (int right = k; right < arr.length; right++) {
            window += arr[right];
            window -= arr[right - k];
            best = Math.max(best, window);
        }

        return best;
    }
}`,
  C: `int maxSumK(int arr[], int n, int k) {
    int window = 0;

    for (int i = 0; i < k; i++) window += arr[i];

    int best = window;

    for (int right = k; right < n; right++) {
        window += arr[right];
        window -= arr[right - k];

        if (window > best) best = window;
    }

    return best;
}`,
  "C++": `int maxSumK(vector<int>& arr, int k) {
    int window = 0;

    for (int i = 0; i < k; i++) window += arr[i];

    int best = window;

    for (int right = k; right < arr.size(); right++) {
        window += arr[right];
        window -= arr[right - k];
        best = max(best, window);
    }

    return best;
}`,
});

// Final code coverage patch: every important topic/operation has useful code.
function applyCodeFixes() {
  const sortingCodes = {
    "Bubble Sort": {
      Python: `def bubble_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        swapped = False

        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break

    return arr`,
      Java: `class Solution {
    static void bubbleSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) break;
        }
    }
}`,
      C: `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }

        if (!swapped) break;
    }
}`,
      "C++": `void bubbleSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped) break;
    }
}`,
    },

    "Selection Sort": {
      Python: `def selection_sort(arr):
    n = len(arr)

    for i in range(n):
        min_index = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr`,
      Java: `class Solution {
    static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n; i++) {
            int minIndex = i;

            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}`,
      C: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int minIndex = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`,
      "C++": `void selectionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; i++) {
        int minIndex = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr[i], arr[minIndex]);
    }
}`,
    },

    "Insertion Sort": {
      Python: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    return arr`,
      Java: `class Solution {
    static void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
    }
}`,
      C: `void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}`,
      "C++": `void insertionSort(vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}`,
    },

    "Merge Sort": {
      Python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
      Java: `class Solution {
    static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;

        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else temp[k++] = arr[j++];
        }

        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

        for (int x = 0; x < temp.length; x++) {
            arr[left + x] = temp[x];
        }
    }
}`,
      C: `void merge(int arr[], int left, int mid, int right) {
    int temp[1000];
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (int x = 0; x < k; x++) {
        arr[left + x] = temp[x];
    }
}

void mergeSort(int arr[], int left, int right) {
    if (left >= right) return;

    int mid = (left + right) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}`,
      "C++": `void mergeArray(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp;
    int i = left, j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }

    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= right) temp.push_back(arr[j++]);

    for (int x = 0; x < temp.size(); x++) {
        arr[left + x] = temp[x];
    }
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right) return;

    int mid = left + (right - left) / 2;

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    mergeArray(arr, left, mid, right);
}`,
    },

    "Quick Sort": {
      Python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[-1]
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)`,
      Java: `class Solution {
    static void quickSort(int[] arr, int low, int high) {
        if (low >= high) return;

        int pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }

    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}`,
      C: `int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low >= high) return;

    int pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
}`,
      "C++": `int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low >= high) return;

    int pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
}`,
    },

    "Heap Sort": {
      Python: `def heap_sort(arr):
    import heapq

    heapq.heapify(arr)
    result = []

    while arr:
        result.append(heapq.heappop(arr))

    return result`,
      Java: `import java.util.*;

class Solution {
    static int[] heapSort(int[] arr) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int value : arr) {
            pq.add(value);
        }

        int index = 0;
        while (!pq.isEmpty()) {
            arr[index++] = pq.remove();
        }

        return arr;
    }
}`,
      C: `void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);

    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }
}`,
      "C++": `void heapSort(vector<int>& arr) {
    priority_queue<int, vector<int>, greater<int>> pq;

    for (int value : arr) {
        pq.push(value);
    }

    int index = 0;
    while (!pq.empty()) {
        arr[index++] = pq.top();
        pq.pop();
    }
}`,
    },
  };

  Object.keys(sortingCodes).forEach((name) => setAll("sorting", name, sortingCodes[name]));

  setAll("twoPointers", "Pair Sum", {
    Python: `def pair_sum(arr, target):
    left, right = 0, len(arr) - 1

    while left < right:
        total = arr[left] + arr[right]

        if total == target:
            return [left, right]
        elif total < target:
            left += 1
        else:
            right -= 1

    return [-1, -1]`,
    Java: `class Solution {
    static int[] pairSum(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left < right) {
            int sum = arr[left] + arr[right];

            if (sum == target) return new int[]{left, right};
            if (sum < target) left++;
            else right--;
        }

        return new int[]{-1, -1};
    }
}`,
    C: `void pairSum(int arr[], int n, int target, int ans[]) {
    int left = 0, right = n - 1;
    ans[0] = -1;
    ans[1] = -1;

    while (left < right) {
        int sum = arr[left] + arr[right];

        if (sum == target) {
            ans[0] = left;
            ans[1] = right;
            return;
        }

        if (sum < target) left++;
        else right--;
    }
}`,
    "C++": `vector<int> pairSum(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;

    while (left < right) {
        int sum = arr[left] + arr[right];

        if (sum == target) return {left, right};
        if (sum < target) left++;
        else right--;
    }

    return {-1, -1};
}`,
  });

  setAll("twoPointers", "Reverse Array", {
    Python: `def reverse_array(arr):
    left, right = 0, len(arr) - 1

    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

    return arr`,
    Java: `class Solution {
    static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;

        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }
}`,
    C: `void reverseArray(int arr[], int n) {
    int left = 0, right = n - 1;

    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}`,
    "C++": `void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;

    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}`,
  });

  setAll("sliding", "Fixed Window", {
    Python: `def max_sum_k(arr, k):
    window = sum(arr[:k])
    best = window

    for right in range(k, len(arr)):
        window += arr[right]
        window -= arr[right - k]
        best = max(best, window)

    return best`,
    Java: `class Solution {
    static int maxSumK(int[] arr, int k) {
        int window = 0;

        for (int i = 0; i < k; i++) {
            window += arr[i];
        }

        int best = window;

        for (int right = k; right < arr.length; right++) {
            window += arr[right];
            window -= arr[right - k];
            best = Math.max(best, window);
        }

        return best;
    }
}`,
    C: `int maxSumK(int arr[], int n, int k) {
    int window = 0;

    for (int i = 0; i < k; i++) {
        window += arr[i];
    }

    int best = window;

    for (int right = k; right < n; right++) {
        window += arr[right];
        window -= arr[right - k];

        if (window > best) best = window;
    }

    return best;
}`,
    "C++": `int maxSumK(vector<int>& arr, int k) {
    int window = 0;

    for (int i = 0; i < k; i++) {
        window += arr[i];
    }

    int best = window;

    for (int right = k; right < arr.size(); right++) {
        window += arr[right];
        window -= arr[right - k];

        best = max(best, window);
    }

    return best;
}`,
  });

  setAll("sliding", "Variable Window", {
    Python: `def min_subarray_len(arr, target):
    left = 0
    total = 0
    answer = float("inf")

    for right in range(len(arr)):
        total += arr[right]

        while total >= target:
            answer = min(answer, right - left + 1)
            total -= arr[left]
            left += 1

    return 0 if answer == float("inf") else answer`,
    Java: `class Solution {
    static int minSubarrayLen(int[] arr, int target) {
        int left = 0, sum = 0;
        int answer = Integer.MAX_VALUE;

        for (int right = 0; right < arr.length; right++) {
            sum += arr[right];

            while (sum >= target) {
                answer = Math.min(answer, right - left + 1);
                sum -= arr[left];
                left++;
            }
        }

        return answer == Integer.MAX_VALUE ? 0 : answer;
    }
}`,
    C: `int minSubarrayLen(int arr[], int n, int target) {
    int left = 0, sum = 0;
    int answer = 1000000000;

    for (int right = 0; right < n; right++) {
        sum += arr[right];

        while (sum >= target) {
            int length = right - left + 1;
            if (length < answer) answer = length;

            sum -= arr[left];
            left++;
        }
    }

    return answer == 1000000000 ? 0 : answer;
}`,
    "C++": `int minSubarrayLen(vector<int>& arr, int target) {
    int left = 0, sum = 0;
    int answer = INT_MAX;

    for (int right = 0; right < arr.size(); right++) {
        sum += arr[right];

        while (sum >= target) {
            answer = min(answer, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }

    return answer == INT_MAX ? 0 : answer;
}`,
  });
}

applyCodeFixes();


export const ROADMAP = [
  { level: "Beginner", items: ["Arrays", "Strings", "Sorting", "Searching", "Stack", "Queue"] },
  { level: "Intermediate", items: ["Linked List", "Two Pointers", "Sliding Window", "Prefix Sum", "Hashing", "Trees"] },
  { level: "Advanced", items: ["Graphs", "Heap", "Greedy", "Dynamic Programming", "Trie", "Bit Manipulation", "DSU", "Segment Tree"] },
];