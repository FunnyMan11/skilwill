# Todo-List Application - L13 (Optimized with Hooks)

ეს არის ოპტიმიზებული todo-list აპლიკაცია, რომელიც გადაწერილია React Hooks-ების გამოყენებით.

## გამოყენებული Hooks და ოპტიმიზაციები

### 1. **Custom Hook: `useTasks`**
- `useState` - tasks-ის state მენეჯმენტისთვის
- `useCallback` - ყველა task manipulation ფუნქციისთვის
- ცალკე hook-ი business logic-ისთვის

### 2. **useState**
- `inputValue` - input ველის მნიშვნელობისთვის
- `tasks` და `completedTasks` - useTasks hook-ში

### 3. **useCallback**
- ყველა event handler-ისთვის (handleInputChange, handleAddTask, handleKeyPress)
- useTasks hook-ში: addTask, completeTask, moveBackToPending, deleteTask
- Prevents unnecessary re-renders by maintaining function reference stability

### 4. **useMemo**
- `tasksList` - PendingTasksColumn და CompletedTasksColumn-ში
- `taskStats` - სტატისტიკისთვის (მომავალი გამოყენებისთვის)
- Prevents expensive recalculations on every render

### 5. **React.memo**
- ყველა კომპონენტზე: TaskItem, CompletedTaskItem, PendingTasksColumn, CompletedTasksColumn, TaskInput
- Custom comparison functions for optimal re-render control
- Only re-renders when props actually change

### 6. **useRef**
- TaskInput-ში input-ისთვის (focus-ისთვის, თუ საჭიროა)

## კომპონენტების სტრუქტურა

```
L13/
├── src/
│   ├── App.js                    # Main component with hooks
│   ├── App.css                   # Styles
│   ├── index.js                  # Entry point
│   ├── index.css                 # Global styles
│   ├── hooks/
│   │   └── useTasks.js          # Custom hook for task management
│   └── components/
│       ├── TaskInput.js          # Memoized input component
│       ├── TaskItem.js           # Memoized pending task item
│       ├── CompletedTaskItem.js  # Memoized completed task item
│       ├── PendingTasksColumn.js # Memoized pending tasks column
│       └── CompletedTasksColumn.js # Memoized completed tasks column
```

## ოპტიმიზაციის უპირატესობები

1. **მინიმალური Re-renders**: მხოლოდ შეცვლილი კომპონენტები რენდერდება
2. **Stable Function References**: useCallback ინარჩუნებს ფუნქციების reference-ებს
3. **Memoized Computations**: useMemo ამცირებს გამოთვლების რაოდენობას
4. **Custom Comparison**: React.memo-ს custom comparison functions უზრუნველყოფს ზუსტ კონტროლს
5. **Separation of Concerns**: Custom hook გამოყოფს business logic-ს

## გაშვება

```bash
npm install
npm start
```

## Console Logs

კონსოლში ჩანს, რომელი კომპონენტები რენდერდება:
- `[App] Rendering` - App კომპონენტი
- `[PendingTasksColumn] Rendering` - Pending tasks სვეტი
- `[CompletedTasksColumn] Rendering` - Completed tasks სვეტი
- `[TaskItem] Rendering task: ...` - ინდივიდუალური task item
- `[CompletedTaskItem] Rendering task: ...` - ინდივიდუალური completed task item

ეს logs გვეხმარება ოპტიმიზაციის შემოწმებაში - უნდა ჩანდეს მხოლოდ შეცვლილი კომპონენტების რენდერი.
