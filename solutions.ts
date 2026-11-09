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






function formatCoordinate(coordinate: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// --- স্যাম্পল ইনপুট ও আউটপুট টেস্ট ---
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));       // আউটপুট: "Location: Dhaka (23.81, 90.41)"
console.log(formatCoordinate([22.35, 91.78, "Chittagong"])); // আউটপুট: "Location: Chittagong (22.35, 91.78)"



       