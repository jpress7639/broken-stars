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

@hemingway = Artist.create!(name: "Ernest Hemingway", profile_img: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1597076141/1024px-ErnestHemingway_qitgv2.jpg", years: "1899-1961", 
disorder: "Bipolar Disorder", work_example: "Old Man and The Sea (1951)", 
work_URL: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1597076164/Oldmansea_qbvvvx.jpg",
story: "Although he was one of the most brilliant writers of the twentieth century, Ernest Hemingway had unknowingly been suffering from bipolar disorder, a mental health illness that was not easily recognized. After consistently injuring his head and a plane crash in 1954, he was left in pain and ill health for the rest of his life. He was able to write throughout the many electroshock treatments and still produced some of the most moving pieces in American literary history.")

@okeeffe = Artist.create!(name: "Georgia O’Keeffe", profile_img: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1597161082/Stieglitz_okeeffe_1918_otvpxn.jpg", years: "1887-1986",
disorder: "Chronic Depression", work_example: "Red Canna (1924)",
work_URL: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1597167405/Red_Canna__281924_29_by_Georgia_O_27Keeffe_rdcz4p.jpg",
story: "Although her life was filled with color and examining nature with a painter’s lens. Georgia O’Keeffe also had many hardships with mental health. Her personal relationships and time with work in the 1930s were partially contributing to her depression, but sometimes it would cause periods of manic episodes where she would have to be hospitalized. Fortunately receiving the treatment she needed, O’Keeffe was able to handle her depression to continue her work for the rest of her long life.")

puts "#{Artist.count} created!"

# Resources Seed 

@schizoaffective = Resource.create!(name: "SARDAA", link: "https://sardaa.org/?gclid=CjwKCAjw4MP5BRBtEiwASfwAL8-EsIH4lLIv8pSAGGXdreHLDvK8tRvs-TF6rhtiHWDJAyh7mcoRDxoCxTkQAvD_BwE", artist: @vangogh)
@mha = Resource.create!(name: "Mental Health Association", link: "https://www.mhanational.org/conditions/schizoaffective-disorder", artist: @vangogh)

@dbsa = Resource.create!(name: "DBSA: Depression and Bipolar Support Alliance", link: "https://www.dbsalliance.org/", artist: @hemingway)
@brf = Resource.create!(name: "Brain Research Foundation", link: "https://www.thebrf.org/?gclid=CjwKCAjw4MP5BRBtEiwASfwALyXuPEdFYUEUUjUy2LsKYv9mPQDfVg2RVWKASuyWFBYJh1vxyn9zCRoCqUcQAvD_BwE", artist: @hemingway)

@aadaa = Resource.create!(name: "Anxiety and Depression Association of America", link: "https://adaa.org/", artist: @okeeffe)

puts "#{Resource.count} created!"

@vangogh.resources.push(@schizoaffective, @mha)
@hemingway.resources.push(@dbsa, @brf)
@okeeffe.resources.push(@aadaa)

# Symptom Seed

@psychosis = Symptom.create!(name: "psychosis", artist: @vangogh)
@mania = Symptom.create!(name: "mania", artist: @vangogh)
@depression = Symptom.create!(name: "depression", artist: @vangogh)

@fatigue = Symptom.create!(name: "fatigue", artist: @hemingway)
@lowmoods = Symptom.create!(name: "low moods", artist: @hemingway)
@irritability = Symptom.create!(name: "irritability", artist: @hemingway)

@hopelessness = Symptom.create!(name: "hopelessness", artist: @okeeffe)
@sadness = Symptom.create!(name: "sadness", artist: @okeeffe)
@agitation = Symptom.create!(name: "agitation", artist: @okeeffe)


puts "#{Symptom.count} created!"

@vangogh.symptoms.push(@psychosis, @mania, @depression)
@hemingway.symptoms.push(@fatigue, @lowmoods, @irritability)
@okeeffe.symptoms.push(@hopelessness, @sadness, @agitation)