//slides for plant page
import  Carousel  from "./Carousel.js"
import One from "../../components/assets/one.jpg"
import Two from "../../components/assets/two.jpg"
import Three from "../../components/assets/three.png"
import Four from "../../components/assets/four.jpg"
import Five from "../../components/assets/five.jpg"
function Slides2() {
  //insert images and caption for plant page inside array data
  const data = [
    {
      image:
      One,
      caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
      image:
      Two,
      caption: "<div>San Francisco2</div>",
    },
    {
      image:
       Three,
      caption: "<div>San Francisco2</div>",
    },
    {
      image:
       Four,
      caption: "<div>San Francisco2</div>",
    }
    // {
    //   image:
    //  Five,
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   caption: "Darjeeling",
    // },
    // {
    //   image:
    //     "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   caption: "<div>San Francisco</div>",
    // },
    // {
    //   image:
    //     "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "<div>San Francisco</div>",
    // },
  ];

  const captionStyle = {
    
    fontSize: "2.5em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div  >
    
 
    
          <Carousel
            data={data}
            time={5000}
            width="2000px"
            height="700px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="center"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
        
              margin: "0px",
            }}
          />
     

    </div>
  );
}

export default Slides2;