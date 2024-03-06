import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`            
            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 100;
                src: url('./fonts/inter/Inter-Thin.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 200;
                src: url('./fonts/inter/Inter-ExtraLight.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 300;
                src: url('./fonts/inter/Inter-Light.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                src: url('./fonts/inter/Inter-Regular.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                src: url('./fonts/inter/Inter-Medium.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                src: url('./fonts/inter/Inter-SemiBold.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                src: url('./fonts/inter/Inter-Bold.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 800;
                src: url('./fonts/inter/Inter-ExtraBold.ttf') format('ttf');
            }

            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 900;
                src: url('./fonts/inter/Inter-Black.ttf') format('ttf');
            }

        `}
  />
);

export default Fonts;
