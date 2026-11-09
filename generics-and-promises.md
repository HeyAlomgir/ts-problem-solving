# Generics and Promises in TypeScript

## ভূমিকা

TypeScript-এ Generics এবং Promises দুটি গুরুত্বপূর্ণ বিষয়। Generics ব্যবহার করে এমন Function, Interface বা Class তৈরি করা যায়, যা বিভিন্ন Data Type নিয়ে কাজ করতে পারে। অন্যদিকে, Promise মূলত Asynchronous Operation-এর ফলাফল পরিচালনা করতে ব্যবহৃত হয়।

## Generics কী?

Generics হলো এমন একটি পদ্ধতি, যার মাধ্যমে Function বা অন্য কোনো Structure-কে একাধিক Data Type-এর জন্য ব্যবহারযোগ্য করা যায়। এতে বারবার আলাদা Function তৈরি করার প্রয়োজন হয় না।

উদাহরণ:

```ts
const wrapInArray = <T>(value: T): T[] => {
    return [value];
};

const numbers = wrapInArray<number>(10);
const names = wrapInArray<string>("Alomgir");
```

এখানে `<T>` একটি Generic Type Parameter। Function-টি Number অথবা String—দুই ধরনের Value নিয়েই কাজ করতে পারে। TypeScript প্রয়োজন অনুযায়ী `T`-এর Type নির্ধারণ করতে পারে।

আরেকটি উদাহরণ:

```ts
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};
```

এই Function একই Data Type-এর একাধিক Array গ্রহণ করে সেগুলোকে একটি Array-তে যুক্ত করে। এখানে `T` ব্যবহারের কারণে Function-টি বিভিন্ন Data Type-এর Array-এর জন্য পুনরায় ব্যবহার করা যায়।

## Promise কী?

Promise হলো JavaScript এবং TypeScript-এর একটি Object, যা ভবিষ্যতে কোনো Asynchronous Operation সফল বা ব্যর্থ হওয়ার ফলাফল প্রকাশ করে। Promise-এর প্রধান তিনটি State হলো `pending`, `fulfilled` এবং `rejected`।

উদাহরণ:

```ts
const getData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded successfully");
        }, 1000);
    });
};
```

এখানে `Promise<string>` বোঝায় যে Promise সফল হলে একটি String Value পাওয়া যাবে। `resolve()` সফল ফলাফল প্রদান করে এবং `reject()` ব্যর্থতা প্রকাশ করে।

Promise ব্যবহার করে `.then()` দিয়ে সফল ফলাফল এবং `.catch()` দিয়ে Error Handle করা যায়।

```ts
getData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

## Generics এবং Promise একসঙ্গে

Promise-এর সঙ্গে Generics ব্যবহার করলে Promise থেকে কী ধরনের Data পাওয়া যাবে তা নির্দিষ্ট করা যায়। যেমন `Promise<number>` হলে সফল ফলাফল Number হবে এবং `Promise<User>` হলে সফল ফলাফল User Type-এর Object হবে।

এতে Asynchronous Code-এর Type Safety বজায় থাকে এবং ভুল Data Type ব্যবহারের ঝুঁকি কমে।

## উপসংহার

Generics কোডকে Reusable এবং Flexible করে। অন্যদিকে, Promise Asynchronous কাজের ফলাফল পরিচালনা সহজ করে। TypeScript-এ এই দুটি বৈশিষ্ট্য একসঙ্গে ব্যবহার করলে বড় Application-এর Code আরও নিরাপদ, পরিষ্কার এবং Maintainable করা যায়।