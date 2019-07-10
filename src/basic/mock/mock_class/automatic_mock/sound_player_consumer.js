import { SoundPlayer } from './sound_player';

class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool(soundFileName) {
    this.soundPlayer.playSoundFile(soundFileName);
  }
}

export {
  SoundPlayerConsumer,
};
