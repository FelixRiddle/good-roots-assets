// import AppModels from "app-models";
import AppModel from "felixriddle.ts-app-models";
const MODEL = AppModel.MODEL;

import SEEDS from "./seeds/index";

const db = AppModel.mysqlConn();

/**
 * Insert categories data
 */
export async function insertCategoriesData() {
    console.log(`Inserting categories data`);
    try {
        // Authenticate
        await db.authenticate();
        
        // Generate columns
        await db.sync();
        
        // Insert data
        await Promise.all([
            MODEL.Category().bulkCreate(SEEDS.CATEGORIES_SEED),
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
        await db.authenticate();
        
        // Generate columns
        await db.sync();
        
        // Insert data
        await Promise.all([
            MODEL.Price().bulkCreate(SEEDS.PRICES_SEED),
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
        await db.authenticate();
        
        // Generate columns
        await db.sync();
        
        // Insert data
        await Promise.all([
            MODEL.User().bulkCreate(SEEDS.TEST_USERS_SEED),
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
        await db.authenticate();
        
        // Generate columns
        await db.sync();
        
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
