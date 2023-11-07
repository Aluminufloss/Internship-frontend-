import { SERVER_URL } from "../utils/constant";

export default async function login() {
  try {
    const res = await fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
    });

    if (!res.ok) throw new Error("Failed fetch categories");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
