async function addItem(event) {
  event.preventDefault();

  const addName = document.querySelector("#name-add").value.trim();
  const addPicture = document.querySelector("#picture-add").value.trim();

  const addCategory = document.querySelector("#category-select").value.trim();
  const categoryId = parseInt(addCategory);

  const userId = req.session.user_id;

  if (addName && addPicture && categoryId) {
    const response = await fetch("/api/items", {
      method: "post",
      body: JSON.stringify({
        addName,
        addPicture,
        categoryId,
        userId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#add-button").addEventListener("click", addItem);
