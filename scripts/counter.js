window.addEventListener("DOMContentLoaded", () => {
    let count = +localStorage.getItem("reviewCount") || 0;
    localStorage.setItem("reviewCount", ++count);
    document.getElementById("review-count").textContent = count;
  });
  