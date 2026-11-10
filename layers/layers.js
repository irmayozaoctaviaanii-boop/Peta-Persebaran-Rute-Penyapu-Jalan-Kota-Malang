ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([112.506649, -8.045211, 112.790474, -7.908334]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ShpKotaMalang_2 = new ol.format.GeoJSON();
var features_ShpKotaMalang_2 = format_ShpKotaMalang_2.readFeatures(json_ShpKotaMalang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ShpKotaMalang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShpKotaMalang_2.addFeatures(features_ShpKotaMalang_2);
var lyr_ShpKotaMalang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShpKotaMalang_2, 
                style: style_ShpKotaMalang_2,
                popuplayertitle: 'Shp Kota Malang',
                interactive: false,
                title: '<img src="styles/legend/ShpKotaMalang_2.png" /> Shp Kota Malang'
            });
var format_RutePenyapuJalanKotaMalang_3 = new ol.format.GeoJSON();
var features_RutePenyapuJalanKotaMalang_3 = format_RutePenyapuJalanKotaMalang_3.readFeatures(json_RutePenyapuJalanKotaMalang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RutePenyapuJalanKotaMalang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutePenyapuJalanKotaMalang_3.addFeatures(features_RutePenyapuJalanKotaMalang_3);
var lyr_RutePenyapuJalanKotaMalang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutePenyapuJalanKotaMalang_3, 
                style: style_RutePenyapuJalanKotaMalang_3,
                popuplayertitle: 'Rute Penyapu Jalan Kota Malang',
                interactive: true,
    title: 'Rute Penyapu Jalan Kota Malang<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_0.png" /> Jl. Ahmad Yani<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_1.png" /> Jl. Ahmad Yani (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_2.png" /> Jl. Aries Munandar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_3.png" /> Jl. Arif Rahman Hakim<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_4.png" /> Jl. Bandung<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_5.png" /> Jl. Borobudur (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_6.png" /> Jl. Cengger Ayam I<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_7.png" /> Jl. Ciliwung<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_8.png" /> Jl. Danau Kerinci Raya<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_9.png" /> Jl. Gajayana<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_10.png" /> Jl. Husni Tamrin<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_11.png" /> Jl. Jakarta masuk Jl. Bogor<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_12.png" /> Jl. K.A Gribig<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_13.png" /> Jl. Kertanegara dan Jl. Sultan Agung Utara<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_14.png" /> Jl. Laksda Adi Sucipto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_15.png" /> Jl. Laksda Adi Sucipto (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_16.png" /> Jl. Letjend S.Parman<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_17.png" /> Jl. Letjend S.Parman (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_18.png" /> Jl. Letjend Sunandar Priyo Sudarmo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_19.png" /> Jl. Letjend Sunandar Priyo Sudarmo (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_20.png" /> Jl. Letjend Sutoyo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_21.png" /> Jl. Letjend Sutoyo (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_22.png" /> Jl. Lowokdoro<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_23.png" /> Jl. MGR Sugiyopranoto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_24.png" /> Jl. Raden Intan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_25.png" /> Jl. Raden Panji Suroso<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_26.png" /> Jl. Sarangan dan Jl.Mawar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_27.png" /> Jl. Simpang Panji Suroso<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_28.png" /> Jl. Soekarno Hatta<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_29.png" /> Jl. Temungung Suryo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_30.png" /> Jl. Temungung Suryo (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_31.png" /> Jl. Terusan Sulfat<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_32.png" /> Jl. Trunojoyo dan Jl.Ronggo Wasito<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_33.png" /> Jl. Tumapel<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_34.png" /> Jl. Urip Sumoharjo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_35.png" /> Jl. W.R. Supratman<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_36.png" /> Jl.Ade Irma Suryani Barat<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_37.png" /> Jl.Ade Irma Suryani Barat dan Timur<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_38.png" /> Jl.Ade Irma Suryani dan Jl.Sultan Syahrir<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_39.png" /> Jl.Agus Salim<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_40.png" /> Jl.Arif Margono dan Jl.Yulius Usman<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_41.png" /> Jl.Arif Rahman Hakim<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_42.png" /> Jl.Arjuno dan Jl.Simpang Arjuno<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_43.png" /> Jl.Bandulan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_44.png" /> Jl.Bandung<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_45.png" /> Jl.Bendungan Sutami<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_46.png" /> Jl.Besar dan Jl.Tenes<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_47.png" /> Jl.Besar Ijen<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_48.png" /> Jl.Besar Ijen dan Jl.Kawi Atas<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_49.png" /> Jl.Besar Ijen dan Jl.Wilis<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_50.png" /> Jl.Bogor<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_51.png" /> Jl.Borobudur<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_52.png" /> Jl.Brigjend Slamet Riadi<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_53.png" /> Jl.Brigjend Slamet Riadi dan Jl.Bromo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_54.png" /> Jl.Bungur, Jl.Melati, dan Jl.Mawar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_55.png" /> Jl.Buring Bawah<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_56.png" /> Jl.Cengger Ayam<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_57.png" /> Jl.Cokroaminoto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_58.png" /> Jl.Danau Jonge<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_59.png" /> Jl.Danau Kerinci Raya, Jl.Terusan Sulfat, dan Jl.Raya Sawojajar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_60.png" /> Jl.Danau Sentani Raya (Selatan)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_61.png" /> Jl.Danau Sentani Raya (Utara)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_62.png" /> Jl.Danau Toba<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_63.png" /> Jl.Dieng dan Jl.Terusan Kawi<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_64.png" /> Jl.Dirgantara<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_65.png" /> Jl.Doktor Sutomo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_66.png" /> Jl.Dr.Cipto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_67.png" /> Jl.Gajahmada<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_68.png" /> Jl.Gajahmada dan Jl.Sultan Agung Selatan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_69.png" /> Jl.Galunggung<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_70.png" /> Jl.Gatot Subroto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_71.png" /> Jl.Halmahera<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_72.png" /> Jl.Hamid Rusdi<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_73.png" /> Jl.I.R Rais<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_74.png" /> Jl.I.R. Rais<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_75.png" /> Jl.Ir.H.Juanda<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_76.png" /> Jl.Irian Jaya, Jl.Peltu Sujono , dan Jl.Susanto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_77.png" /> Jl.Jakarta<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_78.png" /> Jl.Jakarta masuk Jl.Garut<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_79.png" /> Jl.Jaksa Agung Suprapto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_80.png" /> Jl.Janti Bar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_81.png" /> Jl.Jenderal Basuki Rahmat<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_82.png" /> Jl.Jenderal Basuki Rahmat (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_83.png" /> Jl.Jenderal Basuki Rahmat dan Jl.Jaksa Agung Suprapto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_84.png" /> Jl.Jupri<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_85.png" /> Jl.K,H. Hasyim Ashari<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_86.png" /> Jl.K.A Gribig<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_87.png" /> Jl.Kahuripan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_88.png" /> Jl.Kahuripan, Jl.Tugu, dan Jl.Suropati<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_89.png" /> JL.Karel Satsui Tubun<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_90.png" /> Jl.Kauman<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_91.png" /> Jl.Kawi Atas dan Kawi Bawah<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_92.png" /> Jl.Kawi dan Jl.Bromo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_93.png" /> Jl.Kawi dan Jl.Tenes<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_94.png" /> Jl.Kebalen Wetan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_95.png" /> Jl.Kebonsari<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_96.png" /> Jl.Kertanegara<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_97.png" /> Jl.KH Ahmad Dahlan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_98.png" /> Jl.Klayatan 2<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_99.png" /> Jl.Klayatan 3<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_100.png" /> Jl.Kolenel Sugiono<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_101.png" /> Jl.Kyai H.Wahid Hasyim<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_102.png" /> Jl.Kyai Tamin<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_103.png" /> Jl.Kyai Tamin (Sisi kanan dan Kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_104.png" /> Jl.Laksamana Martadinata<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_105.png" /> Jl.M.T Hariyono<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_106.png" /> Jl.Majapahit dan Jl.Tugu<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_107.png" /> Jl.Mayjen Sungkono (buring)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_108.png" /> Jl.Mayjen Sungkono (Fly Over)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_109.png" /> Jl.Mayjen.M.Wiyono<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_110.png" /> Jl.Mayjend Panjaitan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_111.png" /> Jl.Mayjend Sungkono<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_112.png" /> Jl.Melati dan Jl.Bungur<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_113.png" /> Jl.Merapi, Jl.Merbabu, dan Jl.Buring Atas<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_114.png" /> Jl.Merbabu Utara, Jl.Guntur, dan Jl.Simpang Balapan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_115.png" /> Jl.Merdeka Utara, Jl.Merdeka Timur, Jl.Merdeka Selatan, dan Jl.Merdeka Barat<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_116.png" /> Jl.Merjosari Selatan dan Jl.Sunan Kalijaga<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_117.png" /> Jl.Mojopahit<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_118.png" /> Jl.Muharto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_119.png" /> Jl.Mulyorejo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_120.png" /> Jl.Nusakambangan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_121.png" /> Jl.Pahlawan Trip dan Jl.Surabaya<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_122.png" /> Jl.Pajajaran<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_123.png" /> Jl.Panglima Sudirman<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_124.png" /> Jl.Pasar Besar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_125.png" /> Jl.Pasar Besar (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_126.png" /> Jl.Patimura<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_127.png" /> Jl.Patimura dan Jl.Trunojoyo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_128.png" /> Jl.Peltu Sujono<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_129.png" /> Jl.Prof.Moch Yamin<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_130.png" /> Jl.Puntodewo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_131.png" /> Jl.Raden Intan ( Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_132.png" /> Jl.Rajasa<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_133.png" /> Jl.Randen Panji Suroso (Sisi kanan dan kiri)<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_134.png" /> Jl.Ranugrati<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_135.png" /> Jl.Raya Gadang<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_136.png" /> Jl.Raya Kepuh<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_137.png" /> Jl.Raya Langsep<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_138.png" /> Jl.Raya Lansep<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_139.png" /> Jl.Raya Sawojajar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_140.png" /> Jl.Raya Tebo Selatan<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_141.png" /> Jl.Raya Tebo Utara<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_142.png" /> Jl.Retawu dan Jl.Bondowoso<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_143.png" /> Jl.S.Supriadi<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_144.png" /> Jl.S.W Pranoto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_145.png" /> Jl.Sartono S.H<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_146.png" /> Jl.Semeru<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_147.png" /> Jl.Semeru dan Jl.Takuban Perahu<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_148.png" /> Jl.Senokeling<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_149.png" /> Jl.Seokarno Hatta<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_150.png" /> Jl.Sigura gura dan Jl.Raya Sumbersari<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_151.png" /> Jl.Simpang Kepuh<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_152.png" /> Jl.Simpang Wilis Indah dan Jl.Gede<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_153.png" /> Jl.Soekarno Hatta<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_154.png" /> Jl.Sulawesi Selatan dan Jl.Tanimbar<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_155.png" /> Jl.Sulawesi Utara<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_156.png" /> Jl.Sultan Agung Utara dan Jl. Ronggowasito<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_157.png" /> Jl.Supriadi<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_158.png" /> Jl.Suropati<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_159.png" /> Jl.Susanto<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_160.png" /> Jl.Terusan Dieng<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_161.png" /> Jl.Terusan Kesatrian<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_162.png" /> Jl.Terusan Sulfat<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_163.png" /> Jl.Tlogomas<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_164.png" /> Jl.Trunojoyo<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_165.png" /> Jl.Tugu<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_166.png" /> Jl.Veteran<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_167.png" /> Jl.Yulius Usman<br />\
    <img src="styles/legend/RutePenyapuJalanKotaMalang_3_168.png" /> Jl.Zainul Arifin<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_ShpKotaMalang_2.setVisible(true);lyr_RutePenyapuJalanKotaMalang_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleRoad_1,lyr_ShpKotaMalang_2,lyr_RutePenyapuJalanKotaMalang_3];
lyr_ShpKotaMalang_2.set('fieldAliases', {'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_RutePenyapuJalanKotaMalang_3.set('fieldAliases', {'Id': 'Id', 'Mandor': 'Mandor', 'Wilayah': 'Wilayah', 'Nama_Pnypu': 'Nama_Pnypu', 'Lokasi_Krj': 'Lokasi_Krj', 'Jarak_rute': 'Jarak_rute', 'Jam_PJ': 'Jam_PJ', 'Stndr_750': 'Stndr_750', 'Eksisting': 'Eksisting', 'Saran': 'Saran', 'Keterangan': 'Keterangan', 'Final_Eks': 'Final_Eks', });
lyr_ShpKotaMalang_2.set('fieldImages', {'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_RutePenyapuJalanKotaMalang_3.set('fieldImages', {'Id': 'Range', 'Mandor': 'TextEdit', 'Wilayah': 'TextEdit', 'Nama_Pnypu': 'TextEdit', 'Lokasi_Krj': 'TextEdit', 'Jarak_rute': 'TextEdit', 'Jam_PJ': 'TextEdit', 'Stndr_750': 'TextEdit', 'Eksisting': 'TextEdit', 'Saran': 'TextEdit', 'Keterangan': 'TextEdit', 'Final_Eks': 'TextEdit', });
lyr_ShpKotaMalang_2.set('fieldLabels', {'KDPKAB': 'no label', 'KDPPUM': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'METADATA': 'no label', 'UPDATED': 'no label', });
lyr_RutePenyapuJalanKotaMalang_3.set('fieldLabels', {'Id': 'hidden field', 'Mandor': 'inline label - always visible', 'Wilayah': 'inline label - always visible', 'Nama_Pnypu': 'inline label - always visible', 'Lokasi_Krj': 'inline label - always visible', 'Jarak_rute': 'inline label - always visible', 'Jam_PJ': 'inline label - always visible', 'Stndr_750': 'inline label - always visible', 'Eksisting': 'inline label - always visible', 'Saran': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Final_Eks': 'inline label - always visible', });
lyr_RutePenyapuJalanKotaMalang_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});