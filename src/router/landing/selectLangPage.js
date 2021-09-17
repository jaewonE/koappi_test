import React, { useEffect } from 'react';

import logo from 'images/landing/logo.png';

const useShare = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);
  function copyToClipboard(val) {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  function copy(text) {
    copyToClipboard(String(text));
    alert('copy');
  }
  const clipboardShare = () => {
    console.log('clipboardShare');
    navigator.permissions
      .query({ name: 'clipboard-write' })
      .then((permissions) => {
        if (permissions !== 'granted') {
          copy('https://tripu.fun/#/landing');
        } else {
          const copy_url = String('https://tripu.fun/#/landing');
          navigator.clipboard.writeText(copy_url).then(
            () => {
              alert('copy');
            },
            () => {
              alert('error');
            }
          );
        }
      });
  };
  const kakaoShare = () => {
    console.log('kakaoShare');
    const copy_url = 'https://tripu.fun/#/landing';
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init('c17e02c875b0ed1852e6c348cd7da81a');
        }
        kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: 'TripU : customized Korean travel platform',
            description:
              'we are preparing hard now! Cheer for our one dream here',
            imageUrl: 'https://tripu.fun/static/media/logo.d34f1a49.png', //이거 이미지 주소로 수정
            link: {
              mobileWebUrl: copy_url,
              webUrl: copy_url,
              androidExecutionParams: copy_url,
              iosExecutionParams: copy_url,
            },
          },
          social: {
            likeCount: 254,
            sharedCount: 333,
            viewCount: 513,
          },
          buttons: [
            {
              title: 'Move to Homepage',
              link: {
                mobileWebUrl: copy_url,
                webUrl: copy_url,
                androidExecutionParams: copy_url,
                iosExecutionParams: copy_url,
              },
            },
          ],
        });
      }
    } catch (error) {
      clipboardShare();
    }
  };
  return { clipboardShare, kakaoShare };
};

const SelectLangPage = ({ setLanguage }) => {
  const { clipboardShare, kakaoShare } = useShare();

  const submitLang = (e) => {
    e.preventDefault();
    const {
      target: { name },
    } = e;
    setLanguage(name);
  };

  return (
    <div className="selectLangPage-container">
      <div className="selectLangPage-wrapper">
        <img alt="logo" src={logo} />
        <h1 className="title">TripU</h1>
        <p className="description">
          Customized Korean travel product platform provided by Korean local
          residents.
        </p>
        <div className="submitLang">
          <input
            type="button"
            onClick={submitLang}
            name="english"
            value="English"
          />
          <input
            type="button"
            onClick={submitLang}
            name="chinese"
            value="中國語"
          />
        </div>
        {/* 여기서 부터 */}
        <div className="landingShare-wrapper">
          <label
            htmlFor="landing-share_copy"
            className="social-icon social-icon--copy"
          >
            <i className="fas fa-copy"></i>
            <input
              type="button"
              id="landing-share_copy"
              onClick={clipboardShare}
            />
            <div className="name">copy</div>
          </label>
          <div className="social-icon social-icon--kakaoTalk">
            <label htmlFor="landing-share_kakao">
              <i className="fas fa-comment"></i>
            </label>
            <input
              type="button"
              id="landing-share_kakao"
              onClick={kakaoShare}
            />
            <div className="name">Kakao Talk</div>
          </div>
        </div>
        {/* 여기까지 */}
      </div>
    </div>
  );
};

export default SelectLangPage;
