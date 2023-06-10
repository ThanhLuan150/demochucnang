import React from 'react';
// import './homepage.css';

const Homepage = () => {
  // Thay đổi dữ liệu tương ứng với các mục yêu cầu
  const movieData = [
    {
      id: 1,
      name: 'Movie 1',
      description: 'Description 1',
      avatar: 'avatar1.jpg',
    },
    {
      id: 2,
      name: 'Movie 2',
      description: 'Description 2',
      avatar: 'avatar2.jpg',
    },
    {
      id: 3,
      name: 'Movie 3',
      description: 'Description 3',
      avatar: 'avatar3.jpg',
    },
  ];

  return (
    <div>
      {/* Mã HTML tương ứng với phần Slider */}
      <div id="slider" className="carousel carousel-light slide" data-bs-ride="carousel">
        {/* Các phần tử HTML tương ứng với phần Slider */}
      </div>

      {/* Mã HTML tương ứng với phần Trending */}
      <h5 className="text-title">Trending</h5>
      <div className="direction">
        <button id="prev"><b>&lt;</b></button>
        <button id="next"><b>&gt;</b></button>
      </div>
      <div id="formlist">
        <div id="list">
          {/* Các phần tử HTML tương ứng với phần Trending */}
        </div>
      </div>

      {/* Mã HTML tương ứng với phần New */}
      <h5 className="text-title">New</h5>
      <hr />
      <div className="direction1">
        <button id="prev1"><b>&lt;</b></button>
        <button id="next1"><b>&gt;</b></button>
      </div>
      <div id="formlist1">
        <div id="list1">
          {/* Các phần tử HTML tương ứng với phần New */}
        </div>
      </div>

      {/* Mã HTML tương ứng với phần Upcoming Movies */}
      <h5 className="text-title">Upcoming Movies</h5>
      <div className="direction2">
        <button id="prev2"><b>&lt;</b></button>
        <button id="next2"><b>&gt;</b></button>
      </div>
      <div id="formlist2">
        <div id="list2">
          {/* Các phần tử HTML tương ứng với phần Upcoming Movies */}
        </div>
      </div>

      {/* Mã HTML tương ứng với phần Footer */}
    </div>
  );
};

export default Homepage;
