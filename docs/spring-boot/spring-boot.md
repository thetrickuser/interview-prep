# Spring Boot Interview Questions and Answers

## 1. What is Spring Boot?

Spring Boot is a framework that simplifies the creation of production-ready applications with Spring. It provides auto-configuration, embedded servers, and opinionated defaults to reduce boilerplate code.

## 2. How does Spring Boot differ from Spring Framework?

Spring Framework requires manual configuration of beans and dependencies. Spring Boot automates much of this with starters, auto-configuration, and embedded servers, making it easier to build standalone applications.

## 3. What are Spring Boot Starters?

Starters are dependency descriptors that include a set of related libraries. For example, `spring-boot-starter-web` includes dependencies for web applications, reducing the need for manual Maven/Gradle configurations.

## 4. Explain auto-configuration in Spring Boot.

Auto-configuration automatically configures Spring applications based on classpath dependencies. It scans for beans and applies defaults, which can be overridden by explicit configuration.

## 5. What is the purpose of the `@SpringBootApplication` annotation?

It combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`. It marks the main class and enables Spring Boot's features like auto-configuration and component scanning.

## 6. How do you create a REST API in Spring Boot?

Use `@RestController` and `@RequestMapping` annotations. For example:

```java
@RestController
public class HelloController {
  @GetMapping("/hello")
  public String hello() {
    return "Hello, World!";
  }
}
```

## 7. What is the role of `application.properties` or `application.yml`?

These files configure application settings like database connections, server ports, and logging levels. Spring Boot loads them automatically.

## 8. How does Spring Boot handle externalized configuration?

It supports profiles (e.g., dev, prod) via `application-{profile}.properties`. Values can come from environment variables, command-line arguments, or external sources.

## 9. What is Spring Boot Actuator?

Actuator provides production-ready features like health checks, metrics, and monitoring endpoints (e.g., `/actuator/health`) to inspect and manage applications.

## 10. How do you enable security in Spring Boot?

Add `spring-boot-starter-security` dependency. It provides default authentication and can be customized with `@EnableWebSecurity` and configuration classes.

## 11. Explain Spring Boot's embedded server.

Spring Boot includes Tomcat, Jetty, or Undertow by default. No need for external server deployment; applications run as JARs with `java -jar`.

## 12. What is the difference between `@Component`, `@Service`, and `@Repository`?

- `@Component`: Generic stereotype for any Spring-managed component.
- `@Service`: Indicates a service layer component.
- `@Repository`: Indicates a data access layer component, often with exception translation.

## 13. How do you handle exceptions in Spring Boot?

Use `@ControllerAdvice` and `@ExceptionHandler` to create global exception handlers. For example:

```java
@ControllerAdvice
public class GlobalExceptionHandler {
  @ExceptionHandler(Exception.class)
  public ResponseEntity<String> handleException(Exception e) {
    return ResponseEntity.status(500).body("Internal Server Error");
  }
}
```

## 14. What is Spring Boot DevTools?

DevTools enhances development with features like automatic restarts, live reload, and remote debugging. Enabled by adding `spring-boot-devtools` dependency.

## 15. How do you test a Spring Boot application?

Use `@SpringBootTest` for integration tests, which loads the full application context. For unit tests, use `@WebMvcTest` or `@DataJpaTest` for specific layers.
