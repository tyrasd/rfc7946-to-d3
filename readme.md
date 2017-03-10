rfc7946-to-d3
=============

Converts polygon winding order from [rfc7946 geojson](https://tools.ietf.org/html/rfc7946#section-3.1.6) to [d3](https://github.com/d3/d3-geo#d3-geo) [compatible](https://github.com/d3/d3-geo/pull/79) convention (or vice versa).

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

* [geojson-rewind](https://github.com/mapbox/geojson-rewind) a module that enforces geojson polygon ring winding order. (Useful when working with [legacy geojson](http://geojson.org/) data: e.g. `cat legacy.geojson | geojson-rewing | rfc7946-to-d3 | geoproject …`)
