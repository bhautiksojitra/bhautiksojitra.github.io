---
title: OpenGL Real-Time Smoke 
description: Technical report on the implementation of Navier-Stokes equations, delivering fluid simulation 
---

## Background Information
In the Computer Graphics field, the simulation of fluids like smoke, fire, and water relies on solving a specific type of partial differential equation known as the Navier-Stokes Equation. For this project, my focus is on implementing smoke simulation with the idea of the same equation. This project is implemented using the concept presented in a thesis paper by Eren Algan about Real-Time Smoke Simulation [1]. The crux of my implementation revolves around computing mathematical expressions on the CPU and subsequently storing them within a texture buffer. These textured buffer with the computed data is transferred to the GPU for rendering. This process includes the execution of nested loops on the CPU for each frame, which results in performance degradation for larger simulations. Hence, it is important to explore alternative methods involving GPU, which I will also discuss in this report.

## Overview of Navier Stokes Equation  
The Navier-Stokes equations are fundamental equations in fluid dynamics, that describe the motion of fluid substances. They include the conservation of momentum and mass for a fluid medium, using factors like viscosity and diffusion. Overall, these equations are useful in determining how the velocity and density of each particle in a fluid would behave over time. In terms of smoke simulation, solving these equations numerically would allow us to simulate the flow, diffusion, and advection of smoke particles in space. 

## GitHub Source Link and Visuals

* <a target="_blank" href="https://github.com/bhautiksojitra/smoke-sim"> GitHub Link </a>
  
  ![GIF](/assets/smoke-post-images/output.gif)
  _For more visuals, checkout GitHub readme_ 





## Implementation Details 
For the implementation, I have used the discretization approach, defining a 2D grid with a finite number of cells in it. Each cell behaves as a particle of the smoke, holding velocity in both directions as well as density (intensity in one cell). After defining the grid, the simulation of the grid proceeds through time steps. At each time stamp, the values of smoke properties are updated based on the discretized equations and the current state of the simulation. Solving the discretized numerical equations typically involves iterative methods, computing changes in fluid properties such as velocity and density over each time stamp, while considering factors such as viscosity, diffusion coefficient, and external forces.

### Defining 2D Grid
In the process of defining a 2D grid to represent smoke particles, I encountered two approaches, where one is more efficient than another.

#### Grid Representation with Rectangles 
In this approach, a rectangle geometry is used to define a grid cell, serving as a discrete smoke particle. This approach is conceptually straightforward but, it has significant computational overhead during rendering because, each rectangle in a grid would require an individual draw call, resulting in hundreds of draw calls per frame. For example, if the grid size is 100 x 100, then the number of rectangles in the grid is 10000, hence the number of draw calls per frame is also 10000. The number of draw calls is directly proportional to the communication overhead between the CPU and the GPU. Therefore, for larger and more complex simulations, this approach would have been ineffective.

#### Grid Representation using Texture Buffers 
Alternatively, I have used a texture buffer to represent the grid of smoke particles. With this approach, the grid is encoded as a texture array and transferred to the GPU for rendering. This texture array can be applied to any geometry. In my implementation, I have applied the texture array to a window-sized rectangle. This approach only requires one rectangle to be drawn hence the number of draw calls is reduced to only one. When initializing a texture buffer, I used the GL_LINEAR flag for interpolating color values to have a smooth display of smoke.

### Components of Navier Stokes Equation
To effectively solve the components of the Navier-Stokes equation for simulating fluid behavior, several steps are involved.

#### External Force 
In the simulation, each grid cell possesses a velocity vector in both directions and a density value representing color intensity. Initially, these values are set to zero. The user can apply external forces to specific grid cells by interacting with the simulation through mouse clicks. These forces update the velocity vector and density field of the affected grid cells, initiating the smoke simulation.

#### Numerical Solvers of Velocity and Density

