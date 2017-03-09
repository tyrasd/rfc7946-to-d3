rfc7946-to-d3
=============

Converts [rfc7946 geojson](https://tools.ietf.org/html/rfc7946#section-3.1.6) polygons to [d3 compatible](https://github.com/d3/d3-geo#d3-geo) ones: d3 requires clockwise winding order whereas rfc7946 specifies the opposite. See also https://github.com/d3/d3-geo/pull/79.

![](https://travis-ci.org/tyrasd/rfc7946-to-d3.svg)

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

* [geojson-rewind](https://github.com/mapbox/geojson-rewind) a module that enforces geojson polygon ring winding order.
