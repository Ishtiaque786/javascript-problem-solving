//২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।
const food = "porata";
const info = {
  name: "Ishtiaque Mahmud Rakib",
  University: "North south university",
  age: 23,
  cgpa: "4.00",
};
const show = `hello people, My name is ${info.name}, I am a ${info.University} student, My age is ${info.age}, My cgpa is ${info.cgpa}, Today morning I ate ${food}.
Wishing you a good day. `;
console.log(show);
