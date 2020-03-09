import Character from './math.Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}