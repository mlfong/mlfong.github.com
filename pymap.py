# -*- coding: utf-8 -*-
import sys

first_half = r"""<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Simple icons</title>
    <link href="https://developers.google.com/maps/documentation/javascript/examples/default.css" rel="stylesheet">
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script>
function initialize() {
  var center_v = new google.maps.LatLng(0,0); 
  var mapOptions = {
    zoom: 2,
    center: center_v,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  setMarkers(map,  locations);
}

var locations =["""

second_half = r"""];
function setMarkers(map) {
  for(var i = 0; i < locations.length; i++){
    var loc = locations[i];
    var image = loc[1];
    var myLatLng = new google.maps.LatLng(loc[2], loc[3]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
}
  
google.maps.event.addDomListener(window, "load", initialize);

    </script>
  </head>
  <body>
    <div id="map-canvas"></div>
  </body>
</html>

    
"""
assert len(sys.argv) > 1
oauth_token = sys.argv[1]
foursquare_json_str = "https://api.foursquare.com/v2/users/self/badges?oauth_token=" + oauth_token
fjs = foursquare_json_str

city_badges = ["What Happens in Vegas", "Kollen Roar", "Harbour City", "Charm City", "KL-lite", "Ciutat Comtal", \
  "Blue Danube", "La Ville-Lumière".decode('utf-8'), "Lion City", "Tenochtitlan", "Casa", "4sq Crawl", "Bosphorus",\
  "Bunaken", "Sandgroper", "Cidade-berço".decode('utf-8'), "Selamat Datang", "Garden City", "Phanatic", "Lucky Seoul",\
  "Caraqueña", "Stamford", "Explorador Porteño", "Sampa", "Bab el Bahr", "Santiaguino a full", "London Calling", \
  "Red Square", "Doha Denizen", "Ich bin ein Berliner", "Bolognese", "Mateína".decode("utf-8"), "Gem of the Baltics",\
  "City of Lakes", "Carioca", "Jah-Mek-Yah", "Cité de Laviolette", "Bridgetown", "City of Three Towers", "Mi Mumbaikar",\
  "Krung Thep", "Pig's Eye", "Milano da bere", "Mokum", "Beantown", "Keep Austin Weird", "RVA", "OKC", "French For 'The Moines'",\
   "Madrileño", "Seattleite", "Sakura", "ATL", "The Big Easy"]
def readIt():
  import json, urllib2
  json_data = urllib2.urlopen(fjs).read()
  return json.loads(json_data)

def getBadgeInfo():
  j2 = readIt()
  all_info = []
  badges = j2["response"]["badges"]
  for badge in badges:
    name = badges[badge]["name"]
    if name in city_badges:
      image = badges[badge]["image"]
      image_url = image["prefix"] + str(image["sizes"][0]) + image["name"]
      lat =  badges[badge]["unlocks"][0]["checkins"][0]["venue"]["location"]["lat"]
      lng =  badges[badge]["unlocks"][0]["checkins"][0]["venue"]["location"]["lng"]
      all_info.append([name, image_url, lat, lng])
  return all_info

def main():
  info = getBadgeInfo()
  locations = []
  for ii in xrange(0,len(info)):
    i = info[ii]
    msg = "[" + repr(str(i[0])) + ", " + repr(str(i[1])) + ", " + str(i[2]) + ", " + str(i[3]) +"]"
    if ii != len(info)-1:
      msg += ","
    locations.append(msg)
  f = open("map.html","w")
  f.write(first_half)
  for loc in locations:
    f.write(loc)
  f.write(second_half)
  f.close()
  pass

if __name__ == '__main__':
  main()
  print 'fin'






