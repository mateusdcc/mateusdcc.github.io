import Navbar from '../navbar';
export default function About() {
  return (
    <div>
      <div class="hero min-h-screen bg-error pb-6">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-5xl font-bold">Error 404</h1>
            <p class="py-6">Where are you trying to go?</p>
          </div>
        </div>
      </div>
      <Navbar active="999"/>
    </div>
  )
}
