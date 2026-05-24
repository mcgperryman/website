# DMC Step Response Controller

A discrete model control implementation based on step response characterization and disturbance rejection.

## System design

The controller uses step response coefficients to build a predictive model that estimates future outputs. This simplification allows fast implementation while still supporting constraints.

## Tuning

Tuning emphasizes disturbance rejection and stable response to step changes in setpoint. The controller is validated through simulation using classical performance metrics.
