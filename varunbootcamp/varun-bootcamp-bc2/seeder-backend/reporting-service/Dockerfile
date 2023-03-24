FROM openjdk:12
ADD target/reporting-service-1.0.0-shaded.jar /tmp
WORKDIR /tmp
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "reporting-service-1.0.0-shaded.jar"]

