
const data = [
    //Categoría ACTIVIDAD FÍSICA
    { name: 'Aimée',
    category: 'Actividad Física',
    keywords: ['yoga', 'salud', 'sonoterapia'],
    instagram: 'aimeeyoga',
    description: 'Comparto mini clases de yoga. Sonoterapia con cuencos de cuarzo.',
    web: 'https://www.yoga108.mx/',
    phoneNumber: '5554130281',
    email: 'aimeeaimeesalazar@gmail.com'},
    
    //Categoría ALIMENTOS
    { name: "Reina Food", 
    keywords: ['alimentacion', 'keto', 'vegano'], 
    description: "Linea Keto/Vegana", 
    category: "Alimentos",
    instagram: "reinafoodok",
    web: "http://www.reinafood.com.ar/",
    phoneNumber: '01157272669',
    email: 'carolina@reinavegana.com.ar' },

    { name: "La Agro", 
    keywords: ['alimentacion', 'organico', 'nutricion'], 
    description: "Mercado orgánico: Verduras, Comida sana y Viverito.", 
    category: "Alimentos",
    instagram: "_laagroecologica",
    phoneNumber: '01139392399',
    email: 'agroecologicadelivery@gmail.com' },

    { name: "Nano Fermentos", 
    keywords: ['alimentacion', 'fermentados', 'herramientas'], 
    description: "Alimentos fermentados y herramientas para fermentar.", 
    category: "Alimentos",
    instagram: "nano_fermentos",
    email: 'nanofermentos@gmail.com' },

    { name: "Paula Pérez", 
    keywords: ['sommelier', 'te', 'catadora'], 
    description: "Ingredientes reales premium sin esencias, degustaciones y accesorios.", 
    category: "Alimentos",
    instagram: "felicitea.ar",
    web: "http://www.felicitea.com.ar/",
    phoneNumber: '1162026275',
    email: 'hola@felicitea.com.ar' }, 

    { name: "Myceliumgrow", 
    keywords: ['cultivo', 'hongos', 'alimentacion'], 
    description: "Cultivo y venta de hongos naturales.", 
    category: "Alimentos",
    instagram: "myceliumgrow",
    phoneNumber: '1132006868',
    email: 'myceliumgrowcba@gmail.com' },

    { name: "Sal de aquí", 
    keywords: ['alimentacion', 'sal', 'patagonia'], 
    description: "Venta de cristales de sal marina, salmuera de la patagonia.", 
    category: "Alimentos",
    instagram: "saldeaqui_ok", 
    web: "https://www.saldeaquisrl.com.ar/",
    phoneNumber: '2804707203',
    email: 'info@saldeaquisrl.com.ar' },

    { name: "El Brote", 
    keywords: ['alimentacion', 'organico', 'natural'], 
    description: "Tienda natural venta de alimentos orgánicos.", 
    category: "Alimentos",
    instagram: "elbrotetienda", 
    web: "https://www.elbrotetienda.com/",
    phoneNumber: '1131816011',
    email: 'hola@elbrotetienda.com' },

    { name: "Huerta Madre", 
    keywords: ['alimentos', 'huerta', 'orgánico'], 
    description: "Envío de alimentos libres de químicos, directo de huerta.", 
    category: "Alimentos",
    instagram: "huertamadre",
    phoneNumber: '1163070991',
    email: 'info@huertamadre.com'  },

    { name: "Ka'a Pora", 
    keywords: ['agroecologico', 'hongo', 'asesoramiento'], 
    description: "Rescates de colmenas, reino fungi y asesoramiento técnico.", 
    category: "Alimentos",
    instagram: "kaaporaagroecologia",
    phoneNumber: '3758458622',
    email: 'kaapora.agroecologia@gmail.com' },

    { name: "Soluciones Gastronómicas", 
    keywords: ['alimentacion', 'keto', 'natural'], 
    description: "Alimentos libres de harinas y azúcar. Low carb y Keto.", 
    category: "Alimentos",
    instagram: "solucionesgastronomicas", 
    web: "https://sgastronomicas.com.ar/",
    phoneNumber: '1133951160',
    email: 'contacto@sgastronomicas.com.ar' },

    { name: "Ohra Pampa", 
    keywords: ['alimentacion', 'carne', 'vacunos'], 
    description: "Cortes vacunos de calidad envasados al vacío en origen.", 
    category: "Alimentos",
    instagram: "ohrapampa", 
    web: "https://www.ohrapampa.com/",
    phoneNumber: '2302647190',
    email: 'info@ohrapampa.com' },

    { name: "Poké & Roll", 
    keywords: ['alimentacion', 'poke', 'wok'], 
    description: "Poke bowl, ensaladas, wok, desayunos y meriendas.", 
    category: "Alimentos",
    instagram: "pokeandrollba",
    phoneNumber: '1154939720',
    email: 'pokeandrollba@gmail.com' },

    { name: "Onda Fitness", 
    keywords: ['alimentacion', 'integral', 'salud', 'fitness'], 
    description: "Venta de productos integrales y caseros.", 
    category: "Alimentos",
    instagram: "ondafitness.lp", 
    web: "https://ondafitness.com.ar/" },

    { name: "Pampa Gourmet", 
    keywords: ['alimentacion', 'adherezos', 'organico', 'salsas'], 
    description: "Salsas y adherezos orgánicos certificados.", 
    category: "Alimentos",
    instagram: "pampagourmet", 
    web: "https://pampagourmet.com.ar/",
    phoneNumber: '01147251429',
    email: 'info@pampagourmet.com.ar' },

    { name: "Bien de la Tierra", 
    keywords: ['alimentacion', 'agroecologico', 'organico'], 
    description: "Venta de alimentos online", 
    category: "Alimentos",
    instagram: "biendelatierra.arg", 
    web: "https://www.biendelatierra.com.ar/" },

    { name: "Wholy", 
    keywords: ['alimentacion', 'snacks', 'tacc'], 
    description: "Snacks sin lácteos, sin harinas refinadas, sin gluten, veganas..", 
    category: "Alimentos",
    instagram: "wholy.healthyfood" },

    { name: "Nutries", 
    keywords: ['alimentacion', 'salud', 'natural'], 
    description: "Envíos a domicilio de alimentos saludables.", 
    category: "Alimentos",
    instagram: "nutriescompany",
    phoneNumber: '1170350030',
    email: 'paddy.murray.brea@gmail.com' },

    { name: "Agrodiversity", 
    keywords: ['agroecologico', 'carne', 'alimentacion'], 
    description: "Carne envasada al vacío, trazabilidad y QR. Exportación. Gastronomía. Delivery.", 
    category: "Alimentos",
    instagram: "agrodiversity",
    phoneNumber: '5493585646544',
    email: 'agrodiversity.grassfed@gmail.com' },

    { name: "Vera almacén", 
    keywords: ['alimentacion', 'veggie', 'mayorista'], 
    description: "Dietética saludable veggie. Mayorista.", 
    category: "Alimentos",
    instagram: "veraalmacen", 
    web: "https://www.veraalmacen.com.ar/",
    phoneNumber: '5491158722012',
    email: 'barracasdietetica@gmail.com' },

    //Categoría CLASES Y CURSOS
    { name: "Pao Romero", 
    keywords: ['medicina', 'cursos', 'clases'], 
    description: "Te acompaño a despertar la mujer medicinal que llevas dentro.", 
    category: "Clases y Cursos",
    instagram: "enamoratedetimx",
    phoneNumber: '5215639570065',
    email: 'enamoratedetimx@gmail.com' },

    { name: "Ruben Sosa", 
    keywords: ['yoga', 'retiro', 'salud'], 
    description: "Cursos, libros y meditaciones.", 
    category: "Clases y Cursos", 
    instagram: "medita_por_el_mundo",
    web: "http://www.meditaporelmundo.com/",
    email: 'info@meditaporelmundo.com' },

    { name: "El Árbol de la Salud", 
    keywords: ['aprendizaje', 'juegos', 'mente'], 
    description: "Diseñamos y difundimos juegos que divierten, ejercitan la memoria cognitiva, coordinación, movimiento y más.", 
    category: "Clases y Cursos", 
    instagram: "elabordelasalud",
    web: "https://www.elarboldelasalud.com/",
    phoneNumber: '11 2307-2253',
    email: 'contactoelarboldelasalud@gmail.com' },

    { name: "Leo Nabel", 
    keywords: ['yoga', 'podcast', 'coach'], 
    description: "Coach, Podcaster. Creando un mundo donde las personas se despiertan entusiasmadas.", 
    category: "Clases y Cursos", 
    instagram: "leo_nabel",
    web: "https://www.leonabel.com/" },

    { name: "The institute for functional medicine", 
    keywords: ['salud', 'medicina', 'cuidado'], 
    description: "Avanzando en la transformación de la atención médica para pacientes y profesionales en todo el mundo.", 
    category: "Clases y Cursos", 
    instagram: "instituteforfxmed",
    web: "https://www.ifm.org/",
    phoneNumber: '18002280622',
    email: 'info@ifm.org' },

    { name: "Kuestiona", 
    keywords: ['cursos', 'eventos', 'autoconocimiento'], 
    description: "Autoconocimiento para personas en procesos de cambios.", 
    category: "Clases y Cursos", 
    instagram: "kuestiona",
    web: "https://www.kuestiona.com/" },

    { name: "Adriana Amanecer", 
    keywords: ['tarot', 'energia', 'astrologia'], 
    description: "Limpiezas energéticas, constelaciones, registros akashicos.", 
    category: "Clases y Cursos",
    instagram: "adrianaamanecer",
    phoneNumber: '5491161926449',
    email: 'amanecerdeadriana@gmail.com' },

    { name: "Televisión Consciente", 
    keywords: ['salud', 'cursos', 'clases'], 
    description: "Formación esencial. Desarrollo Personal y Salud.", 
    category: "Clases y Cursos",
    instagram: "televisionconsciente",
    email: 'contacto@televisionconsciente.com' },

    { name: "Gea y Sabina", 
    keywords: ['cursos', 'yoga', 'coach', 'salud'], 
    description: "Retiros, formaciones, encuentros de yoga, mantras, sonido & música medicina.", 
    category: "Clases y Cursos", 
    instagram: "yogaysonido",
    web: "https://www.yogaysonido.com/",
    email: 'yogaysonido@gmail.com' },

    //Categoría CUIDADO PERSONAL
    { name: "Bubbly Delice", 
    keywords: ['belleza', 'jabon', 'cosmeticos'], 
    description: "Belleza, cosmética y cuidado personal.", 
    category: "Cuidado Personal",
    instagram: "bubblydelice",
    phoneNumber: '01141653400',
    email: 'bubblydelice@gmail.com' },

    { name: "Chiru Trend", 
    keywords:['ropa', 'denim', 'jeans'], 
    description: "Tienda online de ropa.", 
    category: "Cuidado Personal",
    instagram: "chiru.trend",
    web: "http://www.chirutrend.com.ar/",
    phoneNumber: '5492216074169',
    email: 'chirutrend@gmail.com' },

    { name: "Maria Magdalena", 
    keywords: ['cosmetica', 'cuidado', 'belleza'], 
    description: "Linea facial, capilar y corporal.", 
    category: "Cuidado Personal",
    instagram: "mm.cosmeticanatural",
    web: "http://www.tienda.maria-magdalena.com.ar/",
    phoneNumber: '5491123874850',
    email: 'atencion@maria-magdalena.com.ar' },

    { name: "Ormus", 
    keywords: ['cuidado', 'piel', 'cosmeticos'], 
    description: "Cuidado de la piel.", 
    category: "Cuidado Personal",
    instagram: "dabarfrecuencial",
    web: "https://ormuspatagonia.com/",
    phoneNumber: '01151641485',
    email: 'hola@ormuspatagonia.com' },

    { name: "The Pur Life", 
    keywords: ['salud', 'bienestar', 'productos'], 
    description: "Productos para tu bienestar.", 
    category: "Cuidado Personal",
    instagram: "thepurlife_",
    web: "https://www.the-pur.com/",
    phoneNumber: '5493584240473',
    email: 'hola@the-pur.com' },
    
    { name: "Blosst", 
    keywords: ['veggie', 'crueltyfree', 'esmalte', 'uñas'], 
    description: "Esmaltes cruelty free, veganos.", 
    category: "Cuidado Personal",
    instagram: "blosstcolors",
    web: "https://www.blosst.com/",
    phoneNumber: '1162245129',
    email: 'info@blosst.com' },
    
    { name: "Luxury Scents", 
    keywords: ['jabon', 'crueltyfree', 'fragancias'], 
    description: "Jabones y fragancias con cuidada selección de la materias primas. Cruelty free.", 
    category: "Cuidado Personal",
    instagram: "luxuryscents_",
    web: "https://www.luxuryscents.com.ar/",
    phoneNumber: '1169000903',
    email: 'contacto@luxuryscents.com.ar' },

    { name: "SB.Biocosmética", 
    keywords: ['cosmiatria', 'piel', 'salud'], 
    description: "Servicios y productos de cosmiatría.", 
    category: "Cuidado Personal",
    instagram: "sb.biocomestica" },

    //Categoría FARMACIA
    { name: "Futuro Fungi", 
    keywords:['hongo', 'cultivo', 'adaptógenos'], 
    description: "Cultivo urbano de hongos.", 
    category: "Farmacia",
    instagram: "futurofungi",
    web: "http://www.futurofungi.com/",
    phoneNumber: '1132563664',
    email: 'futurofungi@gmail.com' },

    { name: "Bionobo", 
    keywords:['farmacia', 'suplementos', 'vitaminas'], 
    description: "Multimineral orgánico amino-quelado.", 
    category: "Farmacia",
    instagram: "bionobo",
    email: 'hola@bionobo.com' },

    { name: "Promarine Antioxidants", 
    keywords:['suplementos', 'farmacia', 'salud'], 
    description: "Innovaciones tecnológicas marinas.", 
    category: "Farmacia",
    instagram: "promarineantioxidants",
    web: "https://promarineantioxidants.com/",
    phoneNumber: '5992805029031',
    email: 'hello@promarineantioxidants.com' },

    { name: "Ritual Plantas de Poder", 
    keywords:['hierbas', 'medicina', 'natural'], 
    description: "Creadores de medicina natural con hierbas medicinales.", 
    category: "Farmacia",
    instagram: "ritual.plantasdepoder",
    web: "https://ritualplantasdepoder.com.ar/",
    phoneNumber: '1130216783',
    email: 'ritual.plantasdepoder@gmail.com' },

    { name: "Maria Constanza Atias", 
    keywords:['medicina', 'suplementos', 'adaptogenos'], 
    description: "Medicina herbal, Medicina del estrés, Neurociencias, Terapias cuánticas.", 
    category: "Farmacia",
    instagram: "mariaconstanza.medicina",
    web: "https://organica6.mitiendanube.com//" },

    { name: "Sophos suplementos", 
    keywords:['farmacia', 'salud', 'suplementos'], 
    description: "Suplementación individualizada, recomposición del medio interno.", 
    category: "Farmacia",
    instagram: "sophos.suplementos" },

    { name: "Vitamine Store", 
    keywords:['suplementos', 'salud', 'vitaminas'], 
    description: "Venta de productos para mejorar la salud y el estado físico.", 
    category: "Farmacia",
    instagram: "vitaminstoreoficial",
    phoneNumber: '01162413657',
    email: 'vitamin.nor@gmail.com' },

    //Categoría HEALTH COACH
    { name: "Lina Ciappino", 
    keywords: ['kaa', 'innerdance', 'coach', 'bienestar', 'terapeuta'], 
    description: "KAA & Innerdance", 
    category: "Health Coach",
    instagram: "lina.ciappino",
    web: "http://www.linaciappino.com/" },
    
    { name: "Lina Ciappino", 
    keywords: ['kundalini', 'yoga', 'coach', 'bienestar', 'terapeuta'], 
    description: "Formación de facilitadores kundalini activation", 
    category: "Health Coach",
    instagram: "kundaliniactivationargentina",
    web: "http://www.linaciappino.com/" },

    { name: "María Florencia Faiatt", 
    keywords: ['terapia', 'coach', 'salud', 'bienestar'], 
    description: "Terapias mente-cuerpo.", 
    category: "Health Coach",
    instagram: "myyogaflower",
    web: "https://myyogaflower.com/" },

    { name: "Casa Tierra", 
    keywords: ['retiros', 'clases', 'arte'], 
    description: "Retiros, clases, experiencias inmersivas, residencias, producciones audiovisuales.", 
    category: "Health Coach",
    instagram: "casatierra_buenosaires" },

    { name: "Mente Positiva", 
    keywords: ['alimentacion', 'psicologa', 'habitos'], 
    description: "Cognitivo conductual, bienestar, alimentación, hábitos.", 
    category: "Health Coach",
    instagram: "espaciomentepositiva",
    phoneNumber: '01150643519',
    email: 'ceci_valladares@hotmail.com' },

    { name: "Agustina Echegoyen", 
    keywords: ['yoga', 'salud', 'coach'], 
    description: "Entrenadora.", 
    category: "Health Coach",
    instagram: "agustinaechegoyen",
    web: "https://www.agusechegoyen.com/",
    phoneNumber: '1166919783',
    email: 'agusechegoyen4@gmail.com' },

    { name: "Retiros Holísticos", 
    keywords: ['salud', 'retiro', 'natural'], 
    description: "Naturaleza, paz y hermosas vistas. Retiros en El Templo de la Esfera.", 
    category: "Health Coach",
    instagram: "retiros_holisticos" },

    { name: "Agus Cernadas", 
    keywords: ['aceite', 'natural', 'coach', 'suplementos'], 
    description: "Aceites Dotierra, accesorio cuántico, suplementos naturales.", 
    category: "Health Coach",
    instagram: "aliolibienestarnatural",
    email: 'info@alioli.com.ar' },

    //Categoría HOME & DECO
    { name: "Gloria Atelier", 
    keywords: ['decoracion', 'hogar', 'interiorismo'], 
    description: "Tienda Deco y Estudio de Interiorismo.", 
    category: "Home & Deco",
    instagram: "gloriaatelierdeco",
    web: "http://www.gloriaatelier.com/",
    phoneNumber: '01134839270',
    email: 'gloriaatelierweb@gmail.com' },
    
    { name: "Paula Sanchez", 
    keywords: ['juguetes', 'artesanias', 'hogar'], 
    description: "Juguetes artesanales y hechos con amor, aprendiz de tejidos.", 
    category: "Home & Deco",
    instagram: "laovejadepipina",
    web: "http://www.laovejadepipina.com.ar/",
    phoneNumber: '5491152603614',
    email: 'laovejadepipina@gmail.com' },

    { name: "Maria Repetto", 
    keywords: ['muebles', 'decoracion', 'diseño'], 
    description: "Diseñadora de muebles de madera a medida.", 
    category: "Home & Deco",
    instagram: "maria.repetto",
    phoneNumber: '01166665075',
    email: 'mariarepettodeco@gmail.com' },

    { name: "Re Consciente", 
    keywords: ['sustentable', 'hogar', 'ecologico', 'decoracion'], 
    description: "La versión sustentable de los productos que usas en tu día a día para reducir la contaminación plástica.", 
    category: "Home & Deco",
    instagram: "reconsciente",
    web: "https://www.reconsciente.com/",
    phoneNumber: '5491135655474',
    email: 're.consciente.ar@gmail.com' },

    { name: "Vida Vera", 
    keywords: ['limpieza', 'hogar', 'sustentable', 'cuidado'], 
    description: "Poductos de limpieza y cuidado personal.", 
    category: "Home & Deco",
    instagram: "vidavera_",
    web: "https://vidavera.callbell.shop/",
    phoneNumber: '1139175689',
    email: 'vidaverasustentable@gmail.com' },

    { name: "Platónica", 
    keywords: ['joyas', 'hogar', 'decoracion'], 
    description: "Lámparas, objetas de decoración y joyas.", 
    category: "Home & Deco",
    instagram: "platonicaok",
    web: "https://platonica369.mitiendanube.com/",
    phoneNumber: '01163013213',
    email: 'platonica.sagrada@gmail.com' },

    //Categoría MÉDICOS Y PROFESIONALES
    { name: 'María de los Milagros Baylac',
    keywords: ['tarot', 'numerologia', 'holistica', 'astrologia'],
    description: 'Sesiones Holísticas de Tarot y Numerología.',
    category: 'Médicos y Profesionales',
    instagram: 'mariabaylac',
    phoneNumber: '01152295153',
    email: 'mariabaylac@hotmail.com' },

    { name: "Latidos de la tierra", 
    keywords: ['terapia', 'sonido'], 
    description: "Terapia de sonido y fotografía.", 
    category: "Médicos y Profesionales",
    instagram: "latidosdelatierra.latir",
    phoneNumber: '5491161041311',
    email: 'latidosdelatierralatidos@gmail.com' },

    { name: "Bindi", 
    keywords: ['eventos', 'fotografia', 'productora'], 
    description: "Productora de contenidos audiovisuales, digitales y eventos", 
    category: "Médicos y Profesionales",
    instagram: "bindi.world",
    web: "http://www.bindi.world.com/",
    email: 'world.bindi@gmail.com' },

    { name: "María Mettler", 
    keywords: ['yoga', 'kundalini', 'clases', 'psicologia'], 
    description: "Maestra formadora de Kundalini Yoga", 
    category: "Médicos y Profesionales",
    instagram: "maria_mettler",
    web: "http://www.budocursos.com/",
    email: 'budocursos@gmail.com' },

    { name: "Jason Fung", 
    keywords: ['medico', 'escritor', 'dieta'], 
    description: "Médico, pérdida de peso.", 
    category: "Médicos y Profesionales", 
    instagram: "drjasonfung",
    web: "http://www.drjasonfung.com/" },

    { name: 'Flora Proverbio',
    keywords: ['marketing', 'comunicacion', 'mujeres'],
    description: 'Marketing, comunicación para mujeres +50.',
    category: 'Médicos y Profesionales',
    instagram: 'floraproverbio',
    email: 'proverbioflora@gmail.com' },

    { name: "Martita Ayup", 
    keywords: ['biologia', 'esperitualidad', 'regeneracion'], 
    description: "Desde inflamación a la regeneración, biología y espiritualidad.", 
    category: "Médicos y Profesionales", 
    instagram: "martita.ayup",
    web: "https://www.martitaayup.com/?r_done=1",
    email: 'info@martitaayup.com' },

    { name: "Marina Romiglia", 
    keywords: ['medicina', 'salud', 'preventiva', 'medica'], 
    description: "Medicina preventiva.", 
    category: "Médicos y Profesionales", 
    instagram: "salud.integrativa",
    web: "https://saludintegrativaweb.com/",
    phoneNumber: '2342576690' },

    { name: "Matías Albizzati", 
    keywords: ['medicina', 'deportologo', 'medico'], 
    description: "Medicina para optimizar el cuerpo y sus funciones biológicas.", 
    category: "Médicos y Profesionales", 
    instagram: "dr_albizzati",
    web: "http://www.dralbizzati.com/",
    phoneNumber: '01127114630',
    email: 'info@dralbizzati.com' },

    { name: "Centro Integral de Ozonoterapia", 
    keywords: ['medico', 'salud', 'ozoterapia'], 
    description: "Servicio médico integral con más de 21 años de experiencia.", 
    category: "Médicos y Profesionales", 
    instagram: "ozonoterapiaintegral",
    web: "https://ozonoterapiaintegral.com.ar/",
    phoneNumber: '1165234061' },

    { name: 'Marcelo Morante',
    keywords: ['cannabis', 'medico', 'salud'],
    description: 'Médico especialista en Medicina Interna Experto en Cannabis.',
    category: 'Médicos y Profesionales',
    instagram: 'drmarcelomorante',
    phoneNumber: '2215697420',
    email: 'drmarcelomorante@gmail.com' },

    { name: 'Natalia Sa',
    keywords: ['terapia', 'aroma', 'psicologia', 'coach', 'bienestar'],
    description: 'Psicoterapia de integración, perfumista natural, coaching olfativo, aromaterapia clínica, mindfullnes, PNiE.',
    category: 'Médicos y Profesionales',
    instagram: 'nataliaceciliasa',
    phoneNumber: '5491154256194',
    email: 'natalyasaneuropsi@gmail.com' },

    { name: "Romina Tiberi", 
    keywords: ['autoestima', 'cuerpo', 'salud', 'psicologia'], 
    description: "Estudio de autoestima corporal.", 
    category: "Médicos y Profesionales", 
    instagram: "roma.corporea",
    web: "https://romacorporea.com/",
    phoneNumber: '5491121759789',
    email: 'roma.corporea@gmail.com' },

    { name: "Marcelo Suárez", 
    keywords: ['biowellner', 'dieta', 'medico', 'bienestar'], 
    description: "Experto en conductas saludables, Bio-Wellner, Certificado en nutrición moderna.", 
    category: "Médicos y Profesionales", 
    instagram: "doctormarcelosuarez",
    web: "https://www.doctormarcelosuarez.com/",
    phoneNumber: '5491131249350',
    email: 'doctormarcelosuarez@gmail.com' },

    { name: "Dr Zabala Begnis Enrique", 
    keywords: ['medicina', 'biologia', 'salud', 'biomolecular'], 
    description: "Medicina Biomolecular.", 
    category: "Médicos y Profesionales", 
    instagram: "biomolecular.com.ar",
    web: "https://www.medicinabiomolecular.com.ar/",
    phoneNumber: '01148112500',
    email: 'medicinabiomolecular4@gmail.com' },

    { name: "Fundación Salud", 
    keywords: ['cuerpo', 'mente', 'salud'], 
    description: "Sanación de cuerpo y mente.", 
    category: "Médicos y Profesionales", 
    instagram: "fundacsalud",
    web: "https://www.fundacionsalud.org.ar/",
    phoneNumber: '01161602127',
    email: 'infomail@fundacionsalud.org.ar' },

    { name: 'Carlos Perez Ramírez',
    keywords: ['deporte', 'conferencia', 'pni', 'medicina'],
    description: 'Asesor deportistas de élite, conferencista.',
    category: 'Médicos y Profesionales',
    instagram: 'carlosperezgenera',
    email: 'carlos@regenerapni.com' },

    { name: 'Lic Guadalupe Salazar',
    keywords: ['keto', 'dieta', 'alimentacion'],
    description: 'Keto - Low Carb. Te ayudo a bajar de peso y cambiar el hábito alimenticio.',
    category: 'Médicos y Profesionales',
    instagram: 'nutricionmasplacer',
    phoneNumber: '5493815862761',
    email: 'mgsalazar@my.com' },

    { name: 'Carolina Salvatori',
    keywords: ['obesidad', 'diabetes', 'medica', 'cardiologa'],
    description: 'Diplomada en obesidad/diabetes.',
    category: 'Médicos y Profesionales',
    instagram: 'dra.carolinasalvatori',
    phoneNumber: '1128373840',
    email: 'dra.carolinasalvatori@gmail.com' },

    { name: 'Alex e Isa',
    keywords: ['ansiedad', 'terapia', 'salud', 'mente'],
    description: 'Recursos para la ansiedad. Dibujos y garabatos terapéuticos.',
    category: 'Médicos y Profesionales',
    instagram: 'alexeisabella',
    phoneNumber: '51991140-620',
    email: 'isa@alexeisa.com' },

    { name: 'Carolina Cancio',
    keywords: ['mente', 'terapia', 'neurociencia', 'salud'],
    description: 'Ayudo a descubrir el potencial del cerebro. Estrategias mentales para el éxito en relaciones y negocios.',
    category: 'Médicos y Profesionales',
    instagram: 'carolina.cancio',
    phoneNumber: '1132070247',
    email: 'caroxcancio@yahoo.com.ar' },

    { name: 'Evangelina Varela',
    keywords: ['medicina', 'naval', 'hiperbarica', 'salud'],
    description: 'Operadora naval Hiperbárica.',
    category: 'Médicos y Profesionales',
    instagram: 'hiperbaricasbuenosaires' },

    { name: 'De Caso Pablo',
    keywords: ['oncologia', 'salud', 'psicologia'],
    description: 'Especialista en medicina integrativa.',
    category: 'Médicos y Profesionales',
    instagram: 'drdecasopablo',
    phoneNumber: '03489629155',
    email: 'pablodecaso@cmdrsc.com.ar' },

    { name: 'Natalia Paratore',
    keywords: ['locutora', 'coach', 'salud'],
    description: 'Locutora, mentora.',
    category: 'Médicos y Profesionales',
    instagram: 'niparatore',
    email: 'inesparatore@gmail.com' },

    { name: "Oxi salud", 
    keywords: ['camara', 'hiperbarica', 'salud', 'medicina'], 
    description: "Cámara Hiperbárica.", 
    category: "Médicos y Profesionales", 
    instagram: "oxisaludarg",
    web: "https://hiperbarica.oxisaludargentina.com/",
    phoneNumber: '5491127625086',
    email: 'info@oxisaludargentina.com' },

    { name: "Gaspar Tytelman", 
    keywords: ['musica', 'mente', 'salud', 'sanacion'], 
    description: "Sanación con música. Creador del método Sistema Rítmico Consciente.", 
    category: "Médicos y Profesionales", 
    instagram: "sanacioncontambores",
    web: "https://www.gaspartytelman.com.ar/",
    phoneNumber: '1154558114',
    email: 'contacto@gaspartytelman.com.ar' },

    { name: "Equipos Lazos Psicooncología", 
    keywords: ['salud', 'mente', 'reumatologo', 'deportologo'], 
    description: "Acompañantes en el tránsito de la enfermedad hacia el camino de la salud física y emocional.", 
    category: "Médicos y Profesionales", 
    instagram: "equipolazospsicooncologia",
    web: "https://www.equipolazos.org/",
    phoneNumber: '02995042730',
    email: 'lazosnqn@yahoo.com.ar' },

    { name: "Ana Garat", 
    keywords: ['dieta', 'obesidad', 'nutricion', 'antiinflamatorio', 'salud'], 
    description: "Nutrición y obesidad. Nutrición antiinflamatoria.", 
    category: "Médicos y Profesionales", 
    instagram: "anagaratnutricion",
    web: "http://www.anagarat.com.ar/",
    phoneNumber: '11 5062-9769',
    email: 'turnosgarat@gmail.com' },

    { name: "Sanho", 
    keywords: ['holistica', 'coaching', 'sanacion'], 
    description: "Coaching en nutrición consciente.", 
    category: "Médicos y Profesionales", 
    instagram: "somos.sanho",
    web: "https://sanho.com.ar/",
    phoneNumber: '1124090270',
    email: 'hola@sanho.com.ar' },

    //Categoría RESTAURANTES Y CAFÉS

    { name: "Alma Natura", 
    keywords: ['veggie', 'vegetariano', 'restaurante'], 
    description: "Restaurante vegetariano/vegano.", 
    category: "Restaurantes y Cafés", 
    instagram: "almanaturaok",
    web: "http://www.alma-natura.com.ar/",
    phoneNumber: '0111537884062',
    email: 'info@alma-natura.com.ar' },

    { name: "Corte Comedor", 
    keywords: ['restaurante', 'alimentacion', 'parrilla'], 
    description: "Restaurante.", 
    category: "Restaurantes y Cafés", 
    instagram: "cortecomedor",
    phoneNumber: '01147812166',
    email: 'info@corte.com.ar' },

    { name: "Perro", 
    keywords: ['cafe', 'pet', 'friendly'], 
    description: "Café Pet Friendly.", 
    category: "Restaurantes y Cafés", 
    instagram: "perrocafe.ar",
    email: 'perrocafe.ar@gmail.com' },

    //Categoría TIEMPO LIBRE Y OCIO

    { name: "Sol Wais", 
    keywords: ['musica', 'terapia', 'sonido', 'salud'], 
    description: "Facilitadora vibracional, terapia sonora/armonizaciones, conciertos armónicos, violoncellista.", 
    category: "Tiempo Libre y Ocio", 
    instagram: "sol.wais",
    web: "https://www.solwais.com.ar/",
    phoneNumber: '1165569661',
    email: 'holasolwais@gmail.com' },

    { name: "Artesano", 
    keywords: ['musica', 'terapia', 'juegos', 'aprendizaje', 'artesania'], 
    description: "Espacio de juego y aprendizaje, niñ@s de 2 a 5 años. Educación viva.", 
    category: "Tiempo Libre y Ocio", 
    instagram: "artesanoaprenderjugando",
    email: 'coll.delfina@gmail.com' },

    { name: "Ginger & Coco Hotel", 
    keywords: ['hotel', 'ecologico', 'boutique'], 
    description: "Eco-Boutique Hotel.", 
    category: "Tiempo Libre y Ocio", 
    instagram: "gingerandcocohotel",
    phoneNumber: '02494602046',
    email: 'gingerandcoargentina@gmail.com' },

    //Categoría TIENDAS SALUDABLES
    
    { name: "Chivi Prem", 
    keywords: ['salud', 'natural', 'yuyos', 'coach' ], 
    description: "Productos, servicios, yuyera.", 
    category: "Tiendas Saludables", 
    instagram: "silvinapremmurti",
    phoneNumber: '11 6474-6173',
    email: 'silvinapremmurti@gmail.com' },
    
    { name: "The Green Store", 
    keywords: ['alimentacion', 'keto', 'veggie'], 
    description: "Organizamos tu vida con alimentos saludables, reales, keto, LCH, veggies y menú infantil.", 
    category: "Tiendas saludables",
    instagram: "_thegreenstore",
    web: "https://thegreenstore.com.ar/",
    phoneNumber: '5491151810778',
    email: 'info@thegreenstore.com.ar' },

    // Agrega más datos aquí
];

