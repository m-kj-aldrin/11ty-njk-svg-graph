const rand = (a, b) => a + Math.floor(Math.random() * (b - a));
export default ({ sortType }) => {
  let arr = [
    { name: "Mark", value: rand(-32, 32) },
    { name: "Jane", value: rand(-32, 32) },
    { name: "Caroline", value: rand(-32, 32) },
    { name: "Justin", value: rand(-32, 32) },
    { name: "Anders", value: rand(-32, 32) },
    { name: "Sonja", value: rand(-32, 32) },
    { name: "Karl", value: rand(-32, 32) },
    { name: "Hanna", value: rand(-32, 32) },
    { name: "Anna", value: rand(-32, 32) },
    { name: "Mats", value: rand(-32, 32) },
    { name: "Stefan", value: rand(-32, 32) },
    { name: "Lorents", value: rand(-32, 32) },
    { name: "Saskia", value: rand(-32, 32) },
    { name: "Mary", value: rand(-32, 32) },
  ];
  switch (sortType) {
    case null:
      return arr;
    case "name":
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    case "value":
      return arr.sort((a, b) => a.value - b.value);
  }
};
