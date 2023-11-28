const decoder = {
  "pricing_decoder_result": {
    "id": "d69b81ac-ca08-4778-95e0-959eb4f969ab",
    "fipe": [
        {
            "code": "003408-8",
            "value": "R$\u00a042.057,00",
            "brand_model": "Ford Ka 1.0 SE\/SE Plus TiVCT Flex 5p",
            "priceHistory": [
                {
                    "month": "2023-10",
                    "value": "R$\u00a042.313,00"
                },
                {
                    "month": "2023-09",
                    "value": "R$\u00a042.370,00"
                },
                {
                    "month": "2023-08",
                    "value": "R$\u00a042.910,00"
                },
                {
                    "month": "2023-07",
                    "value": "R$\u00a043.207,00"
                },
                {
                    "month": "2023-06",
                    "value": "R$\u00a043.516,00"
                },
                {
                    "month": "2023-05",
                    "value": "R$\u00a044.203,00"
                },
                {
                    "month": "2023-04",
                    "value": "R$\u00a043.813,00"
                },
                {
                    "month": "2023-03",
                    "value": "R$\u00a044.001,00"
                },
                {
                    "month": "2023-02",
                    "value": "R$\u00a044.930,00"
                },
                {
                    "month": "2023-01",
                    "value": "R$\u00a045.156,00"
                },
                {
                    "month": "2022-12",
                    "value": "R$\u00a044.248,00"
                },
                {
                    "month": "2022-11",
                    "value": "R$\u00a045.210,00"
                }
            ]
        }
    ],
    "molicar": [
        {
            "code": "01615461-7",
            "value": "R$\u00a041.220,00",
            "description": "FORD\/KA SE 1.0 12V, 2017, Basico, Hatchback Compacto, BRA, 05, 4, Eta.\/Gas., Mec\u00e2nico"
        },
        {
            "code": "01615462-9",
            "value": "R$\u00a041.750,00",
            "description": "FORD\/KA SE PLUS 1.0 12V, 2017, Basico, Hatchback Compacto, BRA, 05, 4, Eta.\/Gas., Mec\u00e2nico"
        },
        {
            "code": "01615475-7",
            "value": "R$\u00a042.457,00",
            "description": "FORD\/KA SE 1.0 12V, 2017, Completo, Hatchback Compacto, BRA, 05, 4, Eta.\/Gas., Mec\u00e2nico"
        },
        {
            "code": "01615476-9",
            "value": "R$\u00a043.002,00",
            "description": "FORD\/KA SE PLUS 1.0 12V, 2017, Completo, Hatchback Compacto, BRA, 05, 4, Eta.\/Gas., Mec\u00e2nico"
        },
        {
            "code": "01615474-5",
            "value": "R$\u00a038.259,00",
            "description": "FORD\/KA S 1.0 12V, 2016, Completo, Hatchback Compacto, BRA, 05, 4, Eta.\/Gas., Mec\u00e2nico"
        }
    ],
  }
};

const ctx = document.getElementById('fipeChart');

function getDate (month) {
	switch (month) {
		case 1:
			return 'Janeiro';
		case 2:
			return 'Fevereiro';
		case 3:
			return 'Março';
		case 4:
			return 'Abril';
		case 5:
			return 'Maio';
		case 6:
			return 'Junho';
		case 7:
			return 'Julho';
		case 8:
			return 'Agosto';
		case 9:
			return 'Setembro';
		case 10:
			return 'Outubro';
		case 11:
			return 'Novembro';
		case 12:
			return 'Dezembro';
	}
}

function getReport() {
	decoderResult = decoder.pricing_decoder_result

	const fipeValue = decoderResult.fipe[0].priceHistory;

	const fipe = [];

	for(i=0; i <= 5; i++) {
		fipe.push(fipeValue[i]);
	}

	const orderedFipe = fipe.reverse();

	const fipeValues = orderedFipe.map(item => parseFloat(item.value.replace('R$ ', '')));

	const fipeLabels = orderedFipe.map(item => {
		return getDate(parseFloat(item.month.replace('2023-', '')));
	}
);

	console.log(fipeLabels);

	const fipeChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: fipeLabels,
			datasets: [{
				label: 'Fipe',
				data: fipeValues,
				backgroundColor: '#FF4F4F',                 
			}],
		},
		options: {
			scales: {
				y: {
					beginAtZero: false
				}
			}
		}
	});
}

getReport();