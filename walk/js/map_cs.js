$(function () {
    !function () {
        var infoWindow, map, level = 18
        if ($(window).width() > 768) {
            var center = { lng: 120.03009, lat: 30.243807 }
        } else {
            var center = { lng: 120.02799, lat: 30.243807 }
        }
        var features = [{
            type: 'Marker',
            name: '华立集团',
            desc: '',
            color: 'red',
            icon: 'cir',
            offset: { x: -9, y: -31 },
            lnglat: { lng: 120.027678, lat: 30.243733 }
        }];
        function loadFeatures() {
            for (var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
                data = features[i];
                switch (data.type) {
                    case 'Marker':
                        feature = new AMap.Marker({
                            map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
                            zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
                            content: '<a href="https://j.map.baidu.com/hYcPZ" target="_blank"><div class="icon icon-' + data.icon + ' icon-' + data.icon + '-' + data.color + '"></div></a>'
                        });
                        break;
                    case 'Polyline':
                        for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
                            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat))
                        }
                        feature = new AMap.Polyline({
                            map: map, path: path, extData: data, zIndex: 2,
                            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity
                        });
                        break;
                    case 'Polygon':
                        for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
                            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat))
                        }
                        feature = new AMap.Polygon({
                            map: map, path: path, extData: data, zIndex: 1,
                            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
                            fillColor: data.fillColor, fillOpacity: data.fillOpacity
                        });
                        break;
                    default:
                        feature = null
                }
                if (feature) { AMap.event.addListener(feature, 'click', mapFeatureClick) }
            }
        }
        function mapFeatureClick(e) {
            if (!infoWindow) { infoWindow = new AMap.InfoWindow({ autoMove: true }) }
            if (!e) {
                var lnglat = {
                    M: 120.02770551618573,
                    O: 30.24382524742396,
                    lat: 30.243825,
                    lng: 120.027706
                };
                infoWindow.setContent('<a href="https://j.map.baidu.com/hYcPZ" target="_blank" class="tac"><h5>华立集团</h5></a>')
                infoWindow.open(map, lnglat);
                return
            }
            var extData = e.target.getExtData();
            infoWindow.setContent('<h5>' + extData.name + '</h5><div>' + extData.desc + '</div>');
            infoWindow.open(map, e.lnglat)
        }
        map = new AMap.Map('mapContainer', {
            center: new AMap.LngLat(center.lng, center.lat),
            level: level,
            keyboardEnable: false,
            scrollWheel: false,
            doubleClickZoom: false
        });

        loadFeatures();
        mapFeatureClick();
    }()
});