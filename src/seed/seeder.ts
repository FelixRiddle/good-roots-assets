
// An error?
import { Models } from "felixriddle.ts-app-models";

import SEEDS from "./seeds/index";

const models = new Models();
const conn = models.connection;

/**
 * Insert categories data
 */
export async function insertCategoriesData() {
    console.log(`Inserting categories data`);
    try {
        // Authenticate
        await conn.authenticate();
        
        // Generate columns
        await conn.sync();
        
        // Insert data
        await Promise.all([
            models.category().bulkCreate(SEEDS.CATEGORIES_SEED),
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
        // Authenticate
        await conn.authenticate();
        
        // Generate columns
        await conn.sync();
        
        // Insert data
        await Promise.all([
            models.price().bulkCreate(SEEDS.PRICES_SEED),
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
        // Authenticate
        await conn.authenticate();
        
        // Generate columns
        await conn.sync();
        
        // Insert data
        await Promise.all([
            models.user().bulkCreate(SEEDS.TEST_USERS_SEED),
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
    await insertCategoriesData();
    await insertPricesData();
    await insertTestPropertiesData();
    await insertTestUserData();
}
