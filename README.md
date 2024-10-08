# Веб-сервис, для обработки внутренних данных компании (frontend часть)

Разработка для компании ООО АСУ-ВЭИ 

Backend часть: https://github.com/finepik/datadownloader


## Описание:

### Было выполнено:
Разработаны серверная и клиентская части приложения.

**Серверная часть приложения:**
- разработка структуры базы данных и архитектуры приложения;
- написание моделей для таблиц базы данных;
- разработка эндпоинтов и функций-обработчиков запросов на сервере;
- тестирование.
  
**Клиентская часть приложения:**
- форма с возможностью отправки данных и файлов на сервер
- интеграция Telegram API для отправкой сообщений Telegram боту;
- тестирование;
  
**Дополнительный функционал:**
- различные проверки и ограничение запросов для обеспечения безопасности данных
- преобразование информации согласно техническому заданию
- развертывание приложения с помощью Docker.

### Стэк технологий:
- react;
- chakra ui;
- axios;
- formik;
- docker.


## Установка

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/finepik/file-loader-frontend.git
   cd datadownloader
   ```
2. **Установите зависимости**
    ```bash
    cd frontend
    yarn install
    ```
3. **Запуск сервера**
    ```bash
    yarn run dev
    ```

## Использование
После запуска сервера вы сможете получить доступ к приложению по адресу:
- React приложение: http://localhost:3000/
