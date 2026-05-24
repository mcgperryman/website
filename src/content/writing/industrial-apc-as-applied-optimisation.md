# Industrial MPC as Applied Optimisation

Model predictive control is a modern control paradigm built around optimisation. In this essay, I walk through the practical constraints and decision logic that make MPC suitable for industrial process control.

## From first principles to deployment

Industrial MPC starts with a model of the plant, a prediction horizon, and an objective. The controller repeatedly solves a constrained optimisation problem to compute a sequence of control moves that best follow a setpoint while respecting safety, equipment, and process limits.

## Common implementation patterns

- Establish a linear or nonlinear process model tuned from historical data.
- Choose prediction and control horizons to balance responsiveness and robustness.
- Add inequality constraints for manipulated variables, rates, and outputs.
- Use a quadratic objective for energy-efficient regulation.

## Practicalities

The practical value of MPC comes from the way it unifies control objectives and constraints into a single optimisation problem. Even simple industrial controllers can gain improved disturbance rejection and lower offset by replacing heuristic loop tuning with a predictive formulation.
