function getByClassName(element, className) {
  // return element.getElementsByClassName(className)
  let resArr = [];
  // look at the current node
  if (element.classList.contains(className)) {
      resArr.push(element);
  }
  // Loop through the children and call recursively
  if (element.children.length > 0)  {
    for (let i = 0; i < element.children.length; i++) {
      resArr = resArr.concat(getByClassName(element.children[i], className));
    }
  }
  // output as list
  return resArr;
}

// This solution doesn't work outside a rendered DOM.  Virtual DOMs don't have parrents...
function getByClassNameHierarchy2 (element, classes) {
  let classList = classes.split(' > ');
  let resArr = [];
  const findLeafs = function (ele, c) {
    let res = [];
    // look at the current node
    if (ele.classList.contains(c)) {
        res.push(element);
    }
    // Loop through the children and call recursively
    if (ele.children.length > 0)  {
      for (let i = 0; i < ele.children.length; i++) {
        res = res.concat(findLeafs(ele.children[i], c));
      }
    }
    // output as list
    return res;
  };
  
  const tailCandidates = findLeafs(element, classList.pop());
  
  let classLength = classList.length;
  
  for (let i = 0; i < tailCandidates.length; i++) {
    let currParrent = tailCandidates[i].parrentNode;
    let currIndex = classLength - 1;
    let currSearch = classList[currIndex];
    let searching = true;
    
    if (!currParrent) continue;
    
    while (searching && currIndex >= 0) {
      if (currParrent.classList.contains(currSearch)) {
        if (currIndex === 0) {
          resArr.push(currParrent);
          searching = false; 
        } else {
          currParrent = currParrent.parrentNode;
          currIndex --;
          currSearch = classList[currIndex];
        }
      } else {
        searching = false; 
      }
    }
  }
  return resArr;
}



// icky approach
function getByClassNameHierarchy(element, classes, shallow = false) {
  // kinda like querySelectorAll
  // classes = "a > b > c"
  // element.querySelectorAll(".a > .b > .c")
  // only have direct descendent
  // return element.getElementsByClassName(className)
  
  let resArr = [];
  // look at the current node
  let candidateEle = [];
  var getByClassName = function (element, className) {
    // return element.getElementsByClassName(className)
    let resArr = [];
    // look at the current node
    if (element.classList.contains(className)) {
        resArr.push(element);
    }
    // Loop through the children and call recursively
    if (element.children.length > 0)  {
      for (let i = 0; i < element.children.length; i++) {
        resArr = resArr.concat(getByClassName(element.children[i], className));
      }
    }
    // output as list
    return resArr;
  }
  candidateEle = getByClassName(element, classList[0]);
  if (candidateEle.length > 0) classList.shift();
  if (candidateEle.length <= 0) return resArr;

  for (let j = 0; j < classList.length; j++) {
    let temp = [];
    if (candidateEle.length === 0) break;
    for (let i = 0; i < candidateEle.length; i++) {
      for (let z = 0; z < candidateEle[i].children.length; z++) {
        let curr = candidateEle[i].children[z];
        console.log('hello', curr, classList[j]);
        if (curr.classList.contains(classList[j])) {
          if (j < (classList.length)) {
            console.log('1');
            temp.push(curr);
          } else {
            console.log('2');
            resArr.push(curr);
          }
        }
      }
    }
    candidateEle = temp;
  }
  // output as list
  return resArr;
}


const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div id="root" class='a'>
      <div class='b' id='b-1'>
          <div class='a' id='a-2'>
               <div class='d' id='d-1'></div>
          </div>
          <div class='c' id='c-1'>
              <div class='a' id='a-3'>
                   <div class='d' id='d-2'></div>
              </div>
          </div>
      </div>
  </div>
`).window;
const getIds = (elements) => Array.from(elements).map(x => x.id);
// console.log(getIds(document.getElementsByClassName('a')));

// console.log(getByClassName(document.getElementById('root'),'a'), 'First Function');

console.log(getByClassNameHierarchy2(document.getElementById('root'),'a > b > c'));



/* 
Your previous Plain Text content is preserved below:

Hello Stephen.
Hello Jingsi.
 */
