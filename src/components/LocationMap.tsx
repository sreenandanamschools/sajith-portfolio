import React from "react";

interface LocationMapProps {
  lat?: number;
  lng?: number;
  placeName?: string;
}

export default function LocationMap({
  lat = 8.4984,
  lng = 76.9411,
  placeName = "Court Road, Vanchiyoor, Thiruvananthapuram, Kerala, 695035"
}: LocationMapProps) {
  // Bounding box calculation for the OSM embed
  const delta = 0.004;
  const minLng = lng - delta;
  const maxLng = lng + delta;
  const minLat = lat - delta / 2;
  const maxLat = lat + delta / 2;

  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${minLng}%2C${minLat}%2C${maxLng}%2C${maxLat}&layer=mapnik`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="w-full">
      <div className="w-full h-60 bg-[#F0F0EA] border border-[#DCDCD4] relative overflow-hidden mb-4 depth-shadow group">
        {/* Styled Map Embed */}
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src={embedUrl}
          className="w-full h-full grayscale sepia-[0.15] contrast-[1.05] brightness-[0.98] opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />

        {/* Dynamic Architectural Grid Overlay to preserve the aesthetic */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-grid"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Premium Pulsing Marker Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="w-3.5 h-3.5 bg-[#0F0F0F] rounded-full flex items-center justify-center shadow-lg">
            <span className="absolute w-8 h-8 border border-[#0F0F0F] rounded-full animate-ping opacity-75" />
          </div>
        </div>

        {/* Clickable Overlay Link */}
        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 bg-transparent cursor-pointer z-20 flex items-end justify-start p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "rgba(252, 252, 250, 0.2)" }}
        >
          <span className="bg-white border border-[#DCDCD4] text-[9px] font-semibold uppercase tracking-wider text-[#0F0F0F] px-2.5 py-1.5 shadow-sm">
            Open in Google Maps
          </span>
        </a>
      </div>
      <p className="text-[10px] text-[#5C5C56] font-light italic">
        Coordinates: {lat.toFixed(4)}° N, {lng.toFixed(4)}° E &bull; {placeName}
      </p>
    </div>
  );
}
