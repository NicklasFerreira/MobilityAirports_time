ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:54030").setExtent([-5347836.602294, 1073857.569446, 3312551.068316, 7441470.085102]);
var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Estimatingflighttimesminutes_1 = new ol.format.GeoJSON();
var features_Estimatingflighttimesminutes_1 = format_Estimatingflighttimesminutes_1.readFeatures(json_Estimatingflighttimesminutes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_Estimatingflighttimesminutes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estimatingflighttimesminutes_1.addFeatures(features_Estimatingflighttimesminutes_1);
var lyr_Estimatingflighttimesminutes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estimatingflighttimesminutes_1, 
                style: style_Estimatingflighttimesminutes_1,
                popuplayertitle: 'Estimating flight times (minutes)',
                interactive: true,
    title: 'Estimating flight times (minutes)<br />\
    <img src="styles/legend/Estimatingflighttimesminutes_1_0.png" /> Short-haul (<120 minutes)<br />\
    <img src="styles/legend/Estimatingflighttimesminutes_1_1.png" /> Medium-haul (121-139 minutes)<br />\
    <img src="styles/legend/Estimatingflighttimesminutes_1_2.png" /> Long-haul (140-185 minutes)<br />\
    <img src="styles/legend/Estimatingflighttimesminutes_1_3.png" /> Extended (>186 minutes)<br />' });
var format_OriginsSpain_2 = new ol.format.GeoJSON();
var features_OriginsSpain_2 = format_OriginsSpain_2.readFeatures(json_OriginsSpain_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_OriginsSpain_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OriginsSpain_2.addFeatures(features_OriginsSpain_2);
var lyr_OriginsSpain_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OriginsSpain_2, 
                style: style_OriginsSpain_2,
                popuplayertitle: 'Origins - Spain',
                interactive: true,
                title: '<img src="styles/legend/OriginsSpain_2.png" /> Origins - Spain'
            });
var format_DestinationsUnitedKingdom_3 = new ol.format.GeoJSON();
var features_DestinationsUnitedKingdom_3 = format_DestinationsUnitedKingdom_3.readFeatures(json_DestinationsUnitedKingdom_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54030'});
var jsonSource_DestinationsUnitedKingdom_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DestinationsUnitedKingdom_3.addFeatures(features_DestinationsUnitedKingdom_3);
var lyr_DestinationsUnitedKingdom_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DestinationsUnitedKingdom_3, 
                style: style_DestinationsUnitedKingdom_3,
                popuplayertitle: 'Destinations - United Kingdom',
                interactive: true,
                title: '<img src="styles/legend/DestinationsUnitedKingdom_3.png" /> Destinations - United Kingdom'
            });

