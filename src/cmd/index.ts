import { ArgumentParser } from "argparse";

import runAllTests from "../test/index";
import seedAll from "../seed/index";

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

/**
 * Execute commands
 */
export default async function executeCommands() {
    // Parse arguments
    const args = parser.parse_args();
    
    if(args.seed) {
        console.log(`Seeding all models`);
        seedAll();
    }
    
    if(args.test) {
        await runAllTests();
    }
    
    // process.exit(0);
};

executeCommands();
