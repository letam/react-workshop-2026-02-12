import { Check, Clock, Plus, Search, Trash2, Zap } from "lucide-react";
import { useState } from "react";

// MOCK DATA - Replace with real data later
const MOCK_ITEMS = [
	{ id: 1, title: "Learn React hooks", completed: true },
	{ id: 2, title: "Build prototype", completed: false },
	{ id: 3, title: "Present at hackathon", completed: false },
];

// Button component with variants
function Button({ children, variant = "primary", onClick, className = "" }) {
	const base =
		"px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2";
	const variants = {
		primary: "bg-cyan-500 hover:bg-cyan-600 text-slate-900",
		secondary: "bg-slate-700 hover:bg-slate-600 text-white",
		danger: "bg-rose-500 hover:bg-rose-600 text-white",
	};
	return (
		<button
			className={`${base} ${variants[variant]} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

// Input component
function Input({ placeholder, value, onChange }) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="w-full bg-slate-800 border border-slate-600 rounded-lg py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
		/>
	);
}

// Card component
function Card({ children, className = "" }) {
	return (
		<div
			className={`bg-slate-800 rounded-xl p-4 border border-slate-700 ${className}`}
		>
			{children}
		</div>
	);
}

// Todo List Example
function TodoList() {
	const [items, setItems] = useState(MOCK_ITEMS);
	const [newItem, setNewItem] = useState("");

	const addItem = () => {
		if (!newItem.trim()) return;
		setItems([...items, { id: Date.now(), title: newItem, completed: false }]);
		setNewItem("");
	};

	const toggleItem = (id) => {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item,
			),
		);
	};

	const deleteItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<Card className="w-full max-w-md">
			<h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
				<Zap className="w-5 h-5 text-cyan-400" />
				Quick Tasks
			</h2>

			<div className="flex gap-2 mb-4">
				<div className="flex-1">
					<Input
						placeholder="Add a task..."
						value={newItem}
						onChange={setNewItem}
					/>
				</div>
				<Button onClick={addItem}>
					<Plus className="w-4 h-4" />
				</Button>
			</div>

			<div className="space-y-2">
				{items.map((item) => (
					<div
						key={item.id}
						className={`flex items-center gap-3 p-3 rounded-lg ${item.completed ? "bg-slate-700/50" : "bg-slate-700"}`}
					>
						<button
							onClick={() => toggleItem(item.id)}
							className={`w-5 h-5 rounded border-2 flex items-center justify-center ${item.completed ? "bg-cyan-500 border-cyan-500" : "border-slate-500"}`}
						>
							{item.completed && <Check className="w-3 h-3 text-slate-900" />}
						</button>
						<span
							className={`flex-1 ${item.completed ? "text-slate-400 line-through" : "text-white"}`}
						>
							{item.title}
						</span>
						<button
							onClick={() => deleteItem(item.id)}
							className="p-1 hover:bg-slate-600 rounded"
						>
							<Trash2 className="w-4 h-4 text-slate-400" />
						</button>
					</div>
				))}
			</div>

			<div className="mt-4 pt-4 border-t border-slate-700 flex justify-between text-sm text-slate-400">
				<span>{items.filter((i) => !i.completed).length} remaining</span>
				<span>{items.filter((i) => i.completed).length} completed</span>
			</div>
		</Card>
	);
}

// Main App
export default function App() {
	return (
		<div className="min-h-screen bg-slate-900 p-8">
			<header className="max-w-4xl mx-auto mb-8">
				<div className="flex items-center gap-3 mb-2">
					<div className="w-2 h-8 bg-cyan-500 rounded-full" />
					<h1 className="text-3xl font-bold text-white">Rapid Prototype</h1>
				</div>
				<p className="text-slate-400 ml-5">Start building here</p>
			</header>

			<main className="max-w-4xl mx-auto flex flex-col items-center gap-6">
				<TodoList />
				<p className="text-slate-500 text-sm">
					Modify the components above to build your prototype!
				</p>
			</main>
		</div>
	);
}
