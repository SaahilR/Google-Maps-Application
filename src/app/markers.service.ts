import { Injectable } from '@angular/core';
import { Init } from './init-markers';

@Injectable({
  providedIn: 'root'
})
export class MarkersService extends Init {

  constructor() { 
    super();

    console.log('Marker service has been initialized');
    this.load();
  }

  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));

    return markers;
  }

  addMarker(newMarker) {
    var markers = JSON.parse(localStorage.getItem('markers')); 
    markers.push(newMarker);

    localStorage.setItem('markers', JSON.stringify(markers));
  }

  updateMarker(updMarker, newLat, newLng) {
    var markers = JSON.parse(localStorage.getItem('markers')); 

    for(var i = 0; i < markers.length; i++) {
      if(updMarker.latitude == markers[i].latitude &&
        updMarker.longitude == markers[i].longitude) {
          markers[i].latitude = newLat;
          markers[i].longitude = newLng;
        }
    }

    localStorage.setItem('markers', JSON.stringify(markers));
  }

  removeMarker(marker) {
    var markers = JSON.parse(localStorage.getItem('markers')); 

    for(var i = 0; i < markers.length; i++) {
      if(marker.latitude == markers[i].latitude &&
        marker.longitude == markers[i].longitude) {
          markers.splice(i, 1);
        }
    }

    localStorage.setItem('markers', JSON.stringify(markers));
  }
}
