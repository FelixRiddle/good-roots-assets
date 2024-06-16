import { Models, RealEstateTables } from "felixriddle.ts-app-models";
import Seeder from "./Seeder";

/**
 * Seed all
 * 
 * Properties, users, etc.
 */
export default async function seedAll(models: Models) {
    // Reset real estate tables
    const real = new RealEstateTables(models);
    await real.reset();
    
    const seeder = new Seeder(models);
    
    console.log(`Delete User messages`);
    await seeder.deleteUserMessages();
    
    console.log(`Truncate and insert Categories`);
    await seeder.insertCategoriesData();
    
    console.log(`Truncate and insert Prices`);
    await seeder.insertPricesData();
    
    console.log(`Truncate and insert Users`);
    await seeder.insertTestUserData();
}
