const plus = document.querySelectorAll(".plus"); // Tüm "plus" sınıfına sahip öğeleri seç
const cross = document.querySelectorAll(".cross"); // Tüm "cross" sınıfına sahip öğeleri seç
const hidden = document.querySelectorAll(".hidden"); // Tüm "hidden" sınıfına sahip öğeleri seç (bu değişken kullanılmıyor)
const para = document.querySelectorAll(".para"); // Tüm "para" sınıfına sahip öğeleri seç

// "plus" butonlarına tıklanınca çalışacak döngü
for (let i = 0; i < plus.length; i++) {  
  plus[i].addEventListener("click", function () { 
    plus[i].classList.toggle("hidden"); // Tıklanan "plus" butonunu gizle/göster
    cross[i].classList.toggle("hidden"); // İlgili "cross" butonunu göster/gizle
    para[i].classList.toggle("hidden"); // İlgili "para" öğesini göster/gizle
  }); 
} 

// "cross" butonlarına tıklanınca çalışacak döngü
for (let i = 0; i < cross.length; i++) {  
  cross[i].addEventListener("click", function () { 
    cross[i].classList.toggle("hidden"); // Tıklanan "cross" butonunu gizle/göster
    plus[i].classList.toggle("hidden"); // İlgili "plus" butonunu göster/gizle
    para[i].classList.toggle("hidden"); // İlgili "para" öğesini göster/gizle
  }); 
}  
