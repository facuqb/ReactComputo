export const calcularAgotamiento = (condena = [], fechaComputo) =>{
    let fechaActual = fechaComputo.split('-');
    fechaActual[0] = Number(fechaActual[0]);
    fechaActual[1] = Number(fechaActual[1]);
    fechaActual[2] = Number(fechaActual[2]);
    fechaActual.reverse()
    let cumplimiento = []
    cumplimiento[0] = condena[2] + fechaActual[0]
    cumplimiento[1] = condena[1] + fechaActual[1]
    cumplimiento[2] = condena[0] + fechaActual[2]
    if (cumplimiento[0] > 31){
        cumplimiento[1]++
        cumplimiento[0] -= 30
    }
    if (cumplimiento[1] > 12){
        cumplimiento[2]++
        cumplimiento[1] -= 12
    }

    if((cumplimiento[1] != 1 && cumplimiento[1] != 3 && cumplimiento[1] != 5 && cumplimiento[1] != 7 && cumplimiento[1] != 8 && cumplimiento[1] != 10 && cumplimiento[1] != 12) && cumplimiento[0] > 30){
        cumplimiento[1]++
        cumplimiento[0] -= 30
    }
    if(cumplimiento[0] > 28 && cumplimiento[1] == 2 && cumplimiento[2] % 4 != 0){
        cumplimiento[1]++
        cumplimiento[0] -= 28
    }
    if(cumplimiento[0] > 29 && cumplimiento[1] == 2 && cumplimiento[2] % 4 == 0){
        cumplimiento[1]++
        cumplimiento[0] -= 29
    }
        let agotamiento = `La pena se agota el ${cumplimiento[0]}/${cumplimiento[1]}/${cumplimiento[2]}`;
        return {agotamiento}
}
