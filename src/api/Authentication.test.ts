import TestLib from "../test/TestLib";

import { testMessage } from "../test/testMessage";

/**
 * Authentication test
 */
export async function authenticationTest() {
    let result = true;
    try {
        const lib = await TestLib.create();
        await lib.deleteUser();
    } catch(err) {
        result = false;
    }
    
    testMessage(result, "Authentication test");
}

/**
 * Run all tests
 */
export default async function runAllAuthenticationTests() {
    await authenticationTest();
}
