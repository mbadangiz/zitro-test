import clsx from "clsx";
import Link from "next/link";

function Breadcrumb() {
  const items = ["خانه", "گوشی موبایل", "موبایل", "اپل"];

  return (
    <div className="h-16 flex items-center content-center mb-4">
      <ol className="flex items-center ">
        {items.map((item, index) => (
          <Link href={""} key={index}>
            <li className="flex items-center gap-x-2">
              <span
                className={clsx("text-[10px]", {
                  "text-seccondary-text-light": index < items.length - 1,
                })}
              >
                {item}
              </span>
              {index < items.length - 1 && (
                <div className="flex items-center size-8 justify-center">
                  <svg
                    className="w-4 h-4 mx-1 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              )}
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumb;
