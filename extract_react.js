const fs = require('fs');
const content = fs.readFileSync('C:/Users/Dell/Desktop/sih/original_prompt.txt', 'utf-8');
const match = content.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (match) {
  fs.writeFileSync('C:/Users/Dell/Desktop/sih/extracted_react.js', match[1]);
  console.log('Extracted React code:', match[1].length, 'bytes');
} else {
  console.log('Babel script tag not found.');
}
