# Install Tailwind CSS via yarn [here](https://tailwindcss.com/docs/installation/using-vite)

# What is Typescript?

TypeScript is a superset of JavaScript that adds static typing, helping catch errors at compile time.

# React Router [here](https://reactrouter.com/start/declarative/installation)
React Router is a standard library for routing in React applications. It enables navigation between different components or pages without reloading the entire page, creating a single-page application (SPA) experience.

# How to use React Router

```tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```


# What is Context API ? 
The Context API in React allows you to share state/data globally across components without prop drilling.

# How to use Context API ?


- Create a context.
- Provide a value using a Provider.
- Consume the context in child components.

```tsx
import React, { createContext, useContext, useState } from "react";

// 1. Create context
const ThemeContext = createContext({ theme: "light", toggle: () => {} });

// 2. Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme(t => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consumer
function ThemeButton() {
  const { theme, toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Current theme: {theme}</button>;
}
```

# Forms

Handling forms in React involves managing input state and handling submit events.
```tsx
import { useState } from "react";
function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```