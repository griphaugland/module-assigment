import dotenv from "dotenv";
dotenv.config();
import { add, subtract, reverse, usdToEur, multiply, eurToUsd, capitalize, divide } from "./math.mjs";

console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(reverse("hello"))
console.log(usdToEur(1))
console.log(multiply(1, 2))
console.log(capitalize("hello"))
console.log(divide(1, 2))