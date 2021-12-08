// genero un array de especialistas medicos para usar luego
const Medicos =[
    {id:01, especialidad:"Medico Clinico", apellido:"Alvarez", osocial:"si"},
    {id:02, especialidad:"Medico Clinico", apellido:"Bruzzone", osocial:"no"},
    {id:03, especialidad:"Cardiologo", apellido:"Carrizo", osocial:"si"},
    {id:04, especialidad:"Cirujano", apellido:"Dalmasso", osocial:"no"},
    {id:05, especialidad:"Dermatologo", apellido:"Echevez", osocial:"si"},
    {id:06, especialidad:"Nutricionista", apellido:"Fernandez", osocial:"no"},
    {id:07, especialidad:"Traumatologo", apellido:"Gimenez", osocial:"si"},
    {id:08, especialidad:"Pediatra", apellido:"Klein", osocial:"si"},
    {id:09, especialidad:"Odontologo", apellido:"Pirlo", osocial:"no"},
    {id:10, especialidad:"Ginecologo", apellido:"Taborda", osocial:"si"}
];

// Guardo en localStorage el array de medicos generado
const MedicosEnJSON = (clave, valor)=> {localStorage.setItem(clave, valor)};
MedicosEnJSON ("ListaMedica",JSON.stringify(Medicos));

// genero un array de horarios para usar luego
const Horarios =[
    {id:"Medico Clinico", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Cardiologo", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Cirujano", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Dermatologo", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Nutricionista", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Traumatologo", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Pediatra", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Odontologo", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"},
    {id:"Ginecologo", hora1:"08:00", hora2:"09:00", hora3:"10:00", hora4:"16:00", hora5:"17:00"}
];

// Guardo en localStorage el array de horarios generado
const HorariosEnJSON = (clave, valor)=> {localStorage.setItem(clave, valor)};
HorariosEnJSON ("Horarios", JSON.stringify(Horarios));