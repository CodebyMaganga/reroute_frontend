// src/components/FloatingControls.jsx
import React from "react";
import { motion } from "framer-motion";
import { Fab } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faLocationArrow,
  faBars,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";

export function FloatingControls({
  showTraffic,
  onToggleTraffic,
  onRecenter,
  onMenuOpen,
}) {
  return (
    <div className="absolute bottom-32 right-4 z-10 flex flex-col gap-3">
      {/* Traffic Toggle */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Fab
          size="medium"
          color={showTraffic ? "primary" : "default"}
          onClick={onToggleTraffic}
          sx={{
            backgroundColor: showTraffic ? "#1976d2" : "white",
            color: showTraffic ? "white" : "#555",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <FontAwesomeIcon icon={faTrafficLight} />
        </Fab>
      </motion.div>

      {/* Compass */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Fab
          size="medium"
          sx={{
            backgroundColor: "white",
            color: "#555",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <FontAwesomeIcon icon={faCompass} />
        </Fab>
      </motion.div>

      {/* My Location */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Fab
          size="medium"
          onClick={onRecenter}
          sx={{
            backgroundColor: "white",
            color: "#1976d2",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <FontAwesomeIcon icon={faLocationArrow} />
        </Fab>
      </motion.div>

      {/* Menu */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Fab
          size="medium"
          onClick={onMenuOpen}
          sx={{
            backgroundColor: "white",
            color: "#555",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </Fab>
      </motion.div>
    </div>
  );
}
