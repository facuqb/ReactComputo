export const calculoDet = (fechaDet,fechaLibertad) => {
    let fecha1 = 0
    let fecha2 = 0
    let dias;
    let aFecha1 = fechaDet.split('-');
    aFecha1[2] = Number(aFecha1[2]);
    aFecha1[1] = Number(aFecha1[1]*30);
    aFecha1[0] = Number(aFecha1[0]*360)
    fecha1 +=aFecha1.reduce((a,b) => a+b, 0)
    let aFecha2 = fechaLibertad.split('-');
    aFecha2[2] = Number(aFecha2[2]);
    aFecha2[1] = Number(aFecha2[1]*30);
    aFecha2[0] = Number(aFecha2[0]*360)
    fecha2 += aFecha2.reduce((a,b) => a+b, 0)
    dias = fecha2 - fecha1;
    let detencion;

    if(dias === 0){
        dias = 1;
    }
    if(dias < 0){
        detencion = "Periodo Invalido" 
    }else if(dias % 360 === 0){
        detencion = `${Math.floor(dias/360)} ${(Math.floor(dias/360) === 1) ? 'año' : 'años'} `
    } else if (dias > 360 && dias % 30 === 0){
        detencion = `${Math.floor(dias/360)} ${(Math.floor(dias/360) === 1) ? 'año' : 'años'}
        y ${Math.floor((dias%360)/30)} ${(Math.floor((dias%360)/30) === 1) ? 'mes' : 'meses'}`
    } else if (dias > 360){
        if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} años, ${Math.floor((dias%360)/30)} meses y ${(dias%360)%30} ${((dias%360)%30) === 1 ? 'dia' : 'dias'}`
        }else if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 1){
            detencion = `${Math.floor(dias/360)} años, ${Math.floor((dias%360)/30)} mes y ${(dias%360)%30} ${((dias%360)%30) === 1 ? 'dia' : 'dias'}`
        }else if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 0){
            detencion = `${Math.floor(dias/360)} años y ${(dias%360)%30} ${((dias%360)%30) === 1 ? 'dia' : 'dias'}`
        }else{
            detencion = `${Math.floor(dias/360)} año y ${(dias%360)%30} ${((dias%360)%30) === 1 ? 'dia' : 'dias'}`
        }
    } else if (dias > 30){
        if(Math.floor(dias/30) > 1){
            detencion = `${Math.floor(dias/30)} meses y ${dias%30} ${((dias%360)%30) === 1 ? 'dia' : 'dias'}`
        }else{
            detencion = `${Math.floor(dias/30)} mes y ${dias%30} ${((dias%360)%30) === 1 ? 'dia' : 'dias'}`
        }
    } else if (dias % 30 === 0){
        if(dias/30 > 1){
            detencion = `${dias/30} meses`;
        }else{
            detencion = `${dias/30} mes`;
        }
    } else if (dias < 30){
        detencion = `${dias} ${dias === 1 ? 'dia' : 'dias'}`;
    }
    
    return {detencion, dias}
}