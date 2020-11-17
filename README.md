# Документация к babel && webpack
### Installation

1. Clone the repo
```sh
git clone https://github.com/your_username_/Project-Name.git
```
2. Initial NPM packages
```sh
npm init
```
3. Install Babel and modules
```sh
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/plugin-transform-literals
```

4. Вариант1: Run the Babel compilation
```sh
npx babel src --out-dir build --plugins @babel/plugin-transform-literals
```

5. Вариант2: Or create Babel configuration file ".babelrc"
```JSON
"{"presets": [ @babel/preset-env"],
  plugins": [ @babel/plugin-transform-literals",
  "@babel/plugin-transform-classes",
  "@babel/plugin-transform-block-scoping"
  ]
}
```

6. and run the Babel config file compilation
```sh
npx babel src --out-dir build
```

7. Вариант3: or add Babel build condig to package.json
```JSON
{
   "scripts": {
     "build": "babel src -d lib"
   }
}
```

8. Browser optimization/ support versions in the Babel configuration file ".babelrc"
```JSON
"{"presets": [[ @babel/preset-env",
  {
    "debug": true,
    "targets": {
      "edge": "18",
      "last 2 chrome versions"
      "last 2 firefox versions"
      "ie": "11"
    }
  }]]
}
```
9. Вариант1: Browserl.ist > отвечает за парсинг выражений Targets

```JSON
      "targets": {
        "> 0.3%"
        "not ie > 0"
    }
```

10. Вариант2: Add Browserl.ist config to package.json
```JSON
{
   "browserlist": [
      "last 2 chrome versions",
      "last 2 firefox versions"
   ]
}
```

11. Вариант3: Create new file ".browserlistrc" with config.

```JSON
last 2 chrome versions
last 2 firefox versions
```

12. and run the Browserlist config file compilation
```sh
npx browserlist
```
 
 17. Install React and React-DOM
```sh
npm install react react-dom
```

 15. Install Babel React preset
```sh
npm install --save-dev @babel/preset-react
```

14. Add Babel react preset to Babel configuration file ".babelrc"
```JSON
"{"presets": [ @babel/preset-env",
              "@babel/presets-react"
]}
```
18. WebPack- cборка и оптимизация JS приложений

WebPack - анализирует модули и их зависимости, создает bundle - один или несколько файлов, готовых для production. 

19. Установка WebPack

```sh
npm install --save-dev webpack webpack-cli
```

Запуск webpack: точка входа index.js, webpack первым ищет src/index.js файл. После анализа модулей, создает dist/main.js

```sh
npx webpack
```
Mode - Режим работы WebPack. 
Dev - для разработки(работает быстрее, не минифицирует файлы).
Production - создает оптимизированный билд.

Для запуска в DEV MODE
```sh
npx webpack --mode development
```
20. Конфигурационный файл webpack.config.js

```JS
module.exports = {
  mode: "development"
};
```

Запускаем webpack
```sh
npx webpack
```

21. Конфигурация файла package.json
```JSON
"scripts": {
  "start": "webpack"
}
```

22. Webpack Loader
В webpack любой файл может участвовать в сборке.

Вебпак обрабатывает файлы при помощи Loader'ов.

Устанавливаем file-loader
```sh
npm install --save-dev file-loader
```

Настраиваем Конфигурационный файл webpack.config.js

```JS
module.exports = {
  mode: "development",

  module: {
    rules: [
      коллекция правил как обрабатывать модули!
      {
        test: /\.png$/,
        use: [{ loader: `file-loader` }]
      }
    ]
  }
};
```
Запускаем build через npm start
```sh
npm start
```

23. Конфигурация Webpack Loader
Большинство Loader'ов можно конфигурировать, используя блок options: ...;

след. пример: храним файлы с русунками в отдельной папке и с правильными названиями
```JS
module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          { 
            loader: `file-loader`,
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      }
    ]
  }
};
```

24. Конфигурация разных типов файлов через Webpack Loader

Один loader можно использовать для разных расширений:
test: /\.(ttf|otf|eot|woff|woff2)$/

Разные типы файлов лучше размещать в разных блоках use!
```JS
module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          { 
            loader: `file-loader`,
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          { 
            loader: `file-loader`,
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
```

25. React и babel Loader
Большинство loader'ов преобразуют файлы (транспилируют, анализируют, сжимают и т.д).

