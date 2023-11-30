import express from "express"; //npm i --save-dev @types/express
import RotasAluno from './routes/RotasAluno';
import RotaPrincipal from "./routes/RotaPrincipal";
import RotasProfessor from "./routes/RotasProfessor";


const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(RotasAluno);
app.use(RotaPrincipal);
app.use(RotasProfessor)

app.listen(port, function (){

console.log(`Server Running on port ${port}`);

})