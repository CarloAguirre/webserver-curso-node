import express from 'express';
import hbs from 'hbs';
import * as url from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express()
//La siguiente importacion ayuda a evitar conflictos con '__dirname'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//el puerto esta radicado en las variables de entorno mediante 'dotenv'
const port = process.env.PORT

// HANDLEBARS; renderizar contenido

app.set('view engine', 'hbs');    // <--- Esta linea nos permitira renderizar utilizando handlebars(hbs)

// Parciales de hbs
hbs.registerPartials(__dirname + '/views/partials', function (err) {}); 

// Servir contenido estatico ////////////////////////////////////////////////////////////////
app.use(express.static('public')) // <--- Señalamos la carpeta 'public' y su contenido

app.get('/', (req, res)=> {
  res.render('home', {            //--> Podemos enviar como segundo argumento (controlador) un objeto y utilizarlo en el hbs/html
    nombre: 'Carlo Aguirre',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res)=> {
    res.render('generic', {            //--> Podemos enviar como segundo argumento (controlador) un objeto y utilizarlo en el hbs/html
      nombre: 'Carlo Aguirre',
      titulo: 'Curso de Node'
    });
  })

app.get('/elements', (req, res)=> {
  res.render('elements', {            //--> Podemos enviar como segundo argumento (controlador) un objeto y utilizarlo en el hbs/html
    nombre: 'Carlo Aguirre',
    titulo: 'Curso de Node'
  });
})

// en cualquier otro caso (ruta) enviara 'Error 404'
app.get('*', (req, res)=> {
  //Para enviar a un directorio desde "res", utilizamos la funcion "senfile()"
  res.render('404');
})



app.listen(port, () => {
  console.log(`Example apps listening on port ${port}`)
})




