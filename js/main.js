document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector(".slider");
  
    // Замените на количество ваших фотографий и путь к ним
    const numberOfPhotos = 4;
    const photoPath = "photo";
  
    for (let i = 1; i <= numberOfPhotos; i++) {
      const img = document.createElement("img");
      img.src = `${photoPath}${i}.jpg`;
      img.alt = `Photo ${i}`;
      galleryContainer.appendChild(img);
    }
  });
  