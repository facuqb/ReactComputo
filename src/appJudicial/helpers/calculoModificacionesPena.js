export const calculoModificacionesPena = ( art41bis, art41quater, 
    art44, penaMaxima, penaMinima) =>{
   
        let minAnios = penaMinima.anios;
        let minMeses = penaMinima.meses;
        let minDias = penaMinima.dias;
        let maxAnios = penaMaxima.anios;
        let maxMeses = penaMaxima.meses;
        let maxDias = penaMaxima.dias;
        let menores = (Number(minAnios)*360) + (Number(minMeses)*30) + (Number(minDias));
        let maximos = (Number(maxAnios)*360) + (Number(maxMeses)*30) + (Number(maxDias));
        let sumaMinimos;
        let sumaMaximos;
        if( !art44 && !art41bis && !art41quater){
            sumaMinimos = menores;
            sumaMaximos = maximos
        } else if( art44 && !art41bis && !art41quater) {
            sumaMinimos = 2*(menores/3);
            sumaMaximos = (maximos)/2;
        } else if((art41bis && !art41quater && !art44) || (art41quater && !art44 && !art41bis)){
            sumaMinimos = menores + (menores/3);
            sumaMaximos = maximos + (maximos/3);
        } else if (art41bis && art41quater && !art44){
            sumaMinimos = menores + (menores/3);
            sumaMaximos = maximos + (maximos/3);
        } else if( art44 && ((art41quater && !art41bis) || (!art41quater && art41bis))){
            sumaMinimos = menores + (menores/3);
            sumaMaximos = maximos + (maximos/3);
            sumaMinimos = 2*(sumaMinimos/3);
            sumaMaximos = (sumaMaximos)/2;
        } else {
            sumaMinimos = menores + (menores/3);
            sumaMaximos = maximos + (maximos/3);
            sumaMinimos = 2*(sumaMinimos/3);
            sumaMaximos = (sumaMaximos)/2;
        }

        if (sumaMinimos % 360 === 0){
            if(Math.floor(sumaMinimos/360) === 1){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} año`
            }else{
                sumaMinimos = `${Math.floor(sumaMinimos/360)} años`
            }
        } else if (sumaMinimos > 360 && sumaMinimos % 30 === 0){
            if(Math.floor(sumaMinimos/360) > 1 && Math.floor((sumaMinimos%360)/30) > 1){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} años y ${Math.floor((sumaMinimos%360)/30)} meses`
            }else if (Math.floor(sumaMinimos/360) > 1 && Math.floor((sumaMinimos%360)/30) === 1){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} años y ${Math.floor((sumaMinimos%360)/30)} mes`
            }else if (Math.floor(sumaMinimos/360) === 1 && Math.floor((sumaMinimos%360)/30) > 1){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} año y ${Math.floor((sumaMinimos%360)/30)} meses`
            }else{
                sumaMinimos = `${Math.floor(sumaMinimos/360)} año y ${Math.floor((sumaMinimos%360)/30)} mes`
            }
        } else if (sumaMinimos > 360){
            if(Math.floor(sumaMinimos/360) > 1 && Math.floor((sumaMinimos%360)/30) > 1){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} años, ${Math.floor((sumaMinimos%360)/30)} meses y ${(sumaMinimos%360)%30} día/s`
            }else if(Math.floor(sumaMinimos/360) > 1 && Math.floor((sumaMinimos%360)/30) === 1){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} años, ${Math.floor((sumaMinimos%360)/30)} mes y ${(sumaMinimos%360)%30} día/s`
            }else if(Math.floor(sumaMinimos/360) > 1 && Math.floor((sumaMinimos%360)/30) === 0){
                sumaMinimos = `${Math.floor(sumaMinimos/360)} años y ${(sumaMinimos%360)%30} día/s`
            }else{
                sumaMinimos = `${Math.floor(sumaMinimos/360)} año y ${(sumaMinimos%360)%30} día/s`
            }
        } else if (sumaMinimos % 30 === 0){
            if(sumaMinimos/30 > 1){
                sumaMinimos = `${sumaMinimos/30} meses`;
            }else{
                sumaMinimos = `${sumaMinimos/30} mes`;
            }
        } else if (sumaMinimos > 30){
            if(Math.floor(sumaMinimos/30) > 1){
                sumaMinimos = `${Math.floor(sumaMinimos/30)} meses y ${sumaMinimos%30} día/s`
            }else{
                sumaMinimos = `${Math.floor(sumaMinimos/30)} mes y ${sumaMinimos%30} día/s`
            }
        } else if (sumaMinimos < 30){
            sumaMinimos = `${sumaMinimos} día/s`;
        }
        if (sumaMaximos % 360 === 0){
            if(Math.floor(sumaMaximos/360) === 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años`
            }
        } else if (sumaMaximos > 360 && sumaMaximos % 30 === 0){
            if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${Math.floor((sumaMaximos%360)/30)} meses`
            }else if (Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${Math.floor((sumaMaximos%360)/30)} mes`
            }else if (Math.floor(sumaMaximos/360) === 1 && Math.floor((sumaMaximos%360)/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${Math.floor((sumaMaximos%360)/30)} meses`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${Math.floor((sumaMaximos%360)/30)} mes`
            }
        } else if (sumaMaximos > 360){
            if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años, ${Math.floor((sumaMaximos%360)/30)} meses y ${(sumaMaximos%360)%30} día/s`
            }else if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años, ${Math.floor((sumaMaximos%360)/30)} mes y ${(sumaMaximos%360)%30} día/s`
            }else if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 0){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${(sumaMaximos%360)%30} día/s`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${(sumaMaximos%360)%30} día/s`
            }
        } else if (sumaMaximos % 30 === 0){
            if(sumaMaximos/30 > 1){
                sumaMaximos = `${sumaMaximos/30} meses`;
            }else{
                sumaMaximos = `${sumaMaximos/30} mes`;
            }
        } else if (sumaMaximos > 30){
            if(Math.floor(sumaMaximos/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/30)} meses y ${sumaMaximos%30} día/s`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/30)} mes y ${sumaMaximos%30} día/s`
            }
        } else if (sumaMaximos < 30){
            sumaMaximos = `${sumaMaximos} día/s`;
        }
        let penaAplicable = ` ${sumaMinimos} a ${sumaMaximos}`;
        return {penaAplicable}

}