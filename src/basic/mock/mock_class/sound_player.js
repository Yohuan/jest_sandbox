class SoundPlayer {
  constructor(id = 0) {
    this.id = id;
  }

  playSoundFile(fileName) {
    // eslint-disable-next-line no-console
    console.log('Sound Player:', this.id);
    // eslint-disable-next-line no-console
    console.log('Playing sound file:', fileName);
  }
}

export {
  SoundPlayer,
};
