# Type Alias vs Interface in TypeScript

## ভূমিকা

TypeScript-এ `type` এবং `interface` ব্যবহার করে কোনো ডেটার Structure বা Shape নির্ধারণ করা যায়। দুটিই কোডকে আরও নিরাপদ, পরিষ্কার এবং সহজে পরিচালনাযোগ্য করে তোলে। তবে এদের ব্যবহারের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

## Type Alias কী?

`type` ব্যবহার করে আমরা একটি নতুন Type তৈরি করতে পারি। এটি Primitive, Union, Intersection, Object এবং অন্যান্য অনেক ধরনের Type তৈরি করতে সাহায্য করে।

উদাহরণ:

```ts
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Alomgir",
    age: 19
};
```

এখানে `User` একটি Type Alias, যার মাধ্যমে User Object-এর Structure নির্ধারণ করা হয়েছে।

## Interface কী?

`interface` মূলত Object-এর Structure নির্ধারণ করতে ব্যবহৃত হয়। এটি কোনো Object-এ কী কী Property এবং Method থাকবে তা নির্ধারণ করে।

উদাহরণ:

```ts
interface Student {
    name: string;
    roll: number;
}

const student: Student = {
    name: "Rahim",
    roll: 101
};
```

এখানে `Student` Interface নিশ্চিত করছে যে Object-এ `name` এবং `roll` Property থাকতে হবে।

## Type Alias এবং Interface-এর পার্থক্য

দুটিই Object-এর Structure নির্ধারণ করতে পারে। তবে `type` দিয়ে Union Type তৈরি করা যায়, যা Interface সরাসরি করতে পারে না।

```ts
type Status = "success" | "error" | "loading";
```

অন্যদিকে, Interface-এ `extends` ব্যবহার করে অন্য Interface-এর Property গ্রহণ করা যায়।

```ts
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}
```

`type`-এর ক্ষেত্রে Intersection Operator (`&`) ব্যবহার করে একাধিক Type একত্র করা যায়।

```ts
type PersonInfo = {
    name: string;
};

type JobInfo = {
    salary: number;
};

type EmployeeInfo = PersonInfo & JobInfo;
```

আরেকটি গুরুত্বপূর্ণ পার্থক্য হলো Interface Declaration Merging সমর্থন করে। একই নামের একাধিক Interface Declaration একত্রিত হতে পারে। কিন্তু একই নামে একাধিক Type Alias তৈরি করা যায় না।

## কখন কোনটি ব্যবহার করব?

Object-এর Structure নির্ধারণ এবং Interface Extend করার প্রয়োজন হলে `interface` ব্যবহার করা সুবিধাজনক। আর Union, Intersection, Primitive বা জটিল Type তৈরি করতে `type` বেশি উপযোগী।

## উপসংহার

Type Alias এবং Interface দুটিই TypeScript-এর গুরুত্বপূর্ণ বৈশিষ্ট্য। এদের কাজ অনেক ক্ষেত্রে একই হলেও কিছু বিশেষ পার্থক্য রয়েছে। সঠিক পরিস্থিতিতে সঠিকটি ব্যবহার করলে কোড আরও পরিষ্কার, নিরাপদ এবং Maintainable হয়।