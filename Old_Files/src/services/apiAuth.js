import { SERVER_URL } from "../utils/constant";

export default async function login({ email, password }) {
  let username = email;
  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Failed login");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
