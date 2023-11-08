export default async function getArticles(category) {
  try {
    const res = await fetch("http://localhost:5000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000"
      },
      body: JSON.stringify({ category })
    });

    if (!res.ok) throw new Error("Failed get articles");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
