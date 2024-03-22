/**
 * Class to create properties with a given configuration
 */
export default class Properties {
    userId = 1;
    
    /**
     * Properties
     * 
     * @param {number} userId The user id
     */
    constructor(userId: number) {
        this.userId = userId;
    }
    
    /**
     * Seed properties
     */
    getProperties() {
        // Create some property
        const property = {
            title: "Luxury house",
            description: "This is a luxury house",
            rooms: 3,
            parking: 2,
            bathrooms: 3,
            street: 'Norris Road 1223',
            latitude: 35.0831751,
            longitude: -90.022207,
            priceId: 5,
            categoryId: 4,
            image: "",
            published: true,
            userId: this.userId,
        };
        
        let properties = [];
        for(let i = 0; i <= 21; i++) {
            // Deep clone
            const newProperty = JSON.parse(JSON.stringify(property));
            newProperty.title = `Luxury house ${i + 1}`;
            
            properties.push(newProperty);
        }
        
        console.log(`Properties: `, properties)
    }
}
