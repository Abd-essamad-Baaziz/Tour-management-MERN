import React from 'react'
import '../styles/home.css'
import { Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'

const Home = () => {
  return (
    <>
     {/* =========== hero section start =========== */}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Befor You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span
               className='highlit'>memories</span></h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quae aliquid accusantium totam excepturi nemo. Fugit quisquam atque aut assumenda, cumque nihil sit, consequatur velit architecto adipisci, voluptate fugiat perspiciatis!</p>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
     {/* =========== hero section end =========== */}
    </>
  )
}

export default Home