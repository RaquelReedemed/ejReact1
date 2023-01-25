

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const ContenedorB = ( {contacto} ) => {

  const  [stateUsu, setStateUsu] = useState(false);
   
    const conecDescon = () => {
        console.log('Contacto en Linea/ Contacto no Disponible')
        setStateUsu(prevValue => !prevValue)
    }

    return (
        <div>
        <h2>
            Nombre: { contacto.Nombre  }
        </h2>
        <h2>
            Apellido: { contacto.Apellido }
        </h2>
        <h3>
            Email: { contacto.Email }
        </h3>
        <h3>El usuario esta: {stateUsu ? " En Linea" : "No Disponible"}   </h3>
        <button onClick={conecDescon}> Estado </button>
            
        </div>
    );
};


ContenedorB.propTypes = {
   contacto: PropTypes.instanceOf(Task)
};


export default ContenedorB;
