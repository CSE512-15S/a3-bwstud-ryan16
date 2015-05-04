a3-ryan16-bwstud
===============

## Team Members

1. Ryan Russel ryan16@uw.edu
2. Brian Studwell bwstud@uw.edu

## Project Name

#####_Orbital Resonance in the Moon's of Saturn_


## Running Instructions

To run locally:


clone the repo to your machine
 
```
git clone https://github.com/CSE512-15S/a3-bwstud-ryan16.git
```

Run a webserver from the root directory.

```	
python -m SimpleHTTPServer
```

Navigate to the corresponding port in a web browser.

```
http://localhost:8000/
```

## Story Board

[intro](https://www.dropbox.com/s/gaojikna2hvb37q/IMAG0272.jpg?dl=0)


[interaction](https://www.dropbox.com/s/vyqsgmw13x06ckt/IMAG0273.jpg?dl=0)

[toggle modes](https://www.dropbox.com/s/cfb0pmqgw3bz35w/IMAG0274.jpg?dl=0)


### Changes between Storyboard and the Final Implementation

Our original concept was to use tone frequencies to represent orbital resonances. Orbital resonances occur in celestial mechanics when two bodies have a periodic gravitational influence on one another. It's common to find that these relationships can be expressed as a ratio of two small integers (e.g. Pluto and Neptune exhibit a 2:3 relationship). If considered in musical terms, these ratios could be expressed as wavelengths, and as meters, providing for harmonic/dissonant and rythmic patterns. Unfortunately, some real life resonances, such as the 7:6 resonance between Mimas and the G ring, are virtually indistinguishable from noise. It would not be a one-to-one mapping, so not very useful for conveying the data. (It could still be a cool art project, however).

We were unable to achieve many of the desired effects. Constructing the visualization proved challenging, and we were forced to narrow the scope of our project several times, from a starting point of the solar system down to just the moons and rings of Saturn. Even then, the structures are complex. We could not include a waveform representation of the orbital periods, instead encoding their relationship as relative speeds via animation. Additional details are available when the user hovers over objects, but we were unable to include a comparison action.


## Development Process

The work was divided between myself and Ryan according to our abilities. We both participated in research, exploring a variety of NASA, ESA and other data sets. After selecting a direction, I explored interaction and layout through sketches, while Ryan began developing a D3 prototype. I attempted to help program the visualization, but the majority of the credit belongs to Ryan.

We spent somewhere between 25-30 hours each working on this assignment, spanning research, ideation, sketching, in-person meetings and remote work. What took the most time would probably depend on who you asked. My attempts to code portions of the visualization were the most painstaking, but I spent more hours researching and exploring different designs. Ryan did a great deal of research and spent much of his time coding.

