var map = L.map('map').setView([12.97194, 77.59369], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var marker = L.marker([12.97194, 77.59369]).addTo(map);

const form = document.querySelector('form')
const input = document.querySelector('#ip')
const ip_address = document.querySelector('[data-ip]')
const location_adress = document.querySelector('[data-location]')
const timezone = document.querySelector('[data-timezone]')
const isp = document.querySelector('[data-isp]')

const fetch_Pop = async () => {
    const custom_IP = input.value
    const fetch_request = new Request(`https://geo.ipify.org/api/v2/country,city?apiKey=at_p507y7z0HdXVhEm3s2uGqYVRE0kc3&ipAddress=${custom_IP}`)

    const fetch_response = await fetch(fetch_request)

    const data = await fetch_response.json()

    map_panning(data)
    field_populate(data)
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch_Pop()
})

window.addEventListener('load', () => {
    input.value = ''
})

function map_panning(obj){
    var latlng = L.latLng(obj.location.lat, obj.location.lng)
    map.panTo(latlng)
    marker = L.marker([obj.location.lat, obj.location.lng]).addTo(map);
}

function field_populate(obj){
    ip_address.innerText = obj.ip
    location_adress.innerText = `${obj.location.city}, ${obj.location.region}`
    timezone.innerText = `UTC ${obj.location.timezone}`
    isp.innerText = obj.isp
}