// Получаем ссылку на кнопку
var openButton = document.getElementById("openButton");

// Добавляем обработчик события "click" для кнопки
openButton.addEventListener("click", function () {
  // Открываем HTML документ в новом окне или вкладке
  window.open("./family.html", "_blank");
});
