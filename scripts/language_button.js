  const langBtn = document.getElementById("langBtn");

  // Detectar idioma actual
  let currentLang = sessionStorage.getItem("language") || "es";

  langBtn.addEventListener("click", () => {
    if (currentLang === "es") {
      sessionStorage.setItem("language", "en");
      window.location.href = "index_en.html";
    } else {
      sessionStorage.setItem("language", "es");
      window.location.href = "index.html";
    }
  });

  console.log("Language select:", currentLang);