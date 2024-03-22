import seedAllModels from "./seeder";
import TsAppModels from "felixriddle.ts-app-models";

/**
 * Seed all
 * 
 * Properties, users, etc.
 */
export default async function seedAll() {
    await TsAppModels.resetTables();
    seedAllModels();
}
