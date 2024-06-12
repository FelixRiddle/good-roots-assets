
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
        const Category = models.category;
        
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
        const User = models.user;
        
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

// Ordered from higher dependency to lower
const orderedModels = [
    // Dependents tier 3
    // Dependent on Property and User
    models.propertySellerMessage(),
    models.propertyComment(),
    models.propertyRating(),
    models.userFavoriteProperty(),
    
    // Dependents tier 2
    models.property(),
    models.userMessages(),
    models.userContactMethods(),
    
    // Non-dependent
    models.category,
    models.price(),
    models.user,
];

/**
 * Drop all good roots tables
 */
export async function dropGoodRootsTables() {
    for(const model of orderedModels) {
        await model.drop();
    }
}

/**
 * Create good roots tables
 */
export async function createGoodRootsTables() {
    // We can't use conn.sync to create tables again, because sequelize kinda doesn't know what order are them
    // and it's my fault for not initializing all tables at once on the class.
    // Now we want the less dependent first, so we use reverse
    for(const model of orderedModels.reverse()) {
        await model.sync();
    }
}

/**
 * Seed all models
 */
export default async function seedAllModels() {
    // Authenticate
    await conn.authenticate();
    
    // Drop only good roots tables
    await dropGoodRootsTables();
    await createGoodRootsTables();
    
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
