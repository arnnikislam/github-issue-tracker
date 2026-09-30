// loadData all data
const loadAllData = async () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  const res = await fetch(url);
  const json = await res.json();
  const data = json.data;
  displayAllData(data);
};

// display all data
const displayAllData = (data) => {
  // getting the parent
  const allCardContainer = document.getElementById("all-card-container");
  allCardContainer.innerHTML = "";
  for (const card of data) {
    const newCard = document.createElement("div");
    const date = card.createdAt.slice(0, 10);
    const imgUrl =
      card.status.toLowerCase() === "open"
        ? "Open-Status.png"
        : "Closed-Status.png";
    const priorityStyle = card.priority.toLowerCase();
    newCard.innerHTML = `
  <div class="issue-card bg-white shadow-lg rounded-md py-4 space-y-2">
          <div class="flex justify-between items-center px-4">
            <img class="h-8 w-8" src="./assets/${imgUrl}" alt="" />
            <p
              class="${priorityStyle}-priority text-center py-1 px-5 rounded-full"
            >
              ${card.priority}
            </p>
          </div>
          <p class="text-lg font-bold px-4">
            ${card.title}
          </p>
          <p class="text-gray-500 text-sm px-4">
            ${card.description}
          </p>

          <div class="flex gap-3 justify-start items-center px-4">
            <p
              class="text-[#EF4444] text-xs bg-[#FEECEC] text-center py-2 px-5 rounded-full"
            >
              <i class="fa-solid fa-bug"></i> <span>${card.labels[0]} </span>
            </p>
            <p
              class="text-[#D97706] text-xs bg-[#FDE68A] text-center py-2 px-5 rounded-full"
            >
              <i class="fa-solid fa-life-ring"></i> <span>${card.labels[1]} </span>
            </p>
          </div>
          <hr class="border-none h-[2px] bg-[#E4E4E7] my-5" />

          <div class="px-4 text-gray-500 space-y-1 text-sm">
            <p>#1 ${card.author}</p>
            <p>${date}</p>
          </div>
        </div>
  `;

    allCardContainer.appendChild(newCard);
  }
};

// when click one all btn
document.getElementById("all-btn").addEventListener("click", () => {
  loadAllData();
});
