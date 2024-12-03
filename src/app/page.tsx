"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div>
        <Link href="/adli-landing">
          <button>Adli Landing</button>
        </Link>
      </div>
      <div>
        <Link href="/torani-landing">
          <button>Torani Landing</button>
        </Link>
      </div>
      <div>
        <Link href="/mitchell-landing">
          <button>Mitchell Landing</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
