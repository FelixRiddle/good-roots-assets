import { testMessage } from "../test/testMessage";
import Properties from "./Properties";
import TestLib from "../test/TestLib";

/**
 * Test insert all
 */
async function testInsertAllProperties() {
    let result = true;
    try {
        // Test lib
        const testLib = await TestLib.create();
        const propertyApi = testLib.propertyApi();
        
        // Get property
        const props = new Properties();
        const properties = props.getProperties();
        
        for(const property of properties) {
            // propertyApi.
            await propertyApi.create(property);
            console.log(`Inserted property `, property.title);
        }
        
        await propertyApi.userDeleteAll();
        
        await testLib.deleteUser();
    } catch(err) {
        result = false;
    }
    
    testMessage(result, "All properties inserted");
}

/**
 * Run all tests
 */
export default async function propertiesRunAllTests() {
    await testInsertAllProperties();
}
