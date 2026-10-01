// ===================== all data loading ================
// load all data
let allData = [];
const loadAllData = async () => {
  showSpinner(true);
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  const res = await fetch(url);
  const json = await res.json();
  const data = json.data;
  allData = [...data];
  displayAllData(data);
  countData(data.length);
};

// =============== for counting issues ===============
const countData = (count) => {
  const countContainer = document.getElementById("issue-count");
  countContainer.innerText = count;
};

// ============ for showing spinner =====================
const showSpinner = (value) => {
  if (value) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("all-card-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("all-card-container").classList.remove("hidden");
  }
};

// ================ display all data ======================
// display all data
const displayAllData = (data) => {
  // getting the parent
  const container = document.getElementById("all-card-container");
  container.innerHTML = "";
  for (const card of data) {
    const newCard = document.createElement("div");
    const date = card.createdAt.slice(0, 10);
    const imgUrl =
      card.status.toLowerCase() === "open"
        ? "Open-Status.png"
        : "Closed-Status.png";
    const priorityStyle = card.priority.toLowerCase();
    newCard.innerHTML = `
  <div onclick="dataById(${card.id})" class="${card.status.toLowerCase()}-border issue-card bg-white shadow-lg rounded-md py-4 space-y-2 h-full">
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
    showSpinner(false);
    container.appendChild(newCard);
  }
};

// ============== display open data only ===============
const displayOpenData = () => {
  const openData = allData.filter(
    (data) => data.status.toLowerCase() === "open",
  );
  countData(openData.length);
  displayAllData(openData);
};

// ============== display closed data only ===============
const displayClosedData = () => {
  const closedData = allData.filter(
    (data) => data.status.toLowerCase() === "closed",
  );
  countData(closedData.length);
  displayAllData(closedData);
};

// =========== display card details as modal ==================
// fetch every card 1st
const dataById = (id) => {
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then((res) => res.json())
    .then((json) => cardModal(json.data));
};

const cardModal = (data) => {
  const isOpen = data.status.toLowerCase() === "open" ? "Opened" : "Closed";
  const date = data.updatedAt.slice(0, 10);
  const modalDes = document.getElementById("modal-des");
  modalDes.innerHTML = `
  <h2 class="font-bold text-xl">${data.title}</h2>
            <ul class="list-disc flex justify-between text-gray-500">
              <li
                class="${isOpen} text-xs text-center py-2 px-5 rounded-full list-disc"
              >
                ${isOpen}
              </li>
              <li>${isOpen} by ${data.author}</li>
              <li>${date}</li>
            </ul>
            <div class="flex gap-3 justify-start items-center px-4">
              <p
                class="text-[#EF4444] text-xs bg-[#FEECEC] text-center py-2 px-5 rounded-full"
              >
                <i class="fa-solid fa-bug"></i> <span> ${data.labels[0]} </span>
              </p>
              <p
                class="text-[#D97706] text-xs bg-[#FDE68A] text-center py-2 px-5 rounded-full"
              >
                <i class="fa-solid fa-life-ring"></i>
                <span> ${data.labels[1]} </span>
              </p>
            </div>

            <p>
              ${data.description}
            </p>
            <div class="bg-[#F8FAFC] rounded-md p-4 flex justify-between">
              <p>
                Assignee: <br />
                <span class="font-semibold">${data.assignee ? data.assignee : "No assignee"}</span>
              </p>
              <p>
                Priority: <br />
                <span
                  class="${data.priority.toLowerCase()}-priority text-xs text-center py-2 px-5 rounded-full"
                  >${data.priority}</span
                >
              </p>
            </div>
  
  `;
  document.getElementById("my_modal").showModal();
};

// =============== when click on tab btn ================
// when click one all btn
document.getElementById("all-btn").addEventListener("click", () => {
  loadAllData();
});
// when click on open btn
document.getElementById("open-btn").addEventListener("click", () => {
  displayOpenData();
});
// when click on closed btn
document.getElementById("closed-btn").addEventListener("click", () => {
  displayClosedData();
});

// ============== for togging tab btn ==============
document.getElementById("tab-btns").addEventListener("click", (e) => {
  const clickedBtn = e.target.closest(".tab-btn");
  if (!clickedBtn) {
    return;
  } else {
    const allBtns = document.querySelectorAll(".tab-btn");
    allBtns.forEach((btn) => {
      btn.classList.remove("btn-primary", "text-white");
    });
    clickedBtn.classList.add("btn-primary", "text-white");
  }
});

// call always all data
loadAllData();
