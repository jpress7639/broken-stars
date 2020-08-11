# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Symptom.destroy_all
Resource.destroy_all
Artist.destroy_all

# Artist Seed

@vangogh = Artist.create!(name: "Vincent Van Gogh", profile_img: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1591057886/unnamed-1_toq7hp.jpg", years: '1853-1890', disorder: "Schizoaffective Disorder", work_example: "Sunflowers (1888-1889)",
work_URL: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1591056847/unnamed_wms79t.jpg",
story: "Vincent Van Gogh had a long struggle with a long list of mental ailments. He took the pains of his tortured mind and portrayed such beautiful and dazzling colors in his work. With no doctor truly knowing what was his illness, Van Gogh went through a number of incarcerations and treatment that would leave him empty or lose his creative touch. As he famously said to his brother, ‘I have put my heart and soul into my work, and have lost my mind in the process.’ It wasn’t until long after his death, when a conference of art experts and psychologists diagnosed him with Schizoaffective Disorder, due to his symptoms of psychosis, mania, and depression.")

puts "#{Artist.count} created!"

# Resources Seed 

@schizoaffective = Resource.create!(name: "SARDAA", link: "https://sardaa.org/?gclid=CjwKCAjw4MP5BRBtEiwASfwAL8-EsIH4lLIv8pSAGGXdreHLDvK8tRvs-TF6rhtiHWDJAyh7mcoRDxoCxTkQAvD_BwE", artist: @vangogh)
@mha = Resource.create!(name: "Mental Health Association", link: "https://www.mhanational.org/conditions/schizoaffective-disorder", artist: @vangogh)

puts "#{Resource.count} created!"

@vangogh.resources.push(@schizoaffective, @mha)

# Symptom Seed

@psychosis = Symptom.create!(name: "psychosis", artist: @vangogh)
@mania = Symptom.create!(name: "mania", artist: @vangogh)
@depression = Symptom.create!(name: "depression", artist: @vangogh)

puts "#{Symptom.count} created!"

@vangogh.symptoms.push(@psychosis, @mania, @depression)