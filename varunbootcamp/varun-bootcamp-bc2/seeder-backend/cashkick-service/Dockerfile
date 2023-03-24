FROM openjdk:12
ADD target/cashkick-service-1.0.0-shaded.jar /tmp
WORKDIR /tmp
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "cashkick-service-1.0.0-shaded.jar"]

