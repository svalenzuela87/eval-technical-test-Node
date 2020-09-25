# bromaTool
Proyecto para EXO

Herramienta para buscar bromas

## Descripcion breve

Sobre el archivo "broma.js" colocar la palabra (en ingles) como parametro que buscara el chiste relacionado sobre la api <https://icanhazdadjoke.com/api> y la guardara en un archivo de texto externo sobre la misma ubicacion del ejecutable.

## Requerimientos

Estos son algunos ejemplos para ejecutar la linea de comandos con argumentos:

    - node .\broma.js gat
    - node .\broma.js woman

### Dependencias

Estos son los modulos solicitados sobre node.js:

1. fs - para escribir sobre un archivo externo (.txt en este caso)
2. process - para tomar los argumentos o parametros por linea de comando
3. https - para armar el request sobre la API

=======
