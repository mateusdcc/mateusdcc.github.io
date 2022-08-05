import pfp from '/src/assets/pfp.jpg'
import { mergeProps } from "solid-js";
import { For } from 'solid-js';
import { Link } from '@solidjs/router';

function homeSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  )
}

function profileJPG() {
  return (
  <div class="avatar">
    <div class="w-10 mask mask-squircle">
    <img src={pfp} />
    </div>
  </div>
  )
}


export default function Navbar(props) {
  const mergedProps = mergeProps({ active: 0 }, props)
  const navbarItems = [
    {
      id: 0,
      name: "root",
      href: "/",
      insideElement: homeSvg,
    },
    {
      id: 1,
      name: "info",
      href: "/info",
      insideElement: profileJPG,
    }
  ]

  return (
    <div class="btm-nav" id="navbar">
      <For each={navbarItems}>{(item) =>
        <>
        {console.log(mergedProps.active)}
        {console.log(item)}
          <Link class={mergedProps.active == item.id ? "active" : ""} href={item.href}>
            {item.insideElement()}
          </Link>
        </>
        }
      </For>
    </div>
  )
}

