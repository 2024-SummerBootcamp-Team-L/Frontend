import { BiBorderRadius } from 'react-icons/bi';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        WhiteCoffeeColor: '#E2DFD8',
        DarkLiverColor: '#57524A',
        GainsboroColor: '#DFDFDF',
        VeryLightGrayColor: '#CCCCCC',
        DimGrayColor: '#616161',
        ConcordColor: '#7c7a77',
      },

      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        aref: ['Aref Ruqaa', 'serif'],
      },

      backgroundImage: {
        'custom-image': "url('./public/main_solomon.png')", // 경로를 실제 이미지 파일 위치로 수정하세요
        'login-image': "url('./public/login_solomon.png')",
        'facebook-image': "url('./public/Facebook.png')",
        'apple-image': "url('./public/apple.png')",
        'google-image': "url('./public/google.png')",
        'arrow-image': "url('./public/Arrow_left.png')",

        'arrowRight-image': "url('./public/Arrow_right.png')",
        'category-image': "url('./public/CategoryPageBg.png')",
        'categoryIcon-image': "url('./public/CategoryIcon.png')",
        'result.back-image': "url('./public/result_background.png')",
        'home-image': "url('./public/home.png')",
        'result-image': "url('./public/reresult.png')",
        'texture-image': "url('./public/texture.png')",

        'postPageBg-image': "url('./public/PostPageBg.png')",
        'homeButton-image': "url('./public/HomeButton.png')",
        'like-image': "url('./public/like_icon.png')",

        'trialBg-image' : "url('./public/TrialBackground.png')",
        'microphone-image' : "url('./public/Microphone.png')",
        'plaintiffLawyer-image':"url('./public/PlaintiffLawyer.png')",
        'dependantLawyer-image':"url('./public/DefendantLawyer.png')",
        'mic-image': "url('./public/mic_image.png')",
        'select-image': "url('./public/select.png')",

        'summary-image': "url('./public/SummaryBackGround.png')",
        'judge-image': "url('./public/Judge.png')",
        'judgeChat-image': "url('./public/JudgeChat.png')",
      },

      backgroundSize: {
        contain: 'contain', // 이미지를 전체 형태를 유지하며 줄이기
      },

      backgroundPosition: {
        'center-bottom': 'center bottom', // 커스텀 배경 위치 추가
      },

      backgroundSize: {
        'solomon-size': '85%', // 커스텀 배경 크기 추가
      },

      backgroundRepeat: {
        'no-repeat': 'no-repeat', // 이미지 반복 없음을 위해 만듦
      },

      height: {
        //부모 요소의 퍼센트로 높이를 나타내기 위해 사용
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },

      scale: {
        25: '0.25',
        50: '0.5',
        75: '0.75',
        80: '0.8',
        85: '0.85',
        95: '0.95',
        97: '0.97',
        105: '1.05',
        115: '1.15',
        120: '1.2',
        140: '1.4',
        160: '1.6',
        180: '1.8',
        200: '2',
      },

      borderRadius: {
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },

      inset : {
        '1/5' : '20%',
        '1/6' : '16.666667%',
        '1/7' : '14.285714%',
        '1/8' : '12.5%',
        '1/9' : '11.11111%',
        '1/10' : '10%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(31 29 29) white',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'white',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(31 41 55)',
            borderRadius: '20px',
            border: '1px solid white',
          },
        },

        '.scrollbar-slider': {
          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgb(204 204 204)',
            borderRadius: '20px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(97 97 97)',
            borderRadius: '20px',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