lyr_DarkMatter_0.setVisible(true);lyr_Estimatingflighttimesminutes_1.setVisible(true);lyr_OriginsSpain_2.setVisible(false);lyr_DestinationsUnitedKingdom_3.setVisible(false);
var layersList = [lyr_DarkMatter_0,lyr_Estimatingflighttimesminutes_1,lyr_OriginsSpain_2,lyr_DestinationsUnitedKingdom_3];
lyr_Estimatingflighttimesminutes_1.set('fieldAliases', {'origin': 'origin', 'destinatio': 'destinatio', 'field_3': 'field_3', 'x_origin': 'x_origin', 'y_origin': 'y_origin', 'x_destinat': 'x_destinat', 'y_destinat': 'y_destinat', 'Geodeesine': 'Geodeesine', 'Aika_minuu': 'Aika_minuu', 'aika_min_1': 'aika_min_1', 'teksti_min': 'teksti_min', 'Geodeesin1': 'Geodeesin1', 'aika_min_2': 'aika_min_2', });
lyr_OriginsSpain_2.set('fieldAliases', {'fid': 'fid', 'source_air': 'source_air', 'name_sourc': 'name_sourc', 'route_id': 'route_id', 'x_coordina': 'x_coordina', 'y': 'y', 'x_destinat': 'x_destinat', 'y_destinat': 'y_destinat', 'origin': 'origin', 'destinatio': 'destinatio', 'field_3': 'field_3', 'x_origin': 'x_origin', 'y_origin': 'y_origin', 'name_origi': 'name_origi', 'origi_2': 'origi_2', 'layer': 'layer', 'path': 'path', });
lyr_DestinationsUnitedKingdom_3.set('fieldAliases', {'origin': 'origin', 'destinatio': 'destinatio', 'field_3': 'field_3', 'x_origin': 'x_origin', 'y_origin': 'y_origin', 'x_destinat': 'x_destinat', 'y_destinat': 'y_destinat', 'Origins_na': 'Origins_na', 'Destinat_1': 'Destinat_1', 'Dest_2': 'Dest_2', });
lyr_Estimatingflighttimesminutes_1.set('fieldImages', {'origin': 'TextEdit', 'destinatio': 'TextEdit', 'field_3': 'TextEdit', 'x_origin': 'TextEdit', 'y_origin': 'TextEdit', 'x_destinat': 'TextEdit', 'y_destinat': 'TextEdit', 'Geodeesine': 'TextEdit', 'Aika_minuu': 'TextEdit', 'aika_min_1': 'TextEdit', 'teksti_min': 'TextEdit', 'Geodeesin1': 'TextEdit', 'aika_min_2': 'TextEdit', });
lyr_OriginsSpain_2.set('fieldImages', {'fid': 'TextEdit', 'source_air': 'TextEdit', 'name_sourc': 'TextEdit', 'route_id': 'TextEdit', 'x_coordina': 'TextEdit', 'y': 'TextEdit', 'x_destinat': 'TextEdit', 'y_destinat': 'TextEdit', 'origin': 'TextEdit', 'destinatio': 'TextEdit', 'field_3': 'TextEdit', 'x_origin': 'TextEdit', 'y_origin': 'TextEdit', 'name_origi': 'TextEdit', 'origi_2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DestinationsUnitedKingdom_3.set('fieldImages', {'origin': 'TextEdit', 'destinatio': 'TextEdit', 'field_3': 'TextEdit', 'x_origin': 'TextEdit', 'y_origin': 'TextEdit', 'x_destinat': 'TextEdit', 'y_destinat': 'TextEdit', 'Origins_na': 'TextEdit', 'Destinat_1': 'TextEdit', 'Dest_2': 'TextEdit', });
lyr_Estimatingflighttimesminutes_1.set('fieldLabels', {'origin': 'no label', 'destinatio': 'no label', 'field_3': 'no label', 'x_origin': 'no label', 'y_origin': 'no label', 'x_destinat': 'no label', 'y_destinat': 'no label', 'Geodeesine': 'no label', 'Aika_minuu': 'no label', 'aika_min_1': 'no label', 'teksti_min': 'no label', 'Geodeesin1': 'no label', 'aika_min_2': 'no label', });
lyr_OriginsSpain_2.set('fieldLabels', {'fid': 'no label', 'source_air': 'no label', 'name_sourc': 'no label', 'route_id': 'no label', 'x_coordina': 'no label', 'y': 'no label', 'x_destinat': 'no label', 'y_destinat': 'no label', 'origin': 'no label', 'destinatio': 'no label', 'field_3': 'no label', 'x_origin': 'no label', 'y_origin': 'no label', 'name_origi': 'no label', 'origi_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_DestinationsUnitedKingdom_3.set('fieldLabels', {'origin': 'no label', 'destinatio': 'no label', 'field_3': 'no label', 'x_origin': 'no label', 'y_origin': 'no label', 'x_destinat': 'no label', 'y_destinat': 'no label', 'Origins_na': 'no label', 'Destinat_1': 'no label', 'Dest_2': 'no label', });
lyr_DestinationsUnitedKingdom_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});