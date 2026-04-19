---
sidebar_position: 1
---

# Object Oriented Programming

## General

**Q1: What are the four pillars of OOP in Java?**  
A: Encapsulation, Inheritance, Polymorphism, and Abstraction.

**Q2: What is the difference between a class and an object?**  
A: A class is a blueprint or template. An object is an instance of that class with actual data.

**Q3: What is the difference between `==` and `equals()` in Java?**  
A: `==` compares object references. `equals()` compares object values when properly overridden.

## Encapsulation

**Q4: What is encapsulation?**  
A: Encapsulation hides internal implementation details and exposes only necessary operations through methods. It is usually achieved with private fields and public getters/setters.

**Q5: Why is encapsulation important?**  
A: It protects object state, improves maintainability, and prevents unauthorized modification of data.

**Q6: What is the effect of making a field `private`?**  
A: A private field is accessible only within its own class. External classes must use public methods to read or modify it.

## Inheritance

**Q7: Explain inheritance in Java.**  
A: Inheritance allows a subclass to inherit properties and methods from a superclass. It promotes code reuse and enables a class hierarchy.

**Q8: What is the difference between `extends` and `implements`?**  
A: `extends` is used to inherit from a superclass. `implements` is used to adopt one or more interfaces.

**Q9: Can a Java class extend more than one class?**  
A: No. Java does not support multiple inheritance for classes. A class can extend only one superclass but implement multiple interfaces.

## Polymorphism

**Q10: What is polymorphism?**  
A: Polymorphism means "many forms." In Java, it lets a variable refer to objects of different types and call overridden methods dynamically.

**Q11: What is method overloading?**  
A: Method overloading is defining multiple methods with the same name but different parameter lists in the same class.

**Q12: What is method overriding?**  
A: Method overriding occurs when a subclass provides its own implementation of a method already defined in its superclass.

## Abstraction

**Q13: What is abstraction?**  
A: Abstraction focuses on exposing only essential features while hiding implementation details. It is achieved using abstract classes and interfaces.

**Q14: What is the difference between abstract class and interface?**  
A: Abstract classes can have state and concrete methods, and a class can extend one abstract class. Interfaces can have default/static methods and a class can implement multiple interfaces.

**Q15: When should you use an abstract class instead of an interface?**  
A: Use an abstract class when you need shared code or state among related classes. Use interfaces to define a contract that multiple unrelated classes can implement.

## Classes and Interfaces

**Q16: What is a functional interface?**  
A: A functional interface has a single abstract method. It can be used with lambda expressions and method references.

**Q17: What is the purpose of the `super` keyword?**  
A: `super` refers to the superclass instance. It can be used to call superclass constructors or methods.

**Q18: What is the role of constructors in inheritance?**  
A: A subclass constructor calls its superclass constructor first, either implicitly or with `super(...)`, to initialize inherited state.

**Q19: What is a nested class?**  
A: A nested class is declared inside another class. It can be static (nested static class) or non-static (inner class), and it helps organize related code.

## Common interview focus

**Q20: What is the difference between compile-time and runtime polymorphism?**  
A: Compile-time polymorphism is method overloading, resolved at compile time. Runtime polymorphism is method overriding, resolved during program execution.

**Q21: What is the Liskov Substitution Principle?**  
A: It states that objects of a superclass should be replaceable with objects of a subclass without affecting program correctness.
