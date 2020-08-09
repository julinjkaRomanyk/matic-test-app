export function getTestName(dirname: string = __dirname) {
    return dirname.split("/").reverse()[0];
  };