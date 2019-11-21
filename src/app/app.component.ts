import { MarkersService } from './markers.service';
import { Marker } from '@agm/core/services/google-maps-types';
import { Component } from '@angular/core';
import { AgmMarker } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MapIt';

  zoom: number = 7;
  lat: number = 51.678418;
  lng: number = 7.809007;

  markerLabel: string;
  markerLatitude: string;
  markerLongitude: string;
  markerDraggable: string;

  markers: marker[];

  constructor(private service: MarkersService) {
    this.markers = this.service.getMarkers();
  }

  clickedMarker(marker: marker, index: number) {
    console.log("Clicked marker" + marker.label + " at index " + index);
  }

  mapClicked($event: any) {
    var newMarker: marker = {
      label: 'Untitled',
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
    this.service.addMarker(newMarker);
  }

  markerDragEnd(marker: any, $event: any) {
    console.log("Drag End ", marker, $event);

    var updMarker = {
      label: marker.label,
      latitude: parseFloat(marker.latitude),
      longitude: parseFloat(marker.longitude),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
    this.service.updateMarker(updMarker, newLat, newLng);
  }

  addMarker() {
    console.log('Adding marker');
    if(this.markerDraggable === 'yes') {
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }

    var newMarker = {
      label: this.markerLabel,
      latitude: parseFloat(this.markerLatitude),
      longitude: parseFloat(this.markerLongitude),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
    this.service.addMarker(newMarker);
  }

  removeMarker(marker) {
    console.log('Removing marker');

    for(var i = 0; i < this.markers.length; i++) {
      if(this.markers[i].latitude == marker.latitude &&
        this.markers[i].longitude == marker.longitude) this.markers.splice(i, 1);
    }

    this.service.removeMarker(marker);
  }

}

interface marker {
    label?:string;
    latitude:number;
    longitude:number;
    draggable:boolean;
}



  
