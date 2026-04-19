---
sidebar_position: 1
---

# Basics of Java

This page acts as an index for core Java topics, with links to each section and a short description for quick navigation.

## Contents

- [Overview](#overview) — A quick introduction to Java, the JVM, and key platform features.
- [Data Types and Operators](#data-types-and-operators) — Java primitive types, reference types, equality, and casting rules.
- [Exception Handling](#exception-handling) — How Java handles errors with try/catch/finally and the difference between checked and unchecked exceptions.
- [Java 8 Features](#java-8-features) — Modern Java concepts such as lambda expressions, streams, and `Optional`.
- [Miscellaneous](#miscellaneous) — Additional Java topics including JDBC, garbage collection, and JAR packaging.

## Overview

**Q1: What is Java?**  
A: Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). It is platform-independent due to the JVM (Java Virtual Machine).

**Q2: Explain the difference between JDK, JRE, and JVM.**  
A: JDK (Java Development Kit) includes tools for developing Java applications. JRE (Java Runtime Environment) provides the runtime environment to run Java programs. JVM (Java Virtual Machine) is the engine that executes Java bytecode.

**Q3: What are the main features of Java?**  
A: Key features include platform independence, object-oriented design, security, robustness, multithreading support, and automatic garbage collection.

## Data Types and Operators

**Q1: What are primitive data types in Java?**  
A: `byte`, `short`, `int`, `long`, `float`, `double`, `char`, and `boolean`.

**Q2: Explain the difference between `==` and `equals()` in Java.**  
A: `==` compares object references (memory locations). `equals()` compares the content of objects and can be overridden for custom comparison.

**Q3: What is type casting?**  
A: Type casting converts one data type to another. Implicit (widening) casting happens automatically; explicit (narrowing) casting requires manual conversion, e.g., `int x = (int) 3.14;`.

## Exception Handling

**Q1: What is an exception in Java?**  
A: An exception is an event that occurs during program execution that disrupts the normal flow, such as divide-by-zero or null pointer issues.

**Q2: Explain try-catch-finally.**  
A: `try` contains code that might throw an exception. `catch` handles the exception. `finally` executes regardless of whether an exception occurred, typically for cleanup. The only time `finally` does not run is when `System.exit()` is called.

**Q3: What is the difference between checked and unchecked exceptions?**  
A: Checked exceptions are validated at compile time (e.g., `IOException`). Unchecked exceptions occur at runtime (e.g., `NullPointerException`).

## Java 8 Features

**Q1: What is a Lambda Expression?**  
A: Lambda expressions enable functional-style programming by allowing concise definitions of anonymous functions, for example `(a, b) -> a + b`.

**Q2: Explain the Streams API.**  
A: Streams provide a declarative way to process collections with operations like `filter`, `map`, and `reduce`. Example: `list.stream().filter(x -> x > 10).collect(Collectors.toList())`.

**Q3: What is `Optional`?**  
A: `Optional` is a container object that may or may not contain a non-null value, helping avoid `NullPointerException`. Common methods include `isPresent()` and `orElse()`.

## Miscellaneous

**Q1: What is JDBC?**  
A: JDBC (Java Database Connectivity) is an API for connecting to databases and executing SQL queries from Java applications.

**Q2: Explain garbage collection.**  
A: Garbage collection automatically reclaims memory occupied by objects no longer in use, with the JVM managing this process to reduce memory leaks.

**Q3: What is a JAR file?**  
A: JAR (Java Archive) is a package format that bundles Java class files and metadata into a single distributable file.
