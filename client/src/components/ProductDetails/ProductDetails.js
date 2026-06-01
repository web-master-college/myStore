import React, { useMemo, useState } from "react";
import { useParams } from "react-router";
import { products } from "../../utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/zoom";

export default function ProductDetails() {
  const { id } = useParams();

  const data = useMemo(() => products.find((p) => p.productId == id), [id, products]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // console.log("id", id);
  // console.log("data", data); sdfd

  return (
    <div className="product-details container mx-auto my-5 px-2 sm:px-8">
      <div className="grid grid-cols-12 gap-5 rounded-lg bg-white p-2 xs:p-8">
        
        {/* SLIDER */}
        <div className="col-span-12 min-h-[550px] md:col-span-6">

          {/* MAIN SLIDER */}
          <Swiper
            modules={[Navigation, Thumbs, Zoom]}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            zoom={true}
            spaceBetween={10}
            className="group relative rounded-lg"
          >
            {data?.images?.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="swiper-zoom-container">
                  <img
                    src={image}
                    alt="product"
                    className="h-[400px] w-full rounded-lg object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* NEXT */}
            <div className="button-next absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-black/40 text-xl text-white transition hover:bg-primary-500">
              &#10095;
            </div>

            {/* PREV */}
            <div className="button-prev absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-black/40 text-xl text-white transition hover:bg-primary-500">
              &#10094;
            </div>
          </Swiper>

          {/* THUMBNAILS */}
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={3}
            watchSlidesProgress
            className="mt-4"
          >
            {data?.images?.map((image, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  alt="thumb"
                  className="h-[100px] w-full cursor-pointer rounded-lg border object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* PRODUCT INFO */}
        <div className="col-span-12 md:col-span-6">
          <div className="my-1">
            <a
              className="line-clamp-2 break-all text-2xl font-medium transition-all duration-300 hover:text-primary-500"
              href="#"
            >
              {data?.name}
            </a>
          </div>

          <div className="product-val-stock my-2 flex justify-between">
            <div className="" data-rater="4"></div>

            <div className="ml-auto">
              <span className="relative z-[4] rounded-md bg-green-300 px-2 py-1 text-xs font-bold uppercase text-white">
                {data?.stock}
              </span>
            </div>
          </div>

          <div className="my-5 flex items-center gap-5">
            <div className="flex rounded-lg bg-white px-3 py-2 text-primary-500 shadow">
              <span className="text-sm">$</span>

              <span className="text-2xl font-semibold leading-7">
                {data?.price}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-md font-semibold uppercase text-green-400">
                {data?.discount}% Off
              </span>

              <span className="prev-price text-sm text-primary-500 line-through">
                $50.00
              </span>
            </div>
          </div>

          <div className="my-4">
            <p className="line-clamp-5 break-all">
              {data?.description}
            </p>
          </div>

          {/* SIZES */}
          <div className="flex gap-1">
            <form action="javascript:void(0)">
              
              <div className="block">
                <div className="my-3 flex flex-col gap-1">
                  <span className="font-bold">Size:</span>

                  <ul className="flex flex-wrap gap-3">
                    {["S", "M", "L", "XL"].map((size, idx) => (
                      <li className="relative" key={idx}>
                        <input
                          className="peer sr-only"
                          type="radio"
                          name="size"
                          id={`size${idx}`}
                        />

                        <label
                          className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-primary-500 hover:bg-gray-50"
                          htmlFor={`size${idx}`}
                        >
                          {size}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLORS */}
                <div className="my-3 flex gap-2">
                  {[
                    "bg-blue-600",
                    "bg-red-600",
                    "bg-yellow-500",
                    "bg-black",
                  ].map((color, idx) => (
                    <label
                      key={idx}
                      className={`h-6 w-6 cursor-pointer rounded-full ${color}`}
                    >
                      <input
                        type="radio"
                        name="radio-colors"
                        className="hidden"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* CART */}
              <div className="flex flex-wrap justify-start gap-5">
                <div className="counter inline-flex rounded-lg bg-white shadow">
                  <input
                    className="counter-value input-number w-12 border-none bg-transparent p-1 text-center text-lg text-gray-400 focus:ring-0"
                    type="number"
                    defaultValue="1"
                  />

                  <div className="flex w-5 flex-col justify-between">
                    <button
                      className="increment text-primary-500"
                      type="button"
                    >
                      <i className="bi bi-caret-up-fill pointer-events-none"></i>
                    </button>

                    <button
                      className="decrement text-primary-500"
                      type="button"
                    >
                      <i className="bi bi-caret-down-fill pointer-events-none"></i>
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="relative flex h-full w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 p-2 transition-all duration-300 hover:bg-primary-400"
                    type="submit"
                  >
                    <i className="bi bi-cart-fill relative z-[4] flex text-xl text-white"></i>

                    <span className="relative z-[4] font-bold uppercase text-white">
                      Add to cart
                    </span>
                  </button>

                  <a
                    className="flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-lg bg-primary-500 p-2 transition-all duration-300 hover:bg-primary-400"
                    href="javascript:void(0)"
                  >
                    <i className="bi bi-heart pointer-events-none flex text-white"></i>
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* SHARE */}
          <div className="mt-5 border-t border-gray-200 pt-5">
            <div className="flex gap-2">
              <b>Share:</b>

              <div className="flex items-center gap-[10px]">
                <a href="#">
                  <i className="bi bi-facebook flex text-zinc-500 hover:text-primary-500"></i>
                </a>

                <a href="#">
                  <i className="bi bi-twitter-x flex text-zinc-500 hover:text-primary-500"></i>
                </a>

                <a href="#">
                  <i className="bi bi-whatsapp flex text-zinc-500 hover:text-primary-500"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="col-span-12">
          {/* <div className="liner-container mb-5 flex border-b-2 border-[rgba(119,119,119,.17)]">
            <h1 className="mb-[-2px] inline-block border-b-2 border-primary-500 pb-3 text-xl font-bold uppercase">
              Description
            </h1>
          </div>

          <div className="see-more relative pb-5">
            <div className="see-more-container gradient-bottom max-h-[220px] overflow-hidden">
              <div className="see-more-content">
                <p>{data?.description}</p>
              </div>
            </div>
          </div> */}
        </div>

      </div>
      <div className="row">
      <div className="col-span-12">
        <div className="tab-container">
          <ul className="flex justify-between">
            <li
              className="tab-item tab-active-1 active w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-300">
              Comments
            </li>
            <li
              className="tab-item tab-active-1 w-full cursor-pointer bg-gray-200 p-2 text-center text-gray-400 transition-all duration-300">
              Reviews
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div
              className="tab-content-item active invisible absolute w-full opacity-0">
              <div className="flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <form className="w-full">
                  <div className="h-20">
                    <textarea
                      className="w-full resize-none overflow-y-auto rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                      placeholder="Add a comment..."
                      required></textarea>
                  </div>
                  <button
                    className="relative mt-2 overflow-hidden rounded-lg bg-primary-500 p-2 font-bold text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                    type="submit">
                    <span className="relative z-[4]">Comment</span>
                  </button>
                </form>
              </div>
              <form
                className="my-5 flex flex-col xs:flex-row xs:items-center xs:justify-between">
                <span className="text-lg font-bold uppercase">Comments</span>
                <select
                  className="nice-selectfocus:border-primary-500 focus:ring-0order-by rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2">
                  <option value="0">Most recent</option>
                  <option value="1">Oldest</option>
                </select>
              </form>
              <div className="mt-5 flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a className="font-bold hover:text-primary-500" href="#">
                      John Doe
                    </a>
                    <span className="text-xs text-slate-400">2 feb. 11:28am</span>
                  </div>
                  <p className="my-2">
                    Hello, how are you? I am interested in the product. Is
                    there stock available?
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                      <i className="bi bi-reply-fill flex"></i>
                      <span>Reply</span>
                    </div>
                    <div
                      className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                      <i className="bi bi-pencil-square flex"></i>
                      <span>Edit</span>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5">
                    <div
                      className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                      <img
                        className="h-full w-full object-cover"
                        src="img/comments/profile_2.png"
                        alt="profile_logo" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <a
                          className="font-bold text-blue-400 hover:text-primary-500"
                          href="#">
                          Megabyte
                        </a>
                        <span className="text-xs text-slate-400">Just now</span>
                      </div>
                      <small className="flex items-center gap-1 text-slate-400">
                        <i className="bi bi-reply-fill flex"></i>
                        Responding to
                        <a className="hover:text-primary-500" href="#">
                          John Doe
                        </a>
                      </small>
                      <p className="my-2">
                        Hi John Doe! If there is stock available, any other
                        questions please feel free to contact us, have a nice
                        day.
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                          <i className="bi bi-reply-fill flex"></i>
                          <span>Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-content-item invisible absolute w-full bg-white opacity-0">
              <div
                className="my-5 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl">4,0</span>
                  <div className="" data-rater="4"></div>
                  <span className="flex items-center gap-1">
                    <i className="bi bi-chat-quote flex"></i>
                    93 Reviews
                  </span>
                </div>
                <div className="w-full max-w-[600px]">
                  <div className="my-2 flex items-center gap-2">
                    <span>5</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[50%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>4</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[40%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>3</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[30%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>2</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[20%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <span>1</span>
                    <div
                      className="relative h-5 w-full overflow-hidden rounded bg-primary-500/50">
                      <div
                        className="absolute left-0 top-0 h-full w-[10%] rounded bg-primary-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <form
                  className="form-review flex w-full flex-col gap-2"
                  method="GET">
                  <div className="flex items-center gap-2">
                    <span className="text-sm uppercase">Your Valoration:</span>
                    <div id="rater"></div>
                    <input
                      name="ratingvalue"
                      className="rating-value hidden"
                      type="number"
                      value="" />
                  </div>
                  <div className="h-20">
                    <textarea
                      name="reviewvalue"
                      className="w-full resize-none overflow-y-auto rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2 focus:border-primary-500 focus:ring-0"
                      placeholder="Add a review..."
                      required></textarea>
                  </div>
                  <div>
                    <button
                      className="relative overflow-hidden rounded-lg bg-primary-500 p-2 font-bold text-white after:absolute after:left-2/4 after:top-2/4 after:h-0 after:w-0 after:rounded-lg after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:left-0 hover:after:top-0 hover:after:z-[3] hover:after:h-full hover:after:w-full"
                      type="submit">
                      <span className="relative z-[4]">Post review</span>
                    </button>
                  </div>
                </form>
              </div>
              <form
                className="my-5 flex flex-col xs:flex-row xs:items-center xs:justify-between">
                <span className="text-lg font-bold uppercase">Reviews</span>
                <select
                  className="nice-selectfocus:border-primary-500 focus:ring-0order-by rounded-lg border-2 border-gray-200 bg-white outline-none transition-all duration-300 focus:border-2">
                  <option value="0">Most recent</option>
                  <option value="1">Oldest</option>
                  <option value="2">5 &#x2605;</option>
                  <option value="3">4 &#x2605;</option>
                  <option value="4">3 &#x2605;</option>
                  <option value="5">2 &#x2605;</option>
                  <option value="6">1 &#x2605;</option>
                </select>
              </form>
              <div className="mt-5 flex gap-5">
                <div
                  className="hidden h-14 w-14 min-w-[3.5rem] overflow-hidden rounded-full shadow-md sm:block">
                  <img
                    className="h-full w-full object-cover"
                    src="img/comments/profile_1.png"
                    alt="profile_logo" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a className="font-bold hover:text-primary-500" href="#">
                      John Doe
                    </a>
                    <span className="text-xs text-slate-400">2 feb. 11:28am</span>
                  </div>
                  <div className="" data-rater="4"></div>
                  <p className="my-2">
                    Everything perfect, the product arrived impeccable and I
                    had no problem, very satisfied.
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex cursor-pointer items-center gap-1 text-sm text-slate-500 hover:text-primary-500">
                      <i className="bi bi-pencil-square flex"></i>
                      <span>Edit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
  )
}
