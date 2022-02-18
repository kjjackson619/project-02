async function addItem(event) {
  event.preventDefault();
  

  const addName = document.querySelector("#name-add").value.trim();
  const addPicture = document.querySelector("#picture-add").value.trim();
  const addCategory = document.querySelector("#cars").value.trim()
  
  

  if (addName && addPicture && addCategory) {
    const response = await fetch("/api/items", {
      method: "post",
      body: JSON.stringify({
        addName,
        addPicture,
        addCategory,
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
