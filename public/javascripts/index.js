async function unsubscribe(email) {
  fetch("http://localhost:3000/goodbye", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Post response", data));
}
