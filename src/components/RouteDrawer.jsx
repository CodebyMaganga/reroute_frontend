// src/components/RouteDrawer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  Chip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationArrow,
  faChartLine,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";

export function RouteDrawer({
  isOpen,
  route,
  alternatives = [],
  onStartNavigation,
  onSelectAlternative,
}) {
  if (!isOpen || !route) return null;

  const getTrafficColor = (level) => {
    switch (level) {
      case "low":
        return "success.main";
      case "medium":
        return "warning.main";
      case "high":
        return "error.main";
      default:
        return "grey.400";
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20 }}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          boxShadow: 6,
          p: 3,
          borderTop: "1px solid #e5e7eb",
        }}
      >
        {/* Main Route */}
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Fastest Route
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box display="flex" alignItems="center" gap={3}>
              <Box display="flex" alignItems="center" gap={1}>
                <FontAwesomeIcon icon={faClock} color="#1976d2" />
                <Typography>{route.duration}</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <FontAwesomeIcon icon={faLocationArrow} color="#555" />
                <Typography>{route.distance}</Typography>
              </Box>
            </Box>

            {route.trafficDelay && (
              <Chip
                label={`+${route.trafficDelay} delay`}
                color="warning"
                variant="outlined"
                icon={<FontAwesomeIcon icon={faTrafficLight} />}
              />
            )}
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 3,
              textTransform: "none",
              py: 1.5,
            }}
            onClick={onStartNavigation}
          >
            Start Navigation
          </Button>
        </Box>

        {/* Alternative Routes */}
        {alternatives.length > 0 && (
          <Box mt={3} pt={2} borderTop="1px solid #e5e7eb">
            <Typography variant="subtitle1" gutterBottom>
              Alternative Routes
            </Typography>

            <Box display="flex" flexDirection="column" gap={1}>
              {alternatives.map((alt) => (
                <Card
                  key={alt.id}
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "grey.50" },
                  }}
                  onClick={() => onSelectAlternative(alt.id)}
                >
                  <CardActionArea sx={{ p: 2 }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: getTrafficColor(alt.trafficLevel),
                          }}
                        />
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography variant="body2">{alt.duration}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            •
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {alt.distance}
                          </Typography>
                        </Box>
                      </Box>
                      <FontAwesomeIcon
                        icon={faChartLine}
                        style={{ color: "#9ca3af" }}
                      />
                    </Box>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </motion.div>
  );
}
