const smartGarbage = function (trash, bins) {
  // Your code in here ...
  switch (trash) {
    case "waste":
      bins.waste++;
      break;
    case "recycling":
      bins.recycling++;
      break;
    case "compost":
      bins.compost++;
      break;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));