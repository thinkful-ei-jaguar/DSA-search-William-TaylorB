const Queue = require('./searchalgorithms')
const BinarySearchTree = require('./searchalgorithms')

//1. a. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] find 8
//      11 <- middle arr[5]
//      is 8 less than 11? yes binarySearch(arr, 8, start, 5-1)
//      arr[4] = 8
//      is 8 = 8? yep
//      return 4 

//1. b. [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] find 16
//        11 <- middle arr[5]
//        is 16 more than 11? YEP binarySearch(arr, 16, 5+1, end)
//        arr[6] = 12
//        is 16 more than 12? YEP binarySearch(arr, 16, 6+1, end)  
//        arr[7] = 14
//        is 16 more than 14? YEP binarySearch(arr, 16, 7+1, end)
//        arr[8] = 15
//        is 16 more than 15? YEP binarySearch(arr, 16, 8+1, end)
//        arr[9] = 17
//        is 16 more than 17? NOPE binarySearch(arr, 16, 9, 8)  
//        uh oh start is more than end
//        return -1
//        16 is not a value in the array :(

//3. 
// Example input
//const library = [
//   { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
//   { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
//   { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
//   { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
//   { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
//   { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
//   { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
//   { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
//   { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
//   { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
// ];
// if I wanted to find "JavaScript: The Good Parts" with "005.2762" as its number 
// traverse the array
// if library[i].dewey === value && library[i].title === title
// return library[i]
// else return 'book not found'

//4.
//4a. in order [14, 15, 19, 25, 27, 35, 79, 89, 90, 91] min = 14 root = 25
//    pre-order  [35, 25, 15, 14, 19, 27, 89, 79, 91, 90]
//    post-order 
//4.b post-order [5 7 6 9 11 10 8]

/*5*/ const inOrder = (data) => {
    if (this.parent === null) {
        return null
        };
        const nodeList = [];
        const traverse = current => {
           if (current.left) traverse(current.left);
           nodeList.push(current.key);
           if (current.right) traverse(current.right);
        };
        traverse(data);
        return nodeList;
  };
     const postOrder = (data) => {
        if (this.parent === null) {
           return null
        };
        const nodeList = [];
        const traverse = current => {
           if (current.left) traverse(current.left);
           if (current.right) traverse(current.right);
           nodeList.push(current.key);
        };
        traverse(data);
        return nodeList;
     };
  const preOrder = (data) => {
        if (this.parent === null) {
           return null;
        };
        const nodeList = [];
        const traverse = current  => {
           nodeList.push(current.key);
           if (current.left) traverse(current.left);
           if (current.right) traverse(current.right);
        };
        traverse(data);
        return nodeList;
     }

  function main() {
     const myBST = new BinarySearchTree();
     myBST.insert(25);
     myBST.insert(15);
     myBST.insert(50);
     myBST.insert(10);
     myBST.insert(24);
     myBST.insert(35);
     myBST.insert(70);
     myBST.insert(4);
     myBST.insert(12);
     myBST.insert(18);
     myBST.insert(31);
     myBST.insert(44);
     myBST.insert(66);
     myBST.insert(90);
     myBST.insert(22);
     console.log(inOrder(myBST))
  }
  console.log(main());

  