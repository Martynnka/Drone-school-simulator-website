const btn = document.getElementById("downloadBtn");
const btns = document.getElementById("downloadBtn1");
const countEl = document.getElementById("count");
const ControlsBtn = document.getElementById("ControlsBtn")


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

btns.addEventListener("click", () => 
    {
    downloads++;
    localStorage.setItem("downloads", downloads);
    countEl.textContent = downloads;
    
    alert("Downloading...");
});


btn.addEventListener("mouseenter", () => 
    {
        btn.style.background='#10a7ff';
});

btn.addEventListener("mouseleave", () => 
    {
        btn.style.background="#117ED6";
});

ControlsBtn.addEventListener("mouseenter", () =>
{
  ControlsBtn.style.color='#10a7ff';
});

ControlsBtn.addEventListener("mouseleave", () =>
{
  ControlsBtn.style.color='#000000';
});

btns.addEventListener("mouseenter", () =>
{
  btns.style.color='#10a7ff';
});

btns.addEventListener("mouseleave", () =>
{
  btns.style.color='#000000';
});

