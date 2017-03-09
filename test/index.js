var rfc7946tod3 = require('../'),
    fs = require('fs'),
    test = require('tap').test;

function f(_) {
    return JSON.parse(fs.readFileSync(_, 'utf8'));
}

function fixture(t, name, title) {
    var result = rfc7946tod3(f(name));
    var outputName = name.replace('.input.', '.output.');
    if (process.env.UPDATE) {
        fs.writeFileSync(outputName, JSON.stringify(result));
    }
    var expect = f(outputName);
    t.deepEqual(result, expect, title);
}

test('rfc7946tod3', function(t) {
    fixture(t, __dirname + '/polygon.input.geojson', 'multipolygon');
    fixture(t, __dirname + '/multipolygon.input.geojson', 'polygon');
    fixture(t, __dirname + '/linestring.input.geojson', 'linestring');
    fixture(t, __dirname + '/feature.input.geojson', 'feature');
    fixture(t, __dirname + '/featurecollection.input.geojson', 'feature collection');
    fixture(t, __dirname + '/geometrycollection.input.geojson', 'geometry collection');
    t.end();
});
