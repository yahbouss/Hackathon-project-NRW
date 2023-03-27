let db = {
    'parts': [
        {
            'id': 0,
            'model': 'Bolt',
            'modelType': "M40",
            'unitWeight': 4,
        },
        {
            'id': 1,
            'model': 'part2',
            'modelType': 'M32',
            'unitWeight': 4,
        },
        {
            'id': 2,
            'model': 'part3',
            'modelType': 'M40',
            'unitWeight': 4,
        },
    ],
    'bucket': [
        {
            'rfid_id': "B1 B2 B3",
            'station_id': 1068,
            'capacity': 100,
            'part_id': 2,
            'weight_study': {
                'quantity': [],
                'average_time_for_refill': []
            },
        },
        {
            'rfid_id': "B1 B2 B3",
            'station_id': 1069,
            'capacity': 100,
            'part_id': 1,
            'weight_study': {
                'quantity': [],
                'average_time_for_refill': []
            },
        },
    ]
}

module.exports = db 