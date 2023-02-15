import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdCardTravel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import MyPageLayOut from "../../Layout/MyPageLayOut";
import Modal from "../../Layout/Modal";
import PlaceCard from "../Main/PlaceCard";

const MySchedule = () => {
  const navigate = useNavigate();
  // 모달 만들기
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };
  const [items, setItems] = useState([
    { id: 1, name: "신분증", checked: false },
    { id: 2, name: "신용카드/현금", checked: false },
    { id: 3, name: "핸드폰 충전기", checked: false },
    { id: 4, name: "보조배터리 ", checked: false },
    { id: 5, name: "마스크", checked: false },
    { id: 6, name: "우산", checked: false },
  ]);

  // 체크박스
  const handleItemChecked = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const GoReview = () => navigate("review");

  return (
    <MyPageLayOut title={"나의 일정"}>
      {/* 일정 카드 */}
      <div className="flex border p-6 rounded-xl">
        <div className="relative w-40 h-40">
          <img src="/photo/jeju.jpg" alt="d" className="w-full h-full" />
          <span className="w-12 h-8 bg-main text-white absolute top-0 leading-8 text-center text-xs tracking-wide">
            D-5
          </span>
        </div>
        <div className="w-52 flex flex-col justify-center items-center">
          <p className="font-Mont font-bold text-2xl">YEOSU</p>
          <p>여수</p>
        </div>
        <div className="flex-1 flex flex-col relative justify-center gap-2">
          <button className=" absolute right-[-20px] top-[-30px] p-3">x</button>
          <p className="font-bold">
            여행이름
            <span className="font-normal ml-4 text-sm">신나는 여수여행</span>
          </p>
          <p className="font-bold">
            여행일자
            <span className="font-normal ml-4 text-sm">
              2023.02.19~2023.02.21
            </span>
          </p>
          {/* 모달 */}
          <div className="mt-4 text-xs">
            {/* 체크박스 */}
            <button
              className="border px-4 py-2 mr-8 rounded-xl"
              onClick={openModal}
            >
              여행준비물
            </button>
            {modalVisible && (
              <Modal
                width={900}
                height={900}
                onClose={closeModal}
                visible={modalVisible}
              >
                <button onClick={closeModal}>
                  <AiOutlineClose className="absolute right-2 top-2 text-xl" />
                </button>
                <div className="p-[100px]">
                  <MdCardTravel className="text-2xl absolute left-[40%] bottom-[80%]" />
                  <h2 className="text-2xl my-8 text-center ">여행 준비물</h2>
                  <h2 className="text-xl my-4 ">필수 준비물</h2>
                  <ul>
                    {items.map((item) => (
                      <li key={item.id}>
                        <input
                          className="m-3 "
                          type="checkbox"
                          id={`item-${item.id}`}
                          checked={item.checked}
                          onChange={() => handleItemChecked(item.id)}
                        />
                        <label htmlFor={`item-${item.id}`}>{item.name}</label>
                      </li>
                    ))}
                  </ul>
                  <button className="px-9 my-5 bg-blue-300 rounded-sm py-2">
                    아이템 추가하기
                  </button>
                </div>
              </Modal>
            )}
            <button className="border px-6 py-2 mr-8 rounded-xl">
              일정수정
            </button>
            <button className="border px-6 py-2 rounded-xl" onClick={GoReview}>
              리뷰쓰기
            </button>
          </div>
        </div>
      </div>
      {/* 찜목록 */}
      <div className="flex items-center gap-1 text-xl mt-20 mb-8">
        <FiHeart size={24} />
        <h3 className="font-bold">내가 좋아하는 여행지</h3>
      </div>
      {/* 카드리스트 */}
      <div className="grid grid-cols-4 gap-4 mb-16">
        {/* 찜 카드 */}
        <PlaceCard type="wishList" />
      </div>
    </MyPageLayOut>
  );
};

export default MySchedule;
