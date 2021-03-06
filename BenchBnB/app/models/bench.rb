class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        return [] if !bounds
        benches = Bench.all;
        benches.select do |bench|
            ((bench.lat < bounds[:northEast][:lat].to_f && bench.lat > bounds[:southWest][:lat].to_f) && 
            (bench.lng < bounds[:northEast][:lng].to_f && bench.lng > bounds[:southWest][:lng].to_f))
        end
    end
end
