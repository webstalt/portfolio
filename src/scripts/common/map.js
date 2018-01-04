var initMap = () => {
    var uluru = {
        lat: 55.761406, 
        lng: 37.632170
    };
    var map = new google.maps.Map(document.querySelector('.google-map'), {
        zoom: 13,
        center: {
            lat: 55.760046, 
            lng: 37.599969
        },
        mapTypeControl: false,
        scrollwheel : false,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({position: uluru, map: map, icon: { 
        url: "./assets/images/icons/map_marker.svg", scaledSize: new google.maps.Size(25, 35)}
    });

    map.setOptions({styles: styles.forest});
}; 

var styles = {
    default: null,
    forest: [
        {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
        },
        {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
        },
        {
            featureType: 'man_made',
            elementType: 'geometry.stroke',
            stylers: [{color: '#bdbdbd'}]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#86A77A'}]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
        }
    ]
};

window.initMap = initMap;
