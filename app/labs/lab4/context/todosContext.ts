import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";
export type ContextTodo = { id: string; title: string };
type TodosContextValue = {
  todos: ContextTodo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: ContextTodo) => void;
  deleteTodo: (id: string) => void;
};
const TodosContext = createContext<TodosContextValue | null>(null);
export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ContextTodo[]>([
    { id: "1", title: "Feed Oreo" },
    { id: "2", title: "Finish Lab 4" },
    { id: "3", title: "Call my parents" },
  ]);
  const addTodo = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), title }]);
  };
  const updateTodo = (todo: ContextTodo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}
export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