babel-loader запускает bable для обработки файлов (конфигурация - в .babelrc)

Можно указывать исключения для правил:
не обрабатывать файлы в папке:
exclude: /node_modules/

Устанавливаем babel-loader
```sh
npm install --save-dev babel-loader
```

Добавляем правила в loader-е для обработки js файлов 
```js
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
      {
          loader: "babel-loader"
      }
  ]
```

26. Композиция loader-ов
В WebPack один файл может обрабатываться последовательно несколькими Loader'ами.

Порядок имеет значение! Первым файл обрабатывается последний loader из массива!

Устанавливаем css-loader
```sh
npm install --save-dev css-loader
```

Добавляем правила в loader-е для обработки css файлов
```js
  {
    test: /\.(css)$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' }
    ]
  }
```

Устанавливаем style-loader
```sh
npm install --save-dev style-loader
```

27. CSS перпроцессоры, SASS
Препроцессоры добавляются в цепочку loader'ов (первыми обрабатывают файл)

Устанавливаем node-sass и sass-loader
```sh
npm install --save-dev node-sass sass-loader
```

Добавляем правила в loader-е для обработки sass и css файлов
```js
  {
      test: /\.(s[ca]ss)$/,
      use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
      ]
  }
```

28. Упрощение синтаксиса webpack.config.js

```js
  {
      test: /\.(s[ca]ss)$/,
      use: [ 'style-loader', 'css-loader', 'sass-loader']
  }
```

28. Плагины
loader'ы используют для работы с одним модулем, а плагины - для работы со всем проектом.

Устанавливаем htlm-webpack-plugin
```sh
npm install --save-dev html-webpack-plugin
```

Добавляем правила для выполнения плагинов.
```js
const HtmlWebpackPLugins = require('htlm-webpack-plugin');

  plugins: [
      new HtmlWebpackPLugins({
          template: 'public/index.html'
      })
  ]

```
 
 30. Мини CSS Extract plugin
Mini CSS Extract plugin - сохраняет все фрагменты CSS кода в отдельный файл.

 Устанавливаем htlm-webpack-plugin
```sh
npm install --save-dev mini-css-extract-plugin
```

Добавляем правила для выполнения плагинов.
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  plugins: [
      new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      })
  ]

```
Изменяем style-loader на MiniCssExtractPlugin
```js
    {
        test: /\.(css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
        test: /\.(s[ca]ss)$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader' ]
    }
```

 30. WebPack Dev Server
Запускает веб-сервер, отдает файлы собранного приложения (папка "dist").

 Производит сборку в памяти, не сохраняет файлы в файловой системе.

  Устанавливаем WebPack Dev Server
```sh
npm install --save-dev webpack-dev-server
```

Изменяем в package.json команду "START" c "webpack" на "webpack-dev-server" и добавляем команду "BUILD" с "webpack".
```JSON
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
}
```

 31. Конфигурация Produciton
Production конфигурация существенно отличается от Development конфигурации.

Как передать параметры из командной строки:
webpack --env.mode=production

Первый способ разделения DEV от PROD:
Создать файл конфигурации webpack с названием webpack.prod.config.js для режима "PROD", и создать webpack.dev.config.js для режима "DEV".

В файле конфигурации packaje.json отредактировать команды запуска.
```JSON
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --config webpack.prod.config.js"
}
```

Второй способ разделения DEV от PROD:

В файле конфигурации packaje.json отредактировать команды запуска.
```JSON
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --env.mode=production"
}
```

Изменяем сам файл конфигурации webpack.config.js
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {

    const { mode = 'development' } = env;

    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ];
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'Hello World',
                buildTime: new Date().toISOString(),
                template: 'public/index.html'
            })
        ];

        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css'
                })
            );
        }

        return plugins;
    };

    return {
        mode: isProd ? 'production': isDev && 'development',

        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined
        },

        module: {
            rules: [

                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },

                // Loading images
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },

                // Loading fonts
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },

                // Loading CSS
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },

                // Loading SASS/SCSS
                {
                    test: /\.(s[ca]ss)$/,
                    use: [ ...getStyleLoaders(), 'sass-loader' ]
                }

            ]
        },

        plugins: getPlugins(),

        devServer: {
            open: true
        }
    };
};
```
