import NavBar from '../components/NavBar'
import profile from '../assets/img/profile.png'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import img5 from '../assets/img/img5.png'
import img6 from '../assets/img/img6.png'
import img7 from '../assets/img/img7.png'
import img8 from '../assets/img/img8.png'
import img9 from '../assets/img/img9.png'



export default function Home() {
const hc = {color: 'gold'}


  return (
    <>
      <NavBar hc={hc}/>
  <div className='flex items-center justify-center pt-20'>

        <div className='text-black mr-20'>
          <h1>Frontend Web</h1>
          <h1>Devloper</h1>
          <br />
          <span>
            Sawade Kub , I'm Shonthaya Saiwanna. A passinate Front-End
          </span>
          <br />
          <span>
            Web Devloper based in Thailand Na krubb
          </span>

        </div>

        <div className='ml-20'>
          <img className='w-50' src={profile} alt="profile" />
        </div>

        <div>
          
        </div>

      </div>
    </>
  )
}
