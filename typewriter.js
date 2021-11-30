const sentence = "hello how are you Mr Spaceman";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}

setTimeout(() => {
  console.log('\n');
}, 2000);