# Use the official OpenJDK image
FROM openjdk:17-jdk-slim AS build

# Set the working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw pom.xml ./

# Copy the Maven wrapper jar
COPY .mvn .mvn

# Install Maven dependencies
RUN ./mvnw dependency:go-offline

# Copy the rest of the application files
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Use the official OpenJDK image for the runtime
FROM openjdk:17-jdk-slim AS production

# Set the working directory
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
