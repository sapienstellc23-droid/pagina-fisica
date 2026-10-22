const capitulosCatalog = [
    { 
        id: 1, 
        title: "Capítulo 1: Vectores y Unidades", 
        introLab: "Introducción al Laboratorio: Análisis de magnitudes físicas, sistemas de unidades fundamentales y operaciones con vectores.",
        objGeneral: "Objetivo General: Comprender el marco analítico y geométrico de los vectores aplicados a la física experimental.",
        color: "#1e3a8a", icon: "∰", folder: "CAPITULO 1" 
    },
    { 
        id: 2, 
        title: "Capítulo 2: Cinemática Unidimensional", 
        introLab: "Introducción al Laboratorio: Estudio experimental del movimiento rectilíneo, velocidad instantánea y aceleración constante.",
        objGeneral: "Objetivo General: Analizar las leyes cinemáticas mediante la recolección de datos de tiempo y posición.",
        color: "#5b21b6", icon: "📈", folder: "CAPITULO 2" 
    },
    { 
        id: 3, 
        title: "Capítulo 3: Dinámica y Leyes de Newton", 
        introLab: "Introducción al Laboratorio: Verificación experimental de la relación entre fuerza, masa y aceleración.",
        objGeneral: "Objetivo General: Comprobar las leyes del movimiento de Newton utilizando sistemas dinámicos controlados.",
        color: "#047857", icon: "⚪", folder: "CAPITULO 3" 
    },
    { 
        id: 4, 
        title: "Capítulo 4: Movimiento en Dos Dimensiones", 
        introLab: "Introducción al Laboratorio: Análisis del movimiento de proyectiles y composición de velocidades perpendiculares.",
        objGeneral: "Objetivo General: Determinar la independencia de los movimientos ortogonales en un plano bidimensional.",
        color: "#d97706", icon: "📐", folder: "CAPITULO 4" 
    },
    { 
        id: 5, 
        title: "Capítulo 5: Inercia y Marcos de Referencia", 
        introLab: "Introducción al Laboratorio: Observación de los efectos inerciales y el comportamiento de cuerpos en aceleración.",
        objGeneral: "Objetivo General: Estudiar la tendencia de los cuerpos a mantener su estado de reposo o movimiento uniforme.",
        color: "#be123c", icon: "⚛", folder: "CAPITULO 5" 
    },
    { 
        id: 6, 
        title: "Capítulo 6: Conservación del Momento Lineal", 
        introLab: "Introducción al Laboratorio: Estudio de colisiones y la tercera ley de Newton en rieles de aire.",
        objGeneral: "Objetivo General: Demostrar la conservación del momento lineal en sistemas cerrados durante choques elásticos e inelásticos.",
        color: "#1d4ed8", icon: "⇄", folder: "CAPITULO 6" 
    },
    { 
        id: 7, 
        title: "Capítulo 7: Fricción y Rozamiento", 
        introLab: "Introducción al Laboratorio: Medición de las fuerzas de fricción estática y cinética sobre diferentes superficies.",
        objGeneral: "Objetivo General: Analizar los coeficientes de rozamiento y su dependencia con las condiciones de contacto.",
        color: "#15803d", icon: "📦", folder: "CAPITULO 7" 
    },
    { 
        id: 8, 
        title: "Capítulo 8: Trabajo y Conservación de la Energía", 
        introLab: "Introducción al Laboratorio: Transformaciones energéticas entre energía cinética y potencial en sistemas mecánicos.",
        objGeneral: "Objetivo General: Comprobar el principio de conservación de la energía mecánica total en ausencia de fuerzas disipativas.",
        color: "#1e40af", icon: "⚡", folder: "CAPITULO 8" 
    },
    { 
        id: 9, 
        title: "Capítulo 9: Centro de Masa y Equilibrio", 
        introLab: "Introducción al Laboratorio: Determinación experimental del centro de gravedad y condiciones de equilibrio estático.",
        objGeneral: "Objetivo General: Analizar la estabilidad de objetos regulares e irregulares mediante la ubicación de su centro de masa.",
        color: "#6b21a8", icon: "⚛", folder: "CAPITULO 9" 
    }
];

