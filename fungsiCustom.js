// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = () => {
  fs.readFile(file1, 'utf8', (err, data){
    const data1 = JSON.parse(data)
    const message1 = getLastWord(data1.message);

    
    fs.readFile(file2, 'utf8', (err, data) {
      const data2 = JSON.parse(data)
      const message2 = getLastWord(data2.message);

      fs.readFile(file3, 'utf8', (err, data){
        const data3 = JSON.parse(data)
        const message3 = getLastWord(data3.message)
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

const getLastWord = (sentence) => {
  const arrSentence = sentence.split('').reverse();
  return arrSentence[0];
};