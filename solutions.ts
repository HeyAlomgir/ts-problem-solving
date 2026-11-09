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



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.isPublished === true && course.students >= minStudents);
}

const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];


