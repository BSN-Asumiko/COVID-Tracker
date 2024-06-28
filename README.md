
# Covid Tracker 💊 🧫

## Índice 📝

- [Descripción](#descripcion)
- [Instalación](#instalacion)
    - [Requisitos previos](#requisitos-previos)
    - [Instalación del proyecto](#instalacion-del-proyecto)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologias)
- [Contribuición](#contribuicion)
    - [Convenciones del proyecto](#convenciones-del-proyecto)
- [Developers](#developers)
- [Capturas de pantalla](#capturas-de-pantalla)

## Descripción 💡

Proyecto de estudiantes para la creación de un tracker COVID-19, en el que se consume la API de [disease.sh](http://disease.sh/) para extraer información de forma dinámica. Los objetivos principales del proyecto han sido aplicar conceptos fundamentales de React y del consumo de APIs.

## Instalación 💾
### Requisitos previos

Instalar Node.js:
[Descargar Node.js](https://nodejs.org/)

### Instalación del proyecto

1. Clonar el repositorio:
```bash
 git clone https://github.com/BSN-Asumiko/COVID-Tracker
```

2. Instalar dependencias:
```bash
 npm install
 ```

## Uso ⌨️

Para visualizar el proyecto: 

1. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```
2. Abre el local host en tu navegador para ver la aplicación.


## Estructura del proyecto 📐 

```plaintext
/
├── public
├── src
│   ├── components/
│   │   ├── homepage
│   │   ├── tracker
│   │   └── ui
│   ├── config
│   ├── hooks
│   ├── layout
│   ├── lib
│   ├── pages
│   ├── router
│   ├── services
│   ├── utils
│   ├── index.css
│   └── main.jsx
├── components.json
├── index.html
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

```
- **public/:** Contiene los recursos estáticos del proyecto como imágenes, iconos y fuentes.
- **src/:** Contiene los archivos fuente de la aplicación.
    - ***components/:*** Contiene los componentes reutilizables de React.
        - ***homepage/:*** Contiene todos los componentes, separados por carpetas individuales, que forman la parte de homepage del proyecto.
        - ***tracker/:*** Contiene todos los componentes, separados por carpetas individuales, que forman la parte de tracker del proyecto.
        - ***ui/:*** Contiene los componentes importados de la librería shadcn.
    - ***config/:*** Contiene el arcihvo urls.js, que nos ayuda a dinamizar la llamada a la API.
    - **layout:** Carpeta que contiene las rutas de los dos layouts principales (homepage y tracker) de la aplicación.
    - ***pages:*** Carpeta que contiene las rutas a las páginas dinámicas de la aplicación.
    - ***router:*** Dentro del que se encuentra index.jsx, que contiene la lógica de rutas de la aplicación.
    - ***services:*** Dentro del que se encuentra useApi.jsx con la llamada a la API reutilizada en todos los apartados de la aplicación. 


## Tecnologías 🔬

- [HTML5](https://developer.mozilla.org/es/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS/CSS3)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn // ui](https://ui.shadcn.com/)


## Contribuición 💻

1. Haz fork al repositorio.
2. Crea una nueva rama: `git checkout -b feature-name`.
3. Haz tus cambios.
4. Haz push de tu rama: `git push origin feature-name`.
5. Haz un pull request.

### Convenciones del proyecto

Uso de GitFlow. 

Trabajamos desde y a la rama dev. 

Estilos CSS con Tailwind CSS.

Usamos librería [shadcn]() para ciertos componentes.

Nombramiento de las carpetas y documentos jsx:

```bash
 componentes
    soyUnComponente 📂     
        SoyUnComponente.jsx
```

## Developers 👩‍💻

- [Jessica Arroyo](https://github.com/jess-ar) 
- [Ekaterina Buinovskaia](https://github.com/BSN-Asumiko) 
- [Betty Lopez](https://github.com/BettyLopo) 
- [Carla Sánchez](https://github.com/Carlassanchez24)
- [Valentina Toni](https://github.com/ItalianCookieMonster) 

## Capturas de Pantalla 📸

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/094595d5-cdf9-413d-8736-6222e2dc2d6c)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/5ad7d326-bad9-411b-9f21-5065f85a660d)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/81ee0b07-967f-42cb-a0cf-fb44520153c6)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/8b11b9a3-9824-4f68-92af-216fccdb5af3)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/bdbfb532-4307-447a-9c62-5d8851208b86)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/4dd6e8c9-a85f-4f02-a0c9-c27420ebd86f)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/821a8918-9fb7-41fb-9e7f-aa449fa765b6)

![image](https://github.com/BSN-Asumiko/COVID-Tracker/assets/168748574/3946bf25-6c29-48ee-b76a-39d41beffd4d)


