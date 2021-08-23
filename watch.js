const exec = require("child_process").exec;
const fs = require("fs");
const opt = {
  recursive: true, // recursive <boolean> 指示应该监视所有子目录，还是仅监视当前目录。 这适用于监视目录时，并且仅适用于受支持的平台。默认值: false。
};
fs.watch(__dirname, opt, (eventType, filename) => {
  if (filename.split(".").pop() === "ts") {
    console.log(eventType);
    console.log(`${filename}文件改动，重新编译中...`);
    exec("npm run tsc");
  }
});
console.log("TypeScript自动编译脚本已成功运行...");
