package contract;

import com.intuit.karate.junit5.Karate;

public class ContractRunner {

    @Karate.Test
    Karate testContracts() {
        return Karate.run("contracts").relativeTo(getClass());
    }
}
