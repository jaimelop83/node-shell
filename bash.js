


// //Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// // process.stdin.on('data', (data) => {
// // //   const cmd = data.toString().trim(); //remove the newline
// // //   const cmd = data.toString().process.cwd();
// //   process.stdout.write('You typed: ' + cmd);
// //   process.stdout.write('\nprompt > ');
// // });

// const pwd = () => {
//     process.stdout.write(process.cwd());
//     process.stdout.write('\n');
// };

const pwd = require('./pwd');
const ls = require('./ls');
const handleUserInput = (input) => {
    const cmd = input.toString().trim();
  
    switch (cmd) {
      case 'pwd':
        pwd();
        break;
      // Handle other commands...
      case 'ls':
        ls();
        break;
        // handle other commands ...
      default:
        process.stdout.write('Command not found: ' + cmd);
        process.stdout.write('\n');
        process.stdout.write('prompt > ');
        break;
    }
  };
  
  process.stdout.write('prompt > ');
  process.stdin.on('data', handleUserInput);
  
  