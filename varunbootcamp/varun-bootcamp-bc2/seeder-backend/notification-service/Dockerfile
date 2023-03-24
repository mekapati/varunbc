FROM openjdk:12
ADD target/notification-service-1.0.0-shaded.jar  /tmp
WORKDIR /tmp
EXPOSE 8083
ENTRYPOINT ["java", "-jar", "notification-service-1.0.0-shaded.jar"]
