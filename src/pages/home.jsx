import Navbar from '../navbar';

import { Link } from "@solidjs/router";

export default function Home() {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Welcome to my website!</h1>
          <p class="py-6">A student, a learner, a self-taught developer.</p>
          <Link class="btn btn-primary" href="/info">About</Link>
        </div>
      </div>
      <Navbar active="0"/>
    </div>
  );
}
