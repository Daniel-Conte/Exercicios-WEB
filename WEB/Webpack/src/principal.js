//"import" é a forma oficial de importar no JS
import Pessoa from './pessoa'
// Este arquivo importa './pessoa' que importa 'moduloA' que importa 'moduloB'. Dá pra usar este metodo ou dá pra referenciar tudo neste arquivo

const atendente = new Pessoa
console.log(atendente.cumprimentar())