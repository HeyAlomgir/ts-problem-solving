function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
}



type InputType = string | number | boolean;

function processInput(value: InputType): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
    
        return value ? "Active" : "Inactive";
    }
}


console.log(processInput("  TypeScript  ")); 
console.log(processInput(7));               
console.log(processInput(true));            
console.log(processInput(false));          