# SQL Interview Questions and Answers

## 1. What is SQL?

SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It is used to query, insert, update, and delete data in databases.

## 2. What are the different types of SQL commands?

- **DDL (Data Definition Language)**: CREATE, ALTER, DROP
- **DML (Data Manipulation Language)**: SELECT, INSERT, UPDATE, DELETE
- **DCL (Data Control Language)**: GRANT, REVOKE
- **TCL (Transaction Control Language)**: COMMIT, ROLLBACK, SAVEPOINT

## 3. Explain the difference between WHERE and HAVING clauses.

- **WHERE** filters rows before grouping.
- **HAVING** filters groups after aggregation.

Example:

```sql
SELECT department, AVG(salary) FROM employees WHERE salary > 50000 GROUP BY department HAVING AVG(salary) > 60000;
```

## 4. What is a JOIN in SQL?

A JOIN combines rows from two or more tables based on a related column. Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN.

Example:

```sql
SELECT employees.name, departments.dept_name FROM employees INNER JOIN departments ON employees.dept_id = departments.id;
```

## 5. What is a subquery?

A subquery is a query nested inside another query. It can be used in SELECT, FROM, WHERE clauses.

Example:

```sql
SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);
```

## 6. Explain normalization in databases.

Normalization is the process of organizing data to reduce redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships.

## 7. What is an index in SQL?

An index is a database object that improves the speed of data retrieval operations on a table. It works like a pointer to data in a table.

## 8. How do you handle NULL values in SQL?

Use IS NULL or IS NOT NULL in WHERE clauses. Functions like COALESCE or NVL can replace NULL with default values.

Example:

```sql
SELECT name, COALESCE(phone, 'N/A') FROM employees;
```

## 9. What is a primary key?

A primary key is a unique identifier for each record in a table. It cannot contain NULL values and must be unique.

## 10. Explain ACID properties in transactions.

- **Atomicity**: All operations in a transaction succeed or none do.
- **Consistency**: Database remains in a consistent state.
- **Isolation**: Transactions are isolated from each other.
- **Durability**: Changes are permanent once committed.
