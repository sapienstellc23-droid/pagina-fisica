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
                            "Que la suma de todas las fuerzas externas aplicadas sobre el móvil (fuerza neta), incluyendo el rozamiento, sea igual a cero.",
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
                id: "02-06",
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
                id: "02-07",
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
        introLab: "Esta sesión aborda las leyes de Newton aplicadas a la dinámica traslacional. Se analizará la relación causal entre fuerza neta y aceleración, la respuesta de sistemas vinculados por cuerdas y poleas, la acción dinámica de resortes y el comportamiento inercial en marcos en caída libre.",
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
    4: {
        introLab: "Esta sesión experimental explora la cinemática y dinámica bidimensional, enfocándose en la independencia de movimientos ortogonales, el lanzamiento de proyectiles y el análisis de trayectorias parabólicas en sistemas inerciales y acelerados.",
        objGeneral: "Analizar la cinemática en dos dimensiones mediante montajes de proyectiles y colisiones parabólicas para verificar el principio de independencia de movimientos de Galileo.",
        videos: [
            {
                id: "04-01",
                titulo: "04-01 Disparo/caída",
                tema: "Independencia de los movimientos horizontal y vertical en el tiro parabólico.",
                objetivoVideo: "Demostrar que el tiempo de descenso vertical de un proyectil disparado horizontalmente es idéntico al de un cuerpo en caída libre vertical.",
                preguntas: [
                    {
                        pregunta: "¿Por qué dos proyectiles lanzados desde la misma altura (uno disparado horizontalmente y el otro soltado en reposo) impactan el suelo al mismo instante?",
                        opciones: [
                            "Porque la velocidad de disparo horizontal crea una fuerza de sustentación aerodinámica neutra que sincroniza ambas caídas.",
                            "Porque los movimientos horizontal y vertical son independientes, y ambos proyectiles inician con idéntica velocidad vertical (cero) y experimentan la misma aceleración descendente.",
                            "Porque el proyectil disparado posee mayor energía cinética, lo que compensa mecánicamente la distancia curva extra que debe recorrer.",
                            "Porque la curvatura parabólica de la trayectoria incrementa exponencialmente la aceleración de caída del proyectil disparado horizontalmente."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿De qué manera afecta la velocidad inicial horizontal a la aceleración vertical que experimenta el proyectil durante su trayectoria?",
                        opciones: [
                            "Aumenta la aceleración vertical, siempre y cuando la velocidad del proyectil rompa la resistencia estática del aire.",
                            "Disminuye la aceleración vertical debido a la interacción cruzada de las fuerzas de arrastre.",
                            "La afecta inversamente: a mayor avance horizontal, se diluye el impacto neto de la gravedad, alargando el tiempo de vuelo.",
                            "No la afecta en absoluto; la aceleración vertical es siempre constante y está determinada de forma exclusiva por la atracción gravitatoria."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "04-02",
                titulo: "04-02 Cañón contra monos",
                tema: "Impacto balístico con blanco en caída libre y simultaneidad gravitatoria.",
                objetivoVideo: "Comprobar que un proyectil apuntado directamente hacia un blanco móvil impacta con éxito si el blanco se suelta en el instante del disparo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué ambos objetos (el proyectil y el blanco) descienden la misma distancia vertical respecto a la línea de mira durante el tiempo de vuelo?",
                        opciones: [
                            "Porque el proyectil tiene una forma aerodinámica que imita exactamente el coeficiente de fricción atmosférica del blanco en reposo.",
                            "Porque ambos inician su descenso en caída libre justo en el mismo instante y están sujetos de manera idéntica a la aceleración de la gravedad.",
                            "Porque sus respectivos centros de masa convergen magnéticamente a lo largo del eje horizontal de disparo.",
                            "Porque el impacto percusivo del cañón perturba la columna de aire debajo del blanco forzando una caída controlada simétrica."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "Si se incrementa la velocidad de salida del proyectil, ¿en qué punto de la trayectoria ocurrirá el impacto en relación con el suelo?",
                        opciones: [
                            "Ocurrirá en un punto mucho más cercano al suelo, porque una alta velocidad incrementa el factor inercial parabólico de caída libre.",
                            "Impactará de manera adelantada directamente en la base del piso al rebasar rápidamente la vertical inercial del blanco suspendido.",
                            "Ocurrirá en un punto de intersección más alto, ya que un proyectil más veloz requiere menos tiempo de vuelo y, por lo tanto, ambos caen menos distancia.",
                            "Ocurrirá exactamente en el mismo lugar intermedio que antes, puesto que el alcance vertical de impacto es totalmente invariante frente a impulsos horizontales."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "04-03",
                titulo: "04-03 Cañón vertical sobre un carro",
                tema: "Conservación del momento inercial horizontal en el lanzamiento vertical móvil.",
                objetivoVideo: "Verificar que una bola disparada verticalmente desde un carro con velocidad horizontal constante vuelve a caer dentro del cañón.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la bola conserva el mismo componente horizontal de velocidad que el carro mientras se encuentra en el aire?",
                        opciones: [
                            "Porque la aceleración de la gravedad arrastra a todos los cuerpos próximos hacia el mismo sentido en que avanza el mecanismo.",
                            "Porque, ignorando la resistencia del aire, una vez libre no actúan fuerzas netas horizontales sobre ella, por lo que su inercia de traslación permanece inalterada.",
                            "Porque el impulso vertical suministrado por el mecanismo del cañón se transfiere de manera gradual al eje de desplazamiento horizontal.",
                            "Porque la estela del aire dentro de la habitación avanza exactamente acoplada con la masa rodante del vehículo."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué forma tiene la trayectoria de la bola observada desde el sistema de referencia del laboratorio frente al sistema propio del carro?",
                        opciones: [
                            "Parabólica para un observador fijo en el laboratorio, y rectilínea (de subida y bajada vertical) para un observador estacionado en el carro.",
                            "Rectilínea e inclinada hacia adelante en el laboratorio, y parabólica pero invertida para el observador montado sobre la plataforma móvil.",
                            "Semielíptica en el ambiente inercial del laboratorio, y enteramente circular si se toma como marco al punto de eyección del cañón.",
                            "Ascenso estrictamente vertical para el observador del laboratorio (que la ve pasar rápido), y parábola de alcance asimétrico en el carro móvil."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "04-04",
                titulo: "04-04 Cañón vertical sobre un carro acelerado",
                tema: "Movimiento relativo en marcos de referencia acelerados (no inerciales).",
                objetivoVideo: "Analizar la desviación en el punto de impacto de un proyectil disparado verticalmente cuando el carro experimenta aceleración horizontal constante.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la bola no cae dentro del cañón cuando el carro acelera horizontalmente durante el tiempo de vuelo del proyectil?",
                        opciones: [
                            "Porque el disparo origina una reacción en cadena (acción y reacción) donde el vehículo es frenado de manera irreversible por el impulso vertical de la bola.",
                            "Porque la aceleración motriz súbita engendra capas de aire transversales que descarrilan a la bola suspendida obligándola a planear erráticamente.",
                            "Porque la bola hereda y mantiene inalterable la velocidad inicial de aquel preciso instante del disparo, mientras que el vehículo la va aumentando y alejándose.",
                            "Porque el proyectil libre también sufre una aceleración propia adicional que sobrepasa sistemáticamente la capacidad tractora de las ruedas inferiores."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Hacia dónde se desplaza el punto de caída de la bola (adelante o atrás del carro) si el vehículo frena en lugar de acelerar?",
                        opciones: [
                            "Cae justo detrás de la boquilla del cañón, ya que la fricción del frenado produce fuerzas inerciales de retroceso en toda la masa del entorno superior.",
                            "Caen simultáneamente en el mismo origen de disparo, pues el centro de masa acoplado del equipo frena y desciende conservando un equilibrio cinético estable.",
                            "Se desvía perpendicularmente de la pista hacia los laterales del carrito, producto de las fuerzas ficticias giroscópicas inherentes a un frenado en seco.",
                            "Cae delante del carro, porque el proyectil en el aire continúa imperturbable con la velocidad alta original, mientras que el vehículo ha frenado y marcha rezagado."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "04-05",
                titulo: "04-05 Parábolas en una mesa de aire",
                tema: "Trayectorias parabólicas continuas en dos dimensiones sin fricción.",
                objetivoVideo: "Registrar experimentalmente la trayectoria parabólica descrita por un disco en una mesa de aire inclinada y contrastar con el modelo analítico.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la componente de la gravedad a lo largo de la inclinación de la mesa en la curvatura de la trayectoria del disco?",
                        opciones: [
                            "Se encarga de definir la aceleración \"efectiva\" (g · sin θ) que actúa únicamente en el eje inclinado, originando la componente cuadrática que deforma el movimiento en una curva parabólica.",
                            "Incrementa directamente el alcance parabólico neto al disolver gradualmente el coeficiente de fricción estática de la superficie perforada.",
                            "Carece de influencia directa en el perfil geométrico de la curva ya que el flujo de aire elimina por completo la fuerza de atracción en todas sus direcciones vectoriales.",
                            "Opera ortogonalmente en el plano impidiendo un avance puro y transformando los vectores del movimiento directo en secciones hiperbólicas truncadas."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué magnitudes cinemáticas se mantienen constantes a lo largo del eje perpendicular a la pendiente de la mesa (eje horizontal de la superficie)?",
                        opciones: [
                            "Solo la aceleración centrífuga aparente del disco obtenida al curvar su avance.",
                            "La componente de velocidad rectilínea a lo largo de este eje, dado que aquí no existe aceleración neta alguna (movimiento inercial uniforme).",
                            "Exclusivamente la posición inicial proyectada ya que el disco solo desciende imitando la caída libre de un cuerpo plano.",
                            "El torque de rozamiento y la aceleración cosenoidal proyectada a lo largo del plano pulido del disco experimental."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "04-06",
                titulo: "04-06 Cañón de alcance variable",
                tema: "Dependencia del alcance horizontal respecto al ángulo de elevación.",
                objetivoVideo: "Determinar experimentalmente el ángulo de disparo que maximiza el alcance horizontal y comprobar la complementariedad de ángulos.",
                preguntas: [
                    {
                        pregunta: "¿Por qué teóricamente dos disparos efectuados a ángulos complementarios (por ejemplo, 30° y 60°) logran el mismo alcance horizontal?",
                        opciones: [
                            "Porque al sumar sus ángulos complementan 90°, donde se sabe que la aceleración gravitacional experimenta refracciones aerodinámicas equivalentes.",
                            "Porque el disparo con un gran ángulo alcanza una zona alta con menor resistencia viscosa que el impacto de bajo ángulo amortigua.",
                            "Porque las trayectorias concéntricas equilibran recíprocamente sus aceleraciones tangenciales empatando geométricamente en el medio vértice.",
                            "Porque en el disparo más bajo la velocidad horizontal es mayor pero su tiempo de vuelo es corto, mientras que en el disparo empinado ocurre exactamente a la inversa, igualándose sus productos totales."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Qué combinación de factores entre el tiempo de vuelo y la velocidad horizontal explica que el alcance óptimo ideal se produzca a 45°?",
                        opciones: [
                            "A 45°, la gravedad entra en una neutralidad relativa en su componente transversal que permite acumular velocidad horizontal hasta su cenit límite antes del impacto.",
                            "A este ángulo se cruzan las líneas isotermas de arrastre aerodinámico donde tanto proyectiles ligeros como pesados encuentran cero arrastre sustentable.",
                            "Matemáticamente a 45° se maximiza el producto cruzado de la componente vertical de la velocidad (que prolonga el tiempo de vuelo) y la velocidad de desplazamiento horizontal (vx).",
                            "Porque estadísticamente a 45° exactos, el punto de máxima altura de vuelo y la distancia horizontal conseguida adquieren siempre el idéntico valor escalar."
                        ],
                        correcta: 2
                    }
                ]
            }
        ]
    },
    5: {
        introLab: "Esta sesión de laboratorio se centra en la primera ley de Newton: el principio de inercia. Se examinarán sistemas en movimiento relativo y cuerpos sometidos a perturbaciones súbitas para evidenciar cómo la masa mide cuantitativamente la resistencia de un cuerpo a modificar su estado de reposo o movimiento rectilíneo uniforme.",
        objGeneral: "Evidenciar de forma práctica la manifestación de la inercia mecánica en cuerpos en reposo y en movimiento para consolidar la primera ley del movimiento de Newton.",
        videos: [
            {
                id: "05-01",
                titulo: "05-01 Inercia en un riel de aire que se desplaza",
                tema: "Persistencia del estado de reposo en marcos inerciales libres de fricción.",
                objetivoVideo: "Comprobar que un deslizador sobre un colchón de aire no es arrastrado por el desplazamiento uniforme de la base sobre la que reposa.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el deslizador permanece en reposo relativo respecto al laboratorio mientras el riel se desplaza por debajo de él?",
                        opciones: [
                            "Porque el colchón de aire genera una fuerza aerodinámica de empuje horizontal en sentido contrario que cancela el movimiento del riel.",
                            "Porque la ausencia de fricción mecánica impide que el movimiento del riel le transfiera una fuerza horizontal, permitiendo que conserve su estado inercial de reposo.",
                            "Porque el elevado peso del deslizador ancla su centro de masa al marco de referencia del laboratorio por atracción gravitacional pura.",
                            "Porque la viscosidad aerodinámica de la habitación frena instantáneamente cualquier intento de traslación del objeto impulsado."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué fuerza neta horizontal actúa sobre el deslizador durante el movimiento del riel y cómo se refleja esto en la primera ley de Newton?",
                        opciones: [
                            "Actúa una fuerza inercial ficticia equivalente a su masa multiplicada por la velocidad del riel, equilibrando y estabilizando mecánicamente el sistema.",
                            "Actúa la fuerza normal proyectada lateralmente, lo que obliga al cuerpo a cumplir estrictamente la ley de inercia rotacional en contra de su voluntad.",
                            "Actúa una fuerza neta igual a cero; y según la primera ley, ante la ausencia de una fuerza no balanceada, el cuerpo preserva su estado de reposo inicial inalterado.",
                            "Actúa una fuerza de arrastre elástica impuesta por el escape de la corriente de aire que empata milimétricamente con su propia aceleración inercial."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "05-02",
                titulo: "05-02 Cilindro de inercia",
                tema: "Resistencia inercial ante aceleraciones angulares y traslacionales.",
                objetivoVideo: "Comparar la respuesta dinámica de cilindros con idéntica geometría exterior pero distinta masa o distribución inercial.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la masa inercial del cilindro en la fuerza requerida para provocar un cambio súbito en su velocidad de traslación?",
                        opciones: [
                            "A mayor masa inercial, mayor es la fuerza externa necesaria que se debe aplicar sobre el objeto para lograr provocar esa misma aceleración o cambio de estado.",
                            "La magnitud de la fuerza requerida disminuye progresivamente si el cilindro tiene mucha masa, ya que el momento intrínseco de esta favorece el movimiento espontáneo.",
                            "No existe ninguna influencia medible de la masa, pues la fuerza requerida para la traslación depende exclusivamente del coeficiente de contacto de rodadura.",
                            "A mayor masa, la fuerza disminuye drásticamente porque la alta energía de cohesión atómica rompe más fácilmente la resistencia del reposo absoluto."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué diferencia práctica se observa entre la inercia traslacional de un cuerpo y su resistencia a ser puesto en rotación?",
                        opciones: [
                            "La inercia traslacional depende principalmente del volumen geométrico del objeto, mientras que su inercia rotacional depende únicamente del peso en la balanza.",
                            "Ambas respuestas mecánicas son idénticas en la práctica empírica, ya que cilindros macizos y huecos de masas iguales resisten por igual tanto los empujes como los giros.",
                            "La inercia de traslación depende únicamente de la masa total; en cambio, su resistencia a rotar depende tanto de la masa como de la forma en que esta se distribuye respecto a su eje.",
                            "La resistencia rotacional es un efecto ilusorio que solo aparece a altas velocidades angulares límite, mientras que la traslacional siempre afecta al cuerpo inmóvil."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "05-03",
                titulo: "05-03 Roca de hule espuma",
                tema: "Diferenciación entre apariencia geométrica y masa inercial real.",
                objetivoVideo: "Demostrar que la aceleración y la fuerza de impacto dependen exclusivamente de la masa inercial y no del volumen o aspecto del cuerpo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué una roca ficticia de hule espuma transmite una fuerza de impacto mínima a pesar de su gran tamaño aparente?",
                        opciones: [
                            "Porque su enorme envolvente visual exacerba la resistencia aerodinámica logrando frenarla por completo antes del roce efectivo.",
                            "Porque en la dinámica de colisiones, la fuerza del impacto depende enteramente de la aceleración y de la masa inercial real del cuerpo, pero en ningún momento de su volumen físico.",
                            "Porque el polímero sintético del hule espuma adolece de fricción de contacto, imposibilitando la transferencia del vector energía cinética.",
                            "Porque al incrementar su estructura dimensional el cuerpo es capaz de fraccionar e invertir los embates de la gravedad cancelando los torques internos."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo se define físicamente la masa inercial a partir del cociente entre la fuerza aplicada y la aceleración resultante?",
                        opciones: [
                            "Como una variable en constante degradación cinemática a medida que las aceleraciones del bloque tienden al valor referencial de la gravedad terrestre.",
                            "Como una proporción matemática abstracta que dicta qué tanta temperatura se generará superficialmente por causa del roce acelerado.",
                            "Como la constante de proporcionalidad que evalúa cuantitativamente qué tanta resistencia opone un cuerpo al tratar de que se le modifique su velocidad actual.",
                            "Como la simple derivación fraccional que se obtiene al contrastar numéricamente el peso baricéntrico del objetivo con la sustentación normal del experimento."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "05-04",
                titulo: "05-04 Sacudida del mantel",
                tema: "Interacción por fricción de corta duración e inercia de objetos en reposo.",
                objetivoVideo: "Analizar las condiciones dinámicas que permiten retirar rápidamente un mantel sin desplazar la vajilla colocada sobre él.",
                preguntas: [
                    {
                        pregunta: "¿Por qué un tirón rápido (tiempo de contacto muy breve) reduce el impulso transmitido por la fuerza de fricción a la vajilla?",
                        opciones: [
                            "Porque a grandes magnitudes de velocidad tangencial los hilos del tejido pierden mágicamente sus capacidades microscópicas de roce cinético o dinámico.",
                            "Porque el impulso mecánico se calcula como el producto de la fuerza por el tiempo de acción; al acortarse tan severamente ese tiempo, el momentum inyectado no alcanza para alterar el reposo de la vajilla.",
                            "Porque el estallido repentino de la tensión irradia ondas acústicas a través del mantel que expulsan momentáneamente el aire rompiendo la gravitación local.",
                            "Porque bajo aceleraciones extremas de tracción las polaridades del roce se invierten anclando férreamente las piezas al soporte de la madera subyacente."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué sucedería con la vajilla si el mantel se retira lentamente y cómo influye el coeficiente de fricción estática?",
                        opciones: [
                            "La vajilla se trasladaría invariablemente a cuestas del mantel, dado que, sin tirones, la fricción estática se conserva y cuenta con tiempo suficiente para dotarla de esa misma aceleración.",
                            "Las piezas rodarían anárquicamente en diversas orientaciones debido a la falta de armonía y a los torques originados por el deslizamiento seco.",
                            "Se quedaría inmóvil con total certidumbre, porque a ritmos bajos el poder de retención inercial que ostentan los cuerpos opaca todo coeficiente de superficie.",
                            "La fricción estática experimentaría una falla de fatiga inminente causando que las unidades de vidrio se despeguen levitando levemente del recubrimiento textil."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "05-05",
                titulo: "05-05 Huevos y plato de pizza",
                tema: "Inercia de cuerpos suspendidos ante el retiro impulsivo de su base de apoyo.",
                objetivoVideo: "Observar la caída vertical por gravedad de objetos cuando el soporte horizontal intermedio es expulsado bruscamente.",
                preguntas: [
                    {
                        pregunta: "¿Qué fuerza horizontal neta actúa sobre los huevos en el breve instante en que el plato y los tubos son desalojados lateralmente?",
                        opciones: [
                            "Una fuerza impulsiva de amortiguación lateral que pretende relanzarlos como catapulta contra la dirección vectorizada del golpe.",
                            "Una presión masiva de agarre viscoso que busca adherirlos cinéticamente con la velocidad destructora del elemento hueco.",
                            "La acción de la plataforma proyectada horizontalmente, la cual despliega un frente de resistencia aerodinámica que frena al proyectil.",
                            "Prácticamente no existe ninguna fuerza horizontal; el choque extirpa los apoyos con tal celeridad que fracasa en su intento de transmitirles momento en dicho eje."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Por qué los huevos caen verticalmente sin salir despedidos horizontalmente?",
                        opciones: [
                            "Porque la primera ley preserva estático su estado horizontal primitivo, y en el instante en que sus bases desaparecen, solo la constante aceleración de la gravedad asume el control obligándolos a hundirse hacia abajo.",
                            "Porque los enlaces intermoleculares polares del agua provocan fuerzas invisibles de succión hidrostática enfocadas sobre el material calcáreo de los huevos.",
                            "Porque la fuerza de la percusión entrega componentes rotacionales cruzadas que nulifican definitivamente los vectores de vuelo en parábola para todo el grupo.",
                            "Porque las corrientes de vacío generadas al escapar raudamente los tubos plásticos obran como anclas neumáticas forzándolos a ignorar sus tendencias inerciales clásicas."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "05-06",
                titulo: "05-06 Lápiz y madera terciada",
                tema: "Inercia mecánica local y penetración a altas velocidades de impacto.",
                objetivoVideo: "Explicar cómo la inercia de un material sólido impide su deformación global inmediata ante una colisión de muy alta velocidad.",
                preguntas: [
                    {
                        pregunta: "¿Por qué un proyectil ligero como un lápiz puede perforar una tabla sólida si es lanzado a una velocidad sumamente elevada?",
                        opciones: [
                            "Porque a regímenes hipersónicos la fricción perimetral pre-funde la lámina leñosa antes de que ocurra siquiera una conexión superficial directa con el cuerpo intruso.",
                            "Porque al chocar con ese exceso de celeridad, las leyes de repulsión moleculares ceden y cambian su orientación facilitando una ruptura limpia y fluida del sustrato de madera.",
                            "Porque la inercia concentrada de las fibras impide a la tabla replegarse o ceder como conjunto ante un impacto tan expedito, lo que confina toda la devastadora energía en un milímetro, cortándolo nítidamente.",
                            "Porque basándose estrictamente en las ecuaciones inerciales la propia masa intrínseca del lápiz se densifica igualando las prestaciones estructurales del plomo metálico denso."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cómo se relaciona el tiempo característico de respuesta inercial de la madera con la concentración del esfuerzo de corte?",
                        opciones: [
                            "Si la agresión ocurre de forma más vertiginosa que el margen inercial necesario para propagar la fuerza y hacer retroceder el madero, dicha fuerza no alcanza a disiparse; se condensa agudamente y termina superando la tolerancia de fractura de ese pequeñísimo punto local.",
                            "Realmente se descarta cualquier rol para la variable inercial del tiempo; el agujero resulta única y exclusivamente factible si el coeficiente elástico del invasor puntudo supera holgadamente a la fibra estacionaria.",
                            "Una ventana temporal amplia es garantía suficiente para generar el clímax destructivo instantáneo causando rebotes elásticos impecables que devuelven la flecha sin ocasionar mella a la cubierta de madera sólida.",
                            "Las dos magnitudes obedecen una relación inversa del orden del cuadrado de los espesores, indicando inequívocamente que únicamente tablones con gran masa logran absorber con tiempo y en su totalidad este impacto mortal."
                        ],
                        correcta: 0
                    }
                ]
            }
        ]
    },
    6: {
        introLab: "Esta sesión explora la tercera ley de Newton y el principio fundamental de conservación de la cantidad de movimiento lineal. A través de sistemas de propulsión a reacción, carros acoplados y colisiones aisladas, se estudiará cómo las fuerzas ocurren siempre en pares interactivos de igual magnitud y sentido opuesto.",
        objGeneral: "Comprobar empíricamente el principio de acción y reacción y la conservación del momento lineal en sistemas aislados y propulsados por eyección de masa.",
        videos: [
            {
                id: "06-01",
                titulo: "06-01 Deslizadores de reacción",
                tema: "Fuerzas mutuas de interacción en un sistema aislado sin fricción.",
                objetivoVideo: "Comprobar que cuando dos deslizadores interactúan mediante un resorte o explosión interna, experimentan fuerzas de igual magnitud y sentidos opuestos.",
                preguntas: [
                    {
                        pregunta: "¿Por qué los dos deslizadores adquieren aceleraciones en sentidos contrarios al liberarse el mecanismo propulsor interno?",
                        opciones: [
                            "Porque la energía elástica se divide aleatoriamente dependiendo del coeficiente de fricción individual de cada deslizador sobre el riel.",
                            "Porque el mecanismo interno ejerce fuerzas simultáneas de igual magnitud y sentidos opuestos sobre cada deslizador, cumpliendo el principio de acción y reacción de Newton.",
                            "Porque el aire comprimido que provee el riel fluye forzosamente hacia los extremos, generando un arrastre aerodinámico divergente.",
                            "Porque la inercia rotacional del resorte, al liberarse, se transforma inevitablemente en torques lineales orientados en sentidos opuestos."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo se relacionan las magnitudes de las aceleraciones que adquieren los deslizadores con sus masas?",
                        opciones: [
                            "Ambas aceleraciones resultan ser idénticas en todo momento, pues están generadas exactamente por el mismo par de fuerzas de la tercera ley.",
                            "Son inversamente proporcionales a sus respectivas masas; a pesar de recibir idéntica fuerza, el deslizador de mayor masa experimenta una menor aceleración inercial.",
                            "Son directamente proporcionales a la masa; el objeto más pesado logra acelerar más rápido en la etapa inicial debido a su mayor acumulación de momento latente.",
                            "La aceleración del deslizador ligero exhibe un perfil exponencial, mientras que la del pesado permanece rígidamente constante a lo largo de la expansión del resorte."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "06-02",
                titulo: "06-02 Conservación del momento de deslizadores de reacción",
                tema: "Conservación del momento lineal total en procesos de repulsión interna.",
                objetivoVideo: "Medir cuantitativamente las velocidades adquiridas por dos cuerpos repelidos para verificar que la cantidad de movimiento total se mantiene nula.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es el valor del momento lineal total del sistema antes de la liberación y por qué debe permanecer inalterado tras la repulsión?",
                        opciones: [
                            "Es máximo, y se conserva invariable a causa de que toda la fuerza liberada procede de un mecanismo estrictamente elástico o conservativo.",
                            "Es numéricamente igual al peso total sumado de ambas masas, un factor que no sufre alteraciones ya que la gravedad local es una constante inmutable.",
                            "Es igual a cero; y permanece constante porque el sistema está aislado en la dirección horizontal, sin fuerzas externas netas que puedan inyectar o extraer cantidad de movimiento.",
                            "Inicia valiendo cero, pero una vez activada la repulsión, aumenta progresivamente al registrarse la suma de las velocidades crecientes en ambos cuerpos masivos."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Qué relación matemática existe entre el cociente de las velocidades finales y el cociente de las masas de los dos deslizadores?",
                        opciones: [
                            "El cociente de las velocidades finales es directamente proporcional al de sus masas, resultando siempre favorecida la entidad de mayor peso.",
                            "El cociente o razón entre las velocidades adquiridas es inversamente proporcional a la razón de sus masas.",
                            "Es una relación puramente exponencial, cuyo grado está dictaminado en exclusiva por el cuadrado del coeficiente de restitución intrínseco del resorte propulsor.",
                            "No es posible establecer una relación matemática sólida, ya que las velocidades finales son producto azaroso de la tolerancia de rozamiento entre los metales sobre el riel."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "06-03",
                titulo: "06-03 Carro sobre una tabla que rueda",
                tema: "Fuerzas de reacción por fricción entre cuerpos de un sistema acoplado.",
                objetivoVideo: "Analizar el desplazamiento en sentido opuesto de una plataforma de apoyo móvil cuando un vehículo rueda sobre ella.",
                preguntas: [
                    {
                        pregunta: "¿Hacia dónde ejerce la fuerza de tracción el carro sobre la tabla y en qué sentido empuja la tabla las ruedas del carro?",
                        opciones: [
                            "El carro ejerce fuerza tractora hacia adelante sobre la tabla girando en banda, y la tabla termina succionando las ruedas hacia atrás por un efecto puramente aerodinámico.",
                            "El carro, mediante la fricción rotacional de sus llantas, empuja la tabla hacia atrás; como reacción a esto, la tabla aplica una fuerza empujando las ruedas del carro hacia adelante.",
                            "Ambas fuerzas apuntan exactamente en el mismo sentido del avance del carro, posibilitando así que el tablero gane impulso secundario por su inercia acoplada.",
                            "El empuje mecánico de los neumáticos colapsa sobre el baricentro vertical del propio automóvil, anulando virtualmente cualquier respuesta reactiva nacida en la madera inferior."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Por qué la tabla retrocede mientras el vehículo avanza y cómo se verifica la conservación del centro de masa del sistema conjunto?",
                        opciones: [
                            "Por la ley de acción y reacción actuando como fuerza interna del acoplamiento; al carecer de fuerzas horizontales netas desde el exterior, el centro de masa conjunto de carro y tabla permanece incólume en su posición de reposo inicial.",
                            "Retrocede a causa de un marcado rebote inercial de la superficie lisa; el centro de masa del grupo global se desplaza lentamente hacia atrás pretendiendo corregir el déficit del torque dinámico.",
                            "Porque la fricción cinética superficial impera en el experimento; la conservación recién se constata analíticamente al observar que el centro de masas general persigue solidariamente la estela de la fracción más liviana.",
                            "Debido al teorema de superposición vectorial; las fuerzas centrífugas de las llantas rebanan el baricentro general obligando al sistema a transpolar su equilibrio a través del vacío."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "06-04",
                titulo: "06-04 Carro de ventilador con vela",
                tema: "Cancelación de fuerzas internas frente al empuje de fuerzas externas.",
                objetivoVideo: "Demostrar que el flujo de aire de un ventilador montado sobre un carro no produce aceleración neta si choca contra una vela solidaria al vehículo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el carro no se acelera cuando el aire expulsado por el ventilador rebota directamente contra la vela montada sobre el mismo carro?",
                        opciones: [
                            "Porque el fluido de aire, al estrellarse contra el paño cóncavo, se quiebra en un flujo turbulento aleatorio perdiendo toda eficacia para crear un empuje ortogonal neto.",
                            "Porque el carro incrementa excesivamente su peso total inercial al fijarle la vela perpendicular, frustrando así los escasos Newtons de fuerza traccional del pequeño motor.",
                            "Porque la fuerza de retroceso que experimenta el ventilador al arrojar el aire, y la fuerza con que ese mismo aire impacta la vela, son fuerzas opuestas internas del mismo sistema estructural que se anulan en la sumatoria neta.",
                            "Porque el teorema del reposo de Galileo impide expresamente la traslación de aquellos cuerpos cuya fuente de empuje gaste simultáneamente la velocidad aerodinámica que ellos mismos han producido."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Qué ocurre con el movimiento del carro si se retira la vela y el chorro de aire es expulsado libremente hacia el entorno exterior?",
                        opciones: [
                            "Queda petrificado en su punto inercial inicial, dado que la atmósfera natural resulta demasiado vaporosa como para brindar una \"pared\" sustancial sobre la cual las aspas se puedan apoyar.",
                            "El móvil acelera decididamente en sentido contrario al chorro eyectado, esto empujado por la contundente fuerza de reacción que surge sobre el ventilador al haber impulsado toda esa masa fluida al ambiente libre.",
                            "Arranca avanzando en estricta sincronía con el sentido direccional en el cual se sopló el chorro, chupado lateralmente por la gradiente de vacío formada por detrás del rotor propulsor.",
                            "Experimenta tan solo una rotación sobre su eje geométrico vertical (trompo estacionario), a raíz de la severa asimetría del momento de inercia introducida al desarmarle la pantalla deflectora."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "06-05",
                titulo: "06-05 Cohete de CO2",
                tema: "Propulsión a reacción mediante eyección de gas comprimido a alta presión.",
                objetivoVideo: "Estudiar la propulsión de un proyectil por escape de gas y aplicar la ecuación del empuje reactivo de masa variable.",
                preguntas: [
                    {
                        pregunta: "¿Cuál es la causa física principal que impulsa al cohete de CO2 hacia adelante?",
                        opciones: [
                            "La vigorosa percusión expansiva que logra ejecutar la columna de gas en contra del obstáculo físico representado por el aire estancado atmosférico ubicado por detrás.",
                            "El salto térmico endógeno originado (refrigeración abrupta Joule-Thomson) que convierte súbitamente a la boquilla en un frente rígido cristalizado capaz de propulsar mecánicamente.",
                            "La expulsión masiva y continua del chorro de gas hacia la retaguardia, fenómeno que, mediante la inquebrantable conservación del momento lineal (acción-reacción), detona el empuje propulsor simétrico dirigido al frente sobre el armazón.",
                            "El perfil hidrodinámico superior de la estructura, que se torna capaz de captar energía de las corrientes succionadoras externas mientras la válvula purga presiones indeseadas del interior de la cámara."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cómo depende la aceleración máxima alcanzada por el cohete de la velocidad de salida del chorro de gas expulsado?",
                        opciones: [
                            "Presentan una relación de proporcionalidad inversa; al maximizar la violencia terminal de escape del humo, el cohete gana estabilidad directriz pero sacrificando severamente los picos de aceleración frontal.",
                            "La dependencia es directa y proporcional: entre mayor resulte ser la velocidad relativa con la que se desecha violentamente esa masa de gas, sustancialmente más grande será la fuerza reactiva aplicada y por ende su aceleración global.",
                            "Carecen totalmente de una conexión matemática causal, ya que la capacidad aceleradora reposa excluyentemente en el diseño de borde de ataque de la cabeza aerodinámica al frotar la densidad del ambiente libre.",
                            "Adquiere un pico inicial estándar completamente ajeno a las estadísticas de velocidad del fluido, puesto que la rápida solidificación criogénica en el conducto limita cualquier esfuerzo secundario de ignición inercial."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "06-07",
                titulo: "06-07 Carro movido por un extinguidor de fuego",
                tema: "Tercera ley de Newton en sistemas de transporte a reacción macroscópicos.",
                objetivoVideo: "Evidenciar la aceleración de un vehículo cargado con una persona propulsado por la fuerza reactiva generada por un extintor de gas.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se calcula la fuerza reactiva de empuje a partir de la tasa de flujo másico de gas y su velocidad relativa de expulsión?",
                        opciones: [
                            "Estableciendo el cociente simple entre el gramaje neto portado por la vasija a presión y el parámetro de velocidad máxima al que asciende el envase por los aires.",
                            "Multiplicando matemáticamente la tasa de flujo másico del fluido (que es la derivada de la masa expulsada por el tiempo o dm/dt) por su velocidad relativa de escape a través del orificio.",
                            "Desglosando el área transversal interior del inyector y resolviendo la división correspondiente entre los diferenciales volumétricos y el rozamiento isotérmico de la cabina motriz.",
                            "Efectuando un cruce aritmético simple entre las tasas de trabajo mecánico del chorro turbulento y el perfil exterior de la máquina aplicando teoremas estándar de hidrostática de Bernoulli."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Por qué la masa total decreciente del vehículo favorece un aumento progresivo en su aceleración a lo largo del tiempo de descarga?",
                        opciones: [
                            "Porque asumiendo que el empuje reactivo se mantiene en márgenes estables, el paulatino aligeramiento inercial del vehículo (denominador decreciente en a = F/m) engendra ineludiblemente una escalada continua de la aceleración obtenida.",
                            "Porque en ausencia de tanto gravamen de carga, los rodajes abandonan temporalmente su contacto microscópico normal facilitando el deslizamiento sobre colchones neumáticos estáticos.",
                            "Porque el dióxido carbónico al gozar de vastos volúmenes sobrantes en el encierro interior incrementa espontáneamente sus ondas compresivas auto generándose empujes colosales en los escasos instantes finales del ensayo.",
                            "Porque las válvulas reguladoras del envase reconocen la merma interior respondiendo con una expansión mecánica de seguridad en su abertura central y acelerando con creces la eyaculada restante del elemento químico."
                        ],
                        correcta: 0
                    }
                ]
            }
        ]
    },
    7: {
        introLab: "Esta sesión de laboratorio se dedica al análisis de las fuerzas de rozamiento en interfaces sólidas y sistemas neumáticos. Se caracterizarán experimentalmente los coeficientes de fricción estática y cinética, evaluando su dependencia con la fuerza normal, el área de contacto aparente y la naturaleza microscópica de las superficies.",
        objGeneral: "Determinar experimentalmente las leyes empíricas de la fricción sólida por deslizamiento y cuantificar los coeficientes de rozamiento estático y cinético en diversas configuraciones.",
        videos: [
            {
                id: "07-01",
                titulo: "07-01 Fricción en un riel de aire",
                tema: "Mecánica / Dinámica y fuerzas de fricción.",
                objetivoVideo: "Comparar el efecto de la fricción por contacto frente a un sistema de colchón de aire para evidenciar cómo su minimización permite extender la distancia de recorrido en el movimiento.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el deslizador se detiene con rapidez cuando se pone en movimiento sobre el riel sin el sistema de aire?",
                        opciones: [
                            "Porque la fricción por contacto directo sólido-sólido entre los metales genera una fuerza no conservativa que disipa rápidamente la energía cinética del sistema.",
                            "Porque al no inyectar aire, la presión atmosférica circundante aprisiona el deslizador incrementando de forma drástica su masa inercial efectiva.",
                            "Porque las corrientes de Foucault magnéticas del aluminio interactúan agresivamente con el armazón fijo de la pista, induciendo un freno de repulsión.",
                            "Porque, de acuerdo a la ley de inercia, todos los cuerpos poseen una inercia rotacional intrínseca que debe agotar su velocidad lineal natural de traslación."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿De qué manera el colchón de aire modifica las fuerzas de resistencia y el comportamiento dinámico del deslizador?",
                        opciones: [
                            "Aumenta el coeficiente de arrastre aerodinámico obligando al cuerpo a describir exclusivamente movimientos rectilíneos uniformemente acelerados.",
                            "Minimiza severamente la fricción de contacto, logrando que las fuerzas horizontales netas sean casi nulas y el movimiento se aproxime al modelo ideal de velocidad constante.",
                            "Bloquea temporalmente el vector de gravedad (g), creando un marco de ingravidez que le permite al deslizador anular su peso operativo por completo.",
                            "Condensa la película de rozamiento estático logrando una resonancia vibratoria que empuja activamente al bloque hacia adelante en un sentido específico."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué relación física se observa entre la reducción de la fricción y el incremento en la distancia recorrida por el objeto?",
                        opciones: [
                            "Al reducirse la fricción, se reduce el trabajo negativo que extrae energía del sistema, lo que le permite mantener su velocidad y recorrer mucha más distancia inercial.",
                            "Una menor fricción concentra el calor térmico del impulso original en el eje longitudinal, triplicando de manera elástica el rebote frontal del objeto.",
                            "No existe relación física válida; el deslizador recorre más distancia únicamente cuando la masa volumétrica se evapora debido al choque neumático prolongado.",
                            "La reducción de fricción aumenta la aceleración de caída constante lo cual multiplica invariablemente el radio del alcance horizontal de su rodadura."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "07-02",
                titulo: "07-02 Fricción estática vs. Fricción cinética",
                tema: "Estática y Dinámica / Fuerzas de fricción.",
                objetivoVideo: "Medir y comparar experimentalmente la fuerza de fricción estática máxima frente a la fricción cinética utilizando un dinamómetro.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la lectura del dinamómetro alcanza un valor pico justo antes de que el bloque comience a deslizarse?",
                        opciones: [
                            "Porque el resorte interno del instrumento experimenta un engarrotamiento mecánico temporal frente a las aceleraciones inerciales abruptas.",
                            "Porque la fuerza de tracción debe igualar el punto máximo de la fricción estática, que es el umbral de tensión de los enlaces microscópicos justo antes de romperse para iniciar el movimiento.",
                            "Porque la energía cinética de tracción atraviesa un cambio de fase instantáneo provocando una interferencia en la escala graduada del aparato.",
                            "Porque toda la aceleración gravitacional (normal) debe anularse a cero para habilitar geométricamente las leyes estáticas de la traslación bidimensional."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué diferencia práctica se observa en la fuerza registrada por el dinamómetro entre el momento previo al movimiento y cuando el bloque ya se encuentra deslizando a velocidad constante?",
                        opciones: [
                            "Son idénticas matemáticamente, demostrando empíricamente que la estática y la cinemática son fenómenos unificados de arrastre conservativo.",
                            "La fuerza en deslizamiento es exponencialmente mayor a la inicial por culpa de la turbulencia macroscópica generada al friccionar el plano a gran rapidez.",
                            "Se registra oscilando erráticamente entre el peso absoluto del bloque de madera y la tensión centrífuga del dinamómetro al jalar de la polea en serie.",
                            "La fuerza registrada justo antes del movimiento (fricción estática máxima) es consistentemente mayor que la fuerza constante que se requiere para mantenerlo deslizando (fricción cinética)."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Cómo se relaciona la magnitud de la fuerza de fricción estática máxima y la cinética con las propiedades de las superficies en contacto?",
                        opciones: [
                            "Son determinadas exclusivamente por el área volumétrica proyectada de las bases intervinientes, sin importar cuán lisas o rugosas luzcan sus caras de tracción.",
                            "Sus coeficientes crecen proporcionalmente a medida que la temperatura ambiente debilita las fibras elásticas del recubrimiento exterior empleado.",
                            "Dependen de forma directa del coeficiente de rozamiento de las superficies (su rugosidad, adhesión intermolecular e impurezas), siendo este un factor propio de cada pareja de materiales que interactúan.",
                            "Se dictaminan inversamente al coeficiente elástico de Young, pues el desgaste corrosivo iguala a todo material sin importar qué composición atómica mantenga el sustrato de base."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "07-03",
                titulo: "07-03 Dependencia de la fricción con respecto al área",
                tema: "Leyes empíricas de la fricción por deslizamiento.",
                objetivoVideo: "Demostrar si el área aparente de contacto afecta o es independiente de la fuerza de fricción total.",
                preguntas: [
                    {
                        pregunta: "¿Qué relación matemática existe entre el área de contacto y la fuerza de fricción según las leyes empíricas clásicas (modelo de Coulomb-Amontons)?",
                        opciones: [
                            "Existe una fuerte proporcionalidad inversa; al disminuir el área el sistema se clava como punzón aumentando bruscamente las fuerzas tangenciales disipadas.",
                            "Muestran una relación exponencial cruzada donde la fricción estática duplica sus vectores de oposición cada vez que la superficie visible de la cara se triplica.",
                            "Según el modelo clásico, la fuerza total de fricción es matemáticamente independiente de la magnitud del área geométrica aparente de contacto entre los sólidos.",
                            "Tienen una correspondencia directa, de tal suerte que si rotamos un prisma bloqueando una cara de triple grosor su capacidad de friccionar se multiplica por tres."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Qué se observa en los valores medidos al cambiar la orientación del bloque de área pequeña a área grande?",
                        opciones: [
                            "Se constata que los valores de tracción medidos no experimentan un cambio significativo comprobando empíricamente la independencia del área macroscópica.",
                            "La magnitud de fricción se va reduciendo drásticamente a la mitad evidenciando una ventaja aerodinámica fundamental de rodadura estática frontal.",
                            "Los dinamómetros marcan sobrecargas por roturas de tensiones cruzadas invalidando cualquier comparación teórica respecto al estado plano primario.",
                            "La lectura se multiplica por diez al verse involucrados nuevos perfiles de volumen de masa gravitacional que el dinamómetro asimila en la fórmula original."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Por qué a nivel microscópico el área real de contacto difiere del área geométrica aparente?",
                        opciones: [
                            "Porque microscópicamente el rozamiento genera densos campos electromagnéticos que obligan a las superficies a levitar anulando los contactos por contacto efectivo.",
                            "Porque absolutamente todas las superficies son rugosas a nivel atómico, de manera que solo los puntos salientes o \"crestas\" entran realmente en contacto íntimo y soportan la carga estructural.",
                            "Porque las deformaciones debidas a la fuerza tangencial empujan a las moléculas formando una delgada película elástica de rodadura libre exenta de área plana pura.",
                            "Porque el cálculo del área aparente comete sistemáticamente un error vectorial perdiendo las componentes de arrastre ortogonal originadas por el peso muerto de los objetos."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "07-04",
                titulo: "07-04 Dependencia de la fricción con respecto al peso",
                tema: "Fuerza normal y fricción.",
                objetivoVideo: "Comprobar la proporcionalidad directa entre la fuerza normal (peso) y la fuerza de fricción.",
                preguntas: [
                    {
                        pregunta: "¿Cómo varía la fuerza de fricción si se duplica el peso del objeto sobre la superficie?",
                        opciones: [
                            "Incrementa a la cuarta potencia ya que debe asimilar simultáneamente el cuadrado de la masa junto con los diferenciales del coeficiente plano.",
                            "También se duplica, demostrando que la fricción mantiene una estricta proporcionalidad directa de primer grado con la magnitud de la fuerza normal impuesta al sistema.",
                            "Queda exactamente en su mismo valor, dado que las fuerzas perpendiculares se cancelan ortogonalmente con los empujes rectos a lo largo de las pendientes.",
                            "Desciende casi hasta la mitad como un efecto de alisado natural producido por la intensa compresión mecánica nivelando y aplastando toda la rugosidad superficial."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué representa físicamente la pendiente de la gráfica de fuerza de fricción en función de la fuerza normal?",
                        opciones: [
                            "Representa la aceleración inercial sostenida de la estructura a lo largo del intervalo lineal cronometrado de movimiento constante.",
                            "El valor de la energía de trabajo disipativa máxima convertida irreversiblemente en un fluido de calor estático al vencer los vínculos macroscópicos de arrastre longitudinal.",
                            "Simboliza exactamente al coeficiente de fricción empírico (sea estático o cinético, según los datos) para la combinación particular de materiales graficados en el experimento.",
                            "Expresa la magnitud escalar del área geométrica efectiva por donde se propaga toda la presión estática hidrodinámica proveniente del vector del centro de baricentro del conjunto total de masas operantes."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Se mantiene constante el coeficiente de fricción al alterar la carga vertical?",
                        opciones: [
                            "No, crece dramáticamente producto de que las presiones superplativas introducen la variable inercial del momento magnético angular originando fusiones en frío atípicas en los contactos rugosos de prueba.",
                            "Disminuye asintóticamente ya que las deformaciones mecánicas elastoplásticas destrozan la estructura base reestructurando al material experimental como si rodara velozmente sobre rodajes o perdígones balísticos pequeños.",
                            "De acuerdo al modelo estándar de fricción seca de Coulomb, el coeficiente sí se mantiene constante al constituir una propiedad de la interfaz que no varía, la que resulta afectada e incrementada proporcionalmente por la normal es la magnitud final de la fricción como tal.",
                            "Se altera de una forma oscilatoria cíclica porque los módulos de Young de las maderas de prueba jamás soportan compresiones rígidas frontales rebasando las tolerancias de aplastamiento dictaminadas a lo largo de los manuales mecánicos del fabricante particular en cuestión."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "07-05",
                titulo: "07-05 Dependencia de la fricción con respecto a la superficie",
                tema: "Estática y Dinámica / Coeficiente de fricción estática en planos inclinados.",
                objetivoVideo: "Demostrar cómo las propiedades de la superficie de contacto afectan el coeficiente de fricción estática y, por ende, el ángulo crítico de deslizamiento en un plano inclinado.",
                preguntas: [
                    {
                        pregunta: "¿Qué relación existe entre el ángulo de inclinación en el que comienza el deslizamiento y el coeficiente de fricción estática del material?",
                        opciones: [
                            "El coeficiente es idéntico a la componente senoidal del ángulo crítico escalado por la fracción directa volumétrica representativa del centro inercial de rodamiento lateral en descenso continuo inclinado.",
                            "Se comprueba estáticamente que la magnitud del coeficiente de rozamiento crítico equivale con exactitud a la función tangente trigonométrica del ángulo máximo de vuelco o caída (μ = tan θ).",
                            "Tienen la proporcionalidad cuadrática cruzada; un ángulo cerrado multiplica al exponencial rotacional neutralizando definitivamente a los índices inerciales representativos de las cuñas metálicas y bloqueando los vectores directrices.",
                            "Carecen de todo vínculo analítico, el coeficiente tan solo corresponde al cálculo perimetral de presiones frente a las constantes vectoriales impuestas inercialmente cuando un sólido busca eludir las trabas geométricas de caída en gravedad libre descendente."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Por qué los bloques de latón no empiezan a deslizarse al mismo tiempo a pesar de tener la misma masa y dimensiones?",
                        opciones: [
                            "Porque el proceso de micro dilatación térmica varía aleatoriamente en sus bases de carga ocasionando descarrilamientos rotacionales impredecibles a nivel microscópico por simple calentamiento por radiación solar ambiental no controlada de fondo.",
                            "Porque aunque sus pesos gravitatorios inerciales calcen perfecto la fuerza impulsora neta experimenta fluctuaciones turbinas provenientes de corrientes de viento atmosférico estático.",
                            "Porque las caras en contacto han sido forradas con distintos materiales (madera, caucho, etc.), dándole a cada unidad un coeficiente de roce estático único que demandará distintos ángulos para romperse y deslizar.",
                            "Porque los momentos magnéticos intrínsecos del latón generan atracciones anárquicas disparejas hacia la tabla de ensayo inyectando aceleraciones no compensables."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cuál de las superficies probadas (caucho, madera, lija o teflón) requiere un mayor ángulo de inclinación para vencer la fricción estática y por qué?",
                        opciones: [
                            "La madera, debido a su extrema absorción de la humedad que funciona como ventosa neumática frente a superficies inorgánicas selladas al vacío de laboratorio.",
                            "El teflón, ya que al ser un recubrimiento ultra liso obliga a la tabla a elevarse exageradamente buscando reacomodar sus átomos dispersos evitando de ese modo las fricciones por corte seco transversal a su empuje principal.",
                            "Materiales como el caucho o la lija, en virtud de poseer coeficientes estáticos sumamente altos dados por sus propiedades de encaje microscópico rugoso o elevada tenacidad elástica intermolecular para aferrarse con fuerza al soporte.",
                            "Ninguno destaca; de manera predecible, los cuatro resbalan simultáneos alrededor del cuadragésimo grado una vez vencidas las rigideces inerciales estáticas y activada la rotación geométrica."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "07-06",
                titulo: "07-06 Estabilidad de un carro que rueda",
                tema: "Dinámica de cuerpos rígidos, fricción y estabilidad de vehículos.",
                objetivoVideo: "Analizar cómo el bloqueo de diferentes conjuntos de ruedas afecta la estabilidad direccional y el control de desplazamiento de un objeto rodante en una pendiente.",
                preguntas: [
                    {
                        pregunta: "¿Por qué razón el carro patina y pierde la trayectoria cuando se bloquean exclusivamente las ruedas traseras?",
                        opciones: [
                            "Porque sus ruedas posteriores transitan violentamente de fricción estática de rodadura a fricción cinética resbaladiza, extirpando el agarre posterior con lo que la inercia transforma cualquier pequeña fuerza lateral en un indeseado trompo (sobreviraje).",
                            "Porque al apretar férreamente los frenos el baricentro general de la masa gravitatoria transita raudamente hacia adelante levantando al armazón e impulsándolo al volcamiento catastrófico inminente frente a cualquier vector lateral entrante a bajas velocidades en descenso.",
                            "Porque la sumatoria vectorial de las normales ascendentes en la pendiente de la mesa colapsa por rotura de simetría de empuje, desviando tangencialmente a las ruedas delanteras en dirección contraria ocasionando colisiones estructurales por estrés de torques asimétricos cruzados de la cuña impulsora direccional respectiva.",
                            "Porque esto obliga al tren posterior a transpolar inercia hacia adelante en forma de fricción hidrostática produciendo trompos gravitacionales no conservativos contrarios al avance ideal simétrico pre-establecido en los manuales inerciales del transporte general sobre pistas rampa de bajada inclinada constante uniforme no compensada debidamente antes por fricción general trasera direccional de rodaje suave libre continuo."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué sucede si se bloquean únicamente las ruedas delanteras?",
                        opciones: [
                            "Genera volcaduras repentinas sobre el eje frontal puesto que las ruedas que quedaron libres arrullan la masa inercial frontal arrinconándola lateralmente sin posibilidades mecánicas de control de volante longitudinal.",
                            "Provoca que el carro alcance una velocidad exponencial tipo caída libre ignorando las rugosidades base porque el bloqueo polariza todas sus caras y extirpa los vectores normales de compresión descendente del sistema estructural básico rodante liso.",
                            "El carro logra conservar una trayectoria en esencia rectilínea descendiendo sólidamente (subviraje), dado que las ruedas traseras mantienen su agarre estático natural operando como estabilizadores inerciales o \"plumas de cola\" que impiden que el tren trasero se desvíe en rotación indeseada.",
                            "Desencadena vibraciones transversales en serie que parten la estabilidad dinámica y producen un zigzag caótico imposible de rastrear cinemáticamente porque la aceleración de bajada duplica su arrastre por carecer de frenaje frontal dinámico equilibrado constante por la gravedad proyectada senoidalmente con respecto al eje de avance general libre de aceleraciones."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cómo se relaciona la fricción por deslizamiento y el momento de inercia direccional con el comportamiento de estabilidad del carro en este experimento?",
                        opciones: [
                            "En pleno descenso plano la fricción rotatoria desvía el momento angular frontal logrando que el carro patine siempre en perfectas parábolas sin importar los frenos utilizados en su chasis.",
                            "Cuando un eje derrapa la fricción se hace puramente cinética y pierde control contra desplazamientos de lado; si esto pasa atrás, la inercia del vehículo que sigue moviéndose tratará de adelantar y pivotear sobre el frente con agarre, desestabilizando completamente al móvil por acción de su propio inercial giro empujador natural continuo rotacional espontáneo no compensable libre.",
                            "Se acoplan para producir un torque compensatorio perfecto en las ruedas derechas e izquierdas, manteniendo la estabilidad inercial incólume y reestableciendo las aceleraciones en el momento justo del golpe por arrastre aerodinámico inducido libre sobre las alas de descenso frontal asimétrico longitudinal equilibrado estable constante de inercial natural por tracción directa sin rotaciones transversas parásitas inerciales en ningún momento durante todo el tramo descendiente uniforme liso sin roce cinético o dinámico apreciable en los perfiles bajos laterales.",
                            "La relación es inversamente cuadrática frente al momento inercial debido a que la fricción lateral empuja hacia arriba el centro magnético del armazón evitando que sus fuerzas rotacionales inician derrapes peligrosos anulando el trompo direccional de la masa total móvil rodante a cualquier aceleración base calculada analíticamente con tensores polares cartesianos rotados angularmente sobre su frente directriz natural libre simétrico plano."
                        ],
                        correcta: 1
                    }
                ]
            }
        ]
    },
    8: {
        introLab: "En esta sesión se estudiarán los conceptos fundamentales de trabajo, energía y potencia mediante la transformación continua de la energía potencial (gravitatoria y elástica) en energía cinética, a su vez, se aplicará la conservación de la energía mecánica en sistemas ideales y reales, empleando trayectorias diversas como rieles inclinados, dispositivos de salto y péndulos físicos.",
        objGeneral: "Comprobar experimentalmente el principio de conservación de la energía mecánica a través de la transformación e intercambio cíclico entre energía potencial gravitatoria, energía potencial elástica y energía cinética en diferentes sistemas mecánicos.",
        videos: [
            {
                id: "08-01",
                titulo: "08-01 Martinete",
                tema: "Conservación y transferencia de energía mecánica / Trabajo y energía.",
                objetivoVideo: "Ilustrar la conversión de energía potencial gravitatoria en energía cinética y su posterior trabajo de penetración al impactar sobre los clavos.",
                preguntas: [
                    {
                        pregunta: "¿Cómo influye la altura de caída del martinete en la energía cinética acumulada justo antes del impacto con los clavos?",
                        opciones: [
                            "A mayor altura, el martinete acumula mayor energía potencial gravitatoria inicial, la cual se transforma en una mayor energía cinética justo en el instante previo al impacto.",
                            "La altura no influye en la energía cinética acumulada; esta depende exclusivamente de la masa inercial del bloque metálico empleado.",
                            "Una caída desde mayor altura incrementa la fricción aerodinámica de manera desproporcionada, restando energía cinética al momento del impacto frontal.",
                            "La altura provoca que la aceleración gravitacional aumente exponencialmente, multiplicando la energía del martinete fuera de los parámetros conservativos."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué relación existe entre el trabajo realizado por el martinete y la profundidad de penetración de los clavos en la madera?",
                        opciones: [
                            "Muestran una relación inversamente proporcional; a mayor trabajo entregado, el clavo disipa más energía en calor y penetra menos distancia.",
                            "Son independientes; el trabajo solo se relaciona con el sonido y la deformación térmica, mientras que la penetración depende del filo del clavo.",
                            "El trabajo mecánico entregado es igual a la fuerza resistiva promedio de la madera multiplicada por la distancia de penetración que logra el clavo.",
                            "El trabajo se divide geométricamente entre todos los clavos presentes anulando su capacidad de penetración en maderas de alta densidad inercial."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Qué formas de energía se manifiestan y se transforman durante el choque entre el martinete y el sistema de clavos?",
                        opciones: [
                            "Se conserva una energía mecánica puramente elástica donde ambos cuerpos rebotan sin experimentar pérdida cinética.",
                            "La energía potencial gravitatoria pura se transfiere directamente a los clavos transformándolos temporalmente en imanes por fricción atómica.",
                            "La energía de repulsión electrostática del metal frena al martinete e induce la entrada de los clavos por alteraciones de densidad maderera.",
                            "La energía cinética de caída del martinete se transforma en trabajo mecánico (hundir los clavos), deformación estructural y se disipa en energía térmica y acústica (sonido)."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "08-02",
                titulo: "08-02 Cañón de resorte",
                tema: "Energía potencial elástica y relación entre masa, fuerza y aceleración.",
                objetivoVideo: "Analizar cómo influye la masa de un proyectil en la respuesta dinámica y en la altura o alcance alcanzado cuando se le transfiere una misma cantidad de energía potencial elástica.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se almacena inicialmente la energía mecánica en el mecanismo del cañón de resorte antes de efectuar el disparo?",
                        opciones: [
                            "Como energía cinética microscópica dentro de las moléculas de acero en fricción estática interna.",
                            "Como energía térmica condensada inducida por el rozamiento mecánico del émbolo contra las paredes del cilindro perimetral.",
                            "Como energía potencial gravitatoria latente, aguardando la rotura del seguro inercial del tubo base.",
                            "Como energía potencial elástica, producida al realizar trabajo mecánico para comprimir o deformar las espiras metálicas del resorte."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Por qué la esfera hueca (de menor masa) alcanza una altura mayor que la esfera de mayor masa si el resorte se comprime exactamente igual en ambos casos?",
                        opciones: [
                            "Porque el resorte, al detectar una menor resistencia inercial superficial, transfiere un mayor porcentaje del impulso elástico eludiendo el rozamiento cinético.",
                            "Porque al transferir la misma cantidad de energía a ambas, la esfera de menor masa requiere gastar menos energía para vencer su propio peso, logrando ascender a mayor altura (E = mgh).",
                            "Porque la esfera maciza y pesada altera la constante elástica del resorte aplastando de manera irreversible los niveles energéticos moleculares.",
                            "Porque el objeto hueco se vale del flujo aerodinámico atrapado en su centro para flotar térmicamente hacia arriba aprovechando el empuje."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo se refleja la segunda ley de Newton (fuerza y masa) en la aceleración que adquiere cada esfera al momento de ser liberadas por el resorte?",
                        opciones: [
                            "La aceleración inicial se mantiene inmutable en ambas pruebas debido a que la magnitud impulsora elástica es estrictamente constante.",
                            "Ante una misma fuerza elástica aplicada, la esfera con mayor masa exhibe una mayor aceleración inercial al poder concentrar mayores vectores de repulsión.",
                            "La aceleración sufre retrasos logarítmicos porque ninguna fuerza real puede perturbar la inercia instantánea sin producir deformación esférica plástica.",
                            "Al aplicarles la misma fuerza de impulso, la aceleración resulta inversamente proporcional a la masa (a = F/m); por ende, la esfera más ligera adquiere una aceleración inicial mucho mayor."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "08-03",
                titulo: "08-03 El saltarín",
                tema: "Energía potencial elástica y conservación de la energía mecánica.",
                objetivoVideo: "Analizar la conversión de la energía potencial elástica almacenada en energía cinética y gravitatoria mediante la liberación súbita de un mecanismo de retención.",
                preguntas: [
                    {
                        pregunta: "¿Cómo se almacena la energía potencial elástica en el dispositivo justo antes de producirse el salto?",
                        opciones: [
                            "Al deformar el material del muñeco comprimiendo su estructura plástica contra el suelo y asegurándola para impedir su liberación inmediata.",
                            "Invirtiendo el centro de flotación del dispositivo mediante giros axiales rápidos sobre el plano de prueba horizontal.",
                            "Concentrando energía potencial estática en los apoyos de caucho para evadir la atracción gravitacional local.",
                            "Transfiriendo energía cinética remanente del impacto previo directamente a la boquilla aerodinámica de succión de aire."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué función cumple la ventosa como mecanismo de retención y cómo afecta el tiempo de liberación de la energía?",
                        opciones: [
                            "Incrementa la energía cinética succionando paulatinamente moléculas superficiales hasta saturar la balanza inercial elástica extendiendo la expulsión por minutos.",
                            "Evita que la fuerza restauradora actúe inmediatamente; al ceder la ventosa, permite que toda la energía potencial acumulada se libere en un instante extremadamente breve (alta potencia).",
                            "Funciona como un regulador disipador que asegura un despegue a velocidad constante y sin aceleraciones bruscas hacia la vertical superior absoluta.",
                            "Intercambia fluidos de baja presión con la madera inferior, provocando vacíos de densidad acústica que repelen al cuerpo suavemente por reacción de Bernoulli."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿De qué manera la energía cinética inicial, obtenida tras el disparo, se convierte en energía potencial gravitatoria conforme el muñeco asciende?",
                        opciones: [
                            "A medida que gana altura contra el campo gravitacional, el muñeco va perdiendo velocidad, transformando el movimiento (energía cinética) directamente en energía de posición (potencial gravitatoria).",
                            "Ambas magnitudes energéticas aumentan sincrónicamente dado que la inercia acumulada nutre un pozo de potencial ascendente conservativo infinito durante todo su viaje aéreo libre estático.",
                            "La velocidad se mantiene inalterada y todo el trabajo mecánico se canaliza hacia la rotación del centro de masas de la figura en trayectoria elíptica vertical ascendente transversal cruzada.",
                            "Se transfiere mediante una red de rozamientos cinéticos que anulan el avance de altitud forzando a rebotar la energía hacia vectores horizontales perpendiculares netamente nulos inerciales dinámicos."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "08-04",
                titulo: "08-04 Conservación de energía en un resorte y riel inclinado",
                tema: "Conservación de la energía mecánica y elasticidad.",
                objetivoVideo: "Analizar cómo la energía potencial almacenada en el resorte, que es proporcional al cuadrado de su compresión, se convierte en energía potencial gravitatoria en función de la altura alcanzada por el deslizador.",
                preguntas: [
                    {
                        pregunta: "¿De qué manera la compresión inicial del resorte determina la energía potencial elástica almacenada antes de efectuar el lanzamiento?",
                        opciones: [
                            "La energía almacenada disminuye radicalmente si el resorte permanece comprimido por largos periodos al perder su coeficiente térmico restitutivo.",
                            "Únicamente logra establecer la tensión de ruptura máxima y no cuantifica ni determina los factores energéticos iniciales requeridos estáticos.",
                            "De forma directa y cuadrada; a mayor deformación o acortamiento de la longitud original (x), se almacena una cantidad de energía proporcional al cuadrado de esa compresión (U = 1/2 k x²).",
                            "Posee una relación inversamente lineal: mientras más se oprimen las espiras del metal contra sí, menor es la fuerza elástica empírica calculada."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Por qué la altura máxima que alcanza el deslizador sobre el riel inclinado aumenta de forma no lineal (proporcional al cuadrado) conforme se incrementa la compresión del resorte?",
                        opciones: [
                            "Porque el rozamiento superficial cambia asintóticamente a lo largo de las pistas alterando el roce lineal de la madera transversal del carro inclinado.",
                            "Porque al subir el ángulo de ataque la constante gravitacional terrestre ejerce componentes de fuerza parabólicas ajenas a la linealidad vectorial.",
                            "Porque la energía potencial final alcanzada (que depende de la altura lineal mgh) debe igualar exactamente a la energía inicial aportada, la cual depende del cuadrado de la deformación elástica (x²).",
                            "Porque el riel, al flectar geométricamente bajo la masa del móvil propulsado, origina combaduras curvas en la trayectoria alterando matemáticamente las escalas cinemáticas puras de ascenso inclinado libre de poleas o contrapesos."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Qué transformaciones energéticas experimenta el sistema desde el instante en que se libera el deslizador hasta que se detiene momentáneamente en su punto más alto?",
                        opciones: [
                            "La energía de compresión elástica se transmutará al cien por ciento en energía térmica que frena al objeto antes de completar su vuelo rasante gravitacional por efecto de los rodajes gastados del carro deslizante.",
                            "El deslizador viaja impulsado por energía potencial que súbitamente transmuta a momentos de inercia y vuelve a estabilizarse únicamente como potencial térmica acústica en la rampa.",
                            "Arranca con energía potencial gravitatoria que se disuelve en energía cinética intermedia, finalizando como un empuje elástico de resortes rebotados a lo largo de su freno centrífugo.",
                            "La energía potencial elástica inicial se convierte de golpe en energía cinética (velocidad máxima), la cual se va transformando gradualmente en energía potencial gravitatoria a medida que el cuerpo asciende y frena en la cima."
                        ],
                        correcta: 3
                    }
                ]
            },
            {
                id: "08-05",
                titulo: "08-05 Pelota saltarina o popper",
                tema: "Energía potencial elástica y conservación de la energía mecánica.",
                objetivoVideo: "Analizar cómo la conversión y liberación súbita de energía potencial elástica almacenada por inversión geométrica permite incrementar la altura de rebote más allá de la altura inicial.",
                preguntas: [
                    {
                        pregunta: "¿De qué manera se almacena energía en la semiesfera elástica al ser volteada de adentro hacia afuera antes de dejarla caer?",
                        opciones: [
                            "La tensión térmica de los dedos traspasa energía en forma de gradiente electrostática focalizada netamente en el ápice circular externo liso opaco cerrado a nivel macro.",
                            "Forzando la curvatura natural geométrica del polímero; esta inversión del casquete genera una gran tensión en la estructura, almacenando energía en forma de potencial elástica intermolecular.",
                            "Al vaciar neumáticamente la cavidad ahuecada creando una divergencia en la presión atmosférica del ambiente provocando así la precondición dinámica perfecta inercial de succión para el salto libre en caída descendente neta pura.",
                            "No requiere un almacenamiento previo elástico como tal; la caída libre rotacional proporciona a la goma toda la aceleración gravitacional requerida de antemano."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué ocurre con la energía cinética y elástica del objeto en el instante en que impacta contra el suelo y recupera su forma original?",
                        opciones: [
                            "Ambas sufren aniquilamiento completo y definitivo al chocar en frío transfiriendo la percusión como ondas sísmicas indetectables que no contribuyen en absoluto a generar un salto reflectante útil apreciable o medible visualmente en laboratorio práctico experimental de colisiones en base dura no deformable sólida continua nivelada.",
                            "La energía cinética adquirida en su modesta caída detona la súbita liberación de la abundante energía potencial elástica acumulada en su inversión, sumando ambos aportes en el fuerte impulso ascendente del rebote percusivo inferior.",
                            "La elástica suprime y apacigua a la cinética neutralizando mecánicamente todo salto y obligando al polímero de ensayo a detenerse anclado a piso pegajosamente inamovible cual plastilina cruda rebotada.",
                            "Chocan repeliéndose en vectores perpendiculares que obligan al domo plástico rodar de forma tangencial a lo largo y ancho del laboratorio eludiendo permanentemente las reglas de inercia y gravedad superior cenital."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Por qué razón la altura alcanzada tras el rebote supera la altura desde la cual fue soltada inicialmente?",
                        opciones: [
                            "Porque el rebote suma de manera no conservativa todas las inercias rotacionales invisibles introducidas al soltar la semiesfera de medio lado sobre la placa.",
                            "Porque los choques siempre incrementan un 50% extra de energía de acuerdo a los principios termodinámicos inerciales estáticos que gobiernan gomas e hules vulcanizados expuestos a aceleraciones de la gravedad (g).",
                            "Porque la altura inicial solo le aportó una modesta energía potencial de gravedad; el gran salto posterior utiliza la energía gravitatoria combinada con el violento excedente de energía elástica acumulada por su previa deformación manual.",
                            "Porque durante el vuelo descendente inicial la fricción enrarecida restó altitud al proyectil simulando una cota inferior de caída no correspondiente a su auténtico centro baricéntrico geométrico central de plomo hundido oculto."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "08-06",
                titulo: "08-06 Pozo de energía y conservación de la energía",
                tema: "Conservación de la energía mecánica, energía potencial gravitatoria y pozos de potencial.",
                objetivoVideo: "Analizar cómo la energía potencial inicial determina si una partícula puede superar una barrera de potencial o si queda atrapada oscilando dentro de un pozo.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la bola queda atrapada oscilando en el pozo cuando es soltada desde una altura menor que la cima del lado opuesto?",
                        opciones: [
                            "Porque la gravedad invierte sus polos de atracción al cruzar el umbral del baricentro neutral, reteniendo magnéticamente cualquier sólido pulido al centro exacto de la depresión cóncava inferior oscura profunda ciega sellada.",
                            "Porque carece de la energía mecánica total necesaria; al partir desde una cuota baja, su energía potencial inicial resulta insuficiente para subir y vencer el \"pozo o barrera de potencial\" del otro extremo, forzándola a devolverse iterativamente.",
                            "Porque adquiere excesiva energía rotacional angular la cual drena su momento lineal dejándola rodando en círculos perpetuos sin poder transformar ese empuje de giros concéntricos hacia vectores verticales escaladores.",
                            "Porque los coeficientes de rozamiento estático varían drásticamente con la inclinación pronunciada obligando al objeto esférico liso metálico macizo pesado frenarse súbitamente a medio cerro imposibilitando los avances lineales paralelos a toda gravedad estándar uniforme libre terrestre plana medida."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Qué condición energética debe cumplir la altura inicial de liberación para que la bola logre escapar del pozo de potencial?",
                        opciones: [
                            "Debe ser matemáticamente equivalente a la temperatura base del riel fundido restada al coeficiente térmico cinético normal del material de la esfera pequeña rebotadora libre suelta por gravedad local simple g = 9.8.",
                            "Tiene que ofrecer una reserva de energía cinética que permanezca invariable por debajo de toda la energía de fricción aerodinámica que frena al objeto antes de la cima paralela superior simétrica contigua libre despejada de obstáculos físicos sólidos densos.",
                            "Ninguna altura podrá escapar jamás; los pozos representan agujeros de inercia irreversibles donde ninguna magnitud de impulso manual mecánico externo permite superar la topología de encierro de energía libre conservativa clásica macroscópica de Newton simple evaluada analíticamente con vectores tridimensionales proyectados en la base profunda del carril de aluminio curvo ensayado.",
                            "La bola requiere arrancar desde una energía potencial inicial (determinada por la altura) que sea superior a la energía potencial correspondiente al punto más alto de la barrera u obstáculo que se interpone en su escape lateral frontal curvo."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Cómo se relacionan la energía potencial gravitatoria y la energía cinética a lo largo de las oscilaciones de la bola dentro del riel?",
                        opciones: [
                            "Permanecen exactamente iguales en todos los instantes y posiciones del riel manteniendo constante el momento total conservativo de sus inercias.",
                            "Se cancelan matemáticamente la una a la otra en todos los niveles, provocando un vacío energético que es responsable del freno final irreversible de la masa esférica tras unas cuantas oscilaciones de la pista profunda curva de prueba de aluminio de laboratorio mecánico estático general de colegio o universidad introductoria.",
                            "Guardan una relación complementaria: cuando la bola desciende hacia el fondo, su energía potencial disminuye y se convierte en energía cinética (máx); al ascender por la rampa contraria, la cinética se agota para restituir su energía potencial en la cumbre.",
                            "Son enteramente proporcionales y ascendentes juntas; al aumentar sus giros incrementa también exponencialmente la fuerza de campo de potencial estático gravitatorio central logrando la aceleración infinita progresiva escalada hacia niveles inexplorados inerciales ajenos al freno disipativo atmosférico aerodinámico común fluido que satura la superficie curva descendiente opuesta al tiro inicial parabólico vertical caído de frente."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "08-07",
                titulo: "08-07 Péndulo de Galileo",
                tema: "Conservación de la energía mecánica y dinámica del movimiento pendular.",
                objetivoVideo: "Demostrar que, a pesar de modificarse de forma abrupta la longitud efectiva del péndulo al restringir la cuerda en el punto más bajo, la energía total del sistema se conserva, permitiendo que la bola alcance la misma altura inicial en el extremo opuesto de la oscilación.",
                preguntas: [
                    {
                        pregunta: "¿Por qué razón la bola del péndulo logra subir hasta exactamente la misma altura desde la que fue soltada, a pesar de que la longitud de la cuerda se acorta abruptamente en el punto más bajo?",
                        opciones: [
                            "Porque el poste que interrumpe la cuerda transfiere inmediatamente energía elástica extra, empujando a la bola con la fuerza suficiente para vencer los límites de su caída primitiva.",
                            "Porque el recorte de radio concentra los torques aerodinámicos provocando fuerzas ascendentes inerciales giroscópicas que la obligan a rebasar sus niveles iniciales en contra de los mandatos termodinámicos ordinarios.",
                            "Porque la fuerza de tensión perpendicular a la trayectoria no ejecuta ningún trabajo; por tanto, la energía mecánica total se preserva intacta y, en ausencia de disipación notable, la masa debe recuperar la misma altitud original para agotar su energía cinética y detenerse.",
                            "Porque al acortarse violentamente su trayectoria de pivotaje central, el factor tiempo retrocede cancelando todas las velocidades frontales e instalando al cuerpo de bronce de regreso en la coordenada zetas de partida simétrica ideal matemática pura asintótica lateral perpendicular nula de base sólida inferior en contacto rígido."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cómo influye la restricción aplicada por el poste al detener parte de la cuerda sobre la energía y el movimiento del sistema durante la oscilación?",
                        opciones: [
                            "Destruye el equilibrio energético obligando a la masa pendular a ceder calor por rozamientos transversales en el lazo cortante superior metálico vertical perpendicular incrustado en placa madre.",
                            "No añade ni sustrae energía mecánica, pero al disminuir obligatoriamente el radio de giro efectivo de la curva, la bola debe aumentar notablemente su velocidad angular (y su fuerza centrípeta) para escalar el tramo restringido sin colapsar tensiones internas.",
                            "La estaca altera el vector gravitacional provocando derivas polares y forzando oscilaciones asimétricas de energía no armónica simple oscilatoria elástica exponencial sobre la bola suspendida y sus empujes baricéntricos inerciales transversales laterales puros de gravedad continua atípica deformada intencionalmente en aula abierta libre a perturbaciones térmicas y magnéticas de la bobina de hilo suspendida libre.",
                            "Invierte el orden conservativo inercial deteniendo por completo a la bola en secos e instantáneos saltos cinemáticos angulares que suprimen cualquier asomo de oscilación parabólica libre armónica simple de retorno al punto focal de reposo original neutro absoluto de gravedad."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿De qué manera se redistribuyen la energía potencial gravitatoria y la energía cinética cuando la bola recorre la trayectoria con la nueva longitud de cuerda?",
                        opciones: [
                            "La energía cinética se duplica para compensar el déficit de área circular barrida conservando el momento magnético perpendicular de los hilos de nylon en las paredes verticales limitantes contiguas de choque de la polea lisa redonda superior metálica pesada fría estática y firme.",
                            "La mecánica de transformación es idéntica al tramo libre: partiendo con la energía cinética máxima del fondo, esta velocidad se va transformando en energía potencial a medida que gana altura vertical, deteniéndose exactamente cuando gasta toda su al igualar la cota original.",
                            "Transmutan en calor y torsiones elásticas asimétricas donde todo el momento de traslación inicial veloz colapsa y fluye por el obstáculo vertical reduciéndola a un estado estático permanente en las alturas inexploradas perpendiculares y superiores ajenas a todo ciclo repetitivo posterior predecible en las fórmulas comunes clásicas ordinarias inerciales.",
                            "No alcanzan a redistribuirse; sufren una fuga termodinámica donde las fuerzas ficticias giroscópicas ahogan a la energía potencial prohibiéndole abandonar el nivel cero o fondo abisal absoluto del marco inercial descendido veloz previamente."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "08-08",
                titulo: "08-08 El péndulo de demolición",
                tema: "Conservación de la energía mecánica y transformación entre energía potencial y cinética en un péndulo.",
                objetivoVideo: "Comprobar experimentalmente que la energía mecánica total de un sistema se conserva en ausencia de fuerzas disipativas significativas, garantizando que la bola no sobrepase el punto de liberación y protegiendo al observador.",
                preguntas: [
                    {
                        pregunta: "¿Por qué razón la bola de boliche no supera la altura desde la cual fue soltada al regresar al punto inicial frente al rostro de la persona?",
                        opciones: [
                            "Por el principio inviolable de conservación de la energía; al soltarla del reposo, el sistema cuenta con una cantidad finita de energía inicial, y es físicamente imposible que produzca o invente energía extra para ascender un solo milímetro más de lo que originalmente poseía.",
                            "Por un truco visual óptico ocasionado por las perspectivas isométricas en las que graba el lente angular fotográfico del equipo investigador falseando la verdadera altitud inercial de la esfera hueca liviana rebotante.",
                            "Porque el instructor ejerce atracciones biomagnéticas que frena el vuelo de avance del mazo oscilante impidiendo el impacto por succión natural de campo abierto sobre masas oscilantes libres suspendidas en reposo térmico inicial puro vertical simétrico lateral plano sin fuerzas laterales impulsivas introductorias de arranque inicial forzado rudo asimétrico inercial perturbador constante.",
                            "Porque al tener tanta masa intrínseca la bola deforma el vector de gravedad estirándolo como liga de hule y ralentizando todos sus perfiles temporales rítmicos haciendo que pierda momento de torsión lateral libre al rebasar la marca inicial superior vertical cenital opuesta lejana."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿De qué manera se intercambian la energía potencial gravitatoria y la energía cinética a lo largo de toda la trayectoria oscilatoria del péndulo?",
                        opciones: [
                            "Se intercambian constantemente: en los puntos más altos el péndulo posee su mayor potencial (Ug máx) y velocidad cero; durante su viaje de caída esta energía decrece y se convierte enteramente en cinética logrando su máxima velocidad al atravesar el punto más bajo.",
                            "Permanecen oscurecidas y ancladas a sus vectores iniciales obligando a transcurrir el proceso puramente como un choque de fricciones aerodinámicas que ignoran las cumbres de altitud para enfocarse en exprimir rotaciones axiales concéntricas fijas asintóticas laterales transversales y constantes de aceleraciones inerciales no dependientes de variables de masa espacial relativa ni de distancias tangenciales del hilo portante suspensor de tensión media variable lineal no elástico rígido.",
                            "Muestran una compensación elástica cruzada: la energía cinética desaparece a la mitad del trayecto reapareciendo mágicamente como potencial rotacional impulsando al péndulo como hélice acelerada de avión inercial y rompiendo el equilibrio mecánico general por arrastre aerodinámico invertido asimétrico posterior libre a perturbaciones caóticas de inercia incomprensible atípica irregular.",
                            "La cinética se asocia exclusivamente al lado izquierdo del descenso mientras la potencial rige por decreto inercial el ascenso derecho cortando el intercambio mediante fugas no conservativas elásticas térmicas sonoras lumínicas puras de radiación dispersa de cuerpos negros pesados oscilantes densos masivos opacos grandes colosales pendulares esféricos regulares de centros de masa fijos constantes no excéntricos estables macizos puros limpios pulidos brillantes reflectantes."
                        ],
                        correcta: 0
                    },
                    {
                        pregunta: "¿Qué factores reales (como la fricción con el aire o pequeñas pérdidas mecánicas) impiden que la bola alcance exactamente la misma altura o posición inicial tras múltiples oscilaciones?",
                        opciones: [
                            "El decaimiento cuántico rotacional que afecta paulatinamente las estructuras de tensión de los metales bajo aceleraciones de péndulo clásico introduciendo oscilaciones parásitas nulas inerciales oscuras no rastreables microscópicamente bajo pruebas fotográficas estroboscópicas continuas simples comunes planas lineales paralelas inerciales.",
                            "La aparición indeseada de fuerzas ficticias giroscópicas debidas a la inestabilidad de giro natural de la bola perforada asimétrica al momento de liberarla de costado asimétrico respecto al eje yugo soporte techo muro estructural superior estático rígido principal base origen neutro ortogonal cartesianamente medido libre.",
                            "Las fuerzas disipativas (no conservativas) que actúan en el mundo real, tales como el roce aerodinámico contra el fluido atmosférico y las flexiones o fricciones en el eje del pivote, las cuales realizan trabajo negativo extrayendo paulatinamente la energía mecánica y disipándola en forma de inútil calor vibratorio.",
                            "La paulatina debilitación de la constante universal de la gravedad en las proximidades tangenciales a grandes bloques de masa en rotación inercial periódica de alta aceleración angular continua sostenida por anclajes metálicos tensos fijos perpendiculares rectos paralelos al muro base posterior pintado y liso brillante plano regular seco firme duro estable horizontal inercial."
                        ],
                        correcta: 2
                    }
                ]
            },
            {
                id: "08-09",
                titulo: "08-09 Rieles triples y conservación de la energía",
                tema: "Conservación de la energía mecánica y la independencia de la trayectoria en la energía potencial gravitatoria.",
                objetivoVideo: "Demostrar que, al cambiar la forma y la pendiente de la sección ascendente de un riel, la energía mecánica se conserva, permitiendo que la bola alcance exactamente la misma altura vertical desde la que fue soltada sin importar la inclinación de la pendiente.",
                preguntas: [
                    {
                        pregunta: "¿Por qué razón todas las bolas logran subir hasta exactamente la misma altura vertical inicial a pesar de que los tres rieles tienen pendientes ascendentes completamente diferentes?",
                        opciones: [
                            "Porque el empuje del riel corto se intensifica mediante resortes invisibles incorporados en su fundición y contrarresta el déficit de largo comparado a la rampa extensa nivelada contigua emparejándolas al ojo humano desnudo.",
                            "Porque al rodar en descenso libre, la fricción estática del plano liso se hace cero ocasionando levitaciones inerciales aerodinámicas que congelan todo efecto de altitud ignorando trayectorias base metálicas sólidas rígidas estructuradas fijas horizontales y ruteadas.",
                            "Porque las aceleraciones centrípetas generadas por las combaduras disuelven los vínculos estáticos e imponen descensos y escaladas proporcionales que igualan topológicamente toda forma o perfil montañoso irregular artificial asimétrico del aparato exhibido central libre.",
                            "Debido al principio rector de conservación de la energía: si parten del mismo nivel de reposo y la fricción resulta despreciable, la cantidad de energía con la que disponen para el tramo ascendente es idéntica en las tres, por lo cual, independientemente de la forma geométrica o ruta que tomen, su energía cinética se agotará exactamente al restituir el cien por ciento de su altura y de origen inicial."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿De qué manera se transforma la energía potencial gravitatoria en energía cinética durante el descenso y cómo se revierte este proceso en el tramo ascendente de cada riel?",
                        opciones: [
                            "Se transforman únicamente por contacto térmico elástico entre rueda plana maciza opaca dura pulida redonda oscura metálica pura y chapa pulida base de soporte de empuje paralelo recto horizontal plano nivelado ajustado simétricamente con burbuja de agua equilibrada calibrada estable.",
                            "Mientras cae de la cima desaloja su altura transformando la energía potencial en energía cinética de movimiento; al ascender por la rampa, la velocidad (energía cinética) se va frenando y reconvirtiendo de nuevo en energía potencial gravitatoria hasta detenerse en su altura original.",
                            "Caen disipándose y desapareciendo definitivamente de toda fórmula vectorial provocando colapsos de empuje direccionales donde las inercias rotacionales axiales se encargan de subir a solas la cuesta pronunciada forzando derrapes laterales estéticos espectaculares visuales rápidos bruscos y violentos en bajada inclinada curva empinada lisa sin roce notable.",
                            "El descenso genera fricción de alta compresión elástica concentrada empujando a los baricentros a ignorar inercias ascendentes previas estancando a las esferas macizas pesadas en valles muertos energéticos absolutos impasables ciegos mudos estáticos inertes eternos quietos."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo influye la pendiente de un riel sobre la aceleración y el tiempo que le toma a la bola recorrer la sección ascendente hasta detenerse momentáneamente?",
                        opciones: [
                            "A mayor pendiente (una inclinación ascendente muy empinada o abrupta), mayor es la componente paralela de la gravedad que la frena (g · sin θ); consecuentemente, la bola experimenta una alta aceleración de frenado y consume muy poco tiempo de rodadura y distancia lateral para escalar y llegar exhausta a su cuota de altitud objetivo fija inercial.",
                            "La pendiente del plano inclinado ascendente carece de todo impacto real en la cinemática; todos los tiempos y aceleraciones calculados para llegar a tope altitud son exactamente un solo e inmutable número plano y uniforme indiferente de topografías angulares agudas o prolongadas suaves extendidas horizontales curvas irregulares del suelo rampa base inferior.",
                            "Las pendientes suaves y muy llanas producen frenajes catastróficos violentos de corta duración temporal ocasionando choques estáticos no elásticos rotacionales que paralizan al objeto prematuramente en un segundo o menos tiempo neto total global marcado medido con precisión láser.",
                            "Genera inercias transversales que empujan y duplican la masa efectiva gravitatoria anulando cualquier componente aceleradora recta proyectada por los teoremas trigonométricos forzando demoras irracionales astronómicas de caída libre elástica estática plana inercial uniforme regular simétrica de ensayo mecánico básico simple formal teórico clásico tradicional y puro."
                        ],
                        correcta: 0
                    }
                ]
            }
        ]
    },
    9: {
        introLab: "Esta sesión explora las propiedades cinemáticas y estáticas del centro de masa de sistemas rígidos e irregulares. Se examinarán las condiciones de estabilidad del equilibrio mecánico, la localización del baricentro mediante puntos de suspensión y el comportamiento dinámico de cuerpos asimétricos.",
        objGeneral: "Determinar experimentalmente la posición del centro de masa en objetos regulares e irregulares y analizar su vinculación directa con la estabilidad del equilibrio estático.",
        videos: [
            {
                id: "09-01",
                titulo: "09-01 Estabilidad",
                tema: "Equilibrio estable, inestable e indiferente en función de la línea de gravedad.",
                objetivoVideo: "Identificar los tipos de equilibrio mecánico analizando la posición del centro de masa respecto a la base de sustentación y al perturbar el sistema.",
                preguntas: [
                    {
                        pregunta: "¿Qué condición geométrica debe cumplir la proyección vertical del centro de masa respecto a la base de apoyo para que un cuerpo no vuelque?",
                        opciones: [
                            "Su proyección debe ser paralela al plano de apoyo independientemente de dónde descanse el sólido para cancelar el torque gravitatorio.",
                            "La línea de acción del peso (proyección vertical del centro de masa) debe caer obligatoriamente dentro de los límites de la base de sustentación o apoyo.",
                            "Debe situarse estrictamente en el punto de contacto más alto, maximizando la inercia rotacional del sólido frente a cualquier desnivel.",
                            "Debe caer siempre en el borde externo de la base geométrica para mantener una reacción normal perpendicular al objeto."
                        ],
                        correcta: 1
                    },
                    {
                        pregunta: "¿Cómo se define el equilibrio estable en términos de la variación de la energía potencial del centro de masa ante un desplazamiento infinitesimal?",
                        opciones: [
                            "Ante un pequeño desplazamiento, el centro de masa se eleva incrementando la energía potencial del sistema (dU > 0), y la gravedad genera un torque que tiende a regresarlo a su posición original de mínima energía.",
                            "El desplazamiento infinitesimal anula por completo la energía cinética, forzando un pozo de potencial asintótico que congela al objeto sin rotación.",
                            "La energía potencial permanece constante para cualquier desplazamiento angular debido a la conservación estricta del momento inercial.",
                            "El centro de masa desciende, minimizando aún más la energía potencial y provocando que el cuerpo se aleje de su posición inicial."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "09-02",
                titulo: "09-02 Centro de masa de un objeto irregular",
                tema: "Determinación geométrica experimental del baricentro por suspensión plomada.",
                objetivoVideo: "Localizar el centro de masa de una placa de geometría arbitraria mediante la intersección de líneas verticales trazadas desde puntos de pivote.",
                preguntas: [
                    {
                        pregunta: "¿Por qué la vertical que pasa por el punto de suspensión contiene obligatoriamente al centro de masa del cuerpo suspendido libremente?",
                        opciones: [
                            "Porque la fuerza centrífuga de la suspensión elimina temporalmente las inercias transversales y deja como única magnitud libre a la componente vertical inercial absoluta.",
                            "Porque en el punto de suspensión el peso del cuerpo se divide simétricamente, garantizando que el punto medio de masa decaiga perpendicularmente por arrastre atmosférico.",
                            "Porque el cuerpo oscila y rota hasta alcanzar un equilibrio estable donde el torque neto es cero, lo cual se cumple exclusivamente cuando la fuerza de gravedad y la tensión están alineadas sobre la misma línea vertical.",
                            "Porque la plomada induce un campo giroscópico local que atrae al baricentro forzando su alineación geométrica directa por peso estático."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Cuántas líneas de plomada como mínimo se requieren trazar para fijar con certeza la posición del centro de masa en el plano bidimensional de un objeto irregular?",
                        opciones: [
                            "Se requieren al menos dos líneas de suspensión (desde puntos distintos); el centro de masa se localiza exactamente en la intersección geométrica de ambas plomadas.",
                            "Con una sola línea trazada es suficiente, siempre y cuando se asuma que el objeto posee un espesor completamente regular, plano y liso.",
                            "Cuatro líneas ortogonales, debido a la necesidad de ubicar los cuatro cuadrantes del centroide inercial en un eje de coordenadas cartesianas absoluto.",
                            "Son indispensables como mínimo tres líneas que formen un triángulo de fuerzas para asegurar el equilibrio estático de las tensiones axiales internas."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "09-05",
                titulo: "09-05 Payaso en la cuerda floja",
                tema: "Estabilidad por descenso forzado del centro de masa por debajo del apoyo.",
                objetivoVideo: "Analizar cómo el uso de una barra curvada lastrada desciende el centro de masa total por debajo de la cuerda de apoyo, logrando equilibrio estable automático.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el sistema permanece estable sobre la cuerda incluso al oscilar lateralmente sin caer?",
                        opciones: [
                            "Porque las inercias giroscópicas de la barra curva repelen las caídas de lado conservando intacto su momento angular ascendente.",
                            "Porque los brazos extendidos aumentan exponencialmente la inercia rotacional aerodinámica, evitando que la fricción empuje a la figura hacia los lados fuera del plano de la soga.",
                            "Porque el payaso se ubica en el centro exacto de la cuerda impidiendo vibraciones modales transversales en un soporte elástico tenso de laboratorio.",
                            "Porque el uso de los contrapesos prolongados logra que el centro de masa total del sistema descienda por debajo de la propia cuerda de apoyo, ubicando la carga en un estado natural de equilibrio estable."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Cómo cambia el torque restaurador gravitatorio cuando el centro de masa del conjunto se ubica por debajo del punto de contacto?",
                        opciones: [
                            "El torque restaurador se invierte obligando al sistema a dar un giro completo por inestabilidad de la normal inercial de la base en contacto.",
                            "Ante cualquier desviación lateral de la vertical, el peso genera un torque neto en la dirección opuesta al giro que obliga al centro de masa a regresar a su posición de reposo y mínima energía.",
                            "Al descender el baricentro, el torque gravitatorio se vuelve nulo provocando un equilibrio de tipo indiferente donde el objeto ignora todas las vibraciones laterales.",
                            "El torque incrementa la altura del sistema exponencialmente multiplicando la energía cinética y rompiendo el soporte por acumulación de tensiones mecánicas asimétricas."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "09-06",
                titulo: "09-06 Cono doble en una pendiente",
                tema: "Movimiento aparente contra la pendiente y descenso real del centro de masa.",
                objetivoVideo: "Explicar la aparente paradoja de un cono doble que rueda cuesta arriba en una rampa divergente demostrando que su baricentro desciende.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el eje central del cono doble desciende verticalmente mientras el objeto avanza hacia el extremo más elevado de los rieles abiertos?",
                        opciones: [
                            "Porque la rotación de los ejes induce un empuje hacia adelante causado por el arrastre de fuerzas centrípetas generadas por las superficies convergentes de rodadura libre.",
                            "Porque los ángulos cruzados de la pendiente obligan a la figura a ganar altitud inercial por simple inestabilidad estática direccional forzada mecánicamente desde el vértice.",
                            "Debido a que la fricción cinética entre la madera y los rieles invierte artificialmente los vectores ortogonales de peso repeliendo al sólido plano.",
                            "Porque los rieles se separan progresivamente o abren en forma de \"V\", lo que permite que el perfil del doble cono encaje más profundamente y su centro de masas baje hacia el suelo por gravedad, aunque el armazón soporte parezca subir."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Qué criterio energético determina la dirección espontánea del movimiento de cualquier sistema mecánico libre de restricciones externas?",
                        opciones: [
                            "La tendencia inercial espontánea exige mantener constante toda aceleración angular conservando siempre la posición rotacional congelada respecto del horizonte.",
                            "El sistema tiende espontáneamente a reorientarse, girar o trasladarse hacia aquella configuración que reduzca y minimice lo más posible su energía potencial total (descendiendo su centro de masa).",
                            "Los sistemas mecánicos puros buscan maximizar su energía cinética y potencial simultáneamente para cumplir rigurosamente el segundo teorema inercial conservativo elástico puro dinámico continuo de Newton.",
                            "El criterio rector requiere disipar invariablemente todo su trabajo de avance lineal transformando el equilibrio en fuerzas asimétricas dispersas vibracionales sin rumbo fijo constante simétrico nivelado."
                        ],
                        correcta: 1
                    }
                ]
            },
            {
                id: "09-07",
                titulo: "09-07 Disco cargado",
                tema: "Desplazamiento del centro de masa mediante distribución de masa asimétrica.",
                objetivoVideo: "Analizar la cinemática y las oscilaciones de un disco cuyo baricentro no coincide con su centro geométrico debido a una masa excéntrica interna.",
                preguntas: [
                    {
                        pregunta: "¿Qué tipo de oscilación realiza el disco cargado cuando se perturba ligeramente desde su posición de reposo más baja?",
                        opciones: [
                            "Desarrolla vibraciones torsionales microscópicas audibles que no varían su ubicación estática sino que liberan tensiones en su punto focal.",
                            "Presenta oscilaciones caóticas debido a que el peso desbalanceado rompe el momento simétrico provocando despegues erráticos sobre el perfil inclinado.",
                            "Efectúa oscilaciones rotacionales armónicas (vaivén), análogas a las de un péndulo físico simple, dado que su masa excéntrica intenta recuperar su punto de energía mínima en la zona inferior.",
                            "Ninguna; la carga excéntrica detiene la figura, aplastando el perímetro contra la mesa por el torque estático desbalanceado constante del peso adicional hundido no centrado o asimétrico de ensayo experimental."
                        ],
                        correcta: 2
                    },
                    {
                        pregunta: "¿Por qué el disco puede subir espontáneamente una ligera pendiente cuando la masa excéntrica se encuentra orientada estratégicamente?",
                        opciones: [
                            "Porque inicialmente la masa pesada excéntrica se ubica en la parte superior; al girar el disco rodando \"cuesta arriba\", esa masa desciende más distancia de lo que el centro sube, logrando que el centro de masa total descienda globalmente según dicta la energía potencial.",
                            "Porque la asimetría le inyecta una rotación de avance infinito gracias a momentos angulares que absorben fuerza de la rampa lisa empujando la pieza desbocada en contraposición a las reglas inerciales naturales estáticas de pesos libres.",
                            "Porque el roce estático y la goma rugosa empujan en solitario a los átomos pesados en contra de la fuerza de gravedad forzando una escalada elástica por adherencia superior inercial del disco redondo.",
                            "Porque al perder su simetría polar, el disco redondo engendra focos ficticios de repulsión gravitacional en contacto que levitan momentáneamente la estructura sobre la cuña de ensayo de experimentación universitaria mecánica inclinada de mesa."
                        ],
                        correcta: 0
                    }
                ]
            },
            {
                id: "09-09",
                titulo: "09-09 Centro de masa en una mesa de aire",
                tema: "Cinemática del centro de masa en cuerpos rígidos en rotación y traslación libre.",
                objetivoVideo: "Observar la trayectoria rectilínea uniforme que describe el centro de masa de una llave o cuerpo asimétrico que gira sobre una mesa de aire.",
                preguntas: [
                    {
                        pregunta: "¿Por qué el centro de masa sigue una trayectoria rectilínea impecable mientras todos los demás puntos del cuerpo describen curvas complejas?",
                        opciones: [
                            "Porque los extremos más pesados atraen al baricentro anulando las ecuaciones estáticas y forzando a la llave metálica a deformarse geométricamente por tensiones centrípetas.",
                            "Es un efecto visual causado por la simetría rotacional óptica; todo el plano se traslada en espirales estrechas disimulando su auténtico giro bajo estroboscopio.",
                            "Porque el peso desigual del instrumento ejerce torques compensatorios internos, ahogando vibraciones cruzadas en el deslizamiento estático uniforme equilibrado libre puro.",
                            "Porque mientras el cuerpo rota sobre sí mismo de forma excéntrica o caótica, sobre el centro de masas (que obedece puramente a la inercia traslacional con fuerza externa neta cero en la mesa de aire) solo aplica el movimiento rectilíneo uniforme constante inalterado."
                        ],
                        correcta: 3
                    },
                    {
                        pregunta: "¿Cómo confirma este experimento que la segunda ley de Newton rige el movimiento traslacional del centro de masa como si toda la masa estuviera concentrada en él?",
                        opciones: [
                            "Demostrando empíricamente que la ecuación de traslación solo tiene validez rotunda en vacíos perfectos, restándole veracidad si el sólido extenso asimétrico interactúa con la atracción de fuerzas externas de roce seco cinético atmosférico de base plana pulida.",
                            "Constata de manera fáctica que sin importar los enrevesados movimientos o giros internos, el punto geométrico baricéntrico responde de forma simple (F_neta = m · a_cm), comportándose como si fuera una sola partícula puntual de masa global cruzando el plano liso flotante.",
                            "Demuestra irrefutablemente que la masa real nunca se condensa sino que fuga hacia los contornos, inhabilitando las ecuaciones de traslación simple en cuerpos que adolezcan de perfiles rígidos curvos perfectos esféricos limpios simétricos.",
                            "Verifica que si un elemento adquiere muchas revoluciones, su peso inercial se transfiere y aparta de la ley clásica, requiriendo matrices de tensores abstractos puros para predecir avances horizontales rectos planos de primer nivel académico mecánico universitario en rampa."
                        ],
                        correcta: 1
                    }
                ]
            }
        ]
    }
};