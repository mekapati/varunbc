Feature: contracts

    Background:
        * url 'http://localhost:8081/api/v1/contracts'

    Scenario: Fetch Approved Contracts

        Given path '/approved'
        When method GET
        Then status 200
        And match response == []