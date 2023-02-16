import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import CateList from "./CateList";
import SearchForm from "./SearchForm";
import PlaceCard from "./PlaceCard";

const filters = ["전체", "서울/경기", "강원", "충청", "전라", "경상", "제주"];
const PlaceList = ({ placeData }) => {
  const [filter, setFilter] = useState(filters[0]);
  const [sortText, setSortText] = useState("추천 순");

  const [isClicked, setIsClicked] = useState(false);

  const handleListClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="text-center">
      <p className="text-3xl font-bold font-Mont">어디로 여행을 떠나시나요?</p>
      <p className="text-gray-400 text-sm mt-4 mb-6">
        여행지를 검색하거나 목록에서 직접 선택해주세요.
      </p>
      {/* 검색폼 */}
      <div className="w-[600px] mx-auto mb-8">
        <SearchForm />
        <CateList
          filters={filters}
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>
      {/* select */}
      <div className="flex flex-col items-end text-sm ">
        <div
          className="flex items-center justify-center mr-14 cursor-pointer relative"
          onClick={handleListClick}
        >
          <button>{sortText}</button>
          <MdArrowDropDown className="text-2xl" />
          {isClicked && (
            <ul
              className="shadow-lg absolute top-8 right-2 text-start w-52 p-6 text-gray-400"
              onClick={(e) => e.stopPropagation()}
            >
              <li
                className="py-1.5 hover:text-gray-500"
                onClick={() => setSortText("추천순")}
              >
                추천순
              </li>
              <li
                className="py-1.5 hover:text-gray-500"
                onClick={() => setSortText("오름차순")}
              >
                오름차순
              </li>
              <li
                className="py-1.5 hover:text-gray-500"
                onClick={() => setSortText("내림차순")}
              >
                내림차순
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 mt-4">
        {/* 카드 */}
        {placeData.map((place) => (
          <PlaceCard key={place.seq} place={place} />
        ))}
      </div>
    </section>
  );
};

export default PlaceList;
