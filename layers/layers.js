var wms_layers = [];
var format_BATASKECAMATANDESEMBER2019DUKCAPIL_0 = new ol.format.GeoJSON();
var features_BATASKECAMATANDESEMBER2019DUKCAPIL_0 = format_BATASKECAMATANDESEMBER2019DUKCAPIL_0.readFeatures(json_BATASKECAMATANDESEMBER2019DUKCAPIL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKECAMATANDESEMBER2019DUKCAPIL_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BATASKECAMATANDESEMBER2019DUKCAPIL_0.addFeatures(features_BATASKECAMATANDESEMBER2019DUKCAPIL_0);var lyr_BATASKECAMATANDESEMBER2019DUKCAPIL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASKECAMATANDESEMBER2019DUKCAPIL_0, 
                style: style_BATASKECAMATANDESEMBER2019DUKCAPIL_0,
    title: 'BATAS KECAMATAN DESEMBER 2019 DUKCAPIL<br />\
    <img src="styles/legend/BATASKECAMATANDESEMBER2019DUKCAPIL_0_0.png" /> SEMARANG BARAT<br />\
    <img src="styles/legend/BATASKECAMATANDESEMBER2019DUKCAPIL_0_1.png" /> SEMARANG SELATAN<br />\
    <img src="styles/legend/BATASKECAMATANDESEMBER2019DUKCAPIL_0_2.png" /> SEMARANG TENGAH<br />\
    <img src="styles/legend/BATASKECAMATANDESEMBER2019DUKCAPIL_0_3.png" /> SEMARANG TIMUR<br />\
    <img src="styles/legend/BATASKECAMATANDESEMBER2019DUKCAPIL_0_4.png" /> SEMARANG UTARA<br />\
    <img src="styles/legend/BATASKECAMATANDESEMBER2019DUKCAPIL_0_5.png" /> <br />'
        });var format_rumahsakit_1 = new ol.format.GeoJSON();
var features_rumahsakit_1 = format_rumahsakit_1.readFeatures(json_rumahsakit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahsakit_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumahsakit_1.addFeatures(features_rumahsakit_1);var lyr_rumahsakit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumahsakit_1, 
                style: style_rumahsakit_1,
                title: '<img src="styles/legend/rumahsakit_1.png" /> rumahsakit'
            });var format_laaboratorium_2 = new ol.format.GeoJSON();
var features_laaboratorium_2 = format_laaboratorium_2.readFeatures(json_laaboratorium_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_laaboratorium_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_laaboratorium_2.addFeatures(features_laaboratorium_2);var lyr_laaboratorium_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_laaboratorium_2, 
                style: style_laaboratorium_2,
                title: '<img src="styles/legend/laaboratorium_2.png" /> laaboratorium'
            });var format_apotek_3 = new ol.format.GeoJSON();
var features_apotek_3 = format_apotek_3.readFeatures(json_apotek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apotek_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_apotek_3.addFeatures(features_apotek_3);var lyr_apotek_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_apotek_3, 
                style: style_apotek_3,
                title: '<img src="styles/legend/apotek_3.png" /> apotek'
            });

lyr_BATASKECAMATANDESEMBER2019DUKCAPIL_0.setVisible(true);lyr_rumahsakit_1.setVisible(true);lyr_laaboratorium_2.setVisible(true);lyr_apotek_3.setVisible(true);
var layersList = [lyr_BATASKECAMATANDESEMBER2019DUKCAPIL_0,lyr_rumahsakit_1,lyr_laaboratorium_2,lyr_apotek_3];
lyr_BATASKECAMATANDESEMBER2019DUKCAPIL_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', });
lyr_rumahsakit_1.set('fieldAliases', {'ID': 'ID', 'Nama Lokas': 'Nama Lokas', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Alamat': 'Alamat', 'kontak': 'kontak', 'operasiona': 'operasiona', 'layanan': 'layanan', 'Name': 'Name', });
lyr_laaboratorium_2.set('fieldAliases', {'ID': 'ID', 'Nama Lokas': 'Nama Lokas', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Alamat': 'Alamat', 'kontak': 'kontak', 'operasiona': 'operasiona', 'layanan': 'layanan', 'Name': 'Name', });
lyr_apotek_3.set('fieldAliases', {'ID': 'ID', 'Nama Lokas': 'Nama Lokas', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Alamat': 'Alamat', 'kontak': 'kontak', 'operasiona': 'operasiona', 'layanan': 'layanan', 'Name': 'Name', });
lyr_BATASKECAMATANDESEMBER2019DUKCAPIL_0.set('fieldImages', {'KECAMATAN': 'TextEdit', });
lyr_rumahsakit_1.set('fieldImages', {'ID': 'TextEdit', 'Nama Lokas': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Alamat': 'TextEdit', 'kontak': 'TextEdit', 'operasiona': 'TextEdit', 'layanan': 'TextEdit', 'Name': 'Photo', });
lyr_laaboratorium_2.set('fieldImages', {'ID': 'TextEdit', 'Nama Lokas': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Alamat': 'TextEdit', 'kontak': 'TextEdit', 'operasiona': 'TextEdit', 'layanan': 'TextEdit', 'Name': 'Photo', });
lyr_apotek_3.set('fieldImages', {'ID': 'TextEdit', 'Nama Lokas': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Alamat': 'TextEdit', 'kontak': 'TextEdit', 'operasiona': 'TextEdit', 'layanan': 'TextEdit', 'Name': 'Photo', });
lyr_BATASKECAMATANDESEMBER2019DUKCAPIL_0.set('fieldLabels', {'KECAMATAN': 'no label', });
lyr_rumahsakit_1.set('fieldLabels', {'ID': 'no label', 'Nama Lokas': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Alamat': 'no label', 'kontak': 'no label', 'operasiona': 'no label', 'layanan': 'no label', 'Name': 'no label', });
lyr_laaboratorium_2.set('fieldLabels', {'ID': 'no label', 'Nama Lokas': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Alamat': 'no label', 'kontak': 'no label', 'operasiona': 'no label', 'layanan': 'no label', 'Name': 'no label', });
lyr_apotek_3.set('fieldLabels', {'ID': 'no label', 'Nama Lokas': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Alamat': 'no label', 'kontak': 'no label', 'operasiona': 'no label', 'layanan': 'no label', 'Name': 'no label', });
lyr_apotek_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});