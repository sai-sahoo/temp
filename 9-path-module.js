const path = require('path');
// console.log(path.sep);
// const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

// console.log(path.delimiter);
// console.log(process.env.PATH);
// console.log(path.dirname('/content/subfolder/test.txt'));
// console.log(path.relative('app.js', 'content/subfolder/test.txt'));
// console.log(__dirname);
// console.log(path.posix);
// console.log(path.parse(__filename));
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));