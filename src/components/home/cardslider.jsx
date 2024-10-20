import { ChartNoAxesColumn, CheckCircle, Rotate3D } from "lucide-react";
import React from "react";

const CardSlider = () => {
  return (
    <section className="px-12 -z-10">
      <div className="max-w-lg mx-auto relative">
        <input
          id="article-01"
          type="radio"
          name="slider"
          className="sr-only peer/01"
          defaultChecked
        />

        <input
          id="article-02"
          type="radio"
          name="slider"
          className="sr-only peer/02"
        />

        <input
          id="article-03"
          type="radio"
          name="slider"
          className="sr-only peer/03"
        />

        <div
          className="
      absolute inset-0 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      peer-focus-visible/01:[&_article]:ring
      peer-focus-visible/01:[&_article]:ring-indigo-300
      peer-checked/01:relative
      peer-checked/01:z-50
      peer-checked/01:translate-x-0
      peer-checked/01:scale-100
      peer-checked/01:[&>label]:pointer-events-none`
      peer-checked/02:-translate-x-20
      peer-checked/02:scale-[83.75%]
      peer-checked/02:z-40
      peer-checked/03:-translate-x-40
      peer-checked/03:z-30
      peer-checked/04:-translate-x-40                    
      peer-checked/04:opacity-0
      peer-checked/05:-translate-x-40
  "
        >
          <label className="absolute inset-0" htmlFor="article-01">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <Rotate3D className="text-black inline-flex mb-3" size={40} />
              <h1 className="text-xl font-bold text-slate-900">Connect</h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                Customer contactability enhanced on the back of API-based
                integrations
              </p>
            </div>
          </article>
        </div>

        <div
          className="
      absolute inset-0 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      peer-focus-visible/02:[&_article]:ring
      peer-focus-visible/02:[&_article]:ring-indigo-300                        
      peer-checked/01:translate-x-20
      peer-checked/01:scale-[83.75%]
      peer-checked/01:z-40
      peer-checked/02:relative
      peer-checked/02:z-50
      peer-checked/02:translate-x-0
      peer-checked/02:scale-100
      peer-checked/02:[&>label]:pointer-events-none
      peer-checked/03:-translate-x-20
      peer-checked/03:scale-[83.75%]
      peer-checked/03:z-40
      peer-checked/04:-translate-x-40
      peer-checked/04:z-30
      peer-checked/05:-translate-x-40 
      peer-checked/05:opacity-0
      z-0
  "
        >
          <label className="absolute inset-0" htmlFor="article-02">
            <span className="sr-only">Connect</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <ChartNoAxesColumn
                className="text-black inline-flex mb-3"
                size={40}
              />
              <h1 className="text-xl font-bold text-slate-900">
                Recommendation Guru
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>Machine-recommended dynamic allocation engine</p>
            </div>
          </article>
        </div>

        <div
          className="
      absolute inset-0 scale-[67.5%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      peer-focus-visible/03:[&_article]:ring
      peer-focus-visible/03:[&_article]:ring-indigo-300                          
      peer-checked/01:translate-x-40
      peer-checked/01:z-30
      peer-checked/02:translate-x-20
      peer-checked/02:scale-[83.75%]
      peer-checked/02:z-40
      peer-checked/03:relative
      peer-checked/03:z-50
      peer-checked/03:translate-x-0
      peer-checked/03:scale-100
      peer-checked/03:[&>label]:pointer-events-none
      peer-checked/04:-translate-x-20
      peer-checked/04:scale-[83.75%]
      peer-checked/04:z-40
      peer-checked/05:-translate-x-40
      peer-checked/05:z-30                  
  "
        >
          <label className="absolute inset-0" htmlFor="article-03">
            <span className="sr-only">Focus on the big picture</span>
          </label>
          <article className="bg-white p-6 rounded-lg shadow-2xl">
            <header className="mb-2">
              <CheckCircle className="text-black inline-flex mb-3" size={40} />
              <h1 className="text-xl font-bold text-slate-900">
                Law Marshal Score
              </h1>
            </header>
            <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>Early warning signals that save credit losses</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;