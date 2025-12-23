# Flight Services MVP
Тестовое задание - веб-приложение для бронирования авиауслуг.
<div>
  <img width="1531" height="992" alt="image" src="https://github.com/user-attachments/assets/89d43d1d-eda2-4835-82b9-83f5beed1314" />
  <img width="434" height="850" alt="image" src="https://github.com/user-attachments/assets/768996a4-e8e3-494d-810d-d6cee994721d" />
</div>

## Запуск в режиме разработки

1. Установите зависимости:

```bash
pnpm install
```

2. Запустите dev-сервер:

```bash
pnpm dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Сборка проекта

```bash
pnpm build
```

Собранные файлы будут в директории `dist/`

## Превью production сборки

```bash
pnpm preview
```

Запустит локальный сервер на порту 4173 с production сборкой

## Запуск в Docker

1. Соберите Docker образ:

```bash
docker build -t flight-services-mvp .
```

2. Запустите контейнер:

```bash
docker run -p 80:80 flight-services-mvp
```

Приложение будет доступно по адресу `http://localhost`

## Дополнительные команды

```bash
pnpm lint      # Проверка кода с ESLint
pnpm format    # Форматирование кода с Prettier
```
