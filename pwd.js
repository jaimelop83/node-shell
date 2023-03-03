const pwd = () => {
    process.stdout.write(process.cwd());
    process.stdout.write('\n');
    process.stdout.write('prompt > ');
  };
  
  module.exports = pwd;
  