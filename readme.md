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
  * TABS: Control de tabs que se les mostrarán a los estudiantes.
  * TAB: Paginas que estarán disponible para los usuarios con perfil estudiante.
  * Admin-Docente: Pagina que se les mostrará a los usuarios que se logeen con perfil docente.
* Interfaces:
  > Carpeta que que alojará todas las interfaces que se estarán usando en el proyecto.
* Componentes:
  > Carpeta que alojará todos los componentes que se pueden usar en las diferentes paginas. 
