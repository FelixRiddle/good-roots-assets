import { resetTables } from "felixriddle.ts-app-models";

import seedAllModels from "./seeder";

/**
 * Seed all
 * 
 * Properties, users, etc.
 */
export default async function seedAll() {
    await resetTables();
    seedAllModels();
}
