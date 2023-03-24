FROM openjdk:12
ADD target/contract-service-1.0.0-shaded.jar /tmp
WORKDIR /tmp
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "contract-service-1.0.0-shaded.jar"]
