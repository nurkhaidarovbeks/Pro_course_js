export const LoggerMixin = (Base) =>

class extends Base {

  log(message) {
    console.log("[LOG]: " + message);
  }

};