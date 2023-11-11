export default async function createArticle({ heading, value, category }) {
  try {
    const res = await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify({ heading, value, category }),
    });

    if (!res.ok) throw new Error("Failed create article");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
