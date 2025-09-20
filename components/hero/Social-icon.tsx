import Link from "next/link";

export default function SocialIcon() {
  return (
    <div className="flex relative justify-center  md:w-4/6  space-x-5 ">
      <Link href="https://www.facebook.com/juwel34/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
          alt="fb"
          className="w-10 h-10 hover:scale-125 transition
                "
        />
      </Link>

      <Link href="https://www.linkedin.com/in/md-juwel-rana/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png"
          alt="linkedin"
          className="w-10 h-10 hover:scale-125 transition"
        />
      </Link>

      <Link href="https://github.com/JuwelRana34" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/128/15527/15527540.png"
          alt="github"
          className="w-10 h-10 rounded-md hover:scale-125 transition bg-gray-200"
        />
      </Link>
    </div>
  );
}
