const cityOverrides = {
	'Annapolis, United States Naval Academy': 'Annapolis',
	'Baltimore / Martin': 'Middle River',
	'Baltimore-Washington': 'Balt/Wash Intl Airport',
	'Baltimore-Wash': 'BWI Airport',
	'Baltimore, Baltimore-Washington International Airport': 'BWI Airport',
	'Camp Springs / Andrews Air Force Base': 'Andrews AFB',
	'Carroll County Regional Jack B Poage Field': 'Westminster',
	'College Park Airport': 'College Park',
	'Fort Meade / Tipton': 'Laurel',
	'Frederick Municipal Airport': 'Fredrick',
	'Gaithersburg - Montgomery County Airport': 'Gaithersburg',
	'Patuxent River, Naval Air Station': 'Patuxent River',
	'Stafford, Stafford Regional Airport': 'Stafford',
	'Washington/Reagan National Airport, DC': 'Washington DC',
	'Washington D': 'Washington',
};

const removeCities = [
	'New Haven',
	'Mansfield ',
];

const addStations = [
	'KMDT',
	'KSBY',
];

const offsets = {
	KMDT: [-20, 0],
	KSBY: [10, 10],
};

const latestObs = [
	'KBWI',
	'KCGS', // College Park
	'KDCA',
	'KGAI', // Gaithersburg
	'KFME',
	'KNAK',
	'KMTN',
];

export default {
	cityOverrides,
	removeCities,
	addStations,
	offsets,
	latestObs,
};
