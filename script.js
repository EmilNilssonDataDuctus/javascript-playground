const initialData = {
  roles: [
    {
      value: "hello",
    },
    {
      value: "very good",
    },
    {
      value: "this is a value",
    },
    {
      value: "pw is banana",
    },
  ],
};

const originalList = document.getElementById("original-list");
const mainList = document.getElementById("main-list");
const secondList = document.getElementById("second-list");

const mainListBtn = document.getElementById("main-list-btn");
const secondListBtn = document.getElementById("second-list-btn");

initialData.roles.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item.value;
  originalList.insertAdjacentElement("beforeend", li);
});


mainListBtn.addEventListener("click", () => {
  const newData = transform(initialData);

  newData.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    mainList.insertAdjacentElement("beforeend", li);
  });
});

secondListBtn.addEventListener("click", () => {
  const newData = transformWithMap(initialData);

  newData.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    secondList.insertAdjacentElement("beforeend", li);
  });
});


function transform(attributes) {
  var roles = [];
  attributes.roles.forEach(function (item) {
    roles.push(item.value);
  });
  return roles;
}

function transformWithMap(attributes) {
  return attributes.roles.map((item) => item.value);
}
