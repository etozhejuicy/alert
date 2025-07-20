document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  const loader = document.createElement("div");
  loader.classList.add("preloader");
  loader.setAttribute('role', 'status');
  // loader.textContent = 'Загрузка новостей...';
  app.appendChild(loader);

  // fetch("https://api.allorigins.win/raw?url=https://tg.i-c-a.su/rss/radar_voronezh")
  //   .then((response) => response.text())
  //   .then((data) => {
  //     // Убираем прелоадер
  //     loader.remove();

  //     const parser = new DOMParser();
  //     const xmlDoc = parser.parseFromString(data, "text/xml");
      
  //     // Получаем все элементы <item>
  //     const items = xmlDoc.querySelectorAll("item");

  //     // Обрабатываем каждый пост
  //     items.forEach((item) => {
  //       const title = item.querySelector("title").textContent;
  //       const description = item.querySelector("description")?.textContent || "";
  //       const pubDate = item.querySelector("pubDate").textContent;
  //       const link = item.querySelector("link").textContent;
        
  //       // Создаем элемент поста
  //       const postElement = document.createElement("div");
  //       postElement.className = "post";
        
  //       // Форматируем дату
  //       const formattedDate = new Date(pubDate).toLocaleString("ru-RU", {
  //         day: "numeric",
  //         month: "long",
  //         year: "numeric",
  //         hour: "2-digit",
  //         minute: "2-digit"
  //       });
        
  //       // Заполняем содержимое поста
  //       postElement.innerHTML = `
  //         <h3>${title}</h3>
  //         <p>${description}</p>
  //         <div class="post-meta">
  //           <time datetime="${pubDate}">${formattedDate}</time>
  //           <a href="${link}" target="_blank" rel="noopener">Читать в Telegram</a>
  //         </div>
  //       `;
        
  //       // Добавляем пост в контейнер
  //       app.appendChild(postElement);
  //     });
  //   })
  //   .catch((err) => {
  //     console.error("Ошибка загрузки:", err);
  //     app.innerHTML = '<div class="post post-error">Ошибка при загрузке новостей</div>';
  //     loader.textContent = "Ошибка при загрузке новостей";
  //   });
});