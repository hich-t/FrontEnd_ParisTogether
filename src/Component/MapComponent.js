import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = (props) => {
  return (
    <div>
      <MapContainer
        className="markercluster-map"
        center={props.center}
        zoom={12}
        maxZoom={18}
      >

{props.event.map(e => e.fields.lat_lon && <Marker position={e.fields.lat_lon}>
          <Popup>
           {e.fields.title}
          </Popup>
        </Marker>)}
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
