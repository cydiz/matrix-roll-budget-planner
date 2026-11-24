# Matrix roll budget planner
Compare the probability of rolling at least one Matrix in two hypothetical Parasite Simulator sessions. Free to use offline, without an account, subscriptions, game credentials or network requests.

## Try two plans
Open index.html in a browser. Enter 6932 rolls for A and 23025 for B. Read the chance for each budget, then select Download comparison CSV. Reversing the inputs reverses the sign of B minus A. Matching inputs produce a tie.

With Node installed, run `node cli.js 6932 23025` in this directory. Alternatively, run `npm install --prefix ./trial ./matrix-roll-budget-planner-1.0.0.tgz` with the distributed tarball and execute `./trial/node_modules/.bin/matrix-roll-plan 6932 23025`. Two whitespace-separated counts on stdin work too. Errors go to stderr with exit code 2.

## How to interpret a result
Each roll independently misses with probability 0.9999. A run of n rolls misses every time with probability 0.9999^n. Subtract this from one to get the chance of at least one hit. The output reports percentages and a difference in percentage points. Zero rolls means zero chance; each plan accepts up to ten million whole rolls. Very small miss chances can round to zero in the output. Higher is determined from the counts before rounding.

This is a fan planning model. It assumes fixed odds, without luck modifiers, pity, changing game versions or access to your account. It cannot predict a specific roll. See the [Parasite Simulator odds guide](https://parasitesimulator.org/matrix-odds) for product context.

The MIT license applies to this original planner. No game assets or main-site source are included.
