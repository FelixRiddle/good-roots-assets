import propertiesRunAllTests from "../seed/Properties.test";
import runAllPropertyImageTests from "../PropertyImages.test";
import runAllAuthenticationTests from "../api/Authentication.test";

/**
 * Run all tests
 */
export default async function runAllTests() {
    console.log(`Run all tests`);
    await runAllAuthenticationTests();
    await propertiesRunAllTests();
    runAllPropertyImageTests();
}
