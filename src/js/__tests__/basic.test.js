/* eslint-disable import/extensions */
import orderByProps from '../sortingFunc';

test('возвращает упорядоченный массив', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  const result = orderByProps(obj, ['name', 'level']);

  expect(result).toStrictEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
