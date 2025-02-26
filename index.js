const readline = require('readline');

const questions = [
  'Pineapple pizza or sweet popcorn?',
  'Talking pets or talking babies?',
  'Winning the lottery or finding your soulmate?',
  'Test the waters or dive in the deep end?',
  'Glass half full or glass half empty?',
  'Ketchup or mayo?',
  'Phone or no phone in the toilet?',
  'Sort by price or by rating?',
  'Sauce on the side or sauce on top?',
  'Crunchy peanut butter or smooth peanut butter?',
  'Zombies or vampires?',
  'Funny story or one-liner?',
  'Bad breath or body odor?',
  'Working hard or hardly working?',
  'Sneezing or coughing?',
  'Air guitar or air drums?',
  'Robots or dinosaurs?',
  'Guacamole or salsa?',
  'Speeding ticket or parking ticket?',
  'Comedian in serious film or serious actor in comedy film?',
  'Silly hats or silly socks?',
  'A store where every item is free or a restaurant where every dish is calorie free?',
  'Passwords or secret handshakes?',
  'Noisy neighbors or nosey neighbors?',
  'Babies dressed as animals or animals dressed as humans?',
  'Fiction or non-fiction?',
  'French fries or onion rings?',
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Press any key to get a random question, or 'q' to quit.");

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', (key) => {
  if (key.toString() === 'q') {
    console.log('\nGoodbye!');
    process.exit();
  }
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  console.log('\n>>> ' + randomQuestion + '\n');
});
