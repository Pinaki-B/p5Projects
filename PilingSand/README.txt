PilingSand - Pinaki Bhagavan
p5.js-based Sand Visual


EXPLANATION
A stream of particles (sand) is constantly falling from the user's cursor and forms into mini hills.
In order to control the position/display/logic of sand, the screen is indexed with a boolean table

SAND LOGIC
If a sand piece falls on top of another stationary sand piece, there are three options for its movement:
1. If bottom right and bottom left have sand, it stays still
2. If only one of the bottom spots is empty, it moves into the empty spot
3. If both bottom spots are empty, it randomly selects one to move into



TODO
Relies on 2D boolean array the size of the screen... - Very poor optimization
  - Maybe make it scale up so you have smaller boolean tables and bigger sand pieces
