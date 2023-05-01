function toggleSelection(button) {
  if (button.classList.contains("selecionado")) {
    button.classList.remove("selecionado");
  } else {
    button.classList.add("selecionado");
  }
}

