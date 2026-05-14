import { useEffect, useMemo, useState } from "react";

const topics = [
  { id: "sorting", title: "Sorting", icon: "📊", desc: "Bubble, Selection, Insertion sorting with bars" },
  { id: "searching", title: "Searching", icon: "🔍", desc: "Linear and Binary Search with highlights" },
  { id: "stack", title: "Stack", icon: "🧱", desc: "Push, Pop, Peek, isEmpty with LIFO visual" },
  { id: "queue", title: "Queue", icon: "🚦", desc: "Enqueue, Dequeue, Peek, isEmpty with FIFO visual" },
  { id: "linked", title: "Singly Linked List", icon: "🔗", desc: "Insert, Delete, Search, Reverse nodes" },
  { id: "doubly", title: "Doubly Linked List", icon: "⛓️", desc: "Previous and next pointer visualization" },
  { id: "twoPointers", title: "Two Pointers", icon: "↔️", desc: "Left and right pointer pattern" },
  { id: "sliding", title: "Sliding Window", icon: "🪟", desc: "Fixed and variable window patterns" },
  { id: "tree", title: "Tree / BST", icon: "🌳", desc: "Build, Insert, Delete, Search, Traversals" },
  { id: "graph", title: "Graph", icon: "🕸️", desc: "Build graph, BFS and DFS" },
];

const data = {
  sorting: {
    title: "Sorting Algorithms",
    intro: "Sorting means arranging elements in a specific order, usually ascending or descending. It is a foundation for searching, greedy, intervals, and many interview problems.",
    real: "Sorting marks, prices, names, leaderboard scores, files by date.",
    operations: {
      "Bubble Sort": {
        explain: "Bubble Sort compares adjacent elements and swaps them when they are in the wrong order. After every pass, the largest unsorted value moves to the end.",
        complexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)", space: "O(1)" },
      },
      "Selection Sort": {
        explain: "Selection Sort repeatedly finds the minimum element from the unsorted part and places it at the correct position.",
        complexity: { best: "O(n²)", average: "O(n²)", worst: "O(n²)", space: "O(1)" },
      },
      "Insertion Sort": {
        explain: "Insertion Sort builds a sorted part one element at a time by inserting each selected element into its correct position.",
        complexity: { best: "O(n)", average: "O(n²)", worst: "O(n²)", space: "O(1)" },
      },
    },
  },
  searching: {
    title: "Searching Algorithms",
    intro: "Searching means finding whether a target exists in data and where it is located.",
    real: "Finding a contact, product ID, file, or word in a dictionary.",
    operations: {
      "Linear Search": {
        explain: "Linear Search checks each element one by one until the target is found or the array ends.",
        complexity: { best: "O(1)", average: "O(n)", worst: "O(n)", space: "O(1)" },
      },
      "Binary Search": {
        explain: "Binary Search works on sorted data. It checks the middle element and removes half of the search space every step.",
        complexity: { best: "O(1)", average: "O(log n)", worst: "O(log n)", space: "O(1)" },
      },
    },
  },
  stack: {
    title: "Stack",
    intro: "A Stack is a linear data structure that follows LIFO: Last In, First Out.",
    real: "Undo button, browser history, function call stack, expression evaluation.",
    operations: {
      Push: { explain: "Push adds a new element on top of the stack.", complexity: { time: "O(1)", space: "O(1)" } },
      Pop: { explain: "Pop removes the top element from the stack.", complexity: { time: "O(1)", space: "O(1)" } },
      Peek: { explain: "Peek returns the top element without removing it.", complexity: { time: "O(1)", space: "O(1)" } },
      isEmpty: { explain: "isEmpty checks whether the stack has no elements.", complexity: { time: "O(1)", space: "O(1)" } },
    },
  },
  queue: {
    title: "Queue",
    intro: "A Queue is a linear data structure that follows FIFO: First In, First Out.",
    real: "Ticket line, printer queue, CPU scheduling, BFS traversal.",
    operations: {
      Enqueue: { explain: "Enqueue adds an element at the rear of the queue.", complexity: { time: "O(1)", space: "O(1)" } },
      Dequeue: { explain: "Dequeue removes an element from the front of the queue.", complexity: { time: "O(1)", space: "O(1)" } },
      Peek: { explain: "Peek returns the front element without removing it.", complexity: { time: "O(1)", space: "O(1)" } },
      isEmpty: { explain: "isEmpty checks whether the queue has no elements.", complexity: { time: "O(1)", space: "O(1)" } },
    },
  },
  linked: {
    title: "Singly Linked List",
    intro: "A Singly Linked List contains nodes. Each node stores data and a pointer to the next node.",
    real: "Playlist, browser history, undo systems, memory blocks.",
    operations: {
      "Insert Head": { explain: "Insert Head adds a new node before the current head.", complexity: { time: "O(1)", space: "O(1)" } },
      "Insert Tail": { explain: "Insert Tail adds a new node after the last node.", complexity: { time: "O(n)", space: "O(1)" } },
      Delete: { explain: "Delete removes the first node that matches the given value.", complexity: { time: "O(n)", space: "O(1)" } },
      Search: { explain: "Search traverses nodes one by one until the value is found.", complexity: { time: "O(n)", space: "O(1)" } },
      Reverse: { explain: "Reverse changes the next pointers so the list direction becomes opposite.", complexity: { time: "O(n)", space: "O(1)" } },
    },
  },
  doubly: {
    title: "Doubly Linked List",
    intro: "A Doubly Linked List node has data, previous pointer, and next pointer.",
    real: "Browser forward/back, music next/previous, editor undo/redo.",
    operations: {
      "Insert Head": { explain: "Insert Head adds a node before head and updates previous pointer of old head.", complexity: { time: "O(1)", space: "O(1)" } },
      "Insert Tail": { explain: "Insert Tail adds a node at the end and connects both prev and next links.", complexity: { time: "O(n)", space: "O(1)" } },
      Delete: { explain: "Delete removes a node and reconnects previous and next nodes.", complexity: { time: "O(n)", space: "O(1)" } },
      Search: { explain: "Search checks nodes one by one from head.", complexity: { time: "O(n)", space: "O(1)" } },
    },
  },
  twoPointers: {
    title: "Two Pointers",
    intro: "Two Pointers uses two indexes to solve problems efficiently, often reducing nested loops.",
    real: "Finding two prices that match a budget, checking palindrome from both ends.",
    operations: {
      "Pair Sum": { explain: "Use left and right pointers on a sorted array. Move left if sum is small, move right if sum is large.", complexity: { time: "O(n)", space: "O(1)" } },
      "Reverse Array": { explain: "Swap left and right values, then move both pointers toward the center.", complexity: { time: "O(n)", space: "O(1)" } },
    },
  },
  sliding: {
    title: "Sliding Window",
    intro: "Sliding Window keeps a moving range over an array/string and updates the answer without recalculating everything.",
    real: "Last 7 days sales, recent 5 scores, maximum traffic in a time window.",
    operations: {
      "Fixed Window": { explain: "Fixed Window keeps the same window size k and slides it step by step.", complexity: { time: "O(n)", space: "O(1)" } },
      "Variable Window": { explain: "Variable Window expands and shrinks depending on a condition.", complexity: { time: "O(n)", space: "O(1) or O(k)" } },
    },
  },
  tree: {
    title: "Tree / Binary Search Tree",
    intro: "A Tree is hierarchical. A BST keeps smaller values on the left and larger values on the right.",
    real: "Folder structure, family tree, database indexes, expression trees.",
    operations: {
      "Build Tree": { explain: "Build Tree inserts given values one by one into a BST.", complexity: { average: "O(n log n)", worst: "O(n²)", space: "O(n)" } },
      Insert: { explain: "Insert compares value with current node and moves left or right until empty place is found.", complexity: { average: "O(log n)", worst: "O(n)", space: "O(h)" } },
      Delete: { explain: "Delete handles three cases: leaf node, one child, or two children using inorder successor.", complexity: { average: "O(log n)", worst: "O(n)", space: "O(h)" } },
      Search: { explain: "Search compares target with node and moves left or right using BST property.", complexity: { average: "O(log n)", worst: "O(n)", space: "O(h)" } },
      Inorder: { explain: "Inorder traversal visits Left → Root → Right. In BST, it gives sorted order.", complexity: { time: "O(n)", space: "O(h)" } },
      Preorder: { explain: "Preorder traversal visits Root → Left → Right.", complexity: { time: "O(n)", space: "O(h)" } },
      Postorder: { explain: "Postorder traversal visits Left → Right → Root.", complexity: { time: "O(n)", space: "O(h)" } },
    },
  },
  graph: {
    title: "Graph",
    intro: "A Graph contains vertices and edges. It represents relationships and networks.",
    real: "Maps, social networks, computer networks, course prerequisites.",
    operations: {
      "Build Graph": { explain: "Build Graph creates connections from edge input like A-B, A-C.", complexity: { time: "O(E)", space: "O(V + E)" } },
      BFS: { explain: "BFS uses a queue and visits nodes level by level.", complexity: { time: "O(V + E)", space: "O(V)" } },
      DFS: { explain: "DFS uses recursion/stack and goes deep before backtracking.", complexity: { time: "O(V + E)", space: "O(V)" } },
    },
  },
};

