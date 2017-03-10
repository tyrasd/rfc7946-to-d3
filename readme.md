rfc7946-to-d3
=============

Converts polygon winding order between [RFC7946 geojson](https://tools.ietf.org/html/rfc7946#section-3.1.6) and [D3](https://github.com/d3/d3-geo#d3-geo) [compatible](https://github.com/d3/d3-geo/pull/79) conventions.

![](https://travis-ci.org/tyrasd/rfc7946-to-d3.svg)

Why
---

D3 [assumes](https://github.com/d3/d3-geo#d3-geo) GeoJSON polygon coordinates to be sorted in a clockwise order, while rfc7946 GeoJSON assumes the **opposite** (counterclickwise or [right-hand-rule](https://en.wikipedia.org/wiki/Right-hand_rule) winding). This difference causes issues when for example calculating [bounding boxes](https://github.com/d3/d3-geo#geoBounds) or applying [projections](https://github.com/d3/d3-geo-projection#geoProject) on such polygons.

This module converts between the two convertions by simply reversing the order of all (multi)polygon linear rings of the given input.

Usage
-----

* as npm module

install:

    npm install --save rfc7946-to-d3

api:

A function that takes in rfc7946 geojson and spits out d3 compatible geojson (input is modified in place!).

* as cli utility

install:

    [sudo] npm install -g rfc7946-to-d3

use:

    rfc7946-to-d3 < rfc7946.geojson > d3.geojson

See also
--------

* [geojson-rewind](https://github.com/mapbox/geojson-rewind) a module that enforces geojson polygon ring winding order. (Useful when working with [legacy geojson](http://geojson.org/) data: e.g. `cat legacy.geojson | geojson-rewing | rfc7946-to-d3 | geoproject …`)
