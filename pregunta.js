const bancoPreguntas = {
    1: {
        introLab: "Esta sesión introduce los fundamentos metrológicos y el cálculo vectorial aplicados a la física experimental. Se trabajará con patrones de medida, magnitudes fundamentales y operaciones vectoriales gráficas y analíticas para la resolución cuantitativa de sistemas mecánicos en el laboratorio.",
        objGeneral: "Comprender y aplicar los conceptos de sistemas de unidades y álgebra vectorial mediante montajes experimentales para modelar magnitudes físicas orientadas en dos y tres dimensiones.",
        videos: [
            {
                id: "01-01",
                titulo: "01-01 Unidades básicas",
                tema: "Sistemas de unidades y patrones fundamentales de medida.",
                objetivoVideo: "Identificar las unidades estándar de longitud, masa y tiempo en el Sistema Internacional y su relevancia en el laboratorio.",
                preguntas: [
                    {
                        pregunta: "¿Por qué es indispensable contar con patrones de medida universales e invariables en la física experimental?",
                        opciones: [
                            "Para eliminar por completo los errores sistemáticos y aleatorios en cualquier instrumento de medición.",
                            "Para garantizar que los resultados experimentales sean reproducibles, consistentes y comparables por cualquier investigador en distintos lugares y tiempos.",
                            "Para asegurar que las magnitudes físicas fundamentales puedan transformarse en vectores sin alterar su valor numérico.",
                            "Para aumentar automáticamente la precisión de los equipos de laboratorio sin necesidad de someterlos a un proceso de calibración."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo se relacionan las unidades derivadas empleadas en mecánica con las magnitudes fundamentales de masa, longitud y tiempo?",
                        opciones: [
                            "Se obtienen mediante la suma o resta vectorial de las magnitudes fundamentales, dependiendo del fenómeno físico analizado.",
                            "Son variables empíricas independientes que no pueden expresarse algebraicamente a partir de otras magnitudes.",
                            "Se construyen exclusivamente mediante combinaciones algebraicas (multiplicación y división) de las magnitudes fundamentales.",
                            "Son constantes de proporcionalidad que permiten convertir cantidades escalares en vectores dentro del Sistema Internacional."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "01-02",
                titulo: "01-02 Suma de vectores (paralelogramo)",
                tema: "Composición geométrica de vectores mediante la regla del paralelogramo.",
                objetivoVideo: "Determinar la resultante de dos vectores coplanares concurrentes mediante el método gráfico del paralelogramo.",
                preguntas: [
                    {
                        pregunta: "¿De qué manera el ángulo comprendido entre dos vectores concurrentes de magnitud fija modifica la magnitud del vector resultante?",
                        opciones: [
                            "La resultante es máxima a 90° debido a la independencia ortogonal de los vectores.",
                            "La magnitud resultante disminuye progresivamente a medida que el ángulo se incrementa de 0° a 180°.",
                            "La magnitud de la resultante es constante, ya que depende únicamente del módulo original de los vectores y no de su orientación.",
                            "La resultante aumenta de forma exponencial al superar los 45° de separación en el plano de interacción."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Bajo qué condición angular la magnitud del vector resultante es igual a la suma aritmética directa de sus componentes individuales?",
                        opciones: [
                            "Cuando el ángulo entre ellos es de 90°, permitiendo aplicar el teorema de Pitágoras de forma directa.",
                            "Cuando el ángulo entre ellos es de 180° (son colineales con sentidos opuestos).",
                            "Cuando el ángulo entre ellos es de 45°, lo que genera una proyección simétrica perfecta en ambos ejes.",
                            "Cuando el ángulo entre ellos es de 0° (son paralelos y apuntan exactamente en el mismo sentido)."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "01-03",
                titulo: "01-03 Suma de vectores (puntas con colas)",
                tema: "Adición vectorial sucesiva mediante el método del polígono.",
                objetivoVideo: "Analizar la suma de múltiples vectores coplanares encadenando el origen de un vector con el extremo del anterior.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el orden en el que se concatenan los vectores (propiedad conmutativa) no afecta la magnitud ni la dirección del vector resultante?",
                        opciones: [
                            "Porque el desplazamiento neto en el espacio desde el punto de inicio hasta el punto final es geométricamente el mismo, sin importar la trayectoria seguida.",
                            "Porque la regla de la mano derecha fuerza a los vectores a alinearse en el mismo cuadrante sin importar el orden.",
                            "Porque el polígono resultante siempre reasigna las magnitudes para formar un circuito cerrado simétrico.",
                            "Porque al invertir el orden, las componentes ortogonales cambian de signo simultáneamente, cancelando cualquier desviación."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué condición geométrica debe cumplir el polígono formado por los vectores para que el sistema se encuentre en equilibrio estático (resultante nula)?",
                        opciones: [
                            "El área encerrada por el polígono de vectores debe ser cero para garantizar que no existan torques desequilibrados.",
                            "Debe ser estrictamente un polígono regular, donde todas las fuerzas tengan la misma magnitud y los ángulos internos sean idénticos.",
                            "El polígono debe cerrarse, de manera que el extremo (la punta) del último vector coincida exactamente con el origen (la cola) del primero.",
                            "Todos los vectores que conforman el perímetro del polígono deben ser ortogonales entre sí."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "01-04",
                titulo: "01-04 Componentes de un vector",
                tema: "Descomposición ortogonal de vectores en el plano cartesiano.",
                objetivoVideo: "Descomponer un vector bidimensional en sus proyecciones sobre ejes perpendiculares y reconstruirlo analíticamente.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se calculan las componentes rectangulares de un vector a partir de su módulo y su ángulo de inclinación respecto al eje horizontal positivo?",
                        opciones: [
                            "Aplicando el teorema de Pitágoras entre el módulo del vector y la tangente del ángulo.",
                            "Multiplicando el módulo por el coseno del ángulo para hallar la componente horizontal, y por el seno para la componente vertical.",
                            "Dividiendo el módulo del vector entre las funciones trigonométricas correspondientes al cuadrante en el que se ubique.",
                            "Sumando el ángulo a la magnitud escalar del vector y proyectando el resultado sobre los ejes cartesianos."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "Si ambas componentes rectangulares de un vector son negativas, ¿en qué cuadrante del plano cartesiano se encuentra ubicado?",
                        opciones: [
                            "En el primer cuadrante.",
                            "En el segundo cuadrante.",
                            "En el tercer cuadrante.",
                            "En el cuarto cuadrante."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "01-05",
                titulo: "01-05 Producto punto de vectores",
                tema: "Producto escalar y proyección geométrica de vectores.",
                objetivoVideo: "Comprender el significado geométrico y físico del producto punto entre dos vectores y su aplicación al cálculo de cantidades escalares.",
                preguntas: [
                    {
                        pregunta: "¿Qué valor numérico toma el producto escalar de dos vectores no nulos cuando estos son mutuamente perpendiculares y cuál es su interpretación física?",
                        opciones: [
                            "Toma un valor negativo, lo que indica que los vectores actúan en oposición directa y disipan energía.",
                            "Es igual al producto simple de sus módulos, señalando la interacción máxima posible entre dos direcciones espaciales.",
                            "Es igual a uno, lo que establece la condición geométrica necesaria para el equilibrio traslacional del sistema.",
                            "Es igual a cero, lo que geométricamente indica que un vector carece por completo de proyección sobre la línea de acción del otro."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Cómo permite el producto punto determinar el ángulo comprendido entre dos vectores en el espacio tridimensional?",
                        opciones: [
                            "Sumando los cuadrados de sus componentes espaciales y dividiendo el resultado por la magnitud del producto vectorial.",
                            "Calculando el cociente entre el producto escalar de ambos vectores y el producto aritmético de sus respectivos módulos, valor que equivale al coseno del ángulo.",
                            "Igualando el producto escalar a la tangente geométrica y aplicando la función arcotangente sobre el plano XY.",
                            "Proyectando ortogonalmente el vector de mayor magnitud sobre el eje de revolución del sistema."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "01-06",
                titulo: "01-06 Producto cruz de vectores",
                tema: "Producto vectorial y orientación espacial (regla de la mano derecha).",
                objetivoVideo: "Analizar las propiedades del producto cruz entre vectores, reconociendo la dirección perpendicular resultante y su relación con el área del paralelogramo sustentado.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el producto vectorial es anticonmutativo y qué relación vectorial existe entre los productos cruz cruzados?",
                        opciones: [
                            "Porque el orden de los factores invierte la dirección del vector resultante a lo largo de la recta perpendicular (regla de la mano derecha).",
                            "Porque operan en distintos planos cartesianos y son ortogonales entre sí.",
                            "Porque al alterar el orden de multiplicación cruzada, la magnitud escalar se reduce a la mitad.",
                            "Porque el producto vectorial carece de magnitud definida en el origen de coordenadas."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué interpretación geométrica tiene la magnitud del vector obtenido mediante el producto cruz de dos vectores en el espacio?",
                        opciones: [
                            "Representa el volumen del paralelepípedo delimitado por la proyección de ambos vectores.",
                            "Representa la distancia más corta entre las respectivas líneas de acción de las dos magnitudes.",
                            "Representa el perímetro de la figura plana formada al conectar los extremos de los vectores.",
                            "Representa el área del paralelogramo sustentado por los dos vectores trazados desde un origen común."
                        ],
                        correcta: 3
                    }
                ]
            }
        ]
    },
    2: {
        introLab: "El estudio del movimiento en una dimensión constituye la base de la mecánica clásica. En esta sesión de laboratorio analizaremos el movimiento rectilíneo uniforme (MRU) y el movimiento rectilíneo uniformemente acelerado (MRUA), contrastando el desplazamiento ideal con la caída libre de cuerpos bajo la acción de la aceleración gravitatoria.",
        objGeneral: "Determinar experimentalmente las relaciones cinemáticas entre posición, velocidad y aceleración en movimientos unidimensionales para caracterizar el MRU y la aceleración uniforme producida por la gravedad.",
        videos: [
            {
                id: "02-01",
                titulo: "02-01 Velocidad constante",
                tema: "Movimiento rectilíneo uniforme (MRU) y razón de cambio de posición.",
                objetivoVideo: "Demostrar que en un movimiento a velocidad constante el desplazamiento es linealmente proporcional al tiempo transcurrido.",
                preguntas: [
                    {
                        pregunta: "¿Qué características cuantitativas presenta la gráfica de posición en función del tiempo para un móvil con velocidad constante?",
                        opciones: [
                            "Una parábola cóncava hacia arriba, indicando el desplazamiento acumulado.",
                            "Una línea recta inclinada cuya pendiente constante representa directamente la magnitud de la velocidad del móvil.",
                            "Una línea horizontal paralela al eje del tiempo, indicando que la velocidad no cambia en ningún instante.",
                            "Una curva de forma senoidal que refleja la periodicidad del movimiento sobre el riel del laboratorio."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué condiciones dinámicas deben garantizarse en el montaje de laboratorio para que un móvil mantenga su velocidad verdaderamente uniforme?",
                        opciones: [
                            "Que el móvil posea una masa inercial suficientemente elevada para resistir cualquier alteración externa de su movimiento.",
                            "Que exista una fuerza tractora constante aplicada en la dirección del movimiento para vencer la resistencia de la inercia natural del cuerpo.",
                            "Que la suma de todas las fuerzas externas aplicadas sobre el móvil (fuerza neta), incluyendo el rozamiento, seja igual a cero.",
                            "Que la superficie de contacto tenga un coeficiente de fricción dinámica de magnitud exactamente equivalente a la gravedad."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "02-02",
                titulo: "02-02 Buldócer sobre una hoja en movimiento",
                tema: "Composición cinemática de velocidades en marcos de referencia móviles.",
                objetivoVideo: "Analizar el principio de superposición de velocidades relativas unidimensionales mediante la traslación de un vehículo sobre un medio móvil.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se relaciona la velocidad del vehículo respecto al marco del laboratorio cuando se desplaza a favor o en contra del movimiento de la superficie soporte?",
                        opciones: [
                            "Se suman algebraicamente (sus magnitudes se suman si van en el mismo sentido, y se restan si van en sentidos opuestos) debido al principio de superposición cinemática.",
                            "La velocidad resultante observada es siempre el promedio aritmético simple de las velocidades que poseen ambos marcos de referencia.",
                            "Permanece invariante ante el observador fijo, ya que el desplazamiento real del vehículo solo depende de la tracción generada por su propio motor.",
                            "Las velocidades se vectorizan ortogonalmente, por lo que sus magnitudes deben calcularse siempre utilizando el teorema de Pitágoras."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué velocidad mide un observador fijo en el laboratorio si el buldócer se mueve en sentido opuesto a la hoja con exactamente la misma rapidez?",
                        opciones: [
                            "El doble de la rapidez original, provocado por la reacción elástica generada entre las ruedas y la hoja.",
                            "La mitad de la rapidez del buldócer, como consecuencia de la disipación de la fricción cinética entre ambas superficies móviles.",
                            "Cero; para el observador fijo el vehículo luce en reposo absoluto, ya que las velocidades relativas de igual magnitud y sentido opuesto se anulan mutuamente.",
                            "La magnitud de la velocidad dependerá directamente del cociente de masas entre el vehículo pesado y la hoja liviana."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "02-03",
                titulo: "02-03 Plano inclinado con pelota que rueda",
                tema: "Movimiento con aceleración uniforme desacelerada por la pendiente.",
                objetivoVideo: "Estudiar el movimiento acelerado sobre un plano inclinado y verificar la relación cuadrática entre el desplazamiento y el tiempo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el plano inclinado permitió históricamente desacelerar el efecto de la gravedad para realizar mediciones temporales reproducibles?",
                        opciones: [
                            "Porque amplifica la fricción aerodinámica sobre la superficie del cuerpo que rueda, lo que genera un frenado constante durante la caída libre.",
                            "Porque la fuerza normal que ejerce la superficie anula una gran fracción del peso, dejando como motor del movimiento solo a una componente atenuada de la gravedad paralela a la rampa.",
                            "Porque el montaje del plano inclinado produce un torque dinámico constante que contrarresta linealmente el empuje de la atracción terrestre.",
                            "Porque el momento de inercia de la pelota de experimentación disminuye gradualmente al someterse a la rotación sobre la superficie plana."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo varía la aceleración lineal a lo largo de la rampa al incrementar progresivamente su ángulo de inclinación?",
                        opciones: [
                            "Disminuye progresivamente en proporción al coseno del ángulo hasta llegar a un valor nulo en la posición completamente vertical.",
                            "Permanece constante en todo momento, debido a que el valor de la aceleración gravitacional (g) de la Tierra es invariable, sin importar las restricciones del plano.",
                            "Aumenta exponencialmente al pasar los 45°, llegando a duplicar en magnitud a la aceleración de caída libre al superar dicho límite angular.",
                            "Aumenta progresivamente, ya que la componente efectiva del peso a lo largo del plano crece, alcanzando finalmente su máximo (la caída libre) a los 90°."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "02-04",
                titulo: "02-04 Aceleración constante",
                tema: "Características del movimiento rectilíneo uniformemente acelerado (MRUA).",
                objetivoVideo: "Medir intervalos espaciales sucesivos recorridos por un cuerpo bajo aceleración constante y comprobar la ley de las distancias acumuladas.",
                preguntas: [
                    {
                        pregunta: "Si un móvil parte del reposo con aceleración constante, ¿en qué proporción aumentan las distancias recorridas en intervalos de tiempo consecutivos e iguales?",
                        opciones: [
                            "En la misma proporción que la secuencia de los números pares (2, 4, 6...).",
                            "Manteniendo distancias de avance idénticas en todos los intervalos, como consecuencia directa de poseer una aceleración constante.",
                            "En una proporción de crecimiento logarítmico, estabilizándose progresivamente a medida que aumenta la velocidad.",
                            "De acuerdo a la proporción de los números enteros impares consecutivos (1, 3, 5, 7...), reflejando la relación cuadrática del desplazamiento total respecto al tiempo."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Cómo se deduce la aceleración instantánea a partir de la pendiente de la curva de velocidad en función del tiempo?",
                        opciones: [
                            "Evaluando la integral del área acumulada bajo la gráfica de velocidad hasta el instante cronometrado.",
                            "Calculando y evaluando el valor de la pendiente geométrica (la derivada temporal) en el punto exacto de interés sobre la curva.",
                            "Proyectando una secante recta desde el origen de coordenadas hasta la coordenada de la velocidad máxima registrada.",
                            "Multiplicando directamente la coordenada de velocidad instantánea por su respectivo intervalo temporal."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "02-07",
                titulo: "02-06 Tiempo de reacción a la caída de un metro",
                tema: "Caída libre como método de medición de tiempos fisiológicos de reacción.",
                objetivoVideo: "Determinar el tiempo de reacción humano aprovechando la cinemática de caída libre de una regla graduada bajo aceleración gravitatoria constante.",
                preguntas: [
                    {
                        pregunta: "¿Qué ecuación cinemática permite despejar el tiempo de reacción humano en función directa de la distancia vertical que desciende la regla?",
                        opciones: [
                            "t = √(2y/g), derivada directamente de la ecuación parabólica de caída libre de un cuerpo que arranca desde el reposo.",
                            "t = y · g, asumiendo una proporcionalidad directa simple de grado uno entre el espacio recorrido y el empuje de gravedad.",
                            "t = vf / g midiendo la velocidad final experimental adquirida justo en el momento de atrapar el instrumento.",
                            "t = 2y / g², calculada analíticamente con base al principio fundamental de conservación de la energía mecánica."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Por qué el valor del tiempo de reacción calculado resulta independiente de la masa total o el material de la regla utilizada?",
                        opciones: [
                            "Porque los estímulos biológicos de reacción nerviosa frente a objetos visuales pesados o ligeros ocurren en el mismo periodo cronológico del cuerpo humano.",
                            "Porque al calibrar adecuadamente el sistema, la masa del dispositivo se integra al rozamiento del aire logrando una neutralización.",
                            "Porque la fuerza de fricción viscosa equilibra rápidamente el peso, permitiendo que todas las reglas caigan bajo el concepto de velocidad terminal.",
                            "Porque todos los cuerpos sometidos a caída libre en un mismo lugar de la Tierra experimentan idéntica aceleración gravitatoria (g), anulándose algebraicamente la masa inercial de la ecuación dinámica."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "02-08",
                titulo: "02-07 Guinea y pluma",
                tema: "Caída libre en el vacío y universalidad de la aceleración gravitatoria.",
                objetivoVideo: "Evidenciar experimentalmente que en ausencia de resistencia del aire todos los cuerpos caen con idéntica aceleración sin importar su masa o geometría.",
                preguntas: [
                    {
                        pregunta: "¿Qué factores mecánicos y aerodinámicos provocan que una pluma caiga con menor rapidez que una moneda metálica en presencia de aire?",
                        opciones: [
                            "El rozamiento aerodinámico genera una fuerza de oposición ascendente significativa respecto a la pluma, consecuencia directa de que su amplia área superficial contrasta con su pequeñísima masa.",
                            "La pluma concentra menor cantidad de masa inercial intrínseca, por lo que el núcleo de la Tierra la atrae verticalmente con menor intensidad gravitatoria local.",
                            "La estructura porosa de la pluma genera fuerza de flotación hidrostática de mayor intensidad que la gravedad, forzando la pérdida parcial del impulso.",
                            "La moneda, por su perfil afilado en rotación y densidad extrema, fractura el fluido circundante acelerando el flujo de corriente vertical que atrae a la pluma."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué comportamiento sincronizado se observa en la caída de ambos objetos una vez que el tubo es evacuado mediante una bomba de vacío?",
                        opciones: [
                            "La pluma acelera ostensiblemente más rápido en el tubo cerrado, puesto que en el vacío extremo una masa menor ofrece menor inercia restrictiva frente a la gravedad.",
                            "Ambos objetos, al librarse de la interacción disipativa de arrastre, descienden con idéntica aceleración y colisionan contra el fondo de manera simultánea.",
                            "La moneda mantiene una ventaja microscópica imperceptible durante el primer tramo debido al teorema conservativo de su cantidad de movimiento lineal intacta.",
                            "Los dos cuerpos entran brevemente en estado de ingravidez en el tubo debido a la extracción molecular, precipitándose con velocidad uniforme hasta la base."
                        ],
                        correcta: 1
                    }
                ]
            }
        ]
    },
    3: {
        introLab: "Esta sesión aborda las leyes de Newton aplicadas al dinámica traslacional. Se analizará la relación causal entre fuerza neta y aceleración, la respuesta de sistemas vinculados por cuerdas y poleas, la acción dinámica de resortes y el comportamiento inercial en marcos en caída libre.",
        objGeneral: "Validar experimentalmente la segunda ley de Newton y la equivalencia dinámica en sistemas mecánicos lineales mediante montajes con fuerzas constantes y variables.",
        videos: [
            {
                id: "03-01",
                titulo: "03-01 Aceleración por una cuerda con clip",
                tema: "Relación entre fuerza aplicada, masa inercial y aceleración resultante.",
                objetivoVideo: "Comprobar que la aceleración adquirida por un móvil es directamente proporcional a la fuerza neta e inversamente proporcional a su masa total.",
                preguntas: [
                    {
                        pregunta: "Al duplicar la fuerza tractora manteniendo constante la masa total del sistema, ¿cómo se modifica cuantitativamente la aceleración observada?",
                        opciones: [
                            "Aumenta al cuádruple debido a la relación cuadrática entre fuerza y aceleración en sistemas lineales.",
                            "Se duplica, demostrando una relación de proporcionalidad directa con la fuerza aplicada según la segunda ley de Newton.",
                            "Permanece constante, ya que la aceleración de un sistema depende únicamente de su masa inercial y de la gravedad local.",
                            "Se reduce a la mitad para poder garantizar la conservación de la energía mecánica del mecanismo de tracción."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "Si se añade masa al carro manteniendo la misma fuerza de tracción neta, ¿por qué disminuye la aceleración del sistema?",
                        opciones: [
                            "Porque la masa adicional aumenta el peso y, en consecuencia, genera mayor tracción a favor del movimiento.",
                            "Porque la fuerza aplicada debe invertirse en vencer el incremento de la gravedad en lugar de producir desplazamiento horizontal.",
                            "Porque la fricción cinética entre el carro y la pista se anula progresivamente al aumentar la carga vertical.",
                            "Porque la aceleración es inversamente proporcional a la inercia (masa total) del sistema que debe ser movida."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "03-02",
                titulo: "03-02 La máquina de Atwood",
                tema: "Dinámica de masas acopladas y aceleración en sistemas con polea ideal.",
                objetivoVideo: "Determinar experimentalmente la aceleración de dos masas suspendidas vinculadas por una cuerda ligera y analizar la tensión del sistema.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la diferencia de masas entre los dos cuerpos en la magnitud de la aceleración neta en la máquina de Atwood?",
                        opciones: [
                            "A mayor diferencia de masas (manteniendo la masa total constante), mayor será la aceleración neta del sistema al incrementar el desbalance de fuerza.",
                            "La diferencia de masas no altera la aceleración, ya que al estar unidas por una cuerda ambas caen exactamente bajo la misma gravedad (g).",
                            "A mayor diferencia de masas, la aceleración se reduce porque la tensión combinada de la polea aumenta de forma exponencial.",
                            "La aceleración neta solo es influenciada por el volumen físico de ambas masas suspendidas, pero no por su diferencia aritmética."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Por qué la tensión en la cuerda durante el movimiento acelerado es menor que el peso del cuerpo descendente y mayor que el del ascendente?",
                        opciones: [
                            "Porque la fricción estática de la polea absorbe exactamente esa fracción faltante de fuerza en ambos extremos de la cuerda.",
                            "Porque la cuerda necesita variar su propia masa dinámica entre los dos flancos para mantener el equilibrio en caída libre.",
                            "Para que de esta manera exista una fuerza neta no nula en la dirección del movimiento acelerado particular de cada bloque.",
                            "Porque la fuerza de tensión debe compensar íntegramente la pérdida de energía potencial que el sistema libera como calor."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "03-03",
                titulo: "03-03 Aceleración por un resorte",
                tema: "Dinámica unidimensional bajo fuerzas elásticas variables.",
                objetivoVideo: "Analizar el movimiento acelerado de un móvil impulsado por la fuerza restauradora variable originada al distender un resorte.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la aceleración del móvil no permanece constante a medida que el resorte recupera paulatinamente su longitud natural?",
                        opciones: [
                            "Porque la fuerza restauradora elástica es directamente proporcional a la elongación, y al acortarse esta, la fuerza (y la aceleración) disminuye.",
                            "Porque el centro de masa inercial del carrito va cambiando de posición continuamente tras liberarse la trampa elástica.",
                            "Porque el rozamiento sobre el riel experimenta picos intermitentes producto del impacto impulsivo inicial.",
                            "Porque la inercia del sistema contrarresta completamente al resorte forzándolo a adquirir velocidad constante de forma instantánea."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿En qué posición de la trayectoria alcanza el móvil su velocidad máxima durante la fase de impulsión por el resorte?",
                        opciones: [
                            "Justo en el punto de compresión máxima extrema del resorte, instantes antes de ser liberado de su retén.",
                            "En el punto de liberación exacta de equilibrio estático de su longitud natural, donde la fuerza (y aceleración) se hace cero y ya no es impulsado.",
                            "Al final de la trayectoria parabólica, una vez que el carro ha frenado por efecto de la fricción cinética residual.",
                            "En el instante de medio recorrido, es decir, exactamente a la mitad de la elongación elástica total."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "03-04",
                titulo: "03-04 Slinky que cae",
                tema: "Dinámica de medios continuos elásticos y propagación de tensión en caída libre.",
                objetivoVideo: "Observar el colapso gravitatorio de un resorte suspendido y comprender la transmisión de la onda de relajación elástica interna.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el extremo inferior del resorte suspendido permanece inmóvil en el aire hasta que el extremo superior colapsa sobre él?",
                        opciones: [
                            "Porque experimenta una fuerza aerodinámica de empuje vertical que neutraliza perfectamente el aumento de su masa inercial.",
                            "Porque el campo gravitacional pierde intensidad temporal en el extremo inferior debido a la oscilación armónica del alambre de acero.",
                            "Porque la fuerza de tensión que equilibra a su propio peso en esa base no desaparece hasta que la onda mecánica de relajación llega físicamente a ese punto.",
                            "Porque el momento angular intrínseco de las espiras enrolladas ancla la estructura frente al desplazamiento traslacional."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cómo se compara el movimiento acelerado del centro de masa del resorte con la caída libre de una masa puntual convencional?",
                        opciones: [
                            "El centro de masa del resorte colapsa acelerando a una tasa equivalente a la de la gravedad (g), descendiendo igual que una masa puntual en caída libre.",
                            "Desciende visiblemente más despacio debido a que un gran porcentaje de la fuerza gravitatoria se agota enrollando internamente el resorte.",
                            "Cae considerablemente más rápido, ya que las espiras colisionando unas contra otras generan una aceleración neta adicional hacia el suelo.",
                            "El centro de masa se mantiene estacionario suspendido en el aire hasta el instante preciso en que los dos extremos se juntan para recién iniciar el descenso."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "03-05",
                titulo: "03-05 Vela en un frasco que cae",
                tema: "Principio de equivalencia y comportamiento de fluidos térmicos en caída libre.",
                objetivoVideo: "Evidenciar la anulación aparente del empuje de flotación hidrostática y la convección térmica dentro de un recinto en caída libre.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la llama de la vela adopta una forma esférica o tiende a extinguirse cuando el frasco hermético entra en caída libre?",
                        opciones: [
                            "Porque el violento rozamiento aerodinámico del aire al descender el frasco perturba y rompe directamente el sello interno.",
                            "Porque al entrar en estado de ingravidez, se anula el empuje por densidad y cesan las corrientes de convección que renuevan el oxígeno de la mecha.",
                            "Porque la aceleración descendente induce una fuerza hidrostática en la cera líquida impidiendo la generación por sublimación de nuevos vapores orgánicos.",
                            "Porque la velocidad terminal provoca una depresión barométrica instantánea dentro de la campana que congela térmicamente la combustión."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué relación conceptual tiene la ausencia de corrientes convectivas en este experimento con el estado de microgravedad aparente?",
                        opciones: [
                            "La aparente microgravedad obliga a las moléculas del fluido a girar en torbellinos de Coriolis paralizando cualquier flujo vertical.",
                            "Significa que en microgravedad un gas caliente se vuelve instantáneamente más denso, imposibilitando físicamente que pueda fluir de manera alguna.",
                            "Demuestra que la caída libre es un marco inercial donde el peso relativo del gas por su temperatura desaparece, deteniendo el mecanismo de flotabilidad hidro-térmica.",
                            "Indica que la microgravedad provoca vacíos esféricos de gas denso aislados térmicamente alrededor de cualquier fuente incandescente puntual."
                        ],
                        correcta: 2
                    }
                ]
            }
        ]
    },
    4: { introLab: "", objGeneral: "", videos: [] },
    5: { introLab: "", objGeneral: "", videos: [] },
    6: { introLab: "", objGeneral: "", videos: [] },
    7: { introLab: "", objGeneral: "", videos: [] },
    8: { introLab: "", objGeneral: "", videos: [] },
    9: { introLab: "", objGeneral: "", videos: [] }
};