*Diffusion*: Initially, the velocity vector undergoes a diffusion step, with incorporating viscosity effects. The user can adjust the viscosity coefficient. By using this coefficient and the timestamp, the solver calculates the gradual spread of velocity vectors among neighboring cells. This process involves computing interpolated values from neighboring cells at the previous timestamp.
*Projection*: After diffusion, a projection step is applied to ensure the divergence-free nature of the velocity field. This step corrects any divergence that may have arisen during the diffusion process.
*Advection*: Lastly, the advection of the velocity is carried out using a semi-Lagrangian scheme [1]. This step simulates the transport of velocity vectors by using interpolated vectors from neighboring cells at previous timestamps. Similar diffusion steps are also applied to the density field.

By sequentially applying these numerical solvers, the simulation accurately reproduces smoke-like behavior, incorporating the effects of viscosity, ensuring divergence-free velocity fields, and simulating the transport of velocity vectors and density values.

#### Boundary Hits
The simulation operates within the bounds of a finite grid of cells, which requires the consideration of edges to accurately replicate real smoke effects. When the smoke hits the boundaries or corners of enclosed geometries, it must rebound to prevent volume leakage. In my implementation, upon updating the velocity and density fields, a boundary check function is executed to prevent values from exceeding grid bounds. If the boundaries are breached, the velocity vector values are negated to apply a bouncing effect, thereby maintaining the integrity of the simulation within the grid boundaries.

#### Obstacle Hits
As an additional feature in my smoke simulation, I have integrated obstacles to illustrate the change in flow dynamics upon collision. Implementing obstacle collision detection includes checking both the edges and corners of the obstacles. If the collision occurs, the velocity vectors of the affected cells are inverted (negated). This approach is similar to the bouncing effect implemented for boundaries. Specifically, I have only introduced a rectangular geometry as an obstacle within the simulation.

### Alternative Approach
Another viable approach involves transferring all calculations to the GPU. The GPU is optimized for parallel processing, which offers significant advantages over the CPU implementation.

#### Findings of GPU Implementation
Implementing on the GPU involves migrating all mathematical solving functions to the GPU via shader files, particularly the fragment shader. Regarding the data structure, the 2D grid (similar to the CPU implementation) can be utilized to represent each particle of the smoke. Furthermore, the texture buffer objects can be used to store the grid for rendering.
One challenge with this method is that shader files typically work in isolation. This means they are unable to share information with the application code. In our scenario, we require data from previous timestamps to help with the current timestamp. Thus, we need to retrieve GPU calculation results back to the application code. To explain this issue further, I will provide an overview of the OpenGL pipeline and frame buffer objects (FBOs).

#### OpenGL Pipeline and Frame Buffer Objects
From the course, we already understand how the OpenGL pipeline works till the fragment shader. Now, we will see what happens after the fragment shader. The output of the fragment shader in the OpenGL pipeline is copied to the default FBO (Frame Buffer Object), which is then used for rendering the screen. However, this default FBO lacks a feedback system, which results in the output of the fragment shader being discarded after the rendering of one frame is done. As mentioned earlier, we require this content of the default FBO as an input to the next execution of the OpenGL pipeline, which is not possible with default FBOs.

#### User-Defined FBOs
To address this, we must define user-controlled frame buffer objects within the application code. User-defined FBOs offer the advantage of accessing results from the OpenGL pipeline, unlike default FBOs. This resolves our issue as the output of user-defined FBOs can be utilized as an input for the subsequent frame. It is important to note that user-defined FBOs cannot be used for rendering, so a method to switch back to default FBOs for rendering purposes is necessary.

Thanks for reading! 

### References & Acknowledgements 

* [1] 	E. Algan, “REAL-TIME SMOKE SIMULATION,” 2010. Accessed: Apr. 16, 2024. [Online]. Available: https://core.ac.uk/download/pdf/52926036.pdf
* [2] 	“mikeash.com: Fluid Simulation for Dummies,” mikeash.com. https://mikeash.com/pyblog/fluid-simulation-for-dummies.html
* [3] 	“Chapter 38. Fast Fluid Dynamics Simulation on the GPU,” NVIDIA Developer. https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu (accessed Apr. 16, 2024).

*I would also like to acknowledge that this project was conducted as part of the Computer Graphics 2 course during my undergraduate studies at the University of Manitoba.* 




