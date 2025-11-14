const movies = [
  { id: 1, title: 'Cosmos: A Spacetime Odyssey', year: 2014, duration: 60, age: 'teens', topics: ['Science', 'Nature', 'Tech'], description: 'Serie de Neil deGrasse Tyson que explora el universo, la ciencia y nuestro lugar en el cosmos. Una fascinante aventura a través del espacio y el tiempo que muestra cómo se originó el universo, la evolución de la vida, y cómo la ciencia nos ayuda a entender nuestro lugar en el cosmos.', rating: 9.3, poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=cosmos+spacetime+odyssey+trailer' },
  { id: 2, title: 'Our Planet', year: 2019, duration: 50, age: 'kids', topics: ['Nature', 'Science'], description: 'David Attenborough narra este espectacular documental sobre la biodiversidad del planeta Tierra. Explora cómo los ecosistemas conectados del mundo sustentan toda la vida, desde los polos hasta el ecuador. Una mirada profunda a la naturaleza, sus maravillas infinitas y los desafíos que enfrenta.', rating: 9.0, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=our+planet+trailer' },
  { id: 3, title: 'The Story of Mathematics', year: 2008, duration: 60, age: 'teens', topics: ['Math', 'Science'], description: 'Serie que cuenta la fascinante historia y evolución de las matemáticas a través de los siglos. Descubre cómo las matemáticas han sido fundamentales en el desarrollo de la civilización, desde los antiguos babilonios hasta la era digital moderna.', rating: 8.5, poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=story+of+mathematics+trailer' },
  { id: 4, title: 'Life', year: 2009, duration: 50, age: 'kids', topics: ['Nature', 'Science'], description: 'David Attenborough presenta 10 episodios espectaculares sobre cómo la vida evolucionó en la Tierra. Desde los primeros organismos microscópicos hasta los animales más grandes del planeta, descubre los increíbles mecanismos de supervivencia y adaptación.', rating: 9.2, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=life+documentary+trailer' },
  { id: 5, title: 'The Genius of Charles Darwin', year: 2008, duration: 120, age: 'teens', topics: ['Science', 'History'], description: 'Richard Dawkins explora la vida, obra y legado del famoso naturalista Charles Darwin. Comprende cómo sus revolucionarias ideas sobre la evolución cambiaron para siempre nuestra comprensión de la biología y la vida en la Tierra.', rating: 8.3, poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=genius+charles+darwin+trailer' },
  { id: 6, title: 'Apollo 13', year: 1995, duration: 140, age: 'teens', topics: ['Science', 'History', 'Tech'], description: 'Drama histórico basado en la verdadera historia de la misión espacial Apollo 13. Sigue el drama, la innovación y la determinación de astronautas y científicos cuando todo sale mal en el espacio y deben trabajar juntos para rescatar a la tripulación.', rating: 8.7, poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=apollo+13+trailer' },
  { id: 7, title: 'Planet Earth II', year: 2016, duration: 55, age: 'kids', topics: ['Nature', 'Science'], description: 'Documental épico que muestra la belleza incomparable de los diferentes ecosistemas del planeta. Con cinematografía de clase mundial, descubre cómo los animales se adaptan a montañas, junglas, desiertos, océanos y ciudades.', rating: 9.4, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=planet+earth+ii+trailer' },
  { id: 8, title: 'The Blue Planet', year: 2001, duration: 55, age: 'kids', topics: ['Nature', 'Science'], description: 'David Attenborough explora los misterios del océano y la increíble vida marina del mundo. Desde arrecifes de coral hasta las profundidades abisales, descubre ecosistemas submarinos fascinantes y la biodiversidad de nuestros océanos.', rating: 9.1, poster: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=blue+planet+trailer' },
  { id: 9, title: 'Hidden Figures', year: 2016, duration: 127, age: 'teens', topics: ['Science', 'History', 'Biographies'], description: 'Historia real de las matemáticas afroamericanas que fueron clave en el programa espacial estadounidense. Conoce a las brillantes mujeres cuyo trabajo matemático fue fundamental para el éxito de la carrera espacial, rompiendo barreras raciales y de género.', rating: 8.6, poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=hidden+figures+trailer' },
  { id: 10, title: 'Sherlock: The Abominable Bride', year: 2016, duration: 60, age: 'teens', topics: ['Science', 'Math'], description: 'Episodio especial que muestra cómo la deducción lógica y la matemática se usan en investigaciones complejas. Un viaje a través del pensamiento deductivo y la lógica que Sherlock Holmes utiliza para resolver misterios.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=sherlock+abominable+bride+trailer' },
  { id: 11, title: 'Frozen Planet', year: 2011, duration: 50, age: 'kids', topics: ['Nature', 'Science'], description: 'David Attenborough documenta la vida extraordinaria en los polos norte y sur del planeta. Presencia el drama de la supervivencia en condiciones extremas, desde los glaciares árticos hasta los pingüinos antárticos.', rating: 8.9, poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=frozen+planet+trailer' },
  { id: 12, title: 'CRISPR: The Edge of Biology', year: 2021, duration: 90, age: 'adult', topics: ['Science', 'History', 'Tech'], description: 'Documental sobre el descubrimiento revolucionario de la tecnología CRISPR de edición de genes. Explora cómo esta innovación puede cambiar la medicina, la agricultura y hasta el futuro de la humanidad, y los dilemas éticos que presenta.', rating: 8.4, poster: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=crispr+documentary+trailer' },
  { id: 13, title: 'The Boy Who Harnessed the Wind', year: 2019, duration: 113, age: 'teens', topics: ['Science', 'Tech', 'Biographies'], description: 'Historia real inspiradora de un niño de Malaui que construyó un molino de viento para salvar su pueblo de la hambruna. Un testimonio del ingenio humano, la determinación y cómo la ciencia y la tecnología pueden cambiar vidas.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=boy+harnessed+wind+trailer' },
  { id: 14, title: 'Planet Earth', year: 2006, duration: 50, age: 'kids', topics: ['Nature', 'Science'], description: 'Serie documental que explora los diferentes hábitats y ecosistemas del mundo. Desde las montañas más altas hasta los desiertos más áridos, descubre la increíble diversidad de vida y los procesos naturales que la sustentan.', rating: 9.2, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=planet+earth+trailer' },
  { id: 15, title: 'The Imitation Game', year: 2014, duration: 119, age: 'teens', topics: ['Tech', 'History', 'Biographies'], description: 'Biografía de Alan Turing y su papel crucial en descifrar códigos Enigma durante la Segunda Guerra Mundial. Conoce la historia del padre de la computación teórica y su impacto revolucionario en la tecnología.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=imitation+game+trailer' },
  { id: 16, title: 'Chasing Coral', year: 2017, duration: 92, age: 'teens', topics: ['Nature', 'Science', 'Economy'], description: 'Documental cautivador sobre el blanqueamiento de coral y el cambio climático en los océanos. Sigue a buceadores y científicos mientras intentan documentar y salvar los arrecifes de coral del mundo antes de que sea demasiado tarde.', rating: 8.3, poster: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=chasing+coral+trailer' },
  { id: 17, title: 'African Cats', year: 2011, duration: 88, age: 'kids', topics: ['Nature', 'Science'], description: 'Documental que explora la vida de familias de leones y leopardos en las sabanas africanas. Presencia los dramas de la caza, la supervivencia y la crianza en uno de los ecosistemas más competitivos de la Tierra.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=african+cats+trailer' },
  { id: 18, title: 'The Tale of Despereaux', year: 2008, duration: 96, age: 'kids', topics: ['Art', 'History'], description: 'Historia animada de aventura y romance ambientada en la Edad Media. Una fábula moderna que combina elementos de la cultura medieval con lecciones sobre valor, amor y redención.', rating: 7.0, poster: 'https://images.unsplash.com/photo-1536440936938-48f2ee506c01?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=tale+of+despereaux+trailer' },
  { id: 19, title: 'Chasing Ice', year: 2012, duration: 78, age: 'teens', topics: ['Science', 'Nature'], description: 'Documental impactante sobre cómo el cambio climático está derritiendo los glaciares a un ritmo alarmante. Sigue a un fotógrafo mientras documenta el retroceso de los glaciares alrededor del mundo a lo largo de una década.', rating: 8.3, poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=chasing+ice+trailer' },
  { id: 20, title: 'How the Universe Works', year: 2010, duration: 45, age: 'teens', topics: ['Science', 'Math'], description: 'Serie que explica la física y mecánica del universo de forma entretenida y accesible. Desde los agujeros negros hasta la formación de galaxias, descubre los procesos cósmicos que gobiernan el universo.', rating: 8.4, poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=how+the+universe+works+trailer' },
  { id: 21, title: 'A Brief History of Time', year: 1991, duration: 80, age: 'adult', topics: ['Science', 'Math'], description: 'Documental basado en el icónico libro de Stephen Hawking sobre la física y el universo. Una exploración fascinante de conceptos como la gravedad, el tiempo, los agujeros negros y los orígenes del universo.', rating: 7.8, poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=brief+history+of+time+trailer' },
  { id: 22, title: 'The Battered Bastards of Baseball', year: 2014, duration: 88, age: 'teens', topics: ['History', 'Economy'], description: 'Historia real de un equipo de béisbol familiar que desafió a la liga profesional. Un documental inspirador sobre determinación, familia y cómo los marginados pueden triunfar contra todo pronóstico.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=battered+bastards+of+baseball+trailer' },
  { id: 23, title: 'The Case Against 8', year: 2014, duration: 90, age: 'adult', topics: ['History', 'Economy'], description: 'Documental sobre la batalla legal histórica del matrimonio igualitario en California. Un relato emocionante de derechos humanos, justicia y cómo el sistema legal puede avanzar hacia la igualdad.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1457449814292-915efd4cb081?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=case+against+8+trailer' },
  { id: 24, title: 'Rise of the Planet of the Apes', year: 2011, duration: 105, age: 'teens', topics: ['Science', 'Tech'], description: 'Ficción científica que explora la genética, la inteligencia artificial y la inteligencia animal. Una advertencia cautivadora sobre los límites éticos de la manipulación genética y la evolución acelerada.', rating: 7.6, poster: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=rise+planet+of+apes+trailer' },
  { id: 25, title: 'March of the Penguins', year: 2005, duration: 80, age: 'kids', topics: ['Nature', 'Science'], description: 'Documental que sigue el viaje épico y peligroso de los pingüinos emperador en la Antártida. Una historia de supervivencia, instinto y dedicación familiar en el ambiente más hostil del planeta.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=march+of+the+penguins+trailer' },
  { id: 26, title: 'The Ivory Game', year: 2016, duration: 90, age: 'teens', topics: ['Nature', 'Economy'], description: 'Documental inmersivo sobre el comercio ilegal de marfil y los esfuerzos internacionales para salvar a los elefantes de la extinción. Una mirada a la corrupción, la conservación y la esperanza.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=ivory+game+trailer' },
  { id: 27, title: 'The Disappearing Male', year: 2008, duration: 71, age: 'adult', topics: ['Science', 'Nature'], description: 'Documental investigativo sobre cómo los químicos contaminantes afectan la reproducción masculina en humanos y animales. Una exploración de un problema ambiental y sanitario poco conocido.', rating: 7.9, poster: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=disappearing+male+trailer' },
  { id: 28, title: 'Why We Ride', year: 2015, duration: 60, age: 'teens', topics: ['History', 'Science'], description: 'Documental sobre la fascinante historia de la bicicleta y su profundo impacto social y cultural. Cómo un simple invento cambió la movilidad, la libertad y la sociedad.', rating: 7.7, poster: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=why+we+ride+trailer' },
  { id: 29, title: 'Tipping Point: The Age of the Oil Sands', year: 2011, duration: 74, age: 'adult', topics: ['Science', 'Nature'], description: 'Documental sobre el impacto ambiental devastador de la extracción de arenas bituminosas en Canadá. Una mirada a los costos ecológicos de la dependencia petrolera moderna.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=tipping+point+age+oil+sands+trailer' },
  { id: 30, title: 'The Science of Sleep', year: 2006, duration: 88, age: 'teens', topics: ['Science', 'Nature'], description: 'Película ficticia con elementos educativos sobre los sueños, el sueño REM y los misterios de la mente durante el descanso. Una exploración creativa del mundo del sueño y la imaginación.', rating: 7.4, poster: 'https://images.unsplash.com/photo-1508700115892-37b60cea0ee7?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=science+of+sleep+trailer' },
  { id: 31, title: 'Jiro Dreams of Sushi', year: 2011, duration: 81, age: 'adult', topics: ['Art', 'History'], description: 'Documental que explora la maestría, la dedicación y la filosofía a través del arte culinario del sushi. Un estudio del perfeccionismo, la tradición y la pasión sin límites.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1543352632-18a218b0b098?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=jiro+dreams+of+sushi+trailer' },
  { id: 32, title: 'The Internet\'s Own Boy', year: 2014, duration: 105, age: 'teens', topics: ['Tech', 'History'], description: 'Documental sobre Aaron Swartz y su activismo en internet para la libertad de información. Una historia sobre sacrificio, principios y la lucha por un internet libre y abierto.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=internet+own+boy+trailer' },
  { id: 33, title: 'Blackfish', year: 2013, duration: 83, age: 'teens', topics: ['Science', 'Nature', 'Economy'], description: 'Documental crítico y emotivo sobre el cautiverio de orcas en parques marinos. Una investigación sobre el bienestar animal, la industria del entretenimiento y los secretos que se guardan.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=blackfish+trailer' },
  { id: 34, title: 'The Quantum Tamers', year: 2014, duration: 52, age: 'teens', topics: ['Science', 'Tech'], description: 'Serie que explica conceptos cuánticos complejos de forma entretenida y accesible. Descubre el extraño y maravilloso mundo de la mecánica cuántica sin necesidad de matemáticas avanzadas.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=quantum+tamers+trailer' },
  { id: 35, title: 'The Ascent of Money', year: 2008, duration: 55, age: 'adult', topics: ['Economy', 'History'], description: 'Series de Niall Ferguson sobre la fascinante historia de los sistemas financieros mundiales. Una exploración de cómo el dinero ha moldeado la civilización y los imperios.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=ascent+of+money+trailer' },
  { id: 36, title: 'Particle Fever', year: 2013, duration: 99, age: 'adult', topics: ['Science', 'Tech'], description: 'Documental sobre el emocionante descubrimiento del bosón de Higgs en el CERN. Una historia de la búsqueda científica más ambiciosa: la comprensión de la materia fundamental del universo.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=particle+fever+trailer' },
  { id: 37, title: 'The Last Lions', year: 2011, duration: 87, age: 'kids', topics: ['Nature', 'Science'], description: 'Documental que sigue la vida de una familia de leones en las sabanas africanas. Un drama natural de caza, territorios, protección de crías y la lucha por la supervivencia.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=last+lions+trailer' },
  { id: 38, title: 'The Great Migration', year: 2010, duration: 50, age: 'kids', topics: ['Nature', 'Science'], description: 'Documental que explora la mayor migración anual de animales en el continente africano. Presencia los viajes épicos de millones de animales en busca de comida y supervivencia.', rating: 8.5, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=great+migration+trailer' },
  { id: 39, title: 'Marie Curie: The Courage of Knowledge', year: 2011, duration: 100, age: 'teens', topics: ['Science', 'Biographies', 'History'], description: 'Película dramática basada en la vida de la científica Marie Curie, pionera de la radiactividad. Una historia de dedicación científica, igualdad de género y el precio del conocimiento.', rating: 7.8, poster: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=marie+curie+trailer' },
  { id: 40, title: 'Galapagos: Secret of Evolution', year: 2015, duration: 50, age: 'teens', topics: ['Science', 'Nature'], description: 'Documental que explora las islas Galápagos, donde Darwin basó su revolucionaria teoría de la evolución. Descubre la biodiversidad única y los procesos de evolución en acción.', rating: 8.4, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=galapagos+secret+evolution+trailer' },
  { id: 41, title: 'The Social Dilemma', year: 2020, duration: 94, age: 'teens', topics: ['Tech', 'Science'], description: 'Documental sobre el impacto psicológico, social y político de las redes sociales en la sociedad moderna. Una exploración crítica de cómo la tecnología nos controla y divide.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=social+dilemma+trailer' },
  { id: 42, title: 'Inside Bill\'s Brain', year: 2019, duration: 60, age: 'adult', topics: ['Science', 'Tech', 'History'], description: 'Documental que explora la vida, el trabajo y la filantropía de Bill Gates. Una mirada a sus esfuerzos por resolver problemas globales en salud, educación y energía.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=inside+bill+brain+trailer' },
  { id: 43, title: 'The Panama Papers', year: 2019, duration: 93, age: 'adult', topics: ['Economy', 'History'], description: 'Documental de investigación sobre el escándalo de los Papeles de Panamá. Una revelación de cómo los paraísos fiscales ocultan riqueza ilegal y cómo el lavado de dinero opera a nivel global.', rating: 7.8, poster: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=panama+papers+trailer' },
  { id: 44, title: 'Honeyland', year: 2019, duration: 87, age: 'kids', topics: ['Nature', 'Science'], description: 'Documental fascinante sobre apicultura natural tradicional y la vida de una mujer que vive en armonía con la naturaleza en los Balcanes. Un retrato de sostenibilidad y conexión con el entorno.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=honeyland+trailer' },
  { id: 45, title: 'Walking with Dinosaurs', year: 1999, duration: 360, age: 'kids', topics: ['Science', 'Nature'], description: 'Miniserie revolucionaria que recrea la vida de los dinosaurios con tecnología de CGI pionera. Un viaje a través de diferentes épocas prehistóricas para entender la evolución de la vida en la Tierra.', rating: 8.4, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=walking+with+dinosaurs+trailer' },
  { id: 46, title: 'Space: A Journey Through our Universe', year: 2020, duration: 85, age: 'teens', topics: ['Science', 'Tech'], description: 'Documental sobre la exploración espacial humana y los misterios del universo. Una celebración de la innovación, la curiosidad y nuestro deseo de explorar lo desconocido.', rating: 8.3, poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=space+journey+through+universe+trailer' },
  { id: 47, title: 'Plastic Ocean', year: 2016, duration: 100, age: 'teens', topics: ['Science', 'Nature', 'Economy'], description: 'Documental impactante sobre la contaminación plástica masiva en los océanos mundiales. Una investigación sobre cómo el plástico envenena la vida marina y por qué debemos actuar ahora.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=plastic+ocean+trailer' },
  { id: 48, title: 'Making Babies', year: 2020, duration: 50, age: 'adult', topics: ['Science', 'History'], description: 'Documental sobre la historia de la fertilización in vitro y cómo cambió la vida de millones de personas. Una exploración de medicina reproductiva, ética y esperanza.', rating: 7.9, poster: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=making+babies+trailer' },
  { id: 49, title: 'The Toys That Made Us', year: 2017, duration: 50, age: 'kids', topics: ['History', 'Tech'], description: 'Documental que explora juguetes icónicos y su profundo impacto en la cultura. Una nostalgia entretenida sobre cómo ciertos juguetes definieron generaciones.', rating: 8.2, poster: 'https://images.unsplash.com/photo-1596461322169-a21ded4a8bf7?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=toys+that+made+us+trailer' },
  { id: 50, title: 'Manufactured Landscapes', year: 2006, duration: 87, age: 'adult', topics: ['Art', 'Science', 'Nature'], description: 'Documental artístico que examina las transformaciones del paisaje industrial y el impacto de la industrialización. Una perspectiva visual crítica sobre nuestra relación con el entorno.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=manufactured+landscapes+trailer' },
  { id: 51, title: 'Becoming', year: 2020, duration: 89, age: 'adult', topics: ['History', 'Biographies'], description: 'Documental basado en el libro de memorias de Michelle Obama. Una historia de ambición, familia y cómo convertirse en una persona influyente mientras se superan obstáculos.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1457449814292-915efd4cb081?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=becoming+michelle+obama+trailer' },
  { id: 52, title: 'Free Solo', year: 2018, duration: 100, age: 'teens', topics: ['Science', 'Nature'], description: 'Documental tenso sobre un escalador que sube montañas sin equipo de seguridad. Una exploración del riesgo, la obsesión y los límites del cuerpo y la mente humana.', rating: 8.1, poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=free+solo+trailer' },
  { id: 53, title: 'Nefertiti Resurrected', year: 2018, duration: 45, age: 'teens', topics: ['History', 'Science'], description: 'Documental que usa tecnología de escaneo 3D para recrear el rostro de Nefertiti. Una convergencia de arqueología, tecnología y arte para desenterrar secretos del antiguo Egipto.', rating: 7.8, poster: 'https://images.unsplash.com/photo-1532619927891-8a373008e6f7?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=nefertiti+resurrected+trailer' },
  { id: 54, title: 'Cave of Forgotten Dreams', year: 2010, duration: 90, age: 'adult', topics: ['History', 'Art'], description: 'Documental de Werner Herzog sobre las cuevas Chauvet, las más antiguas con arte rupestre del mundo. Una meditación sobre la creatividad humana y nuestras raíces artísticas.', rating: 7.9, poster: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=cave+of+forgotten+dreams+trailer' },
  { id: 55, title: 'The Code Breaker', year: 2021, duration: 60, age: 'teens', topics: ['Science', 'Math'], description: 'Serie que explora los códigos, la criptografía y su rol crítico en la seguridad mundial. Desde Enigma hasta la era digital, descubre cómo los códigos protegen nuestros secretos.', rating: 8.0, poster: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=code+breaker+trailer' },
  { id: 56, title: 'The Planets', year: 2019, duration: 50, age: 'kids', topics: ['Science', 'Nature'], description: 'David Attenborough describe detalladamente la historia, características y misterios de cada planeta de nuestro sistema solar. Un viaje cósmico narrado magistralmente.', rating: 8.5, poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=the+planets+bbc+trailer' },
  { id: 57, title: 'Oppenheimer', year: 2023, duration: 180, age: 'adult', topics: ['Science', 'History'], description: 'Película biográfica épica sobre J. Robert Oppenheimer y el Proyecto Manhattan. Una exploración de ambición científica, responsabilidad moral y el costo del progreso tecnológico.', rating: 8.4, poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=oppenheimer+trailer' },
  { id: 58, title: 'The Mars Generation', year: 2017, duration: 77, age: 'teens', topics: ['Science', 'Tech'], description: 'Documental que sigue a jóvenes que sueñan con colonizar Marte. Una inspiradora mirada a la próxima generación de científicos, ingenieros y exploradores del espacio.', rating: 7.8, poster: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=mars+generation+trailer' },
  { id: 59, title: 'The Great Courses: Physics', year: 2011, duration: 480, age: 'adult', topics: ['Science', 'Math'], description: 'Curso completo y exhaustivo sobre los fundamentos de la física. Una educación universitaria en física accesible para todos, cubriendo desde mecánica clásica hasta relatividad.', rating: 8.6, poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=great+courses+physics+trailer' },
  { id: 60, title: 'The Rescue', year: 2021, duration: 127, age: 'teens', topics: ['Science', 'History'], description: 'Documental sobre el heroico salvamento de los 13 miembros del equipo de fútbol atrapados en una cueva en Tailandia. Una historia de ingenio, valentía y cooperación internacional.', rating: 8.4, poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=560&fit=crop', watchUrl: 'https://www.youtube.com/results?search_query=the+rescue+cave+trailer' }
];

const state = {
  query: '',
  age: 'any',
  topics: [],
  sort: 'relevance',
  showFavs: false,
  favorites: loadFavorites(),
  minRating: 0,
  maxDuration: 'any',
  page: 1,
  perPage: 8
};

const els = {};

function qs(id) { return document.getElementById(id); }

function loadFavorites() {
  try { return JSON.parse(localStorage.getItem('edu_favs') || '[]'); } catch(e) { return []; }
}

function saveFavorites() { localStorage.setItem('edu_favs', JSON.stringify(state.favorites)); }

function renderMovies(list) {
  const container = els.results;
  container.innerHTML = '';
  if (!list.length) {
    container.innerHTML = '<p class="empty">No se encontraron películas con esos filtros.</p>';
    return;
  }
  const start = (state.page - 1) * state.perPage;
  const paged = list.slice(start, start + state.perPage);
  const frag = document.createDocumentFragment();
  paged.forEach(m => frag.appendChild(createCard(m)));
  container.appendChild(frag);
  renderPaginator(list.length);
}

function createCard(m) {
  const card = document.createElement('article');
  card.className = 'card';
  card.tabIndex = 0;

  const img = document.createElement('img');
  img.src = m.poster;
  img.onerror = () => {
    img.onerror = null;
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='400' height='560'>
        <rect width='100%' height='100%' fill='%230b1220' />
        <text x='50%' y='50%' fill='%23b8c6d8' font-family='Arial,Helvetica,sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>Imagen no disponible</text>
      </svg>`;
    img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  };
  img.alt = m.title;
  img.loading = 'lazy';

  const title = document.createElement('h3');
  title.innerHTML = highlight(m.title, state.query);

  const meta = document.createElement('p');
  meta.className = 'meta';
  meta.textContent = `${m.year} • ${m.duration} min • ${m.age}`;

  const topics = document.createElement('p');
  topics.className = 'topics';
  topics.textContent = m.topics.join(', ');

  const actions = document.createElement('div');
  actions.className = 'card-actions';

  const more = document.createElement('button');
  more.textContent = 'Detalles';
  more.addEventListener('click', () => openModal(m));

  const fav = document.createElement('button');
  fav.className = 'fav-btn';
  fav.innerHTML = state.favorites.includes(m.id) ? '★ Favorita' : '☆ Favorita';
  fav.addEventListener('click', () => {
    toggleFavorite(m.id);
    fav.innerHTML = state.favorites.includes(m.id) ? '★ Favorita' : '☆ Favorita';
    if (state.showFavs) applyFilters();
  });

  actions.appendChild(more);
  actions.appendChild(fav);

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(topics);
  card.appendChild(actions);

  return card;
}

function highlight(text, q){
  if (!q) return escapeHtml(text);
  const safe = escapeHtml(text);
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const re = new RegExp(esc,'ig');
  return safe.replace(re, match => `<mark>${match}</mark>`);
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function openModal(m) {
  const modal = qs('modal');
  const body = qs('modalBody');
  body.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = m.title;
  const desc = document.createElement('p');
  desc.textContent = m.description;
  const info = document.createElement('p');
  info.className = 'meta';
  info.textContent = `${m.year} • ${m.duration} min • Temas: ${m.topics.join(', ')} • Puntuación: ${m.rating}`;
  
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.gap = '10px';
  buttonsContainer.style.marginTop = '15px';
  buttonsContainer.style.flexWrap = 'wrap';
  
  const watchBtn = document.createElement('a');
  watchBtn.href = m.watchUrl || '#';
  watchBtn.target = '_blank';
  watchBtn.className = 'watch-btn';
  watchBtn.textContent = '▶ Ver película';
  watchBtn.style.display = 'inline-block';
  watchBtn.style.padding = '10px 20px';
  watchBtn.style.backgroundColor = '#ff6b6b';
  watchBtn.style.color = 'white';
  watchBtn.style.textDecoration = 'none';
  watchBtn.style.borderRadius = '5px';
  watchBtn.style.fontWeight = 'bold';
  
  const trailerBtn = document.createElement('a');
  trailerBtn.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(m.title + ' trailer')}`;
  trailerBtn.target = '_blank';
  trailerBtn.className = 'trailer-btn';
  trailerBtn.textContent = '🎬 Ver trailer';
  trailerBtn.style.display = 'inline-block';
  trailerBtn.style.padding = '10px 20px';
  trailerBtn.style.backgroundColor = '#e74c3c';
  trailerBtn.style.color = 'white';
  trailerBtn.style.textDecoration = 'none';
  trailerBtn.style.borderRadius = '5px';
  trailerBtn.style.fontWeight = 'bold';
  
  buttonsContainer.appendChild(watchBtn);
  buttonsContainer.appendChild(trailerBtn);
  
  body.appendChild(title);
  body.appendChild(info);
  body.appendChild(desc);
  body.appendChild(buttonsContainer);
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
  qs('closeModal').focus();
}

function closeModal() {
  const modal = qs('modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('open');
}

function toggleFavorite(id) {
  const i = state.favorites.indexOf(id);
  if (i === -1) state.favorites.push(id); else state.favorites.splice(i,1);
  saveFavorites();
}

function getSelectedTopics() {
  const checkboxes = document.querySelectorAll('#topicsRow input[type=checkbox]');
  const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
  console.log('Temas seleccionados:', selected); // Debug log
  return selected;
}

function scoreMovie(m, prefs) {
  let score = 0;
  const topicMatches = m.topics.filter(t => prefs.topics.includes(t)).length;
  score += topicMatches * 2;
  if (prefs.age !== 'any' && m.age === prefs.age) score += 3;
  if (state.favorites.includes(m.id)) score += 2;
  score += m.rating / 2;
  score += Math.random() * 0.5;
  return score;
}

function applyFilters(resetPage = true) {
  const q = state.query.trim().toLowerCase();
  const topics = getSelectedTopics();
  state.topics = topics;
  console.log('Aplicando filtros - Temas:', topics); // Debug
  let list = movies.slice();
  if (state.showFavs) list = list.filter(m => state.favorites.includes(m.id));
  if (state.age !== 'any') list = list.filter(m => m.age === state.age);
  if (state.maxDuration !== 'any') list = list.filter(m => m.duration <= Number(state.maxDuration));
  if (state.minRating) list = list.filter(m => m.rating >= Number(state.minRating));
  if (topics.length) {
    console.log('Filtrando por temas:', topics, 'Películas antes:', list.length); // Debug
    list = list.filter(m => topics.some(t => m.topics.includes(t)));
    console.log('Películas después:', list.length); // Debug
  }
  if (q) list = list.filter(m => (m.title + ' ' + m.description + ' ' + m.topics.join(' ')).toLowerCase().includes(q));

  if (state.sort === 'rating') list.sort((a,b)=> b.rating - a.rating);
  else if (state.sort === 'year') list.sort((a,b)=> b.year - a.year);
  else if (state.sort === 'duration') list.sort((a,b)=> a.duration - b.duration);
  else if (state.sort === 'relevance') list.sort((a,b)=> scoreMovie(b, state) - scoreMovie(a, state));

  if (resetPage) state.page = 1; // reset page only when filters actually change
  console.log('Total de películas a mostrar:', list.length); // Debug
  renderMovies(list);
}

function recommendOne() {
  const topics = getSelectedTopics();
  const prefs = { age: state.age, topics };
  let list = movies.slice();
  if (state.age !== 'any') list = list.filter(m => m.age === state.age);
  if (topics.length) list = list.filter(m => topics.some(t => m.topics.includes(t)));
  if (!list.length) list = movies.slice();
  list.sort((a,b)=> scoreMovie(b,prefs) - scoreMovie(a,prefs));
  const chosen = list[0];
  openModal(chosen);
}

function clearFilters() {
  // Deshabilitar listeners temporalmente
  const checkboxes = document.querySelectorAll('#topicsRow input[type=checkbox]');
  checkboxes.forEach(cb => cb.removeEventListener('change', applyFiltersCallback));
  
  qs('search').value = '';
  qs('ageFilter').value = 'any';
  qs('sort').value = 'relevance';
  checkboxes.forEach(cb => cb.checked = false);
  qs('minRating').value = 0; qs('minRatingVal').textContent = '0';
  qs('maxDuration').value = 'any';
  
  state.query = '';
  state.age = 'any';
  state.sort = 'relevance';
  state.showFavs = false;
  state.minRating = 0;
  state.maxDuration = 'any';
  qs('toggleFavs').textContent = 'Ver Favoritas';
  
  // Reactivar listeners
  checkboxes.forEach(cb => cb.addEventListener('change', applyFiltersCallback));
  
  applyFilters(true);
}

function renderPaginator(total){
  const existing = document.querySelector('.paginator');
  if (existing) existing.remove();
  const pages = Math.max(1, Math.ceil(total / state.perPage));
  const container = document.createElement('div');
  container.className = 'paginator';
  for(let p=1;p<=pages;p++){
    const btn = document.createElement('button');
    btn.textContent = p;
    if (p===state.page) btn.disabled = true;
    btn.addEventListener('click', ()=>{ state.page = p; applyFilters(false); });
    container.appendChild(btn);
  }
  els.results.after(container);
}

function exportFavorites(){
  const data = JSON.stringify(state.favorites);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'favoritas.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importFavorites(){
  const txt = prompt('Pega aquí el JSON de favoritas (ej: [1,2,3])');
  if (!txt) return;
  try{ const arr = JSON.parse(txt); if (Array.isArray(arr)){ state.favorites = arr.filter(n=> typeof n === 'number'); saveFavorites(); applyFilters(); alert('Importadas favoritas'); } else alert('JSON inválido'); }catch(e){ alert('Error leyendo JSON'); }
}

function surprise(){
  const topics = getSelectedTopics();
  const prefs = { age: state.age, topics };
  let list = movies.slice();
  if (state.age !== 'any') list = list.filter(m => m.age === state.age);
  if (topics.length) list = list.filter(m => topics.some(t => m.topics.includes(t)));
  const weighted = [];
  list.forEach(m=>{ const w = Math.max(1, Math.round(m.rating * 10)); for(let i=0;i<w;i++) weighted.push(m); });
  const chosen = weighted[Math.floor(Math.random()*weighted.length)] || list[Math.floor(Math.random()*list.length)];
  if (chosen) openModal(chosen);
}

function applyFiltersCallback() {
  applyFilters(true);
}

function bind() {
  els.search.addEventListener('input', e=> { state.query = e.target.value; applyFilters(true); });
  els.ageFilter.addEventListener('change', e=> { state.age = e.target.value; applyFilters(true); });
  els.sort.addEventListener('change', e=> { state.sort = e.target.value; applyFilters(true); });
  document.querySelectorAll('#topicsRow input[type=checkbox]').forEach(cb => cb.addEventListener('change', applyFiltersCallback));
  qs('minRating').addEventListener('input', e=> { state.minRating = e.target.value; qs('minRatingVal').textContent = e.target.value; applyFilters(true); });
  qs('maxDuration').addEventListener('change', e=> { state.maxDuration = e.target.value; applyFilters(true); });
  els.recommendBtn.addEventListener('click', recommendOne);
  qs('surpriseBtn').addEventListener('click', surprise);
  els.clearFilters.addEventListener('click', clearFilters);
  els.toggleFavs.addEventListener('click', ()=> {
    state.showFavs = !state.showFavs;
    els.toggleFavs.textContent = state.showFavs ? 'Volver a todo' : 'Ver Favoritas';
    applyFilters(true);
  });
  qs('exportFavs').addEventListener('click', exportFavorites);
  qs('importFavs').addEventListener('click', importFavorites);
  qs('closeModal').addEventListener('click', closeModal);
  qs('modal').addEventListener('click', e=> { if (e.target === qs('modal')) closeModal(); });

  window.addEventListener('keydown', e=> {
    if (e.key === '/') { e.preventDefault(); qs('search').focus(); }
    if (e.key.toLowerCase() === 'r') { recommendOne(); }
    if (e.key.toLowerCase() === 'f') { els.toggleFavs.click(); }
    if (e.key.toLowerCase() === 's') { surprise(); }
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  els.search = qs('search');
  els.ageFilter = qs('ageFilter');
  els.sort = qs('sort');
  els.results = qs('results');
  els.recommendBtn = qs('recommendBtn');
  els.toggleFavs = qs('toggleFavs');
  els.clearFilters = qs('clearFilters');
  els.minRating = qs('minRating');
  els.maxDuration = qs('maxDuration');

  bind();
  applyFilters();
});


