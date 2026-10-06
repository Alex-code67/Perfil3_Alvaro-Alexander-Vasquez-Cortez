# Perfil 3 — Álvaro Alexander Vásquez Cortez

Aplicación móvil hecha con **React Native + Expo** para la evaluación práctica del Perfil 3.
Muestra la información del estudiante y consume la API pública de Rick and Morty para listar sus personajes.

## Datos del estudiante

| Dato    | Valor                            |
| ------- | -------------------------------- |
| Nombre  | Álvaro Alexander Vásquez Cortez  |
| Carnet  | 20240408                         |
| Sección | B1                               |
| Grupo   | 1                                |

## Video demostrativo

[Ver video demostrativo](PEGA_AQUI_EL_ENLACE_DEL_VIDEO)

## Descargar el APK

[Descargar APK (Expo Build)](https://expo.dev/accounts/alex-code67/projects/rickandmorty-dex/builds/c5af4237-1ca4-4f6d-ac39-ef2d8457365e)

También se puede escanear este código QR desde el dispositivo Android:

<img src="apk/qr-apk.png" alt="QR de descarga del APK" width="220" />

## Funcionalidades

- **Splash screen e icono personalizados** (portal verde de Rick and Morty).
- **Pantalla 1 – Información del estudiante:** nombre, carnet, sección y grupo, con un botón para ir a la pantalla 2.
- **Pantalla 2 – Personajes:** lista de personajes con nombre, imagen, descripción (especie, género, origen y última ubicación) y estado (vivo / muerto / desconocido). Incluye indicador de carga, mensaje de error con botón de reintento, "deslizar para actualizar" y carga de más personajes al llegar al final de la lista (paginación).

## API utilizada

`GET https://rickandmortyapi.com/api/character?page=N`

De cada personaje se usan los campos `name`, `image`, `status`, `species`, `gender`, `origin` y `location`.

## Tecnologías

- Expo / React Native
- React Navigation (`@react-navigation/native` + `@react-navigation/native-stack`)
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
    CharactersScreen.js     Pantalla 2: lista de personajes
  components/
    Card.js                 Tarjeta reutilizable (imagen, título, etiqueta, descripción)
    InfoRow.js              Fila "etiqueta: valor"
    PrimaryButton.js        Botón principal
    Loader.js               Indicador de carga
    ErrorMessage.js         Mensaje de error con reintento
  hooks/
    useFetchData.js         Hook genérico de consumo de API (data, loading, error, refetch)
    useCharacters.js        Hook que usa useFetchData, pagina y prepara los personajes para la UI
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

```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```

El perfil `preview` de `eas.json` genera un `.apk`. Al terminar, EAS entrega un enlace para descargar el APK e instalarlo en el dispositivo.
