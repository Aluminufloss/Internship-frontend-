export default async function getArticleByID(id) {
  console.log(id)
  try {
    const res = await fetch(`http://localhost:5000/articles/${id}`, {
      method: "GET"
    });

    if (!res.ok) throw new Error("Failed get article by id");

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
