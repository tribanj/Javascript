const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "rruby", "python", "java", "cpp"];
for (const key in programing) {
  console.log(programing[key]);
}


// map iteatable nahi hai esliy emap par ye loop nahi lagaye ja sakte hain 