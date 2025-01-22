const path = require('path');

module.exports = {
  entry: './src/index.js', // входной файл
  output: {
    path: path.resolve(__dirname, 'dist'), // каталог для результатов сборки
    filename: 'index.js', // имя файла с результатами сборки (должно совпадать с entry point в шаге 1)
    library: 'ajs', // название нашей библиотеки
    libraryTarget: 'umd', // UMD (Universal Module Definition)
    libraryExport: 'default', // экспортируется имя default
    globalObject: 'this', // что принимать за глобальный объект (для Node.js, где нет window)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // обрабатываем все файлы с расширением .js
        exclude: /node_modules/, // исключаем node_modules
        use: {
          loader: 'babel-loader', // используем babel-loader для обработки файлов
        },
      },
    ],
  },
};
