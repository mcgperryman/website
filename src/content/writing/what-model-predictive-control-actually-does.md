# What Model Predictive Control Actually Does

MPC is often described as a black box, but its core behaviour is surprisingly simple: it predicts the future and optimises a control trajectory.

## Prediction

The controller uses a model to forecast outputs over a horizon. It assumes a sequence of future inputs and simulates the resulting plant behaviour.

## Optimisation

Given the forecast, the controller evaluates candidate input trajectories and selects the one that minimises a tracking objective while respecting constraints.

## Feedback

Only the first control action is applied before the loop repeats. The optimisation is recomputed at every sample, which allows MPC to correct for model mismatch and disturbances.