const videosPorCapitulo = {
    1: [
        { archivo: "Copia de 01-01 Unidades básicas.mp4", tema: "Sistemas de Unidades", objetivo: "Identificar las unidades fundamentales del sistema internacional." },
        { archivo: "Copia de 01-02 Suma de vectores (paralelograma).mp4", tema: "Método del Paralelograma", objetivo: "Hallar la resultante gráfica y analítica de dos vectores concurrentes." },
        { archivo: "Copia de 01-03 Suma de vectores (puntas con colas).mp4", tema: "Método del Polígono", objetivo: "Sumar múltiples vectores consecutivamente." },
        { archivo: "Copia de 01-04 Componentes de un vector.mp4", tema: "Descomposición Vectorial", objetivo: "Separar un vector en sus proyecciones ortogonales x e y." },
        { archivo: "Copia de 01-05 Producto punto de vectores.mp4", tema: "Producto Escalar", objetivo: "Calcular el producto punto y determinar el ángulo entre vectores." },
        { archivo: "Copia de 01-06 Producto cruz de vectores.mp4", tema: "Producto Vectorial", objetivo: "Obtener un vector perpendicular mediante el producto cruz." },
        { archivo: "Copia de 01-07 Componentes de vectores en 3 dimensiones.mp4", tema: "Vectores en el Espacio", objetivo: "Analizar componentes tridimensionales i, j, k." }
    ],
    2: [
        { archivo: "Copia de 02-01 Velocidad constante.mp4", tema: "MRU", objetivo: "Evaluar un cuerpo con velocidad uniforme." },
        { archivo: "Copia de 02-02 Buldócer sobre una hoja en movimiento.mp4", tema: "Sistemas de Referencia", objetivo: "Estudiar velocidades relativas." },
        { archivo: "Copia de 02-03 Plano inclinado con pelota que rueda.mp4", tema: "MRUV en Plano", objetivo: "Analizar la aceleración constante cuesta abajo." },
        { archivo: "Copia de 02-04 Aceleración constante.mp4", tema: "Dinámica de Caída Libre", objetivo: "Medir la aceleración debido a la gravedad." },
        { archivo: "Copia de 02-05 Caída de una cuerda con tuercas.mp4", tema: "Intervalos de Tiempo", objetivo: "Comprobar proporciones de espacio en caída libre." },
        { archivo: "Copia de 02-06 Tiempo de reacción a la caída de un metro.mp4", tema: "Reflejos y Cinemática", objetivo: "Calcular el tiempo de reacción biológico." },
        { archivo: "Copia de 02-07 Guinea y pluma.mp4", tema: "Vacío y Gravedad", objetivo: "Demostrar la ausencia de resistencia del aire." }
    ],
    3: [
        { archivo: "Copia de 03-01 Aceleración por una cuerda con clip.mp4", tema: "Segunda Ley de Newton", objetivo: "Relacionar fuerza neta y aceleración." },
        { archivo: "Copia de 03-02 La máquina de Atwood.mp4", tema: "Máquinas Simples", objetivo: "Estudiar sistemas de masas conectadas por poleas." },
        { archivo: "Copia de 03-03 Aceleración por un resorte.mp4", tema: "Fuerza Elástica", objetivo: "Analizar la ley de Hooke dinámica." },
        { archivo: "Copia de 03-04 Slinky que cae.mp4", tema: "Ondas y Tensión", objetivo: "Estudiar el comportamiento de resortes colgantes." },
        { archivo: "Copia de 03-05 Vela en un frasco que cae.mp4", tema: "Inercia Interna", objetivo: "Observar efectos de presión y gravedad en caída." }
    ],
    4: [
        { archivo: "Copia de 04-01 Disparo-caída.mp4", tema: "Independencia de Movimientos", objetivo: "Comprobar caída simultánea horizontal." },
        { archivo: "Copia de 04-02 Cañón contra monos.mp4", tema: "Proyectiles", objetivo: "Analizar la trayectoria parabólica bajo gravedad." },
        { archivo: "Copia de 04-03 Cañón vertical sobre un carro.mp4", tema: "Inercia en Proyectiles", objetivo: "Conservación de velocidad horizontal." },
        { archivo: "Copia de 04-04 Cañón vertical sobre un carro acelerado.mp4", tema: "Sistemas No Inerciales", objetivo: "Estudiar efectos de aceleración del carro." },
        { archivo: "Copia de 04-05 Parábolas en una mesa de aire.mp4", tema: "Fricción Nula en 2D", objetivo: "Visualizar parábolas sin rozamiento." },
        { archivo: "Copia de 04-06 Cañón de alcance variable.mp4", tema: "Ángulo de Tiro", objetivo: "Encontrar el ángulo de alcance máximo." },
        { archivo: "Copia de 04-07 Suma vectorial de velocidades.mp4", tema: "Velocidades Relativas", objetivo: "Componer vectores de velocidad." },
        { archivo: "Copia de 04-08 Buldócer sobre una hoja en movimiento (2 dimensiones).mp4", tema: "Trayectorias Compuestas", objetivo: "Analizar movimiento en dos ejes." },
        { archivo: "Copia de 04-09 Pesas que se deslizan en un triángulo.mp4", tema: "Planos Inclinados 2D", objetivo: "Descomponer fuerzas en planos." },
        { archivo: "Copia de 04-10 Navegando contra el viento.mp4", tema: "Vectores Aplicados", objetivo: "Estudiar fuerzas aerodinámicas." },
        { archivo: "Copia de 04-11 Vertical local con aceleración.mp4", tema: "Aceleraciones Compuestas", objetivo: "Determinar la vertical efectiva." }
    ],
    5: [
        { archivo: "Copia de 05-01 Inercia en un riel de aire que se desplaza.mp4", tema: "Marcos Inerciales", objetivo: "Observar movimiento sin fricción." },
        { archivo: "Copia de 05-02 Cilindro de inercia.mp4", tema: "Momento de Inercia", objetivo: "Evaluar resistencia al giro." },
        { archivo: "Copia de 05-03 Roca de hule espuma.mp4", tema: "Densidad y Apariencia", objetivo: "Analizar masa aparente vs real." },
        { archivo: "Copia de 05-04 Sacudida del mantel.mp4", tema: "Primera Ley", objetivo: "Demostrar inercia de reposo." },
        { archivo: "Copia de 05-05 Huevos y plato de pizza.mp4", tema: "Inercia en Práctica", objetivo: "Separar objetos mediante inercia rápida." },
        { archivo: "Copia de 05-06 Lápiz y madera terciada.mp4", tema: "Impacto Rápido", objetivo: "Estudiar resistencia al cambio de estado." }
    ],
    6: [
        { archivo: "Copia de 06-01 Deslizadores de reacción.mp4", tema: "Acción y Reacción", objetivo: "Comprobar fuerzas mutuas." },
        { archivo: "Copia de 06-02 Conservación del momento de deslizadores de reacción.mp4", tema: "Momento Lineal", objetivo: "Verificar conservación en choques." },
        { archivo: "Copia de 06-03 Carro sobre una tabla que rueda.mp4", tema: "Sistemas Acoplados", objetivo: "Analizar acción mutua." },
        { archivo: "Copia de 06-04 Carro de ventilador con vela.mp4", tema: "Fuerzas Internas", objetivo: "Demostrar fuerzas netas nulas." },
        { archivo: "Copia de 06-05 Cohete de CO2.mp4", tema: "Propulsión a Chorro", objetivo: "Aplicar conservación de cantidad de movimiento." },
        { archivo: "Copia de 06-06 Cohete de agua.mp4", tema: "Propulsión Hídrica", objetivo: "Estudiar eyección de masa." },
        { archivo: "Copia de 06-07 Carro movido por un extinguidor de fuego.mp4", tema: "Gas a Presión", objetivo: "Evaluar empuje por gases." },
        { archivo: "Copia de 06-08 Hélice.mp4", tema: "Empuje Aerodinámico", objetivo: "Analizar generación de fuerza." },
        { archivo: "Copia de 06-09 Carros de reacción en un subibaja.mp4", tema: "Momento Angular y Lineal", objetivo: "Estudiar equilibrio dinámico." }
    ],
    7: [
        { archivo: "Copia de 07-01 Fricción en un riel de aire.mp4", tema: "Superficie sin Fricción", objetivo: "Comprobar movimiento ideal." },
        { archivo: "Copia de 07-02 Fricción estática vs. Fricción cinética.mp4", tema: "Coeficientes de Fricción", objetivo: "Medir la diferencia de fuerzas." },
        { archivo: "Copia de 07-03 Dependencia de la fricción con respecto al área.mp4", tema: "Independencia del Área", objetivo: "Demostrar que el área no afecta la fricción." },
        { archivo: "Copia de 07-04 Dependencia de la fricción con respecto al peso.mp4", tema: "Fuerza Normal", objetivo: "Relacionar peso y fricción." },
        { archivo: "Copia de 07-05 Dependencia de la fricción con respecto a la superfície.mp4", tema: "Naturaleza de Superficies", objetivo: "Evaluar rugosidad." },
        { archivo: "Copia de 07-06 Estabilidad de un carro que rueda.mp4", tema: "Fricción en Ruedas", objetivo: "Analizar rozamiento por rodadura." }
    ],
    8: [
        { archivo: "Copia de 08-01 Martinete.mp4", tema: "Trabajo Mecánico", objetivo: "Evaluar transferencia de energía." },
        { archivo: "Copia de 08-02 Cañón de resorte.mp4", tema: "Energía Potencial Elástica", objetivo: "Convertir energía de resorte en cinética." },
        { archivo: "Copia de 08-03 El saltarín.mp4", tema: "Rebote Elástico", objetivo: "Estudiar restitución de energía." },
        { archivo: "Copia de 08-04 Dependencia de la energía de un resorte del cuadrado de la distancia.mp4", tema: "Energía Cuadrática", objetivo: "Comprobar fórmula de energía elástica." },
        { archivo: "Copia de 08-05 Paradoja del gran rebote.mp4", tema: "Transferencia de Momento", objetivo: "Analizar multiplicación de velocidad en rebotes." },
        { archivo: "Copia de 08-06 Riel de pozo de energía.mp4", tema: "Pozos Potenciales", objetivo: "Estudiar conservación en desniveles." },
        { archivo: "Copia de 08-07 El péndulo de Galileo.mp4", tema: "Conservación de Energía en Péndulos", objetivo: "Verificar altura máxima constante." },
        { archivo: "Copia de 08-08 Péndulo de bola de boliche.mp4", tema: "Seguridad y Energía", objetivo: "Demostrar que la energía no supera la inicial." },
        { archivo: "Copia de 08-09 Riel triple.mp4", tema: "Comparación de Pistas", objetivo: "Evaluar tiempos de descenso." },
        { archivo: "Copia de 08-10 Generador movido a mano.mp4", tema: "Conversión Energética", objetivo: "Transformar trabajo mecánico en eléctrico." },
        { archivo: "Copia de 08-11 Generador movido por una pesa que cae.mp4", tema: "Potencia Constante", objetivo: "Analizar caída de pesa y generación." },
        { archivo: "Copia de 08-12 Freno de fricción constante.mp4", tema: "Disipación de Energía", objetivo: "Estudiar conversión de energía en calor." }
    ],
    9: [
        { archivo: "Copia de 09-01 Estabilidad.mp4", tema: "Equilibrio Estable e Inestable", objetivo: "Determinar condiciones de vuelco." },
        { archivo: "Copia de 09-02 Centro de masa de un objeto irregular.mp4", tema: "Plomada y Centro de Gravedad", objetivo: "Hallar el centro de masa geométrico." },
        { archivo: "Copia de 09-03 Centro de masa de un disco.mp4", tema: "Simetría de Masa", objetivo: "Localizar el centro en cuerpos simétricos." },
        { archivo: "Copia de 09-04 Silla en un pedestal.mp4", tema: "Línea de Gravedad", objetivo: "Verificar equilibrio sobre base estrecha." },
        { archivo: "Copia de 09-05 Payaso en la cuerda floja.mp4", tema: "Centro de Masa Bajo el Poyo", objetivo: "Lograr estabilidad con contrapesos." },
        { archivo: "Copia de 09-06 Cono doble en una pendiente.mp4", tema: "Paradoja del Cono", objetivo: "Analizar aparente subida por bajada del centro de masa." },
        { archivo: "Copia de 09-07 Disco cargado.mp4", tema: "Desplazamiento de Masa", objetivo: "Modificar el comportamiento dinámico." },
        { archivo: "Copia de 09-08 Cilindros que caen.mp4", tema: "Inercia Rotacional y CM", objetivo: "Estudiar descenso de cilindros." },
        { archivo: "Copia de 09-09 Centro de masa en una mesa de aire.mp4", tema: "Centro de Masa Libre", objetivo: "Seguir la trayectoria del CM sin fuerzas externas." }
    ]
};