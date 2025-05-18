# Etapa de construcción
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app

# Copiamos los archivos necesarios
COPY . .

# Construimos el JAR sin ejecutar los tests
RUN ./mvnw clean package -DskipTests

# Etapa final
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copiamos el JAR generado desde la etapa anterior
COPY --from=builder /app/target/*.jar app.jar

# Exponemos el puerto
EXPOSE 8080

# Comando de ejecución
ENTRYPOINT ["java", "-jar", "app.jar"]
