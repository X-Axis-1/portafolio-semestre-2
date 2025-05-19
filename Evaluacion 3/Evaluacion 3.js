document.addEventListener("DOMContentLoaded", () => {
  const agregarBtn = document.getElementById("agregarBtn");
  const eliminarBtn = document.getElementById("eliminarBtn");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTarea = document.getElementById("nuevaTarea");

  agregarBtn.addEventListener("click", () => {
    const texto = nuevaTarea.value.trim();
    if (texto !== "") {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const span = document.createElement("span");
      span.textContent = texto;

      li.appendChild(checkbox);
      li.appendChild(span);
      listaTareas.appendChild(li);

      nuevaTarea.value = "";
      nuevaTarea.focus();
    } else {
      alert("Por favor, escribe una tarea.");
    }
  });

  eliminarBtn.addEventListener("click", () => {
    const tareas = document.querySelectorAll("#listaTareas li");
    tareas.forEach(tarea => {
      const checkbox = tarea.querySelector("input[type='checkbox']");
      if (checkbox.checked) {
        listaTareas.removeChild(tarea);
      }
    });
  });
});