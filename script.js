document.getElementById("assignBtn").addEventListener("click", async () => {
    const select = document.getElementById("nameSelect");
    const name = select.value;
  if (!name) {
      alert("Selecciona tu nombre.");
    return;
  }

  const res = await fetch(`/api/assign?name=${encodeURIComponent(name)}`);
  const data = await res.json();

  const result = document.getElementById("result");

  if (data.error) {
    result.textContent = data.error;
  } else {
    result.textContent = `Tu amigo secreto es: ${data.assigned}`;
  }

  result.classList.remove("hidden");
});
