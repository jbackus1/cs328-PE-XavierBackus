# Input

The user provides input by typing a task description into the text field rendered in App.js. Each keystroke updates a piece of state (text) via the useState hook. The task is submitted either by clicking the "Add Task" button or by pressing the Enter key while the input is focused, both of which call the same addTask handler.

# Process

addTask trims the input and ignores it if it is empty or whitespace-only, preventing blank tasks from being added. Otherwise, it creates a new task object with a unique id (Date.now()) and appends it to the todos array using setTodos([...todos, newTask]), never mutating the array directly. App passes todos down to TodoList, which uses .map() to render a TodoItem for each task. Clicking a task's "Delete" button calls deleteTask, which filters that task out of todos by id.



# Output

The output is the live, re-rendered list of task rows displayed inside the styled card layout. Each row shows the task text alongside a red "Delete" button, and the list automatically grows or shrinks as tasks are added or removed, with the input field clearing after each successful add.
