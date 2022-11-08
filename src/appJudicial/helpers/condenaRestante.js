export const condenaRestante = (diasAcumulados, condenaDias, condenaMes, condenaAnios) =>{
    let condena = [condenaDias, condenaMes, condenaAnios]
    condena[0] = Number(condena[0]);
    condena[1] = Number(condena[1]*30);
    condena[2] = Number(condena[2]*360);
    condena = condena.reduce((a,b) => a+b, 0);
    let pendiente = 0;
    let resto = condena - diasAcumulados;
    if(resto <= 0){
        condena = []
        pendiente = "El tiempo de detencion excede la condena impuesta"
    } else if (resto % 360 === 0){
        condena = []
        condena[0] = Math.floor(resto/360)
        condena[1] = 0
        condena[2] = 0
        if(condena[0] > 1){
            pendiente = `${condena[0]} años`
        }else{
            pendiente = `${condena[0]} año`
        }
    } else if (resto > 360 && resto % 30 === 0){
        condena = []
        condena[0] = Math.floor(resto/360)
        condena[1] = Math.floor((resto%360)/30)
        condena[2] = 0
        if(condena[0] > 1 && condena[1] > 1){
            pendiente = `${condena[0]} años y ${condena[1]} meses`
        }else if(condena[0] === 1 && condena[1] > 1){
            pendiente = `${condena[0]} año y ${condena[1]} ${condena[1] === 1 ? 'mes' : 'meses'}`
        }else{
            pendiente = `${condena[0]} año y ${condena[1]} ${condena[1] === 1 ? 'mes' : 'meses'}`
        }
    } else if (resto > 360){
        condena = []
        condena[0] = Math.floor(resto/360)
        condena[1] = Math.floor((resto%360)/30)
        condena[2] = (resto%360)%30
        if(condena[0] > 1 && condena[1] > 1){
            pendiente = `${condena[0]} años, ${condena[1]} meses y ${condena[2]} ${condena[2] === 1 ? 'dia' : 'dias'}`
        }else if(condena[0] === 1 && condena[1] > 1){
            pendiente = `${condena[0]} años, ${condena[1]} mes y ${condena[2]} ${condena[2] === 1 ? 'dia' : 'dias'}`
        }else{
            pendiente = `${condena[0]} ${condena[0] === 1 ? 'año' : 'años'}${condena[1] === 0 ? "" : ", " + condena[1]} ${condena[1] === 0 ? "" : "mes"} y ${condena[2]} ${condena[2] === 1 ? 'dia' : 'dias'}`
        }
    } else if (resto > 30 && resto % 30 !== 0){
        condena = []
        condena[0] = 0
        condena[1] = Math.floor(resto/30)
        condena[2] = resto%30
        if(condena[1] > 1){
            pendiente = `${condena[1]} meses y ${condena[2]} ${condena[2] === 1 ? 'dia' : 'dias'}`
        }else{
            pendiente = `${condena[1]} mes y ${condena[2]} ${condena[2] === 1 ? 'dia' : 'dias'}`
        }
    } else if (resto % 30 === 0){
        condena = []
        condena[0] = 0
        condena[1] = resto/30
        condena[2] = 0
        if(condena[1] > 1){
            pendiente = `${condena[1]} meses`;
        }else{
            pendiente = `${condena[1]} mes`;
        }
    } else if (resto < 30){
        condena = []
        condena[0] = 0
        condena[1] = 0
        condena[2] = resto
        pendiente = `${condena[2]} ${condena[2] === 1 ? 'dia' : 'dias'}`;
    } 
    return {condena, pendiente}
}