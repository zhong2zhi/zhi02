document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskName = document.getElementById("taskName").value.trim();
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;

  if (!taskName || !startTime || !endTime) {
    alert("請填寫完整的任務資訊！");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = taskName;

  const time = document.createElement("span");
  time.className = "task-time";
  time.textContent = `開始：${formatTime(startTime)} 結束：${formatTime(endTime)}`;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  // 完成按鈕
  const completeButton = document.createElement("button");
  completeButton.className = "complete-btn";
  completeButton.textContent = "完成";
  let completeCount = 0;

  completeButton.addEventListener("click", function () {
    if (completeCount === 0) {
      listItem.classList.add("completed");
      completeCount++;
    } else {
      listItem.classList.add("removed");
      setTimeout(() => taskList.removeChild(listItem), 500);
    }
  });

  // 刪除按鈕
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "刪除";
  let deleteCount = 0;

  deleteButton.addEventListener("click", function () {
    if (deleteCount === 0) {
      listItem.classList.add("delete"); // 設定整個任務欄變紅色背景並加上刪除線
      deleteCount++;
    } else {
      listItem.classList.add("removed");
      setTimeout(() => taskList.removeChild(listItem), 500);
    }
  });

  buttonsDiv.appendChild(completeButton);
  buttonsDiv.appendChild(deleteButton);

  listItem.appendChild(title);
  listItem.appendChild(time);
  listItem.appendChild(buttonsDiv);
  taskList.appendChild(listItem);

  // 清空輸入欄位
  document.getElementById("taskName").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("endTime").value = "";
});

function formatTime(datetime) {
  const date = new Date(datetime);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12;
  return `${adjustedHours}:${minutes} ${period}`;
}