// Función para mostrar los resultados en la página
function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = 'ig.png'; // Reemplaza con la ruta de tus imágenes
        card.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = result.name;
        card.appendChild(name);

        const category = document.createElement('p');
        category.textContent = result.category;
        card.appendChild(category);

        const description = document.createElement('p');
        description.textContent = result.description; // Muestra la descripción
        card.appendChild(description);

        const enlaceInstagram = document.createElement("a");
            enlaceInstagram.href = `https://www.instagram.com/${result.instagram}`;
            enlaceInstagram.textContent = `Instagram: @${result.instagram}`;
            enlaceInstagram.target = "_blank";
             card.appendChild(enlaceInstagram);

        if (result.web) {
            const web = document.createElement('a');
            web.href = result.web;
            web.textContent = 'Página web';
            // Añade el atributo target="_blank" para abrir en una nueva pestaña
            web.target = '_blank';
            card.appendChild(web);
        }

        if (result.phoneNumber) {
            const phoneNumberLink = document.createElement('a');
            phoneNumberLink.href = 'tel:' + result.phoneNumber; // Enlace clickeable para llamar
            phoneNumberLink.textContent = 'Llamar';
            card.appendChild(phoneNumberLink);
        }

        if (result.email) {
            const emailLink = document.createElement('a');
            emailLink.href = 'mailto:' + result.email; // Enlace clickeable para enviar correo electrónico
            emailLink.textContent = 'Enviar correo';
            card.appendChild(emailLink);
        }

        resultsContainer.appendChild(card);
    });
}

// Función para realizar la búsqueda

function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();

    const results = data.filter(result => {
        const includesSearchTerm = searchTerm === '' || 
                                   result.name.toLowerCase().includes(searchTerm) ||
                                   result.keywords.some(keyword => keyword.includes(searchTerm));
        const matchesCategory = categoryFilter === '' || result.category.toLowerCase() === categoryFilter;
        return includesSearchTerm && matchesCategory;
    });

    displayResults(results);
}

// Agrega la función searchOnEnter
function searchOnEnter(event) {
    if (event.key === 'Enter') {
        search();
    }
}

// Mostrar todos los resultados al cargar la página
displayResults(data);
