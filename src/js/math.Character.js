export default class Character {
  constructor(name) {
    this.name = name;
    this.attack = 100;
    this.stoned = false;
  }

  // Реализуйте классы Magician и Daemon с get/set stoned.
  // При этом get/set attack должен учитывать логику, описанную в легенде.

  get attack() {
    if (this.distance <= 0) {
      throw new Error('The distance is too short to attack');
    } else {
      // Сила урона зависит от расстояния (для Magician, Daemon) - линейно падает,
      // а именно: на ближайшую клетку 100%, на 5 клетку от себя - 60% (соответственно,
      // на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)
      let attack = this.attackValue - (this.distance - 1) * 10;

      // Возможность насылать «дурман» на магов и демонов. При этом их сила атаки
      // падает уже не только линейно, а по формуле: attack - log2(x) * 5, где x - это
      // расстояние в клетках. attack рассчитывается с учётом п.1. Пример: атака 100 единиц,
      // атакуем 2 клетку от себя, получаем вместе с дурманом: 85 (вместо 90).
      if (this.stoned) {
        attack -= Math.log2(this.distance) * 5;
      }

      if (attack < 1) {
        attack = 0;
      } else {
        attack = Math.round(attack);
      }

      return attack;
    }
  }

  set attack(value) {
    this.attackValue = value;
    return this.attack;
  }

  get stoned() {
    return this.stone;
  }

  set stoned(value) {
    this.stone = true;
  }
}