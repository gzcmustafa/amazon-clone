import {Carousel, CarouselCategory, HomePageCard} from "./"
"srccomponentsSearchResults.jsx"
 const HomePage = () => {
  return (
    <div className='bg-amazon-background'>
      <div className='min-w-[1000px] max-w-[1500px] bg-amazon-background m-auto'>
        <Carousel/>
        <div className="relative z-30 grid grid-cols-3 xl:grid-cols-4 -mt-[290px]">
          <HomePageCard 
          title={"Gaming accessories"} 
          images={[
            "/images/home_grid_1.jpg",
            "/images/home_grid_1_2.jpg",
            "/images/home_grid_1_3.jpg",
            "/images/home_grid_1_4.jpg"
          ]}
          link={"See More"}
          />
           <HomePageCard 
          title={"New year, now you"} 
          images={[
            "/images/home_grid_2.jpg"
          ]}
          link={"Shop Gaming"}
          />
           <HomePageCard 
          title={"Shop for your home essentials"} 
          images={[
            "/images/home_grid_3_1.jpg",
            "/images/home_grid_3_2.jpg",
            "/images/home_grid_3_3.jpg",
            "/images/home_grid_3_4.jpg"
          ]}
          link={"Discover more in Home"}
          />
           <HomePageCard 
          title={"New home arrivals under $50"} 
          images={[
            "/images/home_grid_4_1.jpg",
            "/images/home_grid_4_2.jpg",
            "/images/home_grid_4_3.jpg",
            "/images/home_grid_4_4.jpg"
          ]}
          link={"Shop the latest from Home"}
          />
           <HomePageCard 
          title={"Shop deals in Fashion"} 
          images={[
            "/images/home_grid_5_1.jpg",
            "/images/home_grid_5_2.jpg",
            "/images/home_grid_5_3.jpg",
            "/images/home_grid_5_4.jpg"
          ]}
          link={"See all deals"}
          />
           <HomePageCard 
          title={"Top categories in Kitchen appliances"} 
          images={[
            "/images/home_grid_6_1.jpg",
            "/images/home_grid_6_2.jpg",
            "/images/home_grid_6_3.jpg",
            "/images/home_grid_6_4.jpg"
          ]}
          link={"Explore all products in Kitchen"}
          />
           <HomePageCard 
          title={"Easy updates for elevated spaces"} 
          images={[
            "/images/home_grid_9.jpg",
            "/images/home_grid_10.jpg",
            "/images/home_grid_11.jpg",
            "/images/home_grid_12.jpg"
          ]}
          link={"See More"}
          />
           <HomePageCard 
          title={"New year, now you"} 
          images={[
            "/images/home_grid_8.jpg"
          ]}
          link={"See More"}
          />
          <div className="xl:hidden bg-white m-2">
              <HomePageCard           
                title={"Toys under $25"} 
                images={[
                  "/images/home_grid_13.jpg"
                ]}
                link={"See More"}
              />
            </div>
          
         
        </div>
        <CarouselCategory  images={[
            "/images/carouselctg_3.jpg",
            "/images/carouselctg_1.jpg",
            "/images/carouselctg_2.jpg",
            "/images/carouselctg_3.jpg",
            "/images/carouselctg_4.jpg",
            "/images/carouselctg_5.jpg",
            "/images/carouselctg_6.jpg",
            "/images/carouselctg_7.jpg",
            "/images/carouselctg_8.jpg",
            "/images/carouselctg_9.jpg",
            "/images/carouselctg_10.jpg"
          ]} title={"Related to items you've viewed"}/>

        <CarouselCategory  images={[
            "/images/carouselctg_13.jpg",
            "/images/carouselctg_14.jpg",
            "/images/carouselctg_15.jpg",
            "/images/carouselctg_16.jpg",
            "/images/carouselctg_17.jpg",
            "/images/carouselctg_18.jpg",
            "/images/carouselctg_19.jpg",
            "/images/carouselctg_20.jpg",
            "/images/carouselctg_21.jpg",
            "/images/carouselctg_22.jpg",
            "/images/carouselctg_13.jpg",
            "/images/carouselctg_16.jpg",
            "/images/carouselctg_20.jpg",
            "/images/carouselctg_15.jpg",
            "/images/carouselctg_18.jpg"
          ]} title={"Popular items this season"}/>
      </div>
    </div>
  )
}

export default HomePage;