const code = {
  sorting: {
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
      Java: `class BubbleSort {
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
      Java: `class SelectionSort {
    static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j;
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
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`,
      "C++": `void selectionSort(vector<int>& arr) {
    for (int i = 0; i < arr.size(); i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
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
      Java: `class InsertionSort {
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
  },
  searching: {
    "Linear Search": {
      Python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
      Java: `class LinearSearch {
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
    },
    "Binary Search": {
      Python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
      Java: `class BinarySearch {
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
    },
  },
};

function makeSimpleCode(topic, op) {
  const title = `${topic} - ${op}`;
  return {
    Python: `# ${title}
def ${safe(op)}():
    # Implement ${op} operation here
    pass`,
    Java: `class Solution {
    // ${title}
    static void ${safe(op)}() {
        // Implement ${op} operation here
    }
}`,
    C: `// ${title}
void ${safe(op)}() {
    // Implement ${op} operation here
}`,
    "C++": `// ${title}
void ${safe(op)}() {
    // Implement ${op} operation here
}`,
  };
}

function safe(text) {
  return text.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_");
}

const extraCode = {
  stack: {
    Push: {
      Python: `stack = []

def push(value):
    stack.append(value)

push(10)
push(20)`,
      Java: `import java.util.*;

class StackExample {
    Stack<Integer> stack = new Stack<>();

    void push(int value) {
        stack.push(value);
    }
}`,
      C: `#define MAX 100
int stack[MAX];
int top = -1;

void push(int value) {
    if (top == MAX - 1) return;
    stack[++top] = value;
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

stack<int> st;

void pushValue(int value) {
    st.push(value);
}`,
    },
    Pop: {
      Python: `stack = [10, 20, 30]

def pop():
    if len(stack) == 0:
        return None
    return stack.pop()`,
      Java: `import java.util.*;

class StackExample {
    Stack<Integer> stack = new Stack<>();

    Integer pop() {
        if (stack.isEmpty()) return null;
        return stack.pop();
    }
}`,
      C: `#define MAX 100
int stack[MAX];
int top = -1;

int pop() {
    if (top == -1) return -1;
    return stack[top--];
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

stack<int> st;

int popValue() {
    if (st.empty()) return -1;
    int value = st.top();
    st.pop();
    return value;
}`,
    },
    Peek: {
      Python: `stack = [10, 20, 30]

def peek():
    if len(stack) == 0:
        return None
    return stack[-1]`,
      Java: `import java.util.*;

class StackExample {
    Stack<Integer> stack = new Stack<>();

    Integer peek() {
        if (stack.isEmpty()) return null;
        return stack.peek();
    }
}`,
      C: `#define MAX 100
int stack[MAX];
int top = -1;

int peek() {
    if (top == -1) return -1;
    return stack[top];
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

stack<int> st;

int peekValue() {
    if (st.empty()) return -1;
    return st.top();
}`,
    },
    isEmpty: {
      Python: `stack = []

def is_empty():
    return len(stack) == 0`,
      Java: `import java.util.*;

class StackExample {
    Stack<Integer> stack = new Stack<>();

    boolean isEmpty() {
        return stack.isEmpty();
    }
}`,
      C: `int top = -1;

int isEmpty() {
    return top == -1;
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

stack<int> st;

bool isEmpty() {
    return st.empty();
}`,
    },
  },

  queue: {
    Enqueue: {
      Python: `from collections import deque

queue = deque()

def enqueue(value):
    queue.append(value)`,
      Java: `import java.util.*;

class QueueExample {
    Queue<Integer> queue = new LinkedList<>();

    void enqueue(int value) {
        queue.add(value);
    }
}`,
      C: `#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

void enqueue(int value) {
    if (rear == MAX - 1) return;
    queue[++rear] = value;
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

queue<int> q;

void enqueue(int value) {
    q.push(value);
}`,
    },
    Dequeue: {
      Python: `from collections import deque

queue = deque([10, 20, 30])

def dequeue():
    if len(queue) == 0:
        return None
    return queue.popleft()`,
      Java: `import java.util.*;

class QueueExample {
    Queue<Integer> queue = new LinkedList<>();

    Integer dequeue() {
        if (queue.isEmpty()) return null;
        return queue.remove();
    }
}`,
      C: `#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

int dequeue() {
    if (front > rear) return -1;
    return queue[front++];
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

queue<int> q;

int dequeue() {
    if (q.empty()) return -1;
    int value = q.front();
    q.pop();
    return value;
}`,
    },
    Peek: {
      Python: `from collections import deque

queue = deque([10, 20, 30])

def peek():
    if len(queue) == 0:
        return None
    return queue[0]`,
      Java: `import java.util.*;

class QueueExample {
    Queue<Integer> queue = new LinkedList<>();

    Integer peek() {
        if (queue.isEmpty()) return null;
        return queue.peek();
    }
}`,
      C: `#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

int peek() {
    if (front > rear) return -1;
    return queue[front];
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

queue<int> q;

int peek() {
    if (q.empty()) return -1;
    return q.front();
}`,
    },
    isEmpty: {
      Python: `from collections import deque

queue = deque()

def is_empty():
    return len(queue) == 0`,
      Java: `import java.util.*;

class QueueExample {
    Queue<Integer> queue = new LinkedList<>();

    boolean isEmpty() {
        return queue.isEmpty();
    }
}`,
      C: `int front = 0, rear = -1;

int isEmpty() {
    return front > rear;
}`,
      "C++": `#include <bits/stdc++.h>
using namespace std;

queue<int> q;

bool isEmpty() {
    return q.empty();
}`,
    },
  },

  linked: {
    "Insert Head": {
      Python: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def insert_head(head, value):
    node = Node(value)
    node.next = head
    return node`,
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
    },
    "Insert Tail": {
      Python: `def insert_tail(head, value):
    node = Node(value)

    if head is None:
        return node

    current = head
    while current.next:
        current = current.next

    current.next = node
    return head`,
      Java: `Node insertTail(Node head, int value) {
    Node node = new Node(value);

    if (head == null) return node;

    Node current = head;
    while (current.next != null) {
        current = current.next;
    }

    current.next = node;
    return head;
}`,
      C: `struct Node* insertTail(struct Node* head, int value) {
    struct Node* node = malloc(sizeof(struct Node));
    node->data = value;
    node->next = NULL;

    if (head == NULL) return node;

    struct Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }

    current->next = node;
    return head;
}`,
      "C++": `Node* insertTail(Node* head, int value) {
    Node* node = new Node(value);

    if (head == nullptr) return node;

    Node* current = head;
    while (current->next != nullptr) {
        current = current->next;
    }

    current->next = node;
    return head;
}`,
    },
    Delete: {
      Python: `def delete_value(head, value):
    if head is None:
        return None

    if head.data == value:
        return head.next

    current = head
    while current.next and current.next.data != value:
        current = current.next

    if current.next:
        current.next = current.next.next

    return head`,
      Java: `Node deleteValue(Node head, int value) {
    if (head == null) return null;

    if (head.data == value) return head.next;

    Node current = head;
    while (current.next != null && current.next.data != value) {
        current = current.next;
    }

    if (current.next != null) {
        current.next = current.next.next;
    }

    return head;
}`,
      C: `struct Node* deleteValue(struct Node* head, int value) {
    if (head == NULL) return NULL;

    if (head->data == value) {
        return head->next;
    }

    struct Node* current = head;
    while (current->next != NULL && current->next->data != value) {
        current = current->next;
    }

    if (current->next != NULL) {
        current->next = current->next->next;
    }

    return head;
}`,
      "C++": `Node* deleteValue(Node* head, int value) {
    if (head == nullptr) return nullptr;

    if (head->data == value) return head->next;

    Node* current = head;
    while (current->next != nullptr && current->next->data != value) {
        current = current->next;
    }

    if (current->next != nullptr) {
        current->next = current->next->next;
    }

    return head;
}`,
    },
    Search: {
      Python: `def search(head, value):
    current = head

    while current:
        if current.data == value:
            return True
        current = current.next

    return False`,
      Java: `boolean search(Node head, int value) {
    Node current = head;

    while (current != null) {
        if (current.data == value) return true;
        current = current.next;
    }

    return false;
}`,
      C: `int search(struct Node* head, int value) {
    struct Node* current = head;

    while (current != NULL) {
        if (current->data == value) return 1;
        current = current->next;
    }

    return 0;
}`,
      "C++": `bool search(Node* head, int value) {
    Node* current = head;

    while (current != nullptr) {
        if (current->data == value) return true;
        current = current->next;
    }

    return false;
}`,
    },
    Reverse: {
      Python: `def reverse(head):
    prev = None
    current = head

    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node

    return prev`,
      Java: `Node reverse(Node head) {
    Node prev = null;
    Node current = head;

    while (current != null) {
        Node nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}`,
      C: `struct Node* reverse(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* current = head;

    while (current != NULL) {
        struct Node* nextNode = current->next;
        current->next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}`,
      "C++": `Node* reverse(Node* head) {
    Node* prev = nullptr;
    Node* current = head;

    while (current != nullptr) {
        Node* nextNode = current->next;
        current->next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}`,
    },
  },

  doubly: {
    "Insert Head": {
      Python: `class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

def insert_head(head, value):
    node = Node(value)
    node.next = head

    if head:
        head.prev = node

    return node`,
      Java: `class Node {
    int data;
    Node prev, next;

    Node(int data) {
        this.data = data;
    }
}

Node insertHead(Node head, int value) {
    Node node = new Node(value);
    node.next = head;

    if (head != null) head.prev = node;

    return node;
}`,
      C: `struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

struct Node* insertHead(struct Node* head, int value) {
    struct Node* node = malloc(sizeof(struct Node));
    node->data = value;
    node->prev = NULL;
    node->next = head;

    if (head != NULL) head->prev = node;

    return node;
}`,
      "C++": `class Node {
public:
    int data;
    Node* prev;
    Node* next;

    Node(int data) {
        this->data = data;
        prev = next = nullptr;
    }
};

Node* insertHead(Node* head, int value) {
    Node* node = new Node(value);
    node->next = head;

    if (head != nullptr) head->prev = node;

    return node;
}`,
    },
    "Insert Tail": {
      Python: `def insert_tail(head, value):
    node = Node(value)

    if head is None:
        return node

    current = head
    while current.next:
        current = current.next

    current.next = node
    node.prev = current

    return head`,
      Java: `Node insertTail(Node head, int value) {
    Node node = new Node(value);

    if (head == null) return node;

    Node current = head;
    while (current.next != null) {
        current = current.next;
    }

    current.next = node;
    node.prev = current;

    return head;
}`,
      C: `struct Node* insertTail(struct Node* head, int value) {
    struct Node* node = malloc(sizeof(struct Node));
    node->data = value;
    node->prev = NULL;
    node->next = NULL;

    if (head == NULL) return node;

    struct Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }

    current->next = node;
    node->prev = current;

    return head;
}`,
      "C++": `Node* insertTail(Node* head, int value) {
    Node* node = new Node(value);

    if (head == nullptr) return node;

    Node* current = head;
    while (current->next != nullptr) {
        current = current->next;
    }

    current->next = node;
    node->prev = current;

    return head;
}`,
    },
    Delete: {
      Python: `def delete_value(head, value):
    current = head

    while current and current.data != value:
        current = current.next

    if current is None:
        return head

    if current.prev:
        current.prev.next = current.next
    else:
        head = current.next

    if current.next:
        current.next.prev = current.prev

    return head`,
      Java: `Node deleteValue(Node head, int value) {
    Node current = head;

    while (current != null && current.data != value) {
        current = current.next;
    }

    if (current == null) return head;

    if (current.prev != null) current.prev.next = current.next;
    else head = current.next;

    if (current.next != null) current.next.prev = current.prev;

    return head;
}`,
      C: `struct Node* deleteValue(struct Node* head, int value) {
    struct Node* current = head;

    while (current != NULL && current->data != value) {
        current = current->next;
    }

    if (current == NULL) return head;

    if (current->prev != NULL) current->prev->next = current->next;
    else head = current->next;

    if (current->next != NULL) current->next->prev = current->prev;

    return head;
}`,
      "C++": `Node* deleteValue(Node* head, int value) {
    Node* current = head;

    while (current != nullptr && current->data != value) {
        current = current->next;
    }

    if (current == nullptr) return head;

    if (current->prev != nullptr) current->prev->next = current->next;
    else head = current->next;

    if (current->next != nullptr) current->next->prev = current->prev;

    return head;
}`,
    },
    Search: {
      Python: `def search(head, value):
    current = head

    while current:
        if current.data == value:
            return True
        current = current.next

    return False`,
      Java: `boolean search(Node head, int value) {
    Node current = head;

    while (current != null) {
        if (current.data == value) return true;
        current = current.next;
    }

    return false;
}`,
      C: `int search(struct Node* head, int value) {
    struct Node* current = head;

    while (current != NULL) {
        if (current->data == value) return 1;
        current = current->next;
    }

    return 0;
}`,
      "C++": `bool search(Node* head, int value) {
    Node* current = head;

    while (current != nullptr) {
        if (current->data == value) return true;
        current = current->next;
    }

    return false;
}`,
    },
  },

  twoPointers: {
    "Pair Sum": {
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
    },
    "Reverse Array": {
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
    },
  },

  sliding: {
    "Fixed Window": {
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
    },
    "Variable Window": {
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
    },
  },

  tree: {
    "Build Tree": {
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

    return root

def build_tree(values):
    root = None

    for value in values:
        root = insert(root, value)

    return root`,
      Java: `class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
    }
}

class BST {
    static Node insert(Node root, int value) {
        if (root == null) return new Node(value);

        if (value < root.data) root.left = insert(root.left, value);
        else if (value > root.data) root.right = insert(root.right, value);

        return root;
    }

    static Node buildTree(int[] values) {
        Node root = null;

        for (int value : values) {
            root = insert(root, value);
        }

        return root;
    }
}`,
      C: `struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

struct Node* insert(struct Node* root, int value);

struct Node* buildTree(int values[], int n) {
    struct Node* root = NULL;

    for (int i = 0; i < n; i++) {
        root = insert(root, values[i]);
    }

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

Node* insert(Node* root, int value);

Node* buildTree(vector<int>& values) {
    Node* root = nullptr;

    for (int value : values) {
        root = insert(root, value);
    }

    return root;
}`,
    },
    Insert: {
      Python: `def insert(root, value):
    if root is None:
        return Node(value)

    if value < root.data:
        root.left = insert(root.left, value)
    elif value > root.data:
        root.right = insert(root.right, value)

    return root`,
      Java: `static Node insert(Node root, int value) {
    if (root == null) return new Node(value);

    if (value < root.data) root.left = insert(root.left, value);
    else if (value > root.data) root.right = insert(root.right, value);

    return root;
}`,
      C: `struct Node* insert(struct Node* root, int value) {
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
      "C++": `Node* insert(Node* root, int value) {
    if (root == nullptr) return new Node(value);

    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);

    return root;
}`,
    },
    Delete: {
      Python: `def find_min(node):
    while node.left:
        node = node.left
    return node

def delete_node(root, value):
    if root is None:
        return None

    if value < root.data:
        root.left = delete_node(root.left, value)
    elif value > root.data:
        root.right = delete_node(root.right, value)
    else:
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left

        successor = find_min(root.right)
        root.data = successor.data
        root.right = delete_node(root.right, successor.data)

    return root`,
      Java: `static Node findMin(Node node) {
    while (node.left != null) node = node.left;
    return node;
}

static Node deleteNode(Node root, int value) {
    if (root == null) return null;

    if (value < root.data) root.left = deleteNode(root.left, value);
    else if (value > root.data) root.right = deleteNode(root.right, value);
    else {
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;

        Node successor = findMin(root.right);
        root.data = successor.data;
        root.right = deleteNode(root.right, successor.data);
    }

    return root;
}`,
      C: `struct Node* findMin(struct Node* node) {
    while (node->left != NULL) node = node->left;
    return node;
}

struct Node* deleteNode(struct Node* root, int value) {
    if (root == NULL) return NULL;

    if (value < root->data) root->left = deleteNode(root->left, value);
    else if (value > root->data) root->right = deleteNode(root->right, value);
    else {
        if (root->left == NULL) return root->right;
        if (root->right == NULL) return root->left;

        struct Node* successor = findMin(root->right);
        root->data = successor->data;
        root->right = deleteNode(root->right, successor->data);
    }

    return root;
}`,
      "C++": `Node* findMin(Node* node) {
    while (node->left != nullptr) node = node->left;
    return node;
}

Node* deleteNode(Node* root, int value) {
    if (root == nullptr) return nullptr;

    if (value < root->data) root->left = deleteNode(root->left, value);
    else if (value > root->data) root->right = deleteNode(root->right, value);
    else {
        if (root->left == nullptr) return root->right;
        if (root->right == nullptr) return root->left;

        Node* successor = findMin(root->right);
        root->data = successor->data;
        root->right = deleteNode(root->right, successor->data);
    }

    return root;
}`,
    },
    Search: {
      Python: `def search(root, value):
    if root is None:
        return False

    if root.data == value:
        return True

    if value < root.data:
        return search(root.left, value)

    return search(root.right, value)`,
      Java: `static boolean search(Node root, int value) {
    if (root == null) return false;

    if (root.data == value) return true;

    if (value < root.data) return search(root.left, value);

    return search(root.right, value);
}`,
      C: `int search(struct Node* root, int value) {
    if (root == NULL) return 0;

    if (root->data == value) return 1;

    if (value < root->data) return search(root->left, value);

    return search(root->right, value);
}`,
      "C++": `bool search(Node* root, int value) {
    if (root == nullptr) return false;

    if (root->data == value) return true;

    if (value < root->data) return search(root->left, value);

    return search(root->right, value);
}`,
    },
    Inorder: {
      Python: `def inorder(root, result):
    if root is None:
        return

    inorder(root.left, result)
    result.append(root.data)
    inorder(root.right, result)`,
      Java: `static void inorder(Node root) {
    if (root == null) return;

    inorder(root.left);
    System.out.print(root.data + " ");
    inorder(root.right);
}`,
      C: `void inorder(struct Node* root) {
    if (root == NULL) return;

    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}`,
      "C++": `void inorder(Node* root) {
    if (root == nullptr) return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}`,
    },
    Preorder: {
      Python: `def preorder(root, result):
    if root is None:
        return

    result.append(root.data)
    preorder(root.left, result)
    preorder(root.right, result)`,
      Java: `static void preorder(Node root) {
    if (root == null) return;

    System.out.print(root.data + " ");
    preorder(root.left);
    preorder(root.right);
}`,
      C: `void preorder(struct Node* root) {
    if (root == NULL) return;

    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}`,
      "C++": `void preorder(Node* root) {
    if (root == nullptr) return;

    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}`,
    },
    Postorder: {
      Python: `def postorder(root, result):
    if root is None:
        return

    postorder(root.left, result)
    postorder(root.right, result)
    result.append(root.data)`,
      Java: `static void postorder(Node root) {
    if (root == null) return;

    postorder(root.left);
    postorder(root.right);
    System.out.print(root.data + " ");
}`,
      C: `void postorder(struct Node* root) {
    if (root == NULL) return;

    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}`,
      "C++": `void postorder(Node* root) {
    if (root == nullptr) return;

    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}`,
    },
  },

  graph: {
    "Build Graph": {
      Python: `from collections import defaultdict

def build_graph(edges):
    graph = defaultdict(list)

    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)

    return graph`,
      Java: `import java.util.*;

class Graph {
    static Map<String, List<String>> buildGraph(String[][] edges) {
        Map<String, List<String>> graph = new HashMap<>();

        for (String[] edge : edges) {
            String u = edge[0];
            String v = edge[1];

            graph.putIfAbsent(u, new ArrayList<>());
            graph.putIfAbsent(v, new ArrayList<>());

            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        return graph;
    }
}`,
      C: `// For simple graph in C, use adjacency matrix.
void addEdge(int graph[100][100], int u, int v) {
    graph[u][v] = 1;
    graph[v][u] = 1;
}`,
      "C++": `unordered_map<string, vector<string>> buildGraph(vector<pair<string, string>>& edges) {
    unordered_map<string, vector<string>> graph;

    for (auto [u, v] : edges) {
        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    return graph;
}`,
    },
    BFS: {
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

static List<String> bfs(Map<String, List<String>> graph, String start) {
    Set<String> visited = new HashSet<>();
    Queue<String> queue = new LinkedList<>();
    List<String> order = new ArrayList<>();

    visited.add(start);
    queue.add(start);

    while (!queue.isEmpty()) {
        String node = queue.remove();
        order.add(node);

        for (String neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.add(neighbor);
            }
        }
    }

    return order;
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
      "C++": `vector<string> bfs(unordered_map<string, vector<string>>& graph, string start) {
    unordered_set<string> visited;
    queue<string> q;
    vector<string> order;

    visited.insert(start);
    q.push(start);

    while (!q.empty()) {
        string node = q.front();
        q.pop();
        order.push_back(node);

        for (string neighbor : graph[node]) {
            if (!visited.count(neighbor)) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }

    return order;
}`,
    },
    DFS: {
      Python: `def dfs(graph, start):
    visited = set()
    order = []

    def go(node):
        if node in visited:
            return

        visited.add(node)
        order.append(node)

        for neighbor in graph[node]:
            go(neighbor)

    go(start)
    return order`,
      Java: `import java.util.*;

static void dfsHelper(Map<String, List<String>> graph, String node, Set<String> visited, List<String> order) {
    if (visited.contains(node)) return;

    visited.add(node);
    order.add(node);

    for (String neighbor : graph.getOrDefault(node, new ArrayList<>())) {
        dfsHelper(graph, neighbor, visited, order);
    }
}

static List<String> dfs(Map<String, List<String>> graph, String start) {
    Set<String> visited = new HashSet<>();
    List<String> order = new ArrayList<>();

    dfsHelper(graph, start, visited, order);

    return order;
}`,
      C: `void dfs(int graph[100][100], int n, int node, int visited[]) {
    visited[node] = 1;
    printf("%d ", node);

    for (int nei = 0; nei < n; nei++) {
        if (graph[node][nei] && !visited[nei]) {
            dfs(graph, n, nei, visited);
        }
    }
}`,
      "C++": `void dfsHelper(unordered_map<string, vector<string>>& graph, string node, unordered_set<string>& visited, vector<string>& order) {
    if (visited.count(node)) return;

    visited.insert(node);
    order.push_back(node);

    for (string neighbor : graph[node]) {
        dfsHelper(graph, neighbor, visited, order);
    }
}

vector<string> dfs(unordered_map<string, vector<string>>& graph, string start) {
    unordered_set<string> visited;
    vector<string> order;

    dfsHelper(graph, start, visited, order);

    return order;
}`,
    },
  },
};


function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <button onClick={() => setPage("home")} className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 font-black text-slate-950">DSA</div>
            <div className="text-left">
              <h1 className="text-lg font-black">DSA Visualizer</h1>
              <p className="text-xs text-slate-400">Visual learning with theory + code</p>
            </div>
          </button>
          <button onClick={() => setPage("home")} className="ml-auto rounded-xl bg-white/10 px-4 py-2 font-semibold hover:bg-white/15">Home</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 lg:grid-cols-[280px_1fr]">
        <aside className="hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 lg:block">
          <Nav active={page === "home"} onClick={() => setPage("home")} icon="🏠" label="Home" />
          <p className="px-3 py-3 text-xs uppercase tracking-widest text-slate-500">Topics</p>
          {topics.map((topic) => (
            <Nav key={topic.id} active={page === topic.id} onClick={() => setPage(topic.id)} icon={topic.icon} label={topic.title} />
          ))}
        </aside>

        <main>
          {page === "home" && <Home setPage={setPage} />}
          {page === "sorting" && <SortingPage />}
          {page === "searching" && <SearchingPage />}
          {page === "stack" && <LinearPage id="stack" />}
          {page === "queue" && <LinearPage id="queue" />}
          {page === "linked" && <ListPage id="linked" />}
          {page === "doubly" && <ListPage id="doubly" doubly />}
          {page === "twoPointers" && <TwoPointerPage />}
          {page === "sliding" && <SlidingPage />}
          {page === "tree" && <TreePage />}
          {page === "graph" && <GraphPage />}
        </main>
      </div>
    </div>
  );
}

function Nav({ active, icon, label, onClick }) {
  return (
    <button onClick={onClick} className={`mb-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${active ? "bg-cyan-400 font-bold text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function Home({ setPage }) {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-500/20 p-8">
        <p className="font-bold text-cyan-300">Final Basic DSA Visualizer</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Learn DSA topics visually with operation-wise theory, complexity, and 4-language code.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Built for beginners and GitHub showcase: simple, clean, informative, and visual.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => (
          <button key={topic.id} onClick={() => setPage(topic.id)} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:-translate-y-1 hover:border-cyan-400">
            <div className="text-4xl">{topic.icon}</div>
            <h2 className="mt-4 text-2xl font-black">{topic.title}</h2>
            <p className="mt-2 min-h-[48px] text-slate-400">{topic.desc}</p>
            <p className="mt-4 font-bold text-cyan-300 group-hover:text-cyan-200">Open topic →</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function TopicHeader({ id, selected, setSelected }) {
  const topic = data[id];
  const ops = Object.keys(topic.operations);
  const info = topic.operations[selected];

  return (
    <>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <p className="font-bold text-cyan-300">DSA Topic</p>
        <h1 className="mt-2 text-4xl font-black">{topic.title}</h1>
        <p className="mt-3 max-w-4xl leading-7 text-slate-300">{topic.intro}</p>
        <p className="mt-2 text-sm text-slate-400">Real life: {topic.real}</p>
      </div>

      <div className="flex gap-2 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.04] p-2">
        {ops.map((op) => (
          <button key={op} onClick={() => setSelected(op)} className={`whitespace-nowrap rounded-2xl px-4 py-3 text-sm font-bold ${selected === op ? "bg-cyan-400 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"}`}>
            {op}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title={`${selected} Explanation`}>
          <p className="leading-7 text-slate-300">{info.explain}</p>
        </Card>
        <Card title="Complexity">
          <ComplexityTable complexity={info.complexity} />
        </Card>
      </div>
    </>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <h2 className="mb-4 text-xl font-black">{title}</h2>
      {children}
    </section>
  );
}

function ComplexityTable({ complexity }) {
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

function getSnippet(topicId, op) {
  return (code[topicId]?.[op] || extraCode[topicId]?.[op] || makeSimpleCode(topicId, op));
}

function CodeBlock({ topicId, op }) {
  const snippets = getSnippet(topicId, op);
  const languages = Object.keys(snippets);
  const [lang, setLang] = useState(languages[0]);

  const activeCode = snippets[lang] || snippets[languages[0]];

  return (
    <Card title={`${op} Code`}>
      <div className="mb-4 flex flex-wrap gap-2">
        {languages.map((language) => (
          <button key={language} onClick={() => setLang(language)} className={`rounded-xl px-4 py-2 text-sm font-bold ${lang === language ? "bg-cyan-400 text-slate-950" : "bg-slate-800 hover:bg-slate-700"}`}>
            {language}
          </button>
        ))}
        <button onClick={() => navigator.clipboard.writeText(activeCode)} className="ml-auto rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-slate-950">Copy</button>
      </div>
      <pre className="max-h-[430px] overflow-auto rounded-2xl bg-slate-950 p-5 text-sm leading-6 text-slate-200">
        <code>{activeCode}</code>
      </pre>
    </Card>
  );
}

function parseNums(text) {
  const nums = text.split(",").map((x) => Number(x.trim())).filter(Number.isFinite);
  return nums.length ? nums.slice(0, 14) : [30, 10, 50, 20, 40];
}

function range(a, b) {
  return Array.from({ length: Math.max(0, b - a) }, (_, i) => a + i);
}

function SortingPage() {
  const [op, setOp] = useState("Bubble Sort");
  const [input, setInput] = useState("30, 10, 50, 20, 40");
  const [array, setArray] = useState([30, 10, 50, 20, 40]);
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = steps[step];
  const display = current?.array || array;
  const max = Math.max(...display, 1);

  function start() {
    const nums = parseNums(input);
    setArray(nums);
    setSteps(makeSortSteps(nums, op));
    setStep(0);
    setPlaying(true);
  }

  useAutoPlay(playing, setPlaying, step, setStep, steps.length);

  return (
    <section className="space-y-5">
      <TopicHeader id="sorting" selected={op} setSelected={(v) => { setOp(v); setSteps([]); setStep(0); setPlaying(false); }} />
      <Card title="Visualizer">
        <div className="mb-4 flex flex-col gap-3 md:flex-row">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={start} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Start</button>
          <button onClick={() => { const r = Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10); setInput(r.join(", ")); setArray(r); setSteps([]); }} className="rounded-xl bg-purple-500 px-5 py-3 font-bold">Random</button>
        </div>
        <div className="flex h-72 items-end gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-4">
          {display.map((value, i) => (
            <div key={`${value}-${i}`} className="flex min-w-[48px] flex-1 flex-col items-center">
              <div className={`w-full rounded-t-xl transition-all ${current?.sorted?.includes(i) ? "bg-green-400" : current?.swap?.includes(i) ? "bg-red-400" : current?.compare?.includes(i) ? "bg-yellow-400" : current?.active?.includes(i) ? "bg-purple-400" : "bg-cyan-400"}`} style={{ height: `${Math.max((value / max) * 220, 24)}px` }} />
              <span className="mt-2 text-sm">{value}</span>
            </div>
          ))}
        </div>
        <Controls message={current?.message || "Click Start to visualize"} playing={playing} setPlaying={setPlaying} steps={steps} step={step} setStep={setStep} />
      </Card>
      <CodeBlock topicId="sorting" op={op} />
    </section>
  );
}

function makeSortSteps(input, op) {
  if (op === "Selection Sort") return selectionSteps(input);
  if (op === "Insertion Sort") return insertionSteps(input);
  return bubbleSteps(input);
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

function SearchingPage() {
  const [op, setOp] = useState("Linear Search");
  const [input, setInput] = useState("10, 25, 4, 18, 32, 7, 40");
  const [target, setTarget] = useState("18");
  const [steps, setSteps] = useState([]);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = steps[step];
  const display = current?.array || parseNums(input);

  function start() {
    setSteps(makeSearchSteps(parseNums(input), Number(target), op));
    setStep(0);
    setPlaying(true);
  }

  useAutoPlay(playing, setPlaying, step, setStep, steps.length);

  return (
    <section className="space-y-5">
      <TopicHeader id="searching" selected={op} setSelected={(v) => { setOp(v); setSteps([]); setStep(0); setPlaying(false); }} />
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
      <CodeBlock topicId="searching" op={op} />
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

function LinearPage({ id }) {
  const ops = Object.keys(data[id].operations);
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
      <TopicHeader id={id} selected={op} setSelected={setOp} />
      <Card title="Visualizer">
        <div className="mb-5 flex flex-wrap gap-3">
          <input value={value} onChange={(e) => setValue(e.target.value)} className="w-32 rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          <button onClick={action} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
          <button onClick={() => { setItems([]); setMessage("Cleared."); }} className="rounded-xl bg-red-500 px-5 py-3 font-bold">Clear</button>
        </div>
        <p className="mb-4 text-cyan-300">{message}</p>
        {id === "stack" ? <StackVisual items={items} /> : <QueueVisual items={items} />}
      </Card>
      <CodeBlock topicId={id} op={op} />
    </section>
  );
}

function StackVisual({ items }) {
  return <div className="flex min-h-[320px] flex-col-reverse items-center justify-start gap-3 rounded-2xl border border-white/10 bg-slate-950 p-5">{items.map((item, i) => <div key={`${item}-${i}`} className={`w-64 rounded-2xl p-4 text-center font-bold ${i === items.length - 1 ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}>{item} {i === items.length - 1 ? "← TOP" : ""}</div>)}</div>;
}

function QueueVisual({ items }) {
  return <div className="flex min-h-[180px] items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">{items.map((item, i) => <div key={`${item}-${i}`} className={`min-w-[110px] rounded-2xl p-4 text-center font-bold ${i === 0 ? "bg-green-400 text-slate-950" : i === items.length - 1 ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}>{i === 0 && <div className="text-xs">FRONT</div>}{item}{i === items.length - 1 && <div className="text-xs">REAR</div>}</div>)}</div>;
}

function ListPage({ id, doubly = false }) {
  const ops = Object.keys(data[id].operations);
  const [op, setOp] = useState(ops[0]);
  const [nodes, setNodes] = useState([]);
  const [value, setValue] = useState("10");
  const [found, setFound] = useState(null);
  const [message, setMessage] = useState("List starts empty. Insert nodes to begin.");

  function run() {
    const v = Number(value);
    if (op === "Insert Head") {
      setNodes((n) => [v, ...n]);
      setMessage(`${v} inserted at head.`);
      setFound(null);
    } else if (op === "Insert Tail") {
      setNodes((n) => [...n, v]);
      setMessage(`${v} inserted at tail.`);
      setFound(null);
    } else if (op === "Delete") {
      setNodes((n) => {
        const idx = n.findIndex((x) => x === v);
        if (idx < 0) {
          setMessage(`${v} not found.`);
          return n;
        }
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
      <TopicHeader id={id} selected={op} setSelected={setOp} />
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
      <CodeBlock topicId={id} op={op} />
    </section>
  );
}

function TwoPointerPage() {
  const [op, setOp] = useState("Pair Sum");
  const [input, setInput] = useState("1, 2, 4, 7, 9, 11");
  const [target, setTarget] = useState("13");
  const [step, setStep] = useState(0);
  const nums = parseNums(input).sort((a, b) => a - b);
  const steps = op === "Pair Sum" ? twoSteps(nums, Number(target)) : reverseSteps(nums);
  const current = steps[step] || steps[0];

  return (
    <section className="space-y-5">
      <TopicHeader id="twoPointers" selected={op} setSelected={(v) => { setOp(v); setStep(0); }} />
      <Card title="Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_120px]">
          <input value={input} onChange={(e) => { setInput(e.target.value); setStep(0); }} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />
          {op === "Pair Sum" && <input value={target} onChange={(e) => { setTarget(e.target.value); setStep(0); }} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" />}
        </div>
        <PointerRow nums={nums} current={current} />
        <StepButtons current={current} step={step} setStep={setStep} total={steps.length} />
      </Card>
      <CodeBlock topicId="twoPointers" op={op} />
    </section>
  );
}

function twoSteps(arr, target) {
  let l = 0, r = arr.length - 1, steps = [];
  while (l < r) {
    const sum = arr[l] + arr[r];
    steps.push({ left: l, right: r, message: `Check ${arr[l]} + ${arr[r]} = ${sum}` });
    if (sum === target) return [...steps, { left: l, right: r, message: "Pair found!" }];
    if (sum < target) l++;
    else r--;
  }
  return steps.length ? [...steps, { left: l, right: r, message: "No pair found" }] : [{ message: "Enter numbers" }];
}

function reverseSteps(arr) {
  const steps = [];
  let l = 0, r = arr.length - 1;
  while (l < r) {
    steps.push({ left: l, right: r, message: `Swap ${arr[l]} and ${arr[r]}` });
    l++;
    r--;
  }
  return steps.length ? steps : [{ message: "Enter numbers" }];
}

function PointerRow({ nums, current }) {
  return <div className="flex items-center gap-3 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">{nums.map((v, i) => <div key={`${v}-${i}`} className={`min-w-[80px] rounded-2xl p-4 text-center font-bold ${current?.left === i || current?.right === i ? "bg-cyan-400 text-slate-950" : "bg-slate-800"}`}><div className="text-xs opacity-70">Index {i}</div>{v}{current?.left === i && <div className="text-xs">LEFT</div>}{current?.right === i && <div className="text-xs">RIGHT</div>}</div>)}</div>;
}

function SlidingPage() {
  const [op, setOp] = useState("Fixed Window");
  const [input, setInput] = useState("2, 1, 5, 1, 3, 2");
  const [k, setK] = useState("3");
  const [step, setStep] = useState(0);
  const nums = parseNums(input);
  const steps = slidingSteps(nums, Number(k), op);
  const current = steps[step] || steps[0];

  return (
    <section className="space-y-5">
      <TopicHeader id="sliding" selected={op} setSelected={(v) => { setOp(v); setStep(0); }} />
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
      <CodeBlock topicId="sliding" op={op} />
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
      if (sum > k) {
        sum -= arr[left];
        left++;
        steps.push({ active: range(left, right + 1), message: `Shrink left, sum = ${sum}` });
      }
    }
  }
  return steps.length ? steps : [{ message: "Enter numbers", active: [] }];
}

function TreePage() {
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
    } else if (!root) {
      setMessage("Build tree first.");
    } else if (op === "Insert") {
      setRoot(insertBST(clone(root), v));
      setActive([v]);
      setMessage(`${v} inserted into BST.`);
    } else if (op === "Delete") {
      setRoot(deleteBST(clone(root), v));
      setActive([]);
      setMessage(`${v} deleted if it existed.`);
    } else if (op === "Search") {
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
      <TopicHeader id="tree" selected={op} setSelected={setOp} />
      <Card title="Tree Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_120px_auto]">
          <input value={input} onChange={(e) => setInput(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" placeholder="Build values: 50, 30, 70" />
          <input value={value} onChange={(e) => setValue(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" placeholder="Value" />
          <button onClick={run} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
        </div>
        <p className="mb-4 break-words text-cyan-300">{message}</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-6">
          {root ? <TreeNode node={root} active={active} /> : <Empty label="Tree is empty. Build tree first." />}
        </div>
      </Card>
      <CodeBlock topicId="tree" op={op} />
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


function getGraphLayout(nodes) {
  const width = 760;
  const height = 340;
  const centerX = width / 2;
  const centerY = height / 2;

  // Ellipse layout keeps every node inside the graph box.
  // Old circular radius pushed top/bottom nodes outside the SVG.
  const radiusX = Math.min(270, width / 2 - 90);
  const radiusY = Math.min(115, height / 2 - 55);

  return nodes.reduce((positions, node, index) => {
    const angle = (2 * Math.PI * index) / Math.max(nodes.length, 1) - Math.PI / 2;
    positions[node] = {
      x: centerX + radiusX * Math.cos(angle),
      y: centerY + radiusY * Math.sin(angle),
    };
    return positions;
  }, {});
}

function GraphPage() {
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
    } else if (!built) {
      setMessage("Build graph first.");
    } else if (op === "BFS") {
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
      <TopicHeader id="graph" selected={op} setSelected={setOp} />
      <Card title="Graph Visualizer">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_100px_auto]">
          <input value={edgesText} onChange={(e) => setEdgesText(e.target.value)} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" placeholder="A-B, A-C, B-D" />
          <input value={start} onChange={(e) => setStart(e.target.value.toUpperCase())} className="rounded-xl border border-white/10 bg-slate-950 p-3 outline-none focus:border-cyan-400" placeholder="Start" />
          <button onClick={run} className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">Run {op}</button>
        </div>
        <p className="mb-4 break-words text-cyan-300">{message}</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-5">
          {currentGraph.nodes.length ? (
            <GraphCanvas graphData={currentGraph} visited={visited} />
          ) : (
            <Empty label="Graph is empty. Build graph first." />
          )}
        </div>
      </Card>
      <CodeBlock topicId="graph" op={op} />
    </section>
  );
}


function GraphCanvas({ graphData, visited }) {
  const positions = getGraphLayout(graphData.nodes);
  const width = 760;
  const height = 340;

  return (
    <div className="min-w-[760px]">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[340px] w-full">
        {graphData.edges.map(([a, b]) => {
          const from = positions[a];
          const to = positions[b];

          if (!from || !to) return null;

          return (
            <line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgb(51 65 85)"
              strokeWidth="3"
            />
          );
        })}

        {graphData.nodes.map((node) => {
          const pos = positions[node];
          const active = visited.includes(node);

          return (
            <g key={node}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="30"
                fill={active ? "rgb(34 211 238)" : "rgb(30 41 59)"}
                stroke={active ? "rgb(103 232 249)" : "rgb(71 85 105)"}
                strokeWidth="3"
              />
              <text
                x={pos.x}
                y={pos.y + 6}
                textAnchor="middle"
                fontSize="18"
                fontWeight="800"
                fill={active ? "rgb(2 6 23)" : "white"}
              >
                {node}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap gap-2">
        {graphData.edges.map(([a, b]) => (
          <span key={`${a}-${b}`} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
            {a} — {b}
          </span>
        ))}
      </div>
    </div>
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

function StepButtons({ current, step, setStep, total }) {
  return <><p className="mt-4 text-cyan-300">{current?.message || "No steps"}</p><div className="mt-4 flex gap-3"><button onClick={() => setStep((s) => Math.max(0, s - 1))} className="rounded-xl bg-slate-800 px-4 py-2 font-bold">Previous</button><button onClick={() => setStep((s) => Math.min(total - 1, s + 1))} className="rounded-xl bg-slate-800 px-4 py-2 font-bold">Next</button></div></>;
}

function Controls({ message, playing, setPlaying, steps, step, setStep }) {
  return <><p className="mt-4 text-cyan-300">{message}</p><p className="mt-1 text-sm text-slate-400">Step: {steps.length ? step + 1 : 0} / {steps.length}</p><div className="mt-4 flex flex-wrap gap-3"><button disabled={!steps.length} onClick={() => setPlaying(!playing)} className="rounded-xl bg-slate-800 px-4 py-2 font-bold disabled:opacity-50">{playing ? "Pause" : "Play"}</button><button disabled={!steps.length} onClick={() => { setPlaying(false); setStep((s) => Math.max(0, s - 1)); }} className="rounded-xl bg-slate-800 px-4 py-2 font-bold disabled:opacity-50">Previous</button><button disabled={!steps.length} onClick={() => { setPlaying(false); setStep((s) => Math.min(steps.length - 1, s + 1)); }} className="rounded-xl bg-slate-800 px-4 py-2 font-bold disabled:opacity-50">Next</button></div></>;
}

function useAutoPlay(playing, setPlaying, step, setStep, length) {
  useEffect(() => {
    if (!playing) return;
    if (step >= length - 1) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStep((s) => s + 1), 650);
    return () => clearTimeout(timer);
  }, [playing, step, length, setPlaying, setStep]);
}

function Empty({ label }) {
  return <div className="grid min-h-[160px] place-items-center rounded-2xl border border-dashed border-white/10 text-slate-400">{label}</div>;
}

export default App;
