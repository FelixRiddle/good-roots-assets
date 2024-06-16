import { Models } from "felixriddle.ts-app-models";

import SEEDS from "./seeds/index";

/**
 * Seeder
 */
export default class Seeder {
    models: Models;
    
    constructor(models: Models) {
        this.models = models;
    }
    
    /**
     * Delete user messages
     */
    async deleteUserMessages() {
        try {
            const UserMessages = this.models.userMessages;
            
            // Remove all data of the table
            await UserMessages.truncate();
        } catch(err) {
            console.error(err);
        }
    }

    /**
     * Insert categories data
     */
    async insertCategoriesData() {
        console.log(`Inserting categories data`);
        try {
            const Category = this.models.category;
            
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
    async insertPricesData() {
        try {
            const Price = this.models.price;
            
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
    async insertTestUserData() {
        try {
            const User = this.models.user;
            
            // Insert data
            await Promise.all([
                User.bulkCreate(SEEDS.TEST_USERS_SEED),
            ]);
            
            console.log(`Data inserted correctly`);
        } catch(err) {
            console.log(err);
        }
    }
}
