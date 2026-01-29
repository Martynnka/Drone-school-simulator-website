const btn = document.getElementById("downloadBtn");
const countEl = document.getElementById("count");


let downloads = localStorage.getItem("downloads");

if (downloads === null) 
{
  downloads = 0;
} else 
{
  downloads = Number(downloads);
}

countEl.textContent = downloads;

btn.addEventListener("click", () => 
    {
    downloads++;
    localStorage.setItem("downloads", downloads);
    countEl.textContent = downloads;
    
    alert("Downloading...");
});
