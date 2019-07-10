class SoundPlayer {
  constructor(id = 0) {
    this.id = id;
  }

  playSoundFile(fileName) {
    console.log('Sound Player:', this.id);
    console.log('Playing sound file:', fileName);
  }
}

export {
  SoundPlayer,
};
