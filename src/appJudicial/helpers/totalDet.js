export const totalDet = (periodos) =>{
    let periodoDias = periodos.map(periodo => periodo.dias)

    let diasAcumulados = periodoDias.reduce((a,b) => a+b,0);
    let detencion;
    if (diasAcumulados % 360 === 0){
        if(Math.floor(diasAcumulados/360) === 1){
            detencion = `${Math.floor(diasAcumulados/360)} año`
        }else{
            detencion = `${Math.floor(diasAcumulados/360)} años`
        }
    } else if (diasAcumulados > 360 && diasAcumulados % 30 === 0){
        if(Math.floor(diasAcumulados/360) > 1 && Math.floor((diasAcumulados%360)/30) > 1){
            detencion = `${Math.floor(diasAcumulados/360)} años y ${Math.floor((diasAcumulados%360)/30)} meses`
        }else if (Math.floor(diasAcumulados/360) > 1 && Math.floor((diasAcumulados%360)/30) === 1){
            detencion = `${Math.floor(diasAcumulados/360)} años y ${Math.floor((diasAcumulados%360)/30)} mes`
        }else if (Math.floor(diasAcumulados/360) === 1 && Math.floor((diasAcumulados%360)/30) > 1){
            detencion = `${Math.floor(diasAcumulados/360)} año y ${Math.floor((diasAcumulados%360)/30)} meses`
        }else{
            detencion = `${Math.floor(diasAcumulados/360)} año y ${Math.floor((diasAcumulados%360)/30)} mes`
        }
    } else if (diasAcumulados > 360){
        if(Math.floor(diasAcumulados/360) > 1 && Math.floor((diasAcumulados%360)/30) > 1){
            detencion = `${Math.floor(diasAcumulados/360)} años, ${Math.floor((diasAcumulados%360)/30)} meses y ${(diasAcumulados%360)%30} día/s`
        }else if(Math.floor(diasAcumulados/360) > 1 && Math.floor((diasAcumulados%360)/30) === 1){
            detencion = `${Math.floor(diasAcumulados/360)} años, ${Math.floor((diasAcumulados%360)/30)} mes y ${(diasAcumulados%360)%30} día/s`
        }else if(Math.floor(diasAcumulados/360) > 1 && Math.floor((diasAcumulados%360)/30) === 0){
            detencion = `${Math.floor(diasAcumulados/360)} años y ${(diasAcumulados%360)%30} día/s`
        }else{
            detencion = `${Math.floor(diasAcumulados/360)} año y ${(diasAcumulados%360)%30} día/s`
        }
    } else if (diasAcumulados > 30){
        if(Math.floor(diasAcumulados/30) > 1){
            detencion = `${Math.floor(diasAcumulados/30)} meses y ${diasAcumulados%30} día/s`
        }else{
            detencion = `${Math.floor(diasAcumulados/30)} mes y ${diasAcumulados%30} día/s`
        }
    } else if (diasAcumulados % 30 === 0){
        if(diasAcumulados/30 > 1){
            detencion = `${diasAcumulados/30} meses`;
        }else{
            detencion = `${diasAcumulados/30} mes`;
        }
    } else if (diasAcumulados < 30){
        detencion = `${diasAcumulados} día/s`;
    }
    return {detencion, diasAcumulados}
}