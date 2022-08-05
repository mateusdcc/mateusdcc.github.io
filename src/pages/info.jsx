import Navbar from '../navbar';
import pfp from '/src/assets/pfp.jpg'
export default function About() {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200  pb-6">
        <div class="hero-content flex-col lg:flex-row">
          <img src={pfp} class="mask mask-heart max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl pl-6 font-bold">Info about me!</h1>
            <p class="pl-9 pr-9 pt-8">Hello there! My name is Mateus Cavalcanti, also known as MateusDCC. I am a student from Brazil at the moment, and I am learning a lot so I in the future I can become a software engineer.</p>
          </div>
        </div>
      </div>
      <Navbar active="1"/>
    </div>
  )
}
