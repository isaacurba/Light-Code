import hero4 from "/public/img/hero4.png"


const Home = () => {
  return (
            <section className="relative container">

              <div className="blob1"></div>
              <div className="blob2"></div>
              <div class=" py-20">
                <div class="text-color-white flex flex-col items-center z-20 md:flex-row">
                    <div class="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                      <h1 class="title">Awesome App for your for Your Financial.</h1>
                      <p className="leading-relaxed">This should be used to tell a story and let your users know a little more about tha app and the uses. How can it benefit them.</p>
                      <button class="btn">Download App</button>
                    </div>

                    <div className="md:w-1/2">
                      <img src={hero4} />
                    </div>
                </div>
              </div>

            </section>  

  )
}

export default Home
