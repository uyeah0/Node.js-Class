let path = require('path');

// 디렉토리 합치기
let directories = ["users", "sunny", "docs"];
let docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);

// 디렉토리명과 파일명 합치기
let curPath = path.join('/Users/sunny', 'notepad.exe');
console.log('파일 패스 : %s', curPath);

// 패스에서 디렉토리, 파일명, 확장자 구분하기
let filename = "C:\\Users\\sunny\\notepad.exe";
let dirname = path.dirname(filename);
let basename = path.basename(filename);
let extname = path.extname(filename);
console.log('디렉토리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);