# Aplicación del Clima

Este es un proyecto básico que muestra el clima de una ciudad consultando la API de OpenWeatherMap. Permite al usuario buscar el clima actual de cualquier ciudad e indica temperatura, humedad, viento y un ícono representativo del clima.

## Herramientas usadas

- **HTML**: estructura de la página.
- **CSS**: estilos y diseño responsivo.
- **JavaScript**: lógica para consumir la API y actualizar la interfaz.
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

## Instalación y uso

1. Descarga o clona este proyecto en tu computadora.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa el nombre de una ciudad en la barra de búsqueda y haz clic en el botón de buscar o presiona Enter.
4. La aplicación mostrará:
   - Nombre de la ciudad
   - Temperatura actual en °C
   - Humedad
   - Velocidad del viento
   - Ícono del clima
   - Mensaje de error si la ciudad no es válida

## Archivos del proyecto

- `index.html`: contiene el HTML de la página.
- `styles.css`: contiene los estilos de la aplicación.
- `01-app.js`: contiene el código JavaScript que consume la API y controla la lógica de la app.
- Carpeta `imagenes/`: contiene los íconos utilizados (sol, nubes, lluvia, etc).

## Estructura de carpetas

📂 tu-proyecto
├── index.html
├── styles.css
├── 01-app.js
└── 📂 imagenes
├── clear.png
├── clouds.png
├── rain.png
├── drizzle.png
├── snow.png
├── mist.png
├── humidity.png
├── wind.png
└── search.png   
en este apartado incluyan las imagenes que tengan de referencias y/o pueden solo 
descargar una y cambiarba solo el nombre para que la reconosca



## Notas

- Necesitas una clave de API válida de OpenWeatherMap para que funcione. En el código está definida como:
const apiKey = "87b5abdd1ab18fdaca5ac926933b60de";


Puedes reemplazarla por tu propia clave desde la web de OpenWeatherMap.
- La aplicación es para fines educativos y no guarda registros.\

  
## Licencias 
Uso libre con fines educativos

## Instalación

Puedes descargar el proyecto o clonarlo con Git:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

