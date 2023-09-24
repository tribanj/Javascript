const path = require("path");

console.log(
  path.dirname(
    "D:/study folder/rentMultiPage/Javascript/NodeJs/pathModules/path.js"
  )
);


console.log(
  path.extname(
    "D:/study folder/rentMultiPage/Javascript/NodeJs/pathModules/path.js"
  )
);


console.log(
  path.basename(
    "D:/study folder/rentMultiPage/Javascript/NodeJs/pathModules/path.js"
  )
);


console.log(
  path.parse(
    "D:/study folder/rentMultiPage/Javascript/NodeJs/pathModules/path.js"
  )
);


const myPath = path.parse(
  "D:/study folder/rentMultiPage/Javascript/NodeJs/pathModules/path.js"
);

console.log("path name----------->", myPath.name);
