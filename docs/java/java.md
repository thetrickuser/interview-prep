---
sidebar_position: 1
---

# Java Interview Preparation: Sample Questions and Answers

This document provides sample questions and answers covering various Java topics, useful for interview preparation.

## Basics of Java

**Q1: What is Java?**  
A: Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). It is platform-independent due to the JVM (Java Virtual Machine).

**Q2: Explain the difference between JDK, JRE, and JVM.**  
A: JDK (Java Development Kit) includes tools for developing Java applications. JRE (Java Runtime Environment) provides the runtime environment to run Java programs. JVM (Java Virtual Machine) is the engine that executes Java bytecode.

**Q3: What are the main features of Java?**  
A: Key features include platform independence, object-oriented, secure, robust, multithreaded, and garbage collection.

## Object-Oriented Programming (OOP)

**Q1: What are the four pillars of OOP in Java?**  
A: Encapsulation, Inheritance, Polymorphism, and Abstraction.

**Q2: Explain inheritance in Java.**  
A: Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). It promotes code reusability. Example: `class Dog extends Animal`.

**Q3: What is polymorphism?**  
A: Polymorphism means "many forms." In Java, it allows methods to behave differently based on the object. Achieved via method overriding and overloading.

## Data Types and Operators

**Q1: What are primitive data types in Java?**  
A: byte, short, int, long, float, double, char, boolean.

**Q2: Explain the difference between == and equals() in Java.**  
A: == compares object references (memory locations). equals() compares the content of objects (can be overridden for custom comparison).

**Q3: What is type casting?**  
A: Type casting converts one data type to another. Implicit (widening) happens automatically; explicit (narrowing) requires manual casting, e.g., `int x = (int) 3.14;`.

## Collections Framework

**Q1: What is the Collections Framework in Java?**  
A: It provides interfaces and classes for storing and manipulating groups of objects, such as List, Set, Map, and Queue.

**Q2: Difference between ArrayList and LinkedList.**  
A: ArrayList is backed by an array, good for random access. LinkedList is backed by a doubly-linked list, efficient for insertions/deletions.

**Q3: Explain HashMap.**  
A: HashMap is a Map implementation that stores key-value pairs. It uses hashing for fast retrieval. Keys must be unique; allows null keys and values.

## Exception Handling

**Q1: What is an exception in Java?**  
A: An exception is an event that occurs during program execution that disrupts the normal flow, like divide-by-zero errors.

**Q2: Explain try-catch-finally.**  
A: try block contains code that might throw an exception. catch block handles the exception. finally block executes regardless, often for cleanup.

**Q3: Difference between checked and unchecked exceptions.**  
A: Checked exceptions are checked at compile-time (e.g., IOException). Unchecked exceptions occur at runtime (e.g., NullPointerException).

## Multithreading

**Q1: What is multithreading in Java?**  
A: Multithreading allows concurrent execution of multiple threads within a program, improving performance for tasks like I/O operations.

**Q2: How to create a thread in Java?**  
A: By extending Thread class or implementing Runnable interface. Example: `class MyThread extends Thread { public void run() { ... } }`.

**Q3: Explain synchronization.**  
A: Synchronization ensures that only one thread accesses a shared resource at a time, preventing race conditions. Use synchronized keyword on methods or blocks.

## Java 8 Features

**Q1: What is a Lambda Expression?**  
A: Lambda expressions enable functional programming by allowing concise representation of anonymous functions, e.g., `(a, b) -> a + b`.

**Q2: Explain Streams API.**  
A: Streams provide a way to process collections declaratively. Operations include filter, map, reduce. Example: `list.stream().filter(x -> x > 10).collect(Collectors.toList())`.

**Q3: What is Optional?**  
A: Optional is a container object that may or may not contain a non-null value, helping avoid NullPointerException. Methods include isPresent(), orElse().

## Miscellaneous

**Q1: What is JDBC?**  
A: JDBC (Java Database Connectivity) is an API for connecting and executing queries on databases using Java.

**Q2: Explain garbage collection.**  
A: Garbage collection automatically reclaims memory occupied by objects no longer in use, managed by JVM to prevent memory leaks.

**Q3: What is a JAR file?**  
A: JAR (Java Archive) is a package file format that aggregates many Java class files and associated metadata into one file for distribution.
