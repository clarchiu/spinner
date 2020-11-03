let spinner = ['|', '/', '-', '\\'];

//animation takes 9 frames for one complete turn
for (let i = 0; i <= 8; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i % 4]}   `);
  }, 100 + (i * 200));
}