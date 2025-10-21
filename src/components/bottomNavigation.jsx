import { 
  faHome, 
  faBell, 
  faRoute, 
  faBars,
  faCompass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge  from "../ui/badge";
import { motion, AnimatePresence } from "framer-motion";



export default function BottomNavigation({ activeTab, alertCount, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: faHome },
    { id: 'explore', label: 'Explore', icon: faCompass },
    { id: 'alerts', label: 'Alerts', icon: faBell, badge: alertCount },
    { id: 'routes', label: 'Routes', icon: faRoute },
    { id: 'profile', label: 'Me', icon: faUser },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/80 z-50 safe-area-inset-bottom">
      <div className="flex items-center justify-around px-2 py-3 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 relative group ${
                isActive
                  ? 'text-blue-600 bg-blue-50/80 transform scale-105 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/50'
              }`}
            >
              <div className="relative">
                <FontAwesomeIcon 
                  icon={tab.icon} 
                  className={`text-lg transition-all duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
                {tab.badge && tab.badge > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 min-w-0 p-0 flex items-center justify-center text-xs bg-red-500 text-white rounded-full border-2 border-white shadow-sm">
                    {tab.badge > 9 ? '9+' : tab.badge}
                  </Badge>
                )}
              </div>
              <span className={`text-xs font-medium transition-all duration-300 ${
                isActive ? 'scale-105 font-semibold' : 'group-hover:font-medium'
              }`}>
                {tab.label}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div 
                  className="absolute -top-1 w-1 h-1 bg-blue-600 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}