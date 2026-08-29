const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:/Users/Dell/.gemini/antigravity/brain/f17d0046-65df-480c-9218-37358e9d6f95/.system_generated/logs/transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const parsed = JSON.parse(line);
      if (parsed.type === 'USER_INPUT') {
        fs.writeFileSync('C:/Users/Dell/Desktop/sih/original_prompt.txt', parsed.content);
        console.log('Successfully saved original prompt to original_prompt.txt');
        return;
      }
    } catch (e) {
      // ignore parse errors
    }
  }
}

processLineByLine();
