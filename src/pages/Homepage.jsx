import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  faClock, 
  faTriangleExclamation, 
  faLocationArrow, 
  faExchangeAlt, 
  faSearch, 
  faXmark ,
  faLocationPin,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomInput from "../ui/input";
import { MapView } from "../components/MapView";
import { FloatingControls } from "../components/FloatingControls";
import { RouteDrawer } from "../components/RouteDrawer";
import BottomNavigation  from "../components/bottomNavigation";
import CustomButton from "../ui/button";
import CustomLabel from "../ui/label";

export default function HomePage({
  routes = [],
  hasActiveAlerts = false,
  alertCount = 0,
  onNavigateToAlerts = () => {},
  onNavigateToRoutes = () => {},
  onNavigateToMore = () => {},
  onStartNavigation = () => {},
}) {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [showTraffic, setShowTraffic] = useState(true);
  const [hasRoute, setHasRoute] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(null);
  const [alternativeRoutes, setAlternativeRoutes] = useState([]);
  
  // Define all required states
  const [activeTab, setActiveTab] = useState('home');
  const [localAlertCount, setLocalAlertCount] = useState(alertCount);

  // Mock data
  const mockRoute = {
    duration: "24 min",
    distance: "12.3 km",
    trafficDelay: "3 min",
  };

  const alternativeRoutesData = [
    { id: "1", duration: "28 min", distance: "14.1 km", trafficLevel: "medium" },
    { id: "2", duration: "32 min", distance: "11.8 km", trafficLevel: "low" },
  ];

  const nextRoute = routes.find((r) => r.isActive);

  // Handle tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'alerts':
        onNavigateToAlerts();
        break;
      case 'routes':
        onNavigateToRoutes();
        break;
      case 'more':
        onNavigateToMore();
        break;
      case 'home':
      default:
        // Stay on home page - no action needed
        break;
    }
  };

  const handleSwap = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleCurrentLocation = () => {
    setFromLocation("Current Location");
  };

  const handleClearSearch = () => {
    setFromLocation("");
    setToLocation("");
    setIsSearchFocused(false);
    setHasRoute(false);
    setShowQuickActions(true);
  };

  // Update local alert count when prop changes
  useEffect(() => {
    setLocalAlertCount(alertCount);
  }, [alertCount]);

  useEffect(() => {
    if (toLocation && toLocation.length > 2) {
      setHasRoute(true);
      setShowQuickActions(false);
    } else {
      setHasRoute(false);
      setShowQuickActions(true);
    }
  }, [toLocation]);

  return (
    <div className="relative w-full h-screen bg-gray-50 safe-area-inset-bottom">
      {/* Map */}
      <div className="absolute inset-0 pb-20">
        <MapView
          showTraffic={showTraffic}
          currentRoute={hasRoute ? mockRoute : null}
          isTracking={false}
        />
      </div>

      {/* Search Section */}
      <div className={`absolute w-[95%] top-6 left-4 right-4 z-20 transition-all duration-300 ${
        isSearchFocused ? 'top-4' : 'top-6'
      }`}>
        <motion.div 
          className="p-4 rounded-2xl border border-gray-200/80 backdrop-blur-lg shadow-xl"
          style={{
            background: isSearchFocused 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(255, 255, 255, 0.85)'
          }}
          layout
        >
          <div className="flex items-center justify-between mb-2">

            {isSearchFocused && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={handleClearSearch}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} className="text-gray-600 text-sm" />
              </motion.button>
            )}
          </div>

          <div className="space-y-3">
            {/* From Input */}
            <div className="relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faLocationPin} className="text-red-600" />
              </div>
              <CustomInput
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Current location"
                className="pl-10 pr-4 py-3 bg-white/50 border-gray-200 focus:bg-white focus:border-blue-500 transition-all"
                color='black'
                label='Current Location'
              />
            </div>

            {/* To Input */}
            <div className="relative">
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faLocationArrow} className="text-green-600" />
              </div>
              <CustomInput
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Where to?"
                className="pl-10 pr-4 py-3 bg-white/50 border-gray-200 focus:bg-white focus:border-blue-500 transition-all"
                color='black'
                label='Where to?'
              />
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            className="flex gap-2 mt-4"
            initial={false}
            animate={{ 
              opacity: isSearchFocused || fromLocation || toLocation ? 1 : 0.8 
            }}
          >
           
            
            <CustomButton
              label='Go'
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              Go
            </CustomButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Alerts */}
      {hasActiveAlerts && showQuickActions && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-75 left-4 right-4 z-80 w-[95%]"
        >
          <div
            className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/40 rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            onClick={onNavigateToAlerts}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl shadow-lg">
                <FontAwesomeIcon icon={faTriangleExclamation} className="text-white text-sm" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-gray-900">Traffic Alert</p>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    {localAlertCount}
                  </span>
                </div>
                <p className="text-xs text-gray-700">Heavy traffic on your usual routes</p>
              </div>
              <CustomButton
                size="sm"
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25"
                label='View'
                color='#DD7D02'
              >
                View
              </CustomButton>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      {showQuickActions && routes.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-8 left-4 right-4 z-10"
        >
          <div className=" p-6 bg-neutral-50 h-90 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-200/80 overflow-y-scroll w-[98%]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Quick Start</h3>
              
            </div>

            {nextRoute ? (
              <>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 mb-3 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-lg">
                      <FontAwesomeIcon icon={faClock} className="text-white text-sm" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">{nextRoute.name}</p>
                      <p className="text-xs text-gray-600">
                        {nextRoute.from} → {nextRoute.to}
                      </p>
                    </div>
                  </div>
                  <CustomButton
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25"
                    onClick={() => onStartNavigation(nextRoute.id)}
                  >
                    <FontAwesomeIcon icon={faLocationArrow} className="mr-2" />
                    Start Navigation
                  </CustomButton>
                </div>

                {routes
                  .filter((r) => r.id !== nextRoute.id)
                  .slice(0, 2)
                  .map((route) => (
                    <div
                      key={route.id}
                      className="p-3 mb-2 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100 rounded-lg"
                      onClick={() => onStartNavigation(route.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{route.name}</p>
                          <p className="text-xs text-gray-600">
                            {route.from} → {route.to}
                          </p>
                        </div>
                        <FontAwesomeIcon
                          icon={faLocationArrow}
                          className="text-gray-400"
                        />
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-gray-600 mb-3">
                  Add your first route to get started
                </p>
                <CustomButton variant="outlined" fullWidth onClick={onNavigateToRoutes}>
                  Add Route
                </CustomButton>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Floating Controls */}
      <FloatingControls
        showTraffic={showTraffic}
        onToggleTraffic={() => setShowTraffic(!showTraffic)}
        onRecenter={() => {}}
        onMenuOpen={onNavigateToRoutes}
      />

      {/* Route Drawer */}
      {hasRoute && (
        <RouteDrawer
          isOpen={hasRoute}
          route={mockRoute}
          alternatives={alternativeRoutesData}
          onStartNavigation={() => onStartNavigation()}
          onSelectAlternative={() => {}}
        />
      )}

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        alertCount={localAlertCount}
        onTabChange={handleTabChange}
      />
    </div>
  );
}