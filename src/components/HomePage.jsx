import {Carousel, CarouselCategory, HomePageCard} from "./"

 const HomePage = () => {
  return (
    <div className='bg-amazon-background'>
      <div className='min-w-[1000px] max-w-[1500px] bg-amazon-background m-auto'>
        Testing
        <Carousel/>
        <div className="relative z-30 grid grid-cols-3 xl:grid-cols-4 -mt-60">
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
        <CarouselCategory title={"Related to items you've viewed"}/>
      </div>
    </div>
  )
}

export default HomePage;