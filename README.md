# Perfil 3 — Ian Orellana

Aplicación móvil hecha con **React Native + Expo** para la evaluación práctica del Perfil 3.
Muestra la información del estudiante y consume la API pública de Dragon Ball para listar sus planetas.

## Datos del estudiante

| Dato    | Valor        |
| ------- | ------------ |
| Nombre  | Ian Orellana |
| Carnet  | 20240211     |
| Sección | B            |
| Grupo   | 1            |

## Descargar el APK

[Descargar Perfil3_IanOrellana.apk](apk/Perfil3_IanOrellana.apk?raw=1)

También se puede escanear este código QR desde el dispositivo Android:

<img src="apk/qr-apk.png" alt="QR de descarga del APK" width="220" />

## Funcionalidades

- **Splash screen e icono personalizados** (esfera del dragón de 4 estrellas).
- **Pantalla 1 – Información del estudiante:** nombre, carnet, sección y grupo, con un botón para ir a la pantalla 2.
- **Pantalla 2 – Planetas:** lista de planetas con nombre, imagen, descripción y estado (destruido / intacto). Incluye indicador de carga, mensaje de error con botón de reintento y "deslizar para actualizar".

## API utilizada

`GET https://dragonball-api.com/api/planets`

De cada planeta se usan los campos `name`, `image`, `description` e `isDestroyed`.

## Tecnologías

- Expo SDK 57 / React Native 0.86
- React Navigation 7 (`@react-navigation/native` + `@react-navigation/native-stack`)
- `fetch` con `async/await`

## Estructura del proyecto

```
App.js                      Punto de entrada: monta el navegador
src/
  navigation/
    AppNavigator.js         Stack con las dos pantallas
    routes.js               Nombres de las rutas
  screens/
    HomeScreen.js           Pantalla 1: información del estudiante
    PlanetsScreen.js        Pantalla 2: lista de planetas
  components/
    Card.js                 Tarjeta reutilizable (imagen, título, etiqueta, descripción)
    InfoRow.js              Fila "etiqueta: valor"
    PrimaryButton.js        Botón principal
    Loader.js               Indicador de carga
    ErrorMessage.js         Mensaje de error con reintento
  hooks/
    useFetchData.js         Hook genérico de consumo de API (data, loading, error, refetch)
    usePlanets.js           Hook que usa useFetchData y prepara los planetas para la UI
  constants/
    api.js                  URL de la API
    student.js              Datos del estudiante
    theme.js                Colores, espaciados y radios
assets/                     Icono, icono adaptable de Android y splash
```

Las pantallas solo renderizan: toda la lógica de la petición vive en los custom hooks.

## Cómo ejecutar el proyecto

```bash
npm install
npx expo start
```

Luego se escanea el código QR con Expo Go o se presiona `a` para abrirlo en un emulador de Android.

## Cómo generar el APK

**Opción 1 – EAS Build** (perfil `preview` de `eas.json`, que genera un `.apk`):

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

Al terminar, EAS entrega un enlace para descargar el APK e instalarlo en el dispositivo.

**Opción 2 – Build local** (requiere Android SDK y JDK instalados):

```bash
npx expo prebuild --platform android
cd android
./gradlew assembleRelease
```

El APK queda en `android/app/build/outputs/apk/release/app-release.apk`.
