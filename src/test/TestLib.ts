import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import { ExpressAuthentication, FrontendAuthAPI } from "felixriddle.good-roots-ts-api";
import { LoginInputType, RegisterInputType, CompleteUserData } from "felixriddle.my-types";

/**
 * Test utils
 * 
 * Should be renamed to TemporalUser
 */
export default class TestLib {
    api: FrontendAuthAPI;
    
    constructor(api: FrontendAuthAPI) {
        this.api = api;
    }
    
    /**
     * Create class and a user
     */
    static async create() {
        // Setup dotenv
        dotenv.config({
            path: ".env"
        });
        
        // Create user data
        const userData: RegisterInputType = {
            name: "Alistar",
            email: `${uuidv4()}@email.com`,
            password: "asd12345",
            confirmPassword: "asd12345"
        };
        const loginInput: LoginInputType = {
            email: userData.email,
            password: userData.password,
        };
        
        // Create general manager
        const expressAuth = new ExpressAuthentication();
        
        // Auth api
        const api = expressAuth.authApi();
        await api.registerUser(userData);
        await api.confirmUserEmailWithPrivateKey(loginInput.email);
        await api.loginGetJwt(loginInput);
        
        return new TestLib(api);
    }
    
    /**
     * User data
     */
    async userData(): Promise<CompleteUserData> {
        const userApi = this.api.userApi();
        const userData = await userApi.data();
        
        if(!userData.user) {
            throw Error("Couldn't fetch the user");
        }
        
        return userData.user;
    }
    
    /**
     * Delete user
     */
    async deleteUser() {
        // User api
        const userApi = this.api.userApi();
        await userApi.delete();
        
        return this;
    }
    
    // --- APIS ---
    /**
     * Property api
     */
    propertyApi() {
        return this.api.propertyApi();
    }
}
