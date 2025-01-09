import {Carousel, HomePageCard} from "./"

 const HomePage = () => {
  return (
    <div className='bg-amazon-background'>
      <div className='min-w-[1000px] max-w-[1500px] bg-amazon-background'>
        Testing
        <Carousel/>
        <div className=" absolute top-[420px] gap-4 grid grid-cols xl:grid-cols-4 ">
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
          title={"Gaming accessories"} 
          images={[
            "/images/home_grid_1.jpg",
            "/images/home_grid_1_2.jpg",
            "/images/home_grid_1_3.jpg",
            "/images/home_grid_1_4.jpg"
          ]}
          link={"See More"}
          />
         
        </div>
      </div>
    </div>
  )
}

export default HomePage;