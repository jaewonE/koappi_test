import React, { useEffect } from 'react';

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
  const copyToClipboard = (text) => {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = text;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  };
  const copy = (text) => {
    try {
      copyToClipboard(String(text));
      alert('copy');
    } catch (error) {
      // console.error(error);
      alert('error');
    }
  };
  const clipboardShare = () => {
    navigator.permissions
      .query({ name: 'clipboard-write' })
      .then((permissions) => {
        if (permissions !== 'granted') {
          copy('https://tripu.fun');
        } else {
          const copy_url = String('https://tripu.fun');
          navigator.clipboard.writeText(copy_url).then(
            () => {
              alert('copy');
            },
            (error) => {
              // console.error(error);
              alert('error');
            }
          );
        }
      });
  };
  const kakaoShare = () => {
    const copy_url = 'https://tripu.fun';
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KAKAO_API);
        }
        kakao.Link.sendDefault({
          objectType: 'feed',
          content: {
            title: 'TripU : Customized Korean travel product platform',
            description: 'We make whole new culture of Trip to Korea!',
            imageUrl: 'https://tripu.fun/static/media/logo.d34f1a49.png',
            link: {
              mobileWebUrl: copy_url,
              webUrl: copy_url,
              androidExecutionParams: copy_url,
              iosExecutionParams: copy_url,
            },
          },
          // social: {
          //   likeCount: 254,
          //   sharedCount: 333,
          //   viewCount: 513,
          // },
          buttons: [
            {
              title: 'Go to Homepage',
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

const LandingShare = () => {
  const { clipboardShare, kakaoShare } = useShare();
  return (
    <div className="landingShare-wrapper">
      <label
        htmlFor="landing-share_copy"
        className="social-icon social-icon--copy"
      >
        <i className="fas fa-copy"></i>
        <input type="button" id="landing-share_copy" onClick={clipboardShare} />
        <div className="name">Copy Link</div>
      </label>
      <div className="social-icon social-icon--kakaoTalk">
        <label htmlFor="landing-share_kakao">
          <i className="fas fa-comment"></i>
        </label>
        <input type="button" id="landing-share_kakao" onClick={kakaoShare} />
        <div className="name">KakaoTalk</div>
      </div>
    </div>
  );
};

export default LandingShare;
