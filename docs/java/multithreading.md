# Multithreading

## Basics

**Q1: What is multithreading in Java?**  
A: Multithreading allows concurrent execution of multiple threads within a program. It improves responsiveness and can speed up I/O-bound or parallel tasks.

**Q2: What is the difference between process and thread?**  
A: A process is an independent program instance with its own memory. A thread is a lightweight unit of execution within a process that shares memory with other threads.

## Thread creation

**Q3: How do you create a thread in Java?**  
A: Create a thread by extending `Thread` or implementing `Runnable`. In Java 8+, you can also use `Callable` with `Future` and the Executor framework.

**Q4: What is the difference between `Runnable` and `Callable`?**  
A: `Runnable` does not return a result and cannot throw checked exceptions. `Callable` returns a value and can throw checked exceptions.

## Synchronization

**Q5: Explain synchronization.**  
A: Synchronization ensures only one thread accesses a shared resource at a time, preventing race conditions. Use the `synchronized` keyword on methods or blocks.

**Q6: What is a race condition?**  
A: A race condition occurs when two or more threads access shared data concurrently and at least one thread modifies it, leading to unpredictable results.

**Q7: What is thread safety?**  
A: Thread safety means code runs correctly when accessed by multiple threads concurrently, without data corruption or unexpected behavior.

## Locks and coordination

**Q8: What is the difference between `synchronized` and `Lock`?**  
A: `synchronized` is built-in and easier to use, while `Lock` from `java.util.concurrent.locks` offers more advanced control like tryLock, timed lock, and interruptible lock acquisition.

**Q9: What is `volatile` used for?**  
A: `volatile` ensures visibility of changes to a variable across threads. It prevents threads from caching values locally and ensures reads always see the latest write.

**Q10: What is deadlock and how can it be prevented?**  
A: Deadlock happens when threads wait indefinitely for locks held by each other. Prevent it by avoiding nested locks, using lock ordering, or applying timeouts with `tryLock()`.

**Q11: What are `wait()` and `notify()` used for?**  
A: They coordinate communication between threads using an object monitor. `wait()` releases the lock and waits, while `notify()` or `notifyAll()` wakes waiting threads.

## Executors and concurrent utilities

**Q12: What is the Executor framework?**  
A: The Executor framework simplifies thread management with abstractions like `ExecutorService`, `ScheduledExecutorService`, and thread pools.

**Q13: When should you use `Executors.newFixedThreadPool()`?**  
A: Use it when you need a fixed number of threads to process a bounded number of tasks, reducing the overhead of thread creation.

**Q14: What is `ConcurrentHashMap` and when is it used?**  
A: `ConcurrentHashMap` is a thread-safe map designed for concurrent access without locking the entire map. It is used when many threads read and update the map concurrently.

**Q15: What is the purpose of `CountDownLatch` and `CyclicBarrier`?**  
A: `CountDownLatch` waits for a set of threads to complete before proceeding. `CyclicBarrier` makes threads wait until a fixed number have reached the barrier, then all proceed.

## Thread lifecycle

**Q16: What are the states of a Java thread?**  
A: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, and TERMINATED.

**Q17: What is the `join()` method used for?**  
A: `join()` makes the calling thread wait until the target thread finishes execution.

**Q18: What is thread starvation?**  
A: Thread starvation happens when lower-priority threads never get CPU time because higher-priority threads dominate execution.

**Q19: What is thread interruption?**  
A: Interruption is a cooperative mechanism where one thread requests another to stop. The interrupted thread checks `Thread.interrupted()` or catches `InterruptedException`.

## Common interview focus

**Q20: What is the difference between `sleep()` and `wait()`?**  
A: `sleep()` pauses the current thread for a fixed time without releasing locks. `wait()` releases the owning lock and waits until notified.

**Q21: Why are immutable objects helpful in multithreaded code?**  
A: Immutable objects cannot change state after creation, which avoids synchronization issues and makes them inherently thread-safe.
