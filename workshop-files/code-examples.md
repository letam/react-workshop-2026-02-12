# React Rapid Prototyping - Code Examples

Quick copy-paste patterns for hackathon speed.

---

## 1. State Management Patterns

### Basic useState
```jsx
const [items, setItems] = useState([]);
const [inputValue, setInputValue] = useState("");
const [isLoading, setIsLoading] = useState(false);
```

### Adding to an array
```jsx
const addItem = (newItem) => {
  setItems([...items, { id: Date.now(), ...newItem }]);
};
```

### Updating an item in array
```jsx
const updateItem = (id, updates) => {
  setItems(items.map(item => 
    item.id === id ? { ...item, ...updates } : item
  ));
};
```

### Removing from array
```jsx
const removeItem = (id) => {
  setItems(items.filter(item => item.id !== id));
};
```

### Toggle boolean property
```jsx
const toggleComplete = (id) => {
  setItems(items.map(item =>
    item.id === id ? { ...item, completed: !item.completed } : item
  ));
};
```

---

## 2. Form Handling

### Controlled input
```jsx
const [value, setValue] = useState("");

<input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type here..."
/>
```

### Form with multiple fields
```jsx
const [form, setForm] = useState({ name: "", email: "" });

const updateField = (field, value) => {
  setForm({ ...form, [field]: value });
};

<input value={form.name} onChange={(e) => updateField("name", e.target.value)} />
<input value={form.email} onChange={(e) => updateField("email", e.target.value)} />
```

### Submit and clear
```jsx
const handleSubmit = () => {
  if (!form.name) return; // validation
  onSubmit(form);
  setForm({ name: "", email: "" }); // reset
};
```

---

## 3. Conditional Rendering

### Show/hide
```jsx
{isVisible && <Component />}
```

### Ternary
```jsx
{isLoading ? <Spinner /> : <Content />}
```

### Multiple conditions
```jsx
{status === "loading" && <Spinner />}
{status === "error" && <Error />}
{status === "success" && <Content />}
```

### Empty state
```jsx
{items.length === 0 ? (
  <p>No items yet</p>
) : (
  items.map(item => <Item key={item.id} {...item} />)
)}
```

---

## 4. List Rendering

### Basic map
```jsx
{items.map(item => (
  <div key={item.id}>{item.title}</div>
))}
```

### With index
```jsx
{items.map((item, index) => (
  <div key={item.id}>#{index + 1}: {item.title}</div>
))}
```

### Filtered list
```jsx
{items
  .filter(item => item.category === selectedCategory)
  .map(item => <Item key={item.id} {...item} />)
}
```

### Sorted list
```jsx
{[...items]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map(item => <Item key={item.id} {...item} />)
}
```

---

## 5. Quick Tailwind Patterns

### Flex layouts
```jsx
// Horizontal with gap
<div className="flex gap-4">

// Vertical stack
<div className="flex flex-col gap-2">

// Space between
<div className="flex justify-between items-center">

// Centered
<div className="flex items-center justify-center">
```

### Card styles
```jsx
<div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
```

### Button styles
```jsx
// Primary
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">

// Secondary
<button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg">

// Ghost
<button className="hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-lg">
```

### Input styles
```jsx
<input className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-blue-500 focus:outline-none" />
```

---

## 6. Useful Utilities

### Generate unique ID
```jsx
const id = Date.now(); // simple
const id = crypto.randomUUID(); // better
```

### Format date
```jsx
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

const formatTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString();
};

const formatRelative = (dateString) => {
  const diff = Date.now() - new Date(dateString);
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};
```

### Debounce (for search)
```jsx
const [query, setQuery] = useState("");
const [debouncedQuery, setDebouncedQuery] = useState("");

useEffect(() => {
  const timer = setTimeout(() => setDebouncedQuery(query), 300);
  return () => clearTimeout(timer);
}, [query]);
```

---

## 7. Component Structure Template

```jsx
function MyComponent({ propA, propB, onAction }) {
  // 1. State
  const [localState, setLocalState] = useState(initialValue);
  
  // 2. Derived values
  const computed = items.filter(x => x.active);
  
  // 3. Handlers
  const handleClick = () => {
    // do something
    onAction?.(result);
  };
  
  // 4. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

---

## 8. Quick Debugging

```jsx
// Log state changes
useEffect(() => {
  console.log("items changed:", items);
}, [items]);

// Inspect in JSX
<pre>{JSON.stringify(data, null, 2)}</pre>
```

---

**Pro tip:** Keep this file open during the hackathon for quick copy-paste! 📋
