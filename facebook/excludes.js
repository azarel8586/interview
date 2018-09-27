items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
];
    
excludes = [
  {k: 'age', v: '20'},
  {k: 'type', v: 'phone'},
  {k: 'color', v: 'red'},
]

// example output: [{color: 'red', type: 'tv', age: 18}]
// so we're going to make our excludes a little easier to consume and find as part of a map.
let excludeMap = new Map();
excludes.forEach((objPair) => {
  let key = objPair.k + '_' + objPair.v;
  console.log('input', key);
  excludeMap.set(key, true);
});

items = items.filter((item) => {
  return !Object.keys(item).some((key) => {
    let searchStr = key + '_' + item[key];
    console.log('search', searchStr);
    return excludeMap.has(searchStr);
  });
});

console.log(items);
