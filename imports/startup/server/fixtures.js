import { Mongo } from 'meteor/mongo';

import { Regiones } from '../../api/regiones/regiones.js';

let regiones = [
	{
		"name": "Tarapacá",
		"_id": "1",
		"provincias": [
			{
				"name": "Iquique",
				"_id": "11",
				"comunas": [
					{
						"name": "Iquique",
						"comuna_id": "1101"
					},
					{
						"name": "Alto Hospicio",
						"comuna_id": "1107"
					}
				]
			},
			{
				"name": "Tamarugal",
				"_id": "14",
				"comunas": [
					{
						"name": "Pozo Almonte",
						"comuna_id": "1401"
					},
					{
						"name": "Camiña",
						"comuna_id": "1402"
					},
					{
						"name": "Colchane",
						"comuna_id": "1403"
					},
					{
						"name": "Huara",
						"comuna_id": "1404"
					},
					{
						"name": "Pica",
						"comuna_id": "1405"
					}
				]
			}
		]
	},
	{
		"name": "Antofagasta",
		"_id": "2",
		"provincias": [
			{
				"name": "Antofagasta",
				"_id": "21",
				"comunas": [
					{
						"name": "Antofagasta",
						"comuna_id": "2101"
					},
					{
						"name": "Mejillones",
						"comuna_id": "2102"
					},
					{
						"name": "Sierra Gorda",
						"comuna_id": "2103"
					},
					{
						"name": "Taltal",
						"comuna_id": "2104"
					}
				]
			},
			{
				"name": "El Loa",
				"_id": "22",
				"comunas": [
					{
						"name": "Calama",
						"comuna_id": "2201"
					},
					{
						"name": "Ollagüe",
						"comuna_id": "2202"
					},
					{
						"name": "San Pedro de Atacama",
						"comuna_id": "2203"
					}
				]
			},
			{
				"name": "Tocopilla",
				"_id": "23",
				"comunas": [
					{
						"name": "Tocopilla",
						"comuna_id": "2301"
					},
					{
						"name": "María Elena",
						"comuna_id": "2302"
					}
				]
			}
		]
	},
	{
		"name": "Atacama",
		"_id": "3",
		"provincias": [
			{
				"name": "Copiapó",
				"_id": "31",
				"comunas": [
					{
						"name": "Copiapó",
						"comuna_id": "3101"
					},
					{
						"name": "Caldera",
						"comuna_id": "3102"
					},
					{
						"name": "Tierra Amarilla",
						"comuna_id": "3103"
					}
				]
			},
			{
				"name": "Chañaral",
				"_id": "32",
				"comunas": [
					{
						"name": "Chañaral",
						"comuna_id": "3201"
					},
					{
						"name": "Diego de Almagro",
						"comuna_id": "3202"
					}
				]
			},
			{
				"name": "Huasco",
				"_id": "33",
				"comunas": [
					{
						"name": "Vallenar",
						"comuna_id": "3301"
					},
					{
						"name": "Alto del Carmen",
						"comuna_id": "3302"
					},
					{
						"name": "Freirina",
						"comuna_id": "3303"
					},
					{
						"name": "Huasco",
						"comuna_id": "3304"
					}
				]
			}
		]
	},
	{
		"name": "Coquimbo",
		"_id": "4",
		"provincias": [
			{
				"name": "Elqui",
				"_id": "41",
				"comunas": [
					{
						"name": "La Serena",
						"comuna_id": "4101"
					},
					{
						"name": "Coquimbo",
						"comuna_id": "4102"
					},
					{
						"name": "Andacollo",
						"comuna_id": "4103"
					},
					{
						"name": "La Higuera",
						"comuna_id": "4104"
					},
					{
						"name": "Paihuano",
						"comuna_id": "4105"
					},
					{
						"name": "Vicuña",
						"comuna_id": "4106"
					}
				]
			},
			{
				"name": "Choapa",
				"_id": "42",
				"comunas": [
					{
						"name": "Illapel",
						"comuna_id": "4201"
					},
					{
						"name": "Canela",
						"comuna_id": "4202"
					},
					{
						"name": "Los Vilos",
						"comuna_id": "4203"
					},
					{
						"name": "Salamanca",
						"comuna_id": "4204"
					}
				]
			},
			{
				"name": "Limarí",
				"_id": "43",
				"comunas": [
					{
						"name": "Ovalle",
						"comuna_id": "4301"
					},
					{
						"name": "Combarbalá",
						"comuna_id": "4302"
					},
					{
						"name": "Monte Patria",
						"comuna_id": "4303"
					},
					{
						"name": "Punitaqui",
						"comuna_id": "4304"
					},
					{
						"name": "Río Hurtado",
						"comuna_id": "4305"
					}
				]
			}
		]
	},
	{
		"name": "Valparaíso",
		"_id": "5",
		"provincias": [
			{
				"name": "Valparaíso",
				"_id": "51",
				"comunas": [
					{
						"name": "Valparaíso",
						"comuna_id": "5101"
					},
					{
						"name": "Casablanca",
						"comuna_id": "5102"
					},
					{
						"name": "Concón",
						"comuna_id": "5103"
					},
					{
						"name": "Juan Fernández",
						"comuna_id": "5104"
					},
					{
						"name": "Puchuncaví",
						"comuna_id": "5105"
					},
					{
						"name": "Quintero",
						"comuna_id": "5107"
					},
					{
						"name": "Viña del Mar",
						"comuna_id": "5109"
					}
				]
			},
			{
				"name": "Isla de Pascua",
				"_id": "52",
				"comunas": [
					{
						"name": "Isla de Pascua",
						"comuna_id": "5201"
					}
				]
			},
			{
				"name": "Los Andes",
				"_id": "53",
				"comunas": [
					{
						"name": "Los Andes",
						"comuna_id": "5301"
					},
					{
						"name": "Calle Larga",
						"comuna_id": "5302"
					},
					{
						"name": "Rinconada",
						"comuna_id": "5303"
					},
					{
						"name": "San Esteban",
						"comuna_id": "5304"
					}
				]
			},
			{
				"name": "Petorca",
				"_id": "54",
				"comunas": [
					{
						"name": "La Ligua",
						"comuna_id": "5401"
					},
					{
						"name": "Cabildo",
						"comuna_id": "5402"
					},
					{
						"name": "Papudo",
						"comuna_id": "5403"
					},
					{
						"name": "Petorca",
						"comuna_id": "5404"
					},
					{
						"name": "Zapallar",
						"comuna_id": "5405"
					}
				]
			},
			{
				"name": "Quillota",
				"_id": "55",
				"comunas": [
					{
						"name": "Quillota",
						"comuna_id": "5501"
					},
					{
						"name": "La Calera",
						"comuna_id": "5502"
					},
					{
						"name": "Hijuelas",
						"comuna_id": "5503"
					},
					{
						"name": "La Cruz",
						"comuna_id": "5504"
					},
					{
						"name": "Nogales",
						"comuna_id": "5506"
					}
				]
			},
			{
				"name": "San Antonio",
				"_id": "56",
				"comunas": [
					{
						"name": "San Antonio",
						"comuna_id": "5601"
					},
					{
						"name": "Algarrobo",
						"comuna_id": "5602"
					},
					{
						"name": "Cartagena",
						"comuna_id": "5603"
					},
					{
						"name": "El Quisco",
						"comuna_id": "5604"
					},
					{
						"name": "El Tabo",
						"comuna_id": "5605"
					},
					{
						"name": "Santo Domingo",
						"comuna_id": "5606"
					}
				]
			},
			{
				"name": "San Felipe de Aconcagua",
				"_id": "57",
				"comunas": [
					{
						"name": "San Felipe",
						"comuna_id": "5701"
					},
					{
						"name": "Catemu",
						"comuna_id": "5702"
					},
					{
						"name": "Llay Llay",
						"comuna_id": "5703"
					},
					{
						"name": "Panquehue",
						"comuna_id": "5704"
					},
					{
						"name": "Putaendo",
						"comuna_id": "5705"
					},
					{
						"name": "Santa María",
						"comuna_id": "5706"
					}
				]
			},
			{
				"name": "Marga Marga",
				"_id": "58",
				"comunas": [
					{
						"name": "Quilpué",
						"comuna_id": "5801"
					},
					{
						"name": "Limache",
						"comuna_id": "5802"
					},
					{
						"name": "Olmué",
						"comuna_id": "5803"
					},
					{
						"name": "Villa Alemana",
						"comuna_id": "5804"
					}
				]
			}
		]
	},
	{
		"name": "Región del Libertador Gral. Bernardo O'Higgins",
		"_id": "6",
		"provincias": [
			{
				"name": "Cachapoal",
				"_id": "61",
				"comunas": [
					{
						"name": "Rancagua",
						"comuna_id": "6101"
					},
					{
						"name": "Codegua",
						"comuna_id": "6102"
					},
					{
						"name": "Coinco",
						"comuna_id": "6103"
					},
					{
						"name": "Coltauco",
						"comuna_id": "6104"
					},
					{
						"name": "Doñihue",
						"comuna_id": "6105"
					},
					{
						"name": "Graneros",
						"comuna_id": "6106"
					},
					{
						"name": "Las Cabras",
						"comuna_id": "6107"
					},
					{
						"name": "Machalí",
						"comuna_id": "6108"
					},
					{
						"name": "Malloa",
						"comuna_id": "6109"
					},
					{
						"name": "Mostazal",
						"comuna_id": "6110"
					},
					{
						"name": "Olivar",
						"comuna_id": "6111"
					},
					{
						"name": "Peumo",
						"comuna_id": "6112"
					},
					{
						"name": "Pichidegua",
						"comuna_id": "6113"
					},
					{
						"name": "Quinta de Tilcoco",
						"comuna_id": "6114"
					},
					{
						"name": "Rengo",
						"comuna_id": "6115"
					},
					{
						"name": "Requínoa",
						"comuna_id": "6116"
					},
					{
						"name": "San Vicente",
						"comuna_id": "6117"
					}
				]
			},
			{
				"name": "Cardenal Caro",
				"_id": "62",
				"comunas": [
					{
						"name": "Pichilemu",
						"comuna_id": "6201"
					},
					{
						"name": "La Estrella",
						"comuna_id": "6202"
					},
					{
						"name": "Litueche",
						"comuna_id": "6203"
					},
					{
						"name": "Marchihue",
						"comuna_id": "6204"
					},
					{
						"name": "Navidad",
						"comuna_id": "6205"
					},
					{
						"name": "Paredones",
						"comuna_id": "6206"
					}
				]
			},
			{
				"name": "Colchagua",
				"_id": "63",
				"comunas": [
					{
						"name": "San Fernando",
						"comuna_id": "6301"
					},
					{
						"name": "Chépica",
						"comuna_id": "6302"
					},
					{
						"name": "Chimbarongo",
						"comuna_id": "6303"
					},
					{
						"name": "Lolol",
						"comuna_id": "6304"
					},
					{
						"name": "Nancagua",
						"comuna_id": "6305"
					},
					{
						"name": "Palmilla",
						"comuna_id": "6306"
					},
					{
						"name": "Peralillo",
						"comuna_id": "6307"
					},
					{
						"name": "Placilla",
						"comuna_id": "6308"
					},
					{
						"name": "Pumanque",
						"comuna_id": "6309"
					},
					{
						"name": "Santa Cruz",
						"comuna_id": "6310"
					}
				]
			}
		]
	},
	{
		"name": "Región del Maule",
		"_id": "7",
		"provincias": [
			{
				"name": "Talca",
				"_id": "71",
				"comunas": [
					{
						"name": "Talca",
						"comuna_id": "7101"
					},
					{
						"name": "Constitución",
						"comuna_id": "7102"
					},
					{
						"name": "Curepto",
						"comuna_id": "7103"
					},
					{
						"name": "Empedrado",
						"comuna_id": "7104"
					},
					{
						"name": "Maule",
						"comuna_id": "7105"
					},
					{
						"name": "Pelarco",
						"comuna_id": "7106"
					},
					{
						"name": "Pencahue",
						"comuna_id": "7107"
					},
					{
						"name": "Río Claro",
						"comuna_id": "7108"
					},
					{
						"name": "San Clemente",
						"comuna_id": "7109"
					},
					{
						"name": "San Rafael",
						"comuna_id": "7110"
					}
				]
			},
			{
				"name": "Cauquenes",
				"_id": "72",
				"comunas": [
					{
						"name": "Cauquenes",
						"comuna_id": "7201"
					},
					{
						"name": "Chanco",
						"comuna_id": "7202"
					},
					{
						"name": "Pelluhue",
						"comuna_id": "7203"
					}
				]
			},
			{
				"name": "Curicó",
				"_id": "73",
				"comunas": [
					{
						"name": "Curicó",
						"comuna_id": "7301"
					},
					{
						"name": "Hualañé",
						"comuna_id": "7302"
					},
					{
						"name": "Licantén",
						"comuna_id": "7303"
					},
					{
						"name": "Molina",
						"comuna_id": "7304"
					},
					{
						"name": "Rauco",
						"comuna_id": "7305"
					},
					{
						"name": "Romeral",
						"comuna_id": "7306"
					},
					{
						"name": "Sagrada Familia",
						"comuna_id": "7307"
					},
					{
						"name": "Teno",
						"comuna_id": "7308"
					},
					{
						"name": "Vichuquén",
						"comuna_id": "7309"
					}
				]
			},
			{
				"name": "Linares",
				"_id": "74",
				"comunas": [
					{
						"name": "Linares",
						"comuna_id": "7401"
					},
					{
						"name": "Colbún",
						"comuna_id": "7402"
					},
					{
						"name": "Longaví",
						"comuna_id": "7403"
					},
					{
						"name": "Parral",
						"comuna_id": "7404"
					},
					{
						"name": "Retiro",
						"comuna_id": "7405"
					},
					{
						"name": "San Javier",
						"comuna_id": "7406"
					},
					{
						"name": "Villa Alegre",
						"comuna_id": "7407"
					},
					{
						"name": "Yerbas Buenas",
						"comuna_id": "7408"
					}
				]
			}
		]
	},
	{
		"name": "Región del Biobío",
		"_id": "8",
		"provincias": [
			{
				"name": "Concepción",
				"_id": "81",
				"comunas": [
					{
						"name": "Concepción",
						"comuna_id": "8101"
					},
					{
						"name": "Coronel",
						"comuna_id": "8102"
					},
					{
						"name": "Chiguayante",
						"comuna_id": "8103"
					},
					{
						"name": "Florida",
						"comuna_id": "8104"
					},
					{
						"name": "Hualqui",
						"comuna_id": "8105"
					},
					{
						"name": "Lota",
						"comuna_id": "8106"
					},
					{
						"name": "Penco",
						"comuna_id": "8107"
					},
					{
						"name": "San Pedro de la Paz",
						"comuna_id": "8108"
					},
					{
						"name": "Santa Juana",
						"comuna_id": "8109"
					},
					{
						"name": "Talcahuano",
						"comuna_id": "8110"
					},
					{
						"name": "Tomé",
						"comuna_id": "8111"
					},
					{
						"name": "Hualpén",
						"comuna_id": "8112"
					}
				]
			},
			{
				"name": "Arauco",
				"_id": "82",
				"comunas": [
					{
						"name": "Lebu",
						"comuna_id": "8201"
					},
					{
						"name": "Arauco",
						"comuna_id": "8202"
					},
					{
						"name": "Cañete",
						"comuna_id": "8203"
					},
					{
						"name": "Contulmo",
						"comuna_id": "8204"
					},
					{
						"name": "Curanilahue",
						"comuna_id": "8205"
					},
					{
						"name": "Los Álamos",
						"comuna_id": "8206"
					},
					{
						"name": "Tirúa",
						"comuna_id": "8207"
					}
				]
			},
			{
				"name": "Biobío",
				"_id": "83",
				"comunas": [
					{
						"name": "Los Ángeles",
						"comuna_id": "8301"
					},
					{
						"name": "Antuco",
						"comuna_id": "8302"
					},
					{
						"name": "Cabrero",
						"comuna_id": "8303"
					},
					{
						"name": "Laja",
						"comuna_id": "8304"
					},
					{
						"name": "Mulchén",
						"comuna_id": "8305"
					},
					{
						"name": "Nacimiento",
						"comuna_id": "8306"
					},
					{
						"name": "Negrete",
						"comuna_id": "8307"
					},
					{
						"name": "Quilaco",
						"comuna_id": "8308"
					},
					{
						"name": "Quilleco",
						"comuna_id": "8309"
					},
					{
						"name": "San Rosendo",
						"comuna_id": "8310"
					},
					{
						"name": "Santa Bárbara",
						"comuna_id": "8311"
					},
					{
						"name": "Tucapel",
						"comuna_id": "8312"
					},
					{
						"name": "Yumbel",
						"comuna_id": "8313"
					},
					{
						"name": "Alto Biobío",
						"comuna_id": "8314"
					}
				]
			},
			{
				"name": "Ñuble",
				"_id": "84",
				"comunas": [
					{
						"name": "Chillán",
						"comuna_id": "8401"
					},
					{
						"name": "Bulnes",
						"comuna_id": "8402"
					},
					{
						"name": "Cobquecura",
						"comuna_id": "8403"
					},
					{
						"name": "Coelemu",
						"comuna_id": "8404"
					},
					{
						"name": "Coihueco",
						"comuna_id": "8405"
					},
					{
						"name": "Chillán Viejo",
						"comuna_id": "8406"
					},
					{
						"name": "El Carmen",
						"comuna_id": "8407"
					},
					{
						"name": "Ninhue",
						"comuna_id": "8408"
					},
					{
						"name": "Ñiquén",
						"comuna_id": "8409"
					},
					{
						"name": "Pemuco",
						"comuna_id": "8410"
					},
					{
						"name": "Pinto",
						"comuna_id": "8411"
					},
					{
						"name": "Portezuelo",
						"comuna_id": "8412"
					},
					{
						"name": "Quillón",
						"comuna_id": "8413"
					},
					{
						"name": "Quirihue",
						"comuna_id": "8414"
					},
					{
						"name": "Ránquil",
						"comuna_id": "8415"
					},
					{
						"name": "San Carlos",
						"comuna_id": "8416"
					},
					{
						"name": "San Fabián",
						"comuna_id": "8417"
					},
					{
						"name": "San Ignacio",
						"comuna_id": "8418"
					},
					{
						"name": "San Nicolás",
						"comuna_id": "8419"
					},
					{
						"name": "Treguaco",
						"comuna_id": "8420"
					},
					{
						"name": "Yungay",
						"comuna_id": "8421"
					}
				]
			}
		]
	},
	{
		"name": "Región de la Araucanía",
		"_id": "9",
		"provincias": [
			{
				"name": "Cautín",
				"_id": "91",
				"comunas": [
					{
						"name": "Temuco",
						"comuna_id": "9101"
					},
					{
						"name": "Carahue",
						"comuna_id": "9102"
					},
					{
						"name": "Cunco",
						"comuna_id": "9103"
					},
					{
						"name": "Curarrehue",
						"comuna_id": "9104"
					},
					{
						"name": "Freire",
						"comuna_id": "9105"
					},
					{
						"name": "Galvarino",
						"comuna_id": "9106"
					},
					{
						"name": "Gorbea",
						"comuna_id": "9107"
					},
					{
						"name": "Lautaro",
						"comuna_id": "9108"
					},
					{
						"name": "Loncoche",
						"comuna_id": "9109"
					},
					{
						"name": "Melipeuco",
						"comuna_id": "9110"
					},
					{
						"name": "Nueva Imperial",
						"comuna_id": "9111"
					},
					{
						"name": "Padre las Casas",
						"comuna_id": "9112"
					},
					{
						"name": "Perquenco",
						"comuna_id": "9113"
					},
					{
						"name": "Pitrufquén",
						"comuna_id": "9114"
					},
					{
						"name": "Pucón",
						"comuna_id": "9115"
					},
					{
						"name": "Saavedra",
						"comuna_id": "9116"
					},
					{
						"name": "Teodoro Schmidt",
						"comuna_id": "9117"
					},
					{
						"name": "Toltén",
						"comuna_id": "9118"
					},
					{
						"name": "Vilcún",
						"comuna_id": "9119"
					},
					{
						"name": "Villarrica",
						"comuna_id": "9120"
					},
					{
						"name": "Cholchol",
						"comuna_id": "9121"
					}
				]
			},
			{
				"name": "Malleco",
				"_id": "92",
				"comunas": [
					{
						"name": "Angol",
						"comuna_id": "9201"
					},
					{
						"name": "Collipulli",
						"comuna_id": "9202"
					},
					{
						"name": "Curacautín",
						"comuna_id": "9203"
					},
					{
						"name": "Ercilla",
						"comuna_id": "9204"
					},
					{
						"name": "Lonquimay",
						"comuna_id": "9205"
					},
					{
						"name": "Los Sauces",
						"comuna_id": "9206"
					},
					{
						"name": "Lumaco",
						"comuna_id": "9207"
					},
					{
						"name": "Purén",
						"comuna_id": "9208"
					},
					{
						"name": "Renaico",
						"comuna_id": "9209"
					},
					{
						"name": "Traiguén",
						"comuna_id": "9210"
					},
					{
						"name": "Victoria",
						"comuna_id": "9211"
					}
				]
			}
		]
	},
	{
		"name": "Región de Los Lagos",
		"_id": "10",
		"provincias": [
			{
				"name": "Llanquihue",
				"_id": "101",
				"comunas": [
					{
						"name": "Puerto Montt",
						"comuna_id": "10101"
					},
					{
						"name": "Calbuco",
						"comuna_id": "10102"
					},
					{
						"name": "Cochamó",
						"comuna_id": "10103"
					},
					{
						"name": "Fresia",
						"comuna_id": "10104"
					},
					{
						"name": "Frutillar",
						"comuna_id": "10105"
					},
					{
						"name": "Los Muermos",
						"comuna_id": "10106"
					},
					{
						"name": "Llanquihue",
						"comuna_id": "10107"
					},
					{
						"name": "Maullín",
						"comuna_id": "10108"
					},
					{
						"name": "Puerto Varas",
						"comuna_id": "10109"
					}
				]
			},
			{
				"name": "Chiloé",
				"_id": "102",
				"comunas": [
					{
						"name": "Castro",
						"comuna_id": "10201"
					},
					{
						"name": "Ancud",
						"comuna_id": "10202"
					},
					{
						"name": "Chonchi",
						"comuna_id": "10203"
					},
					{
						"name": "Curaco de Vélez",
						"comuna_id": "10204"
					},
					{
						"name": "Dalcahue",
						"comuna_id": "10205"
					},
					{
						"name": "Puqueldón",
						"comuna_id": "10206"
					},
					{
						"name": "Queilén",
						"comuna_id": "10207"
					},
					{
						"name": "Quellón",
						"comuna_id": "10208"
					},
					{
						"name": "Quemchi",
						"comuna_id": "10209"
					},
					{
						"name": "Quinchao",
						"comuna_id": "10210"
					}
				]
			},
			{
				"name": "Osorno",
				"_id": "103",
				"comunas": [
					{
						"name": "Osorno",
						"comuna_id": "10301"
					},
					{
						"name": "Puerto Octay",
						"comuna_id": "10302"
					},
					{
						"name": "Purranque",
						"comuna_id": "10303"
					},
					{
						"name": "Puyehue",
						"comuna_id": "10304"
					},
					{
						"name": "Río Negro",
						"comuna_id": "10305"
					},
					{
						"name": "San Juan de la Costa",
						"comuna_id": "10306"
					},
					{
						"name": "San Pablo",
						"comuna_id": "10307"
					}
				]
			},
			{
				"name": "Palena",
				"_id": "104",
				"comunas": [
					{
						"name": "Chaitén",
						"comuna_id": "10401"
					},
					{
						"name": "Futaleufú",
						"comuna_id": "10402"
					},
					{
						"name": "Hualaihué",
						"comuna_id": "10403"
					},
					{
						"name": "Palena",
						"comuna_id": "10404"
					}
				]
			}
		]
	},
	{
		"name": "Región Aisén del Gral. Carlos Ibáñez del Campo",
		"_id": "11",
		"provincias": [
			{
				"name": "Coihaique",
				"_id": "111",
				"comunas": [
					{
						"name": "Coyhaique",
						"comuna_id": "11101"
					},
					{
						"name": "Lago Verde",
						"comuna_id": "11102"
					}
				]
			},
			{
				"name": "Aisén",
				"_id": "112",
				"comunas": [
					{
						"name": "Aysén",
						"comuna_id": "11201"
					},
					{
						"name": "Cisnes",
						"comuna_id": "11202"
					},
					{
						"name": "Guaitecas",
						"comuna_id": "11203"
					}
				]
			},
			{
				"name": "Capitán Prat",
				"_id": "113",
				"comunas": [
					{
						"name": "Cochrane",
						"comuna_id": "11301"
					},
					{
						"name": "O'Higgins",
						"comuna_id": "11302"
					},
					{
						"name": "Tortel",
						"comuna_id": "11303"
					}
				]
			},
			{
				"name": "General Carrera",
				"_id": "114",
				"comunas": [
					{
						"name": "Chile Chico",
						"comuna_id": "11401"
					},
					{
						"name": "Río Ibáñez",
						"comuna_id": "11402"
					}
				]
			}
		]
	},
	{
		"name": "Región de Magallanes y de la Antártica Chilena",
		"_id": "12",
		"provincias": [
			{
				"name": "Magallanes",
				"_id": "121",
				"comunas": [
					{
						"name": "Punta Arenas",
						"comuna_id": "12101"
					},
					{
						"name": "Laguna Blanca",
						"comuna_id": "12102"
					},
					{
						"name": "Río Verde",
						"comuna_id": "12103"
					},
					{
						"name": "San Gregorio",
						"comuna_id": "12104"
					}
				]
			},
			{
				"name": "Antártica Chilena",
				"_id": "122",
				"comunas": [
					{
						"name": "Cabo de Hornos",
						"comuna_id": "12201"
					},
					{
						"name": "Antártica",
						"comuna_id": "12202"
					}
				]
			},
			{
				"name": "Tierra del Fuego",
				"_id": "123",
				"comunas": [
					{
						"name": "Porvenir",
						"comuna_id": "12301"
					},
					{
						"name": "Primavera",
						"comuna_id": "12302"
					},
					{
						"name": "Timaukel",
						"comuna_id": "12303"
					}
				]
			},
			{
				"name": "Última Esperanza",
				"_id": "124",
				"comunas": [
					{
						"name": "Natales",
						"comuna_id": "12401"
					},
					{
						"name": "Torres del Paine",
						"comuna_id": "12402"
					}
				]
			}
		]
	},
	{
		"name": "Región Metropolitana de Santiago",
		"_id": "13",
		"provincias": [
			{
				"name": "Santiago",
				"_id": "131",
				"131": [
					{
						"name": "Santiago",
						"comuna_id": "13101"
					},
					{
						"name": "Cerrillos",
						"comuna_id": "13102"
					},
					{
						"name": "Cerro Navia",
						"comuna_id": "13103"
					},
					{
						"name": "Conchalí",
						"comuna_id": "13104"
					},
					{
						"name": "El Bosque",
						"comuna_id": "13105"
					},
					{
						"name": "Estación Central",
						"comuna_id": "13106"
					},
					{
						"name": "Huechuraba",
						"comuna_id": "13107"
					},
					{
						"name": "Independencia",
						"comuna_id": "13108"
					},
					{
						"name": "La Cisterna",
						"comuna_id": "13109"
					},
					{
						"name": "La Florida",
						"comuna_id": "13110"
					},
					{
						"name": "La Granja",
						"comuna_id": "13111"
					},
					{
						"name": "La Pintana",
						"comuna_id": "13112"
					},
					{
						"name": "La Reina",
						"comuna_id": "13113"
					},
					{
						"name": "Las Condes",
						"comuna_id": "13114"
					},
					{
						"name": "Lo Barnechea",
						"comuna_id": "13115"
					},
					{
						"name": "Lo Espejo",
						"comuna_id": "13116"
					},
					{
						"name": "Lo Prado",
						"comuna_id": "13117"
					},
					{
						"name": "Macul",
						"comuna_id": "13118"
					},
					{
						"name": "Maipú",
						"comuna_id": "13119"
					},
					{
						"name": "Ñuñoa",
						"comuna_id": "13120"
					},
					{
						"name": "Pedro Aguirre Cerda",
						"comuna_id": "13121"
					},
					{
						"name": "Peñalolén",
						"comuna_id": "13122"
					},
					{
						"name": "Providencia",
						"comuna_id": "13123"
					},
					{
						"name": "Pudahuel",
						"comuna_id": "13124"
					},
					{
						"name": "Quilicura",
						"comuna_id": "13125"
					},
					{
						"name": "Quinta Normal",
						"comuna_id": "13126"
					},
					{
						"name": "Recoleta",
						"comuna_id": "13127"
					},
					{
						"name": "Renca",
						"comuna_id": "13128"
					},
					{
						"name": "San Joaquín",
						"comuna_id": "13129"
					},
					{
						"name": "San Miguel",
						"comuna_id": "13130"
					},
					{
						"name": "San Ramón",
						"comuna_id": "13131"
					},
					{
						"name": "Vitacura",
						"comuna_id": "13132"
					}
				]
			},
			{
				"name": "Cordillera",
				"_id": "132",
				"comunas": [
					{
						"name": "Puente Alto",
						"comuna_id": "13201"
					},
					{
						"name": "Pirque",
						"comuna_id": "13202"
					},
					{
						"name": "San José de Maipo",
						"comuna_id": "13203"
					}
				]
			},
			{
				"name": "Chacabuco",
				"_id": "133",
				"comunas": [
					{
						"name": "Colina",
						"comuna_id": "13301"
					},
					{
						"name": "Lampa",
						"comuna_id": "13302"
					},
					{
						"name": "Tiltil",
						"comuna_id": "13303"
					}
				]
			},
			{
				"name": "Maipo",
				"_id": "134",
				"comunas": [
					{
						"name": "San Bernardo",
						"comuna_id": "13401"
					},
					{
						"name": "Buin",
						"comuna_id": "13402"
					},
					{
						"name": "Calera de Tango",
						"comuna_id": "13403"
					},
					{
						"name": "Paine",
						"comuna_id": "13404"
					}
				]
			},
			{
				"name": "Melipilla",
				"_id": "135",
				"135": [
					{
						"name": "Melipilla",
						"comuna_id": "13501"
					},
					{
						"name": "Alhué",
						"comuna_id": "13502"
					},
					{
						"name": "Curacaví",
						"comuna_id": "13503"
					},
					{
						"name": "María Pinto",
						"comuna_id": "13504"
					},
					{
						"name": "San Pedro",
						"comuna_id": "13505"
					}
				]
			},
			{
				"name": "Talagante",
				"_id": "136",
				"136": [
					{
						"name": "Talagante",
						"comuna_id": "13601"
					},
					{
						"name": "El Monte",
						"comuna_id": "13602"
					},
					{
						"name": "Isla de Maipo",
						"comuna_id": "13603"
					},
					{
						"name": "Padre Hurtado",
						"comuna_id": "13604"
					},
					{
						"name": "Peñaflor",
						"comuna_id": "13605"
					}
				]
			}
		]
	},
	{
		"name": "Región de Los Ríos",
		"_id": "14",
		"provincias": [
			{
				"name": "Valdivia",
				"_id": "141",
				"comunas": [
					{
						"name": "Valdivia",
						"comuna_id": "14101"
					},
					{
						"name": "Corral",
						"comuna_id": "14102"
					},
					{
						"name": "Lanco",
						"comuna_id": "14103"
					},
					{
						"name": "Los Lagos",
						"comuna_id": "14104"
					},
					{
						"name": "Máfil",
						"comuna_id": "14105"
					},
					{
						"name": "Mariquina",
						"comuna_id": "14106"
					},
					{
						"name": "Paillaco",
						"comuna_id": "14107"
					},
					{
						"name": "Panguipulli",
						"comuna_id": "14108"
					}
				]
			},
			{
				"name": "Ranco",
				"_id": "142",
				"comunas": [
					{
						"name": "La Unión",
						"comuna_id": "14201"
					},
					{
						"name": "Futrono",
						"comuna_id": "14202"
					},
					{
						"name": "Lago Ranco",
						"comuna_id": "14203"
					},
					{
						"name": "Río Bueno",
						"comuna_id": "14204"
					}
				]
			}
		]
	},
	{
		"name": "Arica y Parinacota",
		"_id": "15",
		"provincias": [
			{
				"name": "Arica",
				"_id": "151",
				"comunas": [
					{
						"name": "Arica",
						"comuna_id": "15101"
					},
					{
						"name": "Camarones",
						"comuna_id": "15102"
					}
				]
			},
			{
				"name": "Parinacota",
				"_id": "152",
				"comunas": [
					{
						"name": "Putre",
						"comuna_id": "15201"
					},
					{
						"name": "General Lagos",
						"comuna_id": "15202"
					}
				]
			}
		]
	}
]

if ( Regiones.find().count() == 0 ) {
	regiones.map( (region) => {
		Regiones.insert(region);
	});
}
