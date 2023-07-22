import ErrorRepository from '../error-repository';

// #region add

test('add should add', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.add(123, 'asd');

  expect(errorRepository.errorCodes.get(123)).toBe('asd');
});

test('add should throw if key is not a number', () => {
  const errorRepository = new ErrorRepository();

  expect(() => errorRepository.add('asd', 'asd')).toThrow('Illegal code');
});

test('add should throw if description is not a string', () => {
  const errorRepository = new ErrorRepository();

  expect(() => errorRepository.add(123, 123)).toThrow('Illegal description');
});

// #endregion add

// #region translate

test('translate should return description', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(123, 'asd');

  expect(errorRepository.translate(123)).toBe('asd');
});

test('translate should return unknown error if theres no code', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(123, 'asd');

  expect(errorRepository.translate(456)).toBe('Unknown error');
});

test('translate should throw if argument is not a number', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add(123, 'asd');

  expect(() => errorRepository.translate('qwe')).toThrow('Illegal code');
});

// #endregion translate
