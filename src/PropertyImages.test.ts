import PropertyImages from "./PropertyImages";

/**
 * Run all property image tests
 */
export default function runAllPropertyImageTests() {
    const propImgs = new PropertyImages();
    const imgs = propImgs.getAll();
    
    console.log(imgs);
}
