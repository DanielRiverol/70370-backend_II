# Plantilla de servidor básico con Express

Este proyecto es una plantilla básica para configurar un servidor con **Express** y **Nodemon**, ideal para iniciar rápidamente nuevos desarrollos en Node.js.

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
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
degit DanielRiverol/template-express-basic carpeta-destino
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

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```

### Actualizar dependencias (Opcional)

Para poder todas estas dependencias a su última versión, deberás instalar un paquete llamado `npm-check-updates` de forma global:

```bash
npm install -g npm-check-updates
```

Una vez instalado deberás correr el siguiente comando:

```bash
ncu -u
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

## Estructura del proyecto

```plaintext
carpeta-destino/
├── package.json    # Dependencias y configuración del proyecto
├── index.js       # Archivo principal del servidor
├── README.md       # Documentación del proyecto
```

---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.