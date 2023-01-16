

const buttons = ['A', 'B', 'C', 'D', 'E', 'F', 'G','S','Ab','Bb','Gb','Eb','Db'];

buttons.forEach((button) => {
  const btn = document.getElementById(`${button}key`);
  const sound = document.getElementById(button);

  btn.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
  });
  document.addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key.toUpperCase() === button) {
        sound.play();
    }
  });
});



