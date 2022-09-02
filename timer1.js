const args = process.argv;

for (let num of args) {
  if (isNaN(num) || num < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
}