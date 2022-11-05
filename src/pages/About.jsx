import './About.css'

const About = () => {
    return ( 
        <div className='about'>
 <hr className='horizontalLine'/>

 <div className="aboutContainer">
            
            <div className="aboutInfo">
                <h3>Welcome to</h3>
            <h1>Oh My Style!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi quae in aliquam maiores impedit ipsam nam a, voluptas amet sit ut corporis, expedita iste quisquam alias tempora delectus necessitatibus!
            Laudantium at nesciunt sint vel sapiente? Omnis sit, harum repudiandae impedit fugit sint ab expedita labore dolore, possimus excepturi, tempora earum nemo unde. Ex error deleniti hic numquam porro minus.
            Nostrum ex corrupti aliquam veritatis laborum quisquam laboriosam eligendi, aut libero magnam error. </p>
            </div>
            <div className="aboutImg">
                <img src="./images/about.jpg" alt="" />
            </div>
            <div className="squares">
                    <div className="bottomSquare"></div>
                    <div className="topSquare"></div>
                </div>
                    </div>
        </div>
        
     );
}
 
export default About;