
// An error?
import { Models } from "felixriddle.ts-app-models";

import SEEDS from "./seeds/index";

const models = new Models();
const conn = models.connection;

/**
 * Delete user messages
 */
export async function deleteUserMessages() {
    try {
        const UserMessages = models.userMessages();
        
        // Remove all data of the table
        await UserMessages.truncate();
    } catch(err) {
        console.error(err);
    }
}

/**
 * Insert categories data
 */
export async function insertCategoriesData() {
    console.log(`Inserting categories data`);
    try {
        const Category = models.category();
        
        // Remove all data on the table
        await Category.truncate();
        
        // Insert data
        await Promise.all([
            Category.bulkCreate(SEEDS.CATEGORIES_SEED),
        ]);
        
        console.log(`Categories inserted`);
    } catch(err) {
        console.log(err);
    }
}

/**
 * Insert prices data
 */
export async function insertPricesData() {
    try {
        const Price = models.price();
        
        // Remove all data on the table
        await Price.truncate();
        
        // Insert data
        await Promise.all([
            Price.bulkCreate(SEEDS.PRICES_SEED),
        ]);
        
        console.log(`Data inserted correctly`);
    } catch(err) {
        console.log(err);
    }
}

/**
 * Insert test user data
 */
export async function insertTestUserData() {
    try {
        const User = models.user();
        
        // Remove all data on the table
        await User.truncate();
        
        // Insert data
        await Promise.all([
            User.bulkCreate(SEEDS.TEST_USERS_SEED),
        ]);
        
        console.log(`Data inserted correctly`);
    } catch(err) {
        console.log(err);
    }
}

/**
 * TODO: Insert test property data
 */
export async function insertTestPropertiesData() {
    console.log(`Not done yet!`);
    return;
    try {
        // Authenticate
        await conn.authenticate();
        
        // Generate columns
        await conn.sync();
        
        // Insert data
        await Promise.all([
        ]);
        
        console.log(`Data inserted correctly`);
    } catch(err) {
        console.log(err);
    }
}

/**
 * Seed all models
 */
export default async function seedAllModels() {
    // Authenticate
    await conn.authenticate();
    
    // Generate columns
    await conn.sync();
    
    console.log(`Delete User messages`);
    await deleteUserMessages();
    
    console.log(`Truncate and insert Categories`);
    await insertCategoriesData();
    
    console.log(`Truncate and insert Prices`);
    await insertPricesData();
    
    console.log(`Truncate and insert Properties`);
    await insertTestPropertiesData();
    
    console.log(`Truncate and insert Users`);
    await insertTestUserData();
}
