# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

benches = Bench.create!([
    {description:"nice bench by the Golden Gate bridge", lat: 37.827933, lng: -122.481598},
    {description:"sketchy bench in mission district", lat: 37.760677, lng: -122.415016},
    {description:"pier 39 prime bench", lat: 37.810863, lng: -122.410090},
    {description:"airport bench", lat: 37.634040, lng: -122.392942},
    {description:"prison bench", lat: 37.826321, lng: -122.422348}
])