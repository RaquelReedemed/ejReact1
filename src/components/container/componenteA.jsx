

import React from 'react';
import { Task } from '../../models/task.class';
import ContenedorB from '../pure/contenedorB';



const ComponenteA = () => {

    const defaultTask = new Task('Raquel', 'Benitez', 'raquel@raquel', false)

    return (
        <div>
            <div>
                <h1>lista de tareas:</h1>
            </div>
            <ContenedorB contacto={defaultTask} ></ContenedorB>
        </div>
    );
};


export default ComponenteA;

