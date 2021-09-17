import React, { useState } from 'react';
import { addLandingMessage } from 'components/firebase/fIndex';

const SubmitLandingPage = ({ setSubmitDone }) => {
  const [isChecked, setChecked] = useState(false);

  const submitLanding = async (e) => {
    e.preventDefault();
    const { target } = e;
    const name = target[0].value;
    const email = target[1].value;
    const message = target[2].value;
    const landingObj = {
      name,
      email,
      message,
      getInterview: isChecked,
    };
    //위 과정은 유저가 입력한 정보를 가져와 landingObj 라는 object형태로 만든 것.

    const error = await addLandingMessage(landingObj);
    //해당 object를 firebase firestore에 저장한다.
    //firebase.fireStore이 뭔지 모르겠으면 내일 전화줘.
    //addLandingMessage는 내가 만든 함수로 components/firebase/fIndex 경로에 있어.
    //addLandingMessage 함수는 landing 컬렉션 안에 messages 문서 안에 있는 리스트에 위 landingObj를 추가하는 함수야
    //그렇다고 landing 컬렉션과 messages문서를 생성할 필요는 없어. 없을 경우 생성하는 기능이 두었어.
    //에러 객체를 리턴하는데 에러가 없을 경우 null값을 return해. 그렇기에 아래와 같이 if문을 통해 error값이 있을 경우에 대해 상황을 설정 할 수 있어.
    //return되는 형태는 promise이기 때문에 (위 코드와 같이) 사용할 때 반드시 await을 앞에 입력해주어야 되!

    if (error) {
      console.error(error); //에러가 있을 경우 에러를 출력하고
    } else {
      setSubmitDone(true);
      // 에러가 없으면 setSubmitDone(true) 함수를 실행시켜 submitDone 변수의 값을 true로 변경한다.
      //landing.js를 보면 삼항연산자로 submitDone 변수의 값이 true일 경우 landingSuccess 컴포넌트를, 그렇지 않을 경우 landingInfo 컴포넌트를 보여주게 되어있는데
      //위의 addLandingMessage함수를 통해 firebase server에 유저의 정보를 저장하는 과정에 에러가 없을 경우 실행되는 setSubmitDone(true)를 통해
      //submitDone의 값이 false에서 true로 변경되었기 때문에 landingSuccess 컴포넌트가 유저에게 보여진다.
      //(submitDone의 초기값은 false이다. submitDone 변수를 선언할 때 useState(false)를 통해 초기값을 false로 주었기 때문.)
    }
  };
  return (
    <React.Fragment>
      <div
        className="submitLanding-container"
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <div className="submitLanding-title">
          <p>Experience TripU Faster than Anyone Else!</p>
        </div>
        <div className="submitLanding-wrapper">
          <div className="info-wrapper">
            <div className="title">The first chance to experience TripU</div>
            <p>Please leave your contact information,</p>
            <p>and we will contact you as soon as TripU is released!</p>
            <p>
              Please note that Team KOAPPI can ask for an interview for future
              product development.
            </p>
            <div className="title">Contact Info</div>
            <p>Team KOAPPI | CEO : Hyun Lee</p>
            <p>E-mail: funtripu@gmail.com</p>
          </div>
          <form className="form-wrapper" onSubmit={submitLanding}>
            <div className="enter-userInfo">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="E-mail Address"
                required
              />
            </div>
            <div className="enter-message">
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="get-permission">
              <input
                className="form-check-input"
                type="checkbox"
                id="landing-permisiion-btn"
                onClick={() => setChecked((prev) => !prev)}
              />
              <label
                className="form-check-label"
                htmlFor="landing-permisiion-btn"
              >
                I am willing to take an interview for future product
                development.
              </label>
            </div>
            <div className="submit-wrapper">
              <button type="submit" id="submitMessage">
                Leave Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="landing_footer-wrapper">
        <div className="text-muted text-center">© 2021 KOAPPI.</div>
        <div className="text-muted text-center">
          <small>font by Open-sans.</small>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default SubmitLandingPage;
