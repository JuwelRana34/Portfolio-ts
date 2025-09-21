import React from "react";
function Aboutme() {
  return (
    <div
      id="About"
      className="overflow-hidden min-h-screen dark:bg-gradient-to-t dark:from-[#0e152d] dark:to-[#020617] grid-flow-dense grid grid-cols-1 lg:grid-cols-2 py-5 bg-gradient-to-tl from-purple-500/20 to-sky-500/10"
    >
      <div className="  w-10/12 mx-auto flex items-center order-2 md:order-1">
        <img className=" rounded-md shadow-md"
          src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1738826399~exp=1738829999~hmac=bb607502f59343f827def1ae1e1f1ab46370f1af3607b37e227248d3d7b49da9&w=740"
          alt="photo"
        />
      </div>
      <div className="p-5 justify-items-center order-1 md:order-2">
        <div className=" space-y-8">
          <h1 className="text-5xl md:mt-1 px-5 font-bold text-center dark:text-gray-300 text-neutral-700 ">
          About Me
        </h1>
        <p className="text-lg text-justify dark:text-gray-300 text-neutral-700">
          Hi! I’m an honors student with a creative mind and a big interest in
          web development. Even though I don’t come from a tech background, I’ve
          found a real passion for programming. My journey started with
          curiosity, and over time I’ve learned to build websites using tools
          like{" "}
          <span className="dark:text-cyan-500 text-purple-600 ">
            React, nextjs, Node.js, express.js, MongoDB , redux and Firebase{" "}
          </span>{" "}
          .I enjoy both designing user-friendly websites and making sure
          everything works smoothly behind the scenes. It’s exciting to solve
          problems and see ideas come to life through code. Outside of
          programming, I love reading books and listening to podcasts to improve
          my English. I love traveling. Exploring new places, meeting different
          people, and learning about diverse cultures give me fresh perspectives
          and creative inspiration. I’m always eager to learn new things, face
          challenges, and grow as a developer and a creative thinker.
        </p>
        </div>
        
      </div>
    </div>
  );
}

export default Aboutme;