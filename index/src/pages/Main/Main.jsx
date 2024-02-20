import React from "react";
import "./Main.css";
import fireLogo from "../../components/svg/fireLogo.svg";
// import Maskgroup from "../../components/svg/Hamberger.svg";
const Main = () => {
  return (
    <div>
      <div className="h-screen md:w-auto  md:pl-[280px]">
        <div
          className="navbar w-auto h-[7rem] flex justify-center
        "
        >
          <div className="h-full flex items-center w-[95%]">
            <marquee className="font-semibold text-7xl">
              I HELP YOU TO BUILD YOUR DREAM PROJECT
            </marquee>
          </div>
        </div>
      {/* cards start here */}

      <div className="flex gap-10 flex-wrap justify-center">
        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>
        

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <p class="title">Magic Card</p>
          </div>
        </div>
        </div>
        {/* cards end heree */}
      </div>
    </div>
  );
};

export default Main;
