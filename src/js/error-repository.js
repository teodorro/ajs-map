export default class ErrorRepository {
  constructor() {
    this.errorCodes = new Map();
  }

  add(code, description) {
    if (code == null || !Number.isInteger(code)) {
      throw new Error('Illegal code');
    }
    if (
      description == null
      || !(typeof description === 'string' || description instanceof String)
    ) {
      throw new Error('Illegal description');
    }
    this.errorCodes.set(code, description);
  }

  translate(errorCode) {
    if (errorCode == null || !Number.isInteger(errorCode)) {
      throw new Error('Illegal code');
    }
    if (this.errorCodes.has(errorCode)) {
      return this.errorCodes.get(errorCode);
    }
    return 'Unknown error';
  }
}
