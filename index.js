const express = require("express");
const app = express();
const port = 3000;

//configurar ejs como motor de vistas (templates)
//vista -> "una pagina"
//template -> html con mas cosas
app.set("view engine","ejs");

// rutas / routes
app.get("/", (req, res) => {


    //TODO:logica para revisar fecha

    let message = "PENDIENTE DE CONFIRMAR"
    let currentDate = new Date();
    // currentDate.getDay()
    // currentDate.getMonth();
    // currentDate.getFullYear();
    // currentDate.getDate();

    // un dia del año:
    let targetDayOfTheMonth = 25;
    let TargetMonth = 11 //diciembre
    let currentDayOfTheMonth = currentDate.getDate(); //base1
    let currnetMonth = currentDate.getMonth(); //base 0
    if(currnetMonth === TargetMonth && currentDayOfTheMonth === targetDayOfTheMonth){
        message = "SI";
    }else{
        message = "NO";
    }

    //rango de fechas (verano)
    // let dateRangeStart = new Date(2021, 5, 20);
    // let dateRangeStartByYear = {}
    // dateRangeStartByYear[2021] = new Date(2021, 5, 20);
    // dateRangeStartByYear[2022] = new Date(2021, 5, 21);
    // dateRangeStartByYear[2023] = new Date(2021, 5, 21);
    // dateRangeStartByYear[2024] = new Date(2021, 5, 20);
    // dateRangeStartByYear[2025] = new Date(2021, 5, 21);

    // let dateRangeEndtByYear = {}
    // dateRangeEndtByYear[2021] = new Date(2021, 8, 21);
    // dateRangeEndtByYear[2022] = new Date(2021, 8, 22);
    // dateRangeEndtByYear[2023] = new Date(2021, 8, 22);
    // dateRangeEndtByYear[2024] = new Date(2021, 8, 21);
    // dateRangeEndtByYear[2025] = new Date(2021, 8, 22);
    

    // let currentDate = new Date();
    // let currentYear = currentDate.getFullYear();
    // let dateRangeStart =  dateRangeStartByYear [currentYear];
    // let dateRangeEnd = dateRangeStartByYear[currentYear];
    // if(currentDate >= dateRangeStart && currentDate <= dateRangeEnd){
    //     message = "si"
    // } else{
    //     message = "no"
    // }
    
    //dia de la semana
    // let currentDate = new Date();
    // let currentDateOfTheWeek = currentDate.getDay();
    // let viernes = 5;
    // if(currentDateOfTheWeek === viernes){
    //     message = "si"
    // }else{
    //     message = "no"
    // }

    // res.send('Hello World');
    // sea ausme que se incluye / viws al inicio
    // se asume que se incluye views al inicio
    // views/pages/index.html
    //-omitir views al inicio
    //-omitir la extencion del arichivo

    res.render("pages/index",{
        // message: message
        message
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

app.use(express.static("public"));