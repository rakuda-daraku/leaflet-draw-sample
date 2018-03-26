import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Draw from 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import './css/map.css'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet-draw/dist/images/spritesheet.svg'

const mieruneTile = L.tileLayer('https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png', {
  attribution: '"Maptiles by <a href=\'http://mierune.co.jp/\' target=\'_blank\'>MIERUNE</a>, under CC BY. Data by <a href=\'http://osm.org/copyright\' target=\'_blank\'>OpenStreetMap</a> contributors, under ODbL."'
});

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl
});

const map = L.map('map', {
  center: [43.067, 141.35],
  zoom: 14,
  layers: [mieruneTile]
});

let drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems
  }
});

map.addControl(drawControl);
