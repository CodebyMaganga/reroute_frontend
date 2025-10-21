import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_TOKEN;

export function MapView({ showTraffic, currentRoute, isTracking }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const geoControlRef = useRef(null);

  useEffect(() => {
    if (map.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: showTraffic
        ? "mapbox://styles/mapbox/navigation-night-v1"
        : "mapbox://styles/mapbox/streets-v12",
      center: [36.8219, -1.2921],
      zoom: 12,
      pitch: 45, // Add some perspective
      bearing: -20, // Slight rotation for better visual
      antialias: true, // Better rendering
    });

    // Add custom styling to controls
    map.current.on("load", () => {
      console.log("Map loaded successfully");
      
      // Add zoom and rotation controls with custom styling
      const navControl = new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      });
      map.current.addControl(navControl);

      // Add geolocate button with custom styling
      const geoControl = new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
        showUserHeading: true,
        showAccuracyCircle: true,
        fitBoundsOptions: { maxZoom: 15 },
      });
      map.current.addControl(geoControl);
      geoControlRef.current = geoControl;

      // Style the controls
      setTimeout(() => {
        const controls = document.querySelectorAll('.mapboxgl-ctrl');
        controls.forEach(control => {
          control.style.margin = '12px';
          control.style.borderRadius = '12px';
          control.style.overflow = 'hidden';
          control.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
      }, 100);

      if (currentRoute) {
        addRouteToMap();
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Toggle traffic style
  useEffect(() => {
    if (!map.current) return;
    
    const style = showTraffic
      ? "mapbox://styles/mapbox/navigation-night-v1"
      : "mapbox://styles/mapbox/streets-v12";
    
    map.current.setStyle(style);
    
    map.current.once("style.load", () => {
      if (currentRoute) {
        addRouteToMap();
      }
    });
  }, [showTraffic]);

  // Toggle tracking
  useEffect(() => {
    if (!map.current || !geoControlRef.current || !isTracking) return;
    
    geoControlRef.current.trigger();
  }, [isTracking]);

  // Add/update route
  useEffect(() => {
    if (!map.current || !currentRoute) return;
    
    addRouteToMap();
  }, [currentRoute]);

  const addRouteToMap = () => {
    if (!map.current) return;

    const mockRoute = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [36.8219, -1.2921],
              [36.8941, -1.3004],
            ],
          },
        },
      ],
    };

    // Remove existing route
    if (map.current.getLayer("route")) {
      map.current.removeLayer("route");
    }
    if (map.current.getSource("route")) {
      map.current.removeSource("route");
    }

    // Add new route with better styling
    map.current.addSource("route", { 
      type: "geojson", 
      data: mockRoute 
    });
    
    map.current.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: { 
        "line-join": "round", 
        "line-cap": "round" 
      },
      paint: {
        "line-color": "#2563eb",
        "line-width": 6,
        "line-opacity": 0.9,
        "line-gradient": [
          'interpolate',
          ['linear'],
          ['line-progress'],
          0, "#3b82f6",
          1, "#1d4ed8"
        ],
      },
    });

    // Add route glow effect
    map.current.addLayer({
      id: "route-glow",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#60a5fa",
        "line-width": 12,
        "line-opacity": 0.3,
        "line-blur": 5,
      },
    });
  };

  return (
    <div
      ref={mapContainer}
      className="absolute inset-0 rounded-none shadow-inner"
      style={{ width: "100%", height: "100%" }}
    />
  );
}