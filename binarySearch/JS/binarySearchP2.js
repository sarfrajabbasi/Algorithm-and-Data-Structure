function binarySearch(id, arr) {
  var min = 0;
  max = arr.length - 1;

  while (min <= max) {
    var midIndex = Math.floor((min + max) / 2);
    if (arr[midIndex].id == id) {
        return arr[midIndex];

    } else if (id > arr[midIndex].id) {
      min = midIndex;
    } else {
      max = midIndex;
    }
}
  return -1;
}
const lookingFor2 = { id: 23, name: "sarfraj" };
console.log(
  binarySearch(12, [
    { id: 1, name: "asif" },
    { id: 3, name: "alien" },
    { id: 5, name: "brock" },
    { id: 6, name: "sufiyan bhagodaa" },
    { id: 10, name: "Simona dost ki dusri biwi" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki  dost ki future wife" },
    { id: 15, name: "sabnam dost ki biwi" },
    { id: 17, name: "Kyle ,Niki ka phela husband" },
    { id: 18, name: "Jem " },
    { id: 19, name: "Rabbani-badaa" },
    { id: 21, name: "kaliya phelwan" },
    lookingFor2,
    { id: 24, name: "Ben 10" },
  ])
);
