const HeroSection = () => {
    return <main className="hero container">
        <div className="hero-content">
            <h1>
                Your feet deserve the best
            </h1>
            <p>
            Your feet deserve the bestYour feet deserve the best
            Your feet deserve the bestYour feet deserve the best
            Your feet deserve the bestYour feet deserve the best
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>
                    Also Availabe on
                </p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="amazon-logo" />
                </div>


            </div>

        </div>
        <div className="hero-image">
                <img src="/images/shoe_image.png" alt="hero-image" />
        </div>
    </main>
};

export default HeroSection;