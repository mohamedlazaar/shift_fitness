import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ScrollingBanner from './components/ScrollingBanner'
import FeaturedList from './components/FeaturedList'
import VideoSection from './components/VideoSection'
import Program from './components/program';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import program1 from './assets/programs/program_1.png'
import program2 from './assets/programs/program_2.png'
import program3 from './assets/programs/program_3.png'
import program4 from './assets/programs/program_4.png'
import program5 from './assets/programs/program_5.png'
import program6 from './assets/programs/program_6.png'
import program7 from './assets/programs/program_7.png'
import program8 from './assets/programs/program_8.png'
import program9 from './assets/programs/program_9.png'
import About from './components/About'
import './App.css'
import GallerySection from './components/GallerySection'
function App() {
 

  return (
    <>
        <Header />
        <HeroSection />
        <ScrollingBanner />
        <FeaturedList title='Our Fitness' subtitle='Programs' titleColor='text-[#0B1301]' bgColor='bg-[#FFFFFF]' >
          <Program title='Core Stability & Flexibility Training' image={program1} showButtomLine={true} titleColor='text-[#0B1301]'/>
          <Program title='Functional Movement Training' image={program2} showButtomLine={true} titleColor='text-[#0B1301]'  />
          <Program title='Pilates For Posture & Strength' image={program3} showButtomLine={true} titleColor='text-[#0B1301]' />
        </FeaturedList>
        <About />
        <GallerySection />      
        <FeaturedList title='Our Daily' subtitle='Workouts' titleColor='text-[#D6FD52]' bgColor='bg-[#141414]' >
          <Program title='Mono Monday 7 Rounds Hyrox' image={program4} showButtomLine={true} titleColor='text-[#FFFFFF]'/>
          <Program title='How Many Burpees Can You Get' image={program5} showButtomLine={false} titleColor='text-[#FFFFFF]'  />
          <Program title='Front Squat Strength Block' image={program6} showButtomLine={true} titleColor='text-[#FFFFFF]' />
          <Program title='Functional Body Building' image={program7} showButtomLine={false} titleColor='text-[#FFFFFF]'/>
          <Program title='Nutrition Tips For Your Best Workout Results' image={program8} showButtomLine={true} titleColor='text-[#FFFFFF]'  />
          <Program title='Front Squat Strength Block' image={program9} showButtomLine={false} titleColor='text-[#FFFFFF]' />
        </FeaturedList>
        <VideoSection />
        <ScrollingBanner />
        <Newsletter />
        <Footer />
    </>
  )
}

export default App
