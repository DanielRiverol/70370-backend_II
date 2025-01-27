# Plantilla de servidor básico con Express y Handlebars

Este proyecto es una plantilla básica para configurar un servidor con **Express**, **Handlebars** y archivos estáticos, ideal para iniciar rápidamente nuevos desarrollos en Node.js.

## Características

- **Express** para gestionar rutas y middleware.
- **Handlebars** como motor de plantillas para renderizar vistas dinámicas.
- Configuración para servir archivos estáticos desde la carpeta `public`.
- Configuración minimalista lista para usar.

---

## Instalación

### 1. Clonar el repositorio con `degit`

`degit` es una herramienta para clonar plantillas de manera limpia (sin el historial de Git).

#### Instalar `degit` (si no lo tienes instalado)

```bash
npm install -g degit
```

#### Clonar el repositorio

```bash
degit DanielRiverol/template-express-handlebars carpeta-destino
```

Reemplaza `usuario/repo-nombre` por el nombre del repositorio y `carpeta-destino` por el nombre de la carpeta donde deseas clonar el proyecto.

### 2. Instalar dependencias

Una vez clonado el repositorio, entra en la carpeta del proyecto:

```bash
cd carpeta-destino
```

Luego, instala las dependencias:

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

Este comando inicia el servidor en modo desarrollo:

```bash
npm start
```

### Actualizar dependencias (Opcional)

Para actualizar todas las dependencias a sus últimas versiones, instala `npm-check-updates` de forma global:

```bash
npm install -g npm-check-updates
```

Luego, ejecuta el siguiente comando para actualizar las dependencias:

```bash
ncu -u
```

Esto modificará tu archivo `package.json` para que todas las dependencias estén en sus últimas versiones.

Finalmente, instala las dependencias actualizadas:

```bash
npm install
```

## Estructura del proyecto

```plaintext
carpeta-destino/
├── public/                   # Archivos estáticos (CSS, JS, imágenes)
│   ├── css/
│   
│   
├── src/
│   └── views/                # Plantillas de Handlebars
│       ├── layouts/          # Layouts para las vistas
│       └── home.handlebars   # Vista principal
├── index.js                    # Archivo principal del servidor
├── package.json              # Dependencias y configuración del proyecto
├── README.md                 # Documentación del proyecto
```

---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
