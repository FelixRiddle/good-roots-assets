import { ArgumentParser } from "argparse";

import runAllTests from "../test/index";
import seedAll from "../seed/index";
// import { dropGoodRootsTables } from "../seed/seeder";
import { Models, RealEstateTables } from "felixriddle.ts-app-models";

const parser = new ArgumentParser({
    description: "Argparse example"
});

// Data for testing
parser.add_argument("--seed", {
    help: "Seed all, removing previous data",
    action: "store_true"
});

parser.add_argument("--test", {
    help: "Run all tests",
    action: "store_true"
});

parser.add_argument("--drop-tables", {
    help: "Drop all good roots tables",
    action: "store_true"
});

/**
 * Execute commands
 */
export default async function executeCommands() {
    const models = new Models();
    const conn = models.connection;
    
    // Parse arguments
    const args = parser.parse_args();
    
    if(args.drop_tables) {
        // Reset real estate tables
        const real = new RealEstateTables(models);
        await real.drop();
        console.log(`Dropped all good roots tables`);
    }
    
    if(args.seed) {
        console.log(`Seeding all models`);
        console.log(`This is a destructive action, it will delete all previous data and tables of the 'good-roots' app`);
        await seedAll(models);
    }
    
    if(args.test) {
        await runAllTests();
    }
    
    // process.exit(0);
};

executeCommands();
