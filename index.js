module.exports = function rfc7946tod3(geojson) {
    switch ((geojson && geojson.type) || null) {
        case 'FeatureCollection':
            geojson.features.forEach(rfc7946tod3)
            break
        case 'GeometryCollection':
            geojson.geometries.forEach(rfc7946tod3)
            break
        case 'Feature':
            rfc7946tod3(geojson.geometry)
            break
        case 'MultiPolygon':
            geojson.coordinates.forEach(function(polygon) {
                polygon.forEach(function(ring) {
                    ring.reverse()
                })
            })
            break
        case 'Polygon':
            geojson.coordinates.forEach(function(ring) {
                ring.reverse()
            })
            break
    }
    return geojson
}
