export class Init {
    load() {
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log('No markers found');

            var markers = [
            { 
                label: 'Company 1',
                latitude: 52.678418,
                longitude: 7.809007,
                draggable: true
            },
            { 
                label: 'Company 2',
                latitude: 51.678418,
                longitude: 8.809007,
                draggable: true
            },
            { 
                label: 'Company 3',
                latitude: 53.678418,
                longitude: 9.809007,
                draggable: true
            },
            ];
    
            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log("Loading markers");
        }
    }
}