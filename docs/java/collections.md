# Collections Framework

## General

**Q1: What is the Collections Framework in Java?**  
A: It provides interfaces and classes for storing and manipulating groups of objects, such as List, Set, Map, Queue, and Deque. It standardizes common data structures and algorithms.

**Q2: What is the difference between the Collection interface and the Collections utility class?**  
A: `Collection` is the root interface for most collection types. `Collections` is a utility class with static methods for sorting, searching, and synchronizing collections.

**Q3: What is fail-fast behavior in Java collections?**  
A: Fail-fast iterators throw `ConcurrentModificationException` if the collection is modified structurally while iterating, except through the iterator's own methods.

**Q4: What is the difference between Iterator and ListIterator?**  
A: `Iterator` can traverse collections forward only. `ListIterator` works with lists, can traverse forwards/backwards, and can modify the list during iteration.

## List

**Q5: Difference between ArrayList and LinkedList.**  
A: `ArrayList` is backed by a resizable array and provides fast random access. `LinkedList` is a doubly-linked list and offers faster insertions/deletions at the ends or middle.

**Q6: What is the difference between ArrayList and Vector?**  
A: `Vector` is synchronized and thread-safe, while `ArrayList` is not. `ArrayList` is generally preferred for single-threaded use because it has less overhead.

**Q7: When should you use ArrayList over LinkedList?**  
A: Use `ArrayList` when you need fast random access and fewer inserts/removals. Use `LinkedList` when you need many insertions/removals in the middle of the list.

**Q8: What is the RandomAccess marker interface?**  
A: `RandomAccess` is a marker interface used by list implementations like `ArrayList` to indicate they support fast random access.

**Q9: How can you safely remove elements while iterating a list?**  
A: Use the iterator's `remove()` method or `ListIterator`'s `remove()` method. Avoid modifying the list directly while iterating with a standard iterator.

## Set

**Q10: What is the difference between HashSet, LinkedHashSet, and TreeSet?**  
A: `HashSet` does not preserve order. `LinkedHashSet` preserves insertion order. `TreeSet` sorts elements naturally or by a comparator.

**Q11: How does HashSet prevent duplicate elements?**  
A: `HashSet` uses the hash code and `equals()` methods. It stores elements in buckets and rejects duplicates when `equals()` returns true for matching hash codes.

**Q12: What is EnumSet and when should you use it?**  
A: `EnumSet` is a high-performance set implementation for enum types. Use it when you need a compact set of enum values with fast iteration.

**Q13: What is the difference between SortedSet and NavigableSet?**  
A: `SortedSet` maintains elements in sorted order. `NavigableSet` extends `SortedSet` with methods like `lower()`, `higher()`, `floor()`, and `ceiling()`.

## Map

**Q14: Explain HashMap.**  
A: `HashMap` is a Map implementation that stores key-value pairs. It uses hashing for fast retrieval. Keys must be unique; it allows one null key and multiple null values.

**Q15: What is the difference between HashMap and Hashtable?**  
A: `HashMap` is not synchronized and allows null keys/values. `Hashtable` is synchronized and does not allow null keys or values.

**Q16: When should you use ConcurrentHashMap?**  
A: Use `ConcurrentHashMap` in multi-threaded environments where many threads read and update the map concurrently. It provides thread-safe operations with better concurrency than synchronized maps.

**Q17: What is LinkedHashMap accessOrder and when is it used?**  
A: `LinkedHashMap` can preserve insertion order or access order. `accessOrder=true` creates an LRU-style map useful for caches.

**Q18: How do you iterate over a Map efficiently?**  
A: Iterate over `entrySet()` to access keys and values in one pass. Using `keySet()` or `values()` can be less efficient when both key and value are needed.

**Q19: What happens if a map key's hashCode changes after insertion?**  
A: The map may not be able to locate the entry anymore because the hash code changes the bucket used for storage. Keys should be immutable while stored in hash-based maps.

## Queue and Stack

**Q20: What is the Queue interface and which implementations are commonly used?**  
A: `Queue` represents a FIFO collection. Common implementations include `LinkedList`, `ArrayDeque`, and `PriorityQueue`.

**Q21: What is the difference between PriorityQueue and ArrayDeque?**  
A: `PriorityQueue` orders elements by priority and does not guarantee FIFO order. `ArrayDeque` is a double-ended queue optimized for FIFO and LIFO operations.

**Q22: When should you use Deque instead of Stack?**  
A: `Deque` is preferred over the legacy `Stack` class. Use implementations like `ArrayDeque` or `LinkedList` for stack behavior with `push()`, `pop()`, and `peek()`.

**Q23: What is the difference between poll, remove, peek, and element in Queue?**  
A: `poll()` and `peek()` return null when the queue is empty. `remove()` and `element()` throw an exception if empty.

**Q24: How do you implement stack behavior using Deque?**  
A: Use `Deque.push()` to add, `Deque.pop()` to remove, and `Deque.peek()` to inspect the top element for LIFO behavior.

## Tips

- Prefer `ArrayList` for random access and `LinkedList` for frequent middle insertions.
- Use `HashSet` or `LinkedHashSet` when uniqueness is required. Use `TreeSet` for sorted sets.
- Use `HashMap` for general-purpose maps, `LinkedHashMap` for predictable iteration order, and `ConcurrentHashMap` for thread-safe concurrent access.
- Prefer `ArrayDeque` for stack/queue use instead of `Stack` or `LinkedList` when performance matters.
