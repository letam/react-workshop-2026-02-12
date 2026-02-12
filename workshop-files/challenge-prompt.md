# 🚀 Rapid Prototyping Challenge

## Your Mission (30 minutes)

Build a **Mood Tracker** app that lets users log their daily mood and see a history of entries.

---

## Requirements

### Must Have (MVP)
- [ ] Display a list of mood entries (use mock data to start)
- [ ] Add a new mood entry with:
  - Mood selection (Happy, Neutral, Sad, Stressed, Excited)
  - Optional note field
  - Automatic timestamp
- [ ] Show entries in reverse chronological order (newest first)

### Nice to Have (if time permits)
- [ ] Delete entries
- [ ] Filter by mood type
- [ ] Simple stats (e.g., "You felt happy 3 times this week")
- [ ] Emoji icons for each mood

---

## Starter Code Structure

```
App
├── Header (title + tagline)
├── MoodInput (form to add new entry)
│   ├── MoodSelector (buttons/dropdown for mood)
│   └── NoteInput (optional text field)
├── MoodList (displays all entries)
│   └── MoodEntry (single entry card)
└── Stats (optional: mood summary)
```

---

## Mock Data to Start

```javascript
const MOCK_MOODS = [
  { id: 1, mood: "happy", note: "Great day at work!", date: "2024-01-15T10:30:00" },
  { id: 2, mood: "stressed", note: "Deadline approaching", date: "2024-01-14T18:00:00" },
  { id: 3, mood: "neutral", note: "", date: "2024-01-14T09:00:00" },
];

const MOOD_OPTIONS = [
  { value: "happy", label: "😊 Happy", color: "bg-green-500" },
  { value: "neutral", label: "😐 Neutral", color: "bg-gray-500" },
  { value: "sad", label: "😢 Sad", color: "bg-blue-500" },
  { value: "stressed", label: "😰 Stressed", color: "bg-orange-500" },
  { value: "excited", label: "🎉 Excited", color: "bg-purple-500" },
];
```

---

## Tips for Speed

1. **Start with the skeleton** - Create empty components first, then fill them in
2. **Use the starter template** - Copy the Button, Input, and Card components
3. **Hardcode first** - Display mock data before adding interactivity
4. **Simple state** - `useState` for the mood array, one for the form inputs
5. **Don't style yet** - Get it working, then polish if time allows

---

## Judging Criteria

| Criteria | Points |
|----------|--------|
| **Working MVP** (can add and view moods) | 40% |
| **Code organization** (component structure) | 25% |
| **User experience** (intuitive, responsive) | 20% |
| **Creativity** (unique touches, nice-to-haves) | 15% |

---

## Time Checkpoints

- **0-5 min**: Plan components, set up structure
- **5-15 min**: Build MoodList with mock data displayed
- **15-25 min**: Add MoodInput form and state management
- **25-30 min**: Polish, add nice-to-haves, prepare demo

---

## Need Help?

- **Stuck on state?** → Lift it to the parent (App component)
- **Stuck on UI?** → Use Tailwind utility classes from the starter
- **Stuck on dates?** → `new Date().toISOString()` and `new Date(dateString).toLocaleDateString()`

---

**Remember: A working prototype beats a perfect concept. Ship something!** 🚢
