# Reto-Tecnico-QA-Sofka
Este repositorio nace como resultado de la prueba técnica para automatización de pruebas para ingreso a los Training Leagues impartido por Sofka. Se plantea una posible solución usando React para la parte del frontend y Spring Boot para la parte del backend.

# Para tener en cuenta al correr localmente los aplicativos

## Frontend:
1. instalar las respectivas dependencias:
```
yarn install
```

2. Correr en ambiente local:
```
yarn dev
```

## Backend:
1. Asegurate de tener instalado **Java 17** pues el proyecto generado con Spring Boot tiene esta dependencia, al igual que con la configuraciones en Gradle.
2. Dale al play en el archivo **SpaceshipsApplication.java** y quedaran listos

### Endpoints del aplicativo:
* [GET] Todas las naves espaciales - http://localhost:8080/v1/api/spaceships
* [GET] Buscar nave por nombre -  http://localhost:8080/v1/api/spaceships/filter?name={spaceshipName}
* [POST] Crear nave espacial -  http://localhost:8080/v1/api/spaceships

# Notas:
#### 1.1
Estos aplicativos se deplegaron en la nube usando [Heroku](https://www.heroku.com/), tanto el frontend como el backend. A continuación las URL de cada aplicativo:
* **Frontend despelgado:**  [Frontend APP](https://spaceships-frontend.herokuapp.com/create) - https://spaceships-frontend.herokuapp.com/create
* **Backend despelgado:**  [BAckend APP](https://app-spaceships.herokuapp.com/) - https://app-spaceships.herokuapp.com/

#### Endpoints respectivos:
* [GET] Todas las naves espaciales - https://app-spaceships.herokuapp.com/v1/api/spaceships
* [GET] Buscar nave por nombre     - https://app-spaceships.herokuapp.com/v1/api/spaceships/filter?name={spaceshipName}
* [POST] Crear nave espacial       - https://app-spaceships.herokuapp.com/v1/api/spaceships/spaceships
