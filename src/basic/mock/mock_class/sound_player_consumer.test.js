import { SoundPlayer } from './sound_player';
import { SoundPlayerConsumer } from './sound_player_consumer';

jest.mock('./sound_player'); // SoundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

test('We can check if the consumer called the class constructor', () => {
  // eslint-disable-next-line no-unused-vars
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

test('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool(coolSoundFileName);

  // mock.instances is available with automatic mocks:
  const mockedSoundPlayerInstance = SoundPlayer.mock.instances[0];
  const mockedPlaySoundFile = mockedSoundPlayerInstance.playSoundFile;

  expect(mockedPlaySoundFile).toHaveBeenCalledTimes(1);
  expect(mockedPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
