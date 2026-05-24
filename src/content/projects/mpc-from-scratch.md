# MPC from Scratch

This project demonstrates a model predictive controller built with direct numerical methods, minimal dependencies, and a focus on reproducible behaviour.

## Approach

I implemented:

- a plant model in discrete time
- a quadratic cost function for setpoint tracking
- hard constraints on actuator movement
- a prediction horizon tuned for stability

## Results

The controller shows strong reference tracking across a range of disturbances and recovers gracefully from simulated process noise.
