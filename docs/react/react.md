# React Interview Questions and Answers

## 1. What is React?

React is a JavaScript library for building user interfaces, particularly for web applications. It allows developers to create reusable UI components and manage the state of those components efficiently.

## 2. What are React components?

Components are the building blocks of a React application. They are JavaScript functions or classes that accept inputs (props) and return React elements describing what should appear on the screen. Components can be functional or class-based.

## 3. What is JSX?

JSX is a syntax extension for JavaScript used in React. It allows you to write HTML-like code in your JavaScript files, making it easier to describe the structure of the UI. JSX is transpiled to JavaScript by tools like Babel.

## 4. Explain the concept of state in React.

State is an object that holds data that may change over the lifetime of a component. It is managed within the component and can be updated using the `setState` method (in class components) or the `useState` hook (in functional components). Changes to state trigger re-renders.

## 5. What are props in React?

Props (short for properties) are inputs passed to components from their parent components. They are read-only and help in passing data between components. Props make components reusable and customizable.

## 6. What are React Hooks?

Hooks are functions introduced in React 16.8 that allow you to use state and lifecycle features in functional components. Common hooks include `useState`, `useEffect`, `useContext`, and `useReducer`.

## 7. How does the virtual DOM work in React?

The virtual DOM is a lightweight representation of the real DOM. React uses it to optimize updates by comparing the virtual DOM with the real DOM and only updating the parts that have changed, reducing the number of direct manipulations to the DOM.

## 8. What is the difference between class components and functional components?

Class components are ES6 classes that extend `React.Component` and can hold state and lifecycle methods. Functional components are plain JavaScript functions that can use hooks to manage state and side effects. Functional components are simpler and preferred in modern React.

## 9. Explain the useEffect hook.

`useEffect` is a hook that allows you to perform side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM. It runs after every render by default, but you can control it with dependencies.

## 10. What is React Router?

React Router is a library for routing in React applications. It enables navigation between different components or pages without reloading the entire page, providing a single-page application experience.

## 11. How do you handle forms in React?

Forms in React are handled by controlling the input values with state. Use the `useState` hook to manage form data, and handle changes with event handlers like `onChange`. For submission, use `onSubmit` to prevent default behavior and process the data.

## 12. What is the Context API?

The Context API allows you to share state across the component tree without passing props down manually at every level. It consists of `createContext`, `Provider`, and `Consumer` (or `useContext` hook) to manage global state.

## 13. Explain the component lifecycle in class components.

Class components have lifecycle methods like `constructor`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc. These methods allow you to hook into different stages of a component's existence, such as mounting, updating, and unmounting.

## 14. What are controlled and uncontrolled components?

Controlled components have their value controlled by React state, while uncontrolled components store their own state internally (e.g., via refs). Controlled components are preferred for better predictability and testing.

## 15. How do you optimize React performance?

Techniques include using `React.memo` for memoization, avoiding unnecessary re-renders with `useMemo` and `useCallback`, code-splitting with `React.lazy`, and optimizing lists with keys. Profiling with React DevTools can help identify bottlenecks.
