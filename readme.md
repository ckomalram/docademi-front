# Comandos Utiles:
> Para ejecutar en maquina con proyecto local:
* npm i
* npm run start

> Para Compilar y ejecutar en android:
* ionic capacitor add/copy android
  * ionic capacitor sync android
  * ionic capacitor run android -l --host=192.168.0.14   
     * (buscar ip de localhost con ipconfig y reemplazarlo)

# Estructura de proyecto
* Paginas:
  > Carpeta que contendrá las diferentes paginas que se pueden navegar en la app.
  * Tabs: Control de tabs que se les mostrarán a los estudiantes.
  * Tab: Paginas que estarán disponible para los usuarios con perfil estudiante.
  * Admin-Docente: Pagina que se les mostrará a los usuarios que se logeen con perfil docente.
  * Login: Pagina que posee logica para logearse en la aplicación y tambn logica para registrarse.
  * Forgot-Password: Pagina para recuperar password.
* Interfaces:
  > Carpeta que que alojará todas las interfaces que se estarán usando en el proyecto.
* Componentes:
  > Carpeta que alojará todos los componentes que se pueden usar en las diferentes paginas. 
  * agregar-actividad: Componente que contendrá un formulario para agregar una nueva actividad. Es utilizado por el docente.
  * avatar-selector: Componente para seleccionar un avatar al momento de registrarse.
  * detalles-actividad: Componente que muestra el detalle de una actividad. Esta acción es ejecutada con el botón ver mas, en el la actividad. Es utilizado por el docente.
* Servicios:
  > Carpeta que alojara todos los servicios que hacen interacción con el API de docademi.
  * ui : Servicio para enviar alertas.
  * user: Servicio que contendrá la logica para login y register de un usuario. Tambien para validar si el token aún es valido antes de ejecutar una acción.
  * docente: Servicio que contendrá las acciones del docente. CRUD de Clases, actividades.

# Referencias
* https://ionicframework.com/docs/utilities/animations
* https://github.com/ckomalram/docademi-front
