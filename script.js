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

const mainList = document.getElementById("main-list");
const secondList = document.getElementById("second-list");

document
  .getElementById("main-list-btn")
  .addEventListener("click", populateUsingTransform);

document
  .getElementById("second-list-btn")
  .addEventListener("click", populateUsingTransformWithMap);

initialData.roles.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item.value;
  document
    .getElementById("original-list")
    .insertAdjacentElement("beforeend", li);
});

function populateUsingTransform() {
  transformWithForEach(initialData).forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    mainList.insertAdjacentElement("beforeend", li);
  });
}

function populateUsingTransformWithMap() {
  transformWithMap(initialData).forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    secondList.insertAdjacentElement("beforeend", li);
  });
}

function transformWithForEach(attributes) {
  var roles = [];
  attributes.roles.forEach(function (item) {
    roles.push("transformWithForEach: " + item.value);
  });
  return roles;
}

function transformWithMap(attributes) {
  return attributes.roles.map((item) => "transformWithMap: " + item.value);